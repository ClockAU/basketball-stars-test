const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: { origin: '*' },
  perMessageDeflate: false   // no compression delay on the tiny, frequent game packets
});

app.use(express.static(__dirname));

const rooms = {};

const cleanName = (n) =>
  String(n || '').replace(/[^\w .!\-]/g, '').replace(/\s+/g, ' ').trim().slice(0, 12) || 'Player';

function publicRooms() {
  return Object.entries(rooms)
    .filter(([, r]) => !r.isPrivate && !r.guest)
    .map(([id, r]) => ({ roomId: id, hostName: r.hostName }));
}
const broadcastRooms = () => io.emit('public_rooms_update', publicRooms());
const roomOf = (socket) => (socket.roomId ? rooms[socket.roomId] : null);

io.on('connection', (socket) => {
  socket.emit('public_rooms_update', publicRooms());
  socket.on('get_public_rooms', () => socket.emit('public_rooms_update', publicRooms()));

  socket.on('create_room', ({ isPrivate, passkey, name } = {}) => {
    let roomId;
    do { roomId = Math.random().toString(36).substring(2, 7).toUpperCase(); } while (rooms[roomId]);
    rooms[roomId] = {
      host: socket.id,
      guest: null,
      hostName: cleanName(name),
      guestName: null,
      isPrivate: !!isPrivate,
      passkey: isPrivate ? String(passkey || '').trim() : null,
      rematch: { host: false, guest: false }
    };
    socket.join(roomId);
    socket.roomId = roomId;
    socket.emit('room_created', { roomId, isPrivate: !!isPrivate });
    broadcastRooms();
  });

  socket.on('join_room', ({ roomId, passkey, name } = {}) => {
    const id = String(roomId || '').trim().toUpperCase();
    const room = rooms[id];
    if (!room) return socket.emit('join_error', 'Room does not exist.');
    if (room.guest) return socket.emit('join_error', 'Room is already full.');
    if (room.isPrivate && room.passkey !== String(passkey || '').trim()) {
      return socket.emit('join_error', 'Incorrect room key.');
    }
    room.guest = socket.id;
    room.guestName = cleanName(name);
    socket.join(id);
    socket.roomId = id;
    socket.emit('joined_room', { roomId: id, hostName: room.hostName });
    io.to(room.host).emit('player_connected', { name: room.guestName });
    broadcastRooms();
  });

  // host leaves the lobby -> native character select for both clients (names travel with it)
  socket.on('start_select', () => {
    const room = roomOf(socket);
    if (room && room.host === socket.id && room.guest) {
      io.to(socket.roomId).emit('enter_select', { names: [room.hostName, room.guestName] });
    }
  });

  // each player edits only their own side in the native selector; relay it
  socket.on('pick', (v) => {
    if (socket.roomId) socket.to(socket.roomId).emit('peer_pick', v);
  });

  // host presses PLAY with the final picks
  socket.on('start_match', (payload) => {
    const room = roomOf(socket);
    if (room && room.host === socket.id) {
      room.rematch = { host: false, guest: false };
      io.to(socket.roomId).emit('net_start', payload);
    }
  });

  // gameplay relays
  socket.on('snap', (d) => {
    const room = roomOf(socket);
    if (room && room.host === socket.id) socket.to(socket.roomId).volatile.emit('snap', d);
  });
  socket.on('evt', (d) => {
    const room = roomOf(socket);
    if (room && room.host === socket.id) socket.to(socket.roomId).emit('evt', d);
  });
  socket.on('g_input', (d) => {
    const room = roomOf(socket);
    if (room && room.guest === socket.id) io.to(room.host).emit('g_input', d);
  });

  // player <-> player round-trip measurement (shown as the in-game ping)
  socket.on('rtt_ping', (d) => { if (socket.roomId) socket.to(socket.roomId).emit('rtt_ping', d); });
  socket.on('rtt_pong', (d) => { if (socket.roomId) socket.to(socket.roomId).emit('rtt_pong', d); });

  // rematch only starts once both players asked for it
  socket.on('rematch_req', () => {
    const room = roomOf(socket);
    if (!room) return;
    if (room.host === socket.id) room.rematch.host = true;
    else if (room.guest === socket.id) room.rematch.guest = true;
    if (room.rematch.host && room.rematch.guest) {
      room.rematch = { host: false, guest: false };
      io.to(socket.roomId).emit('net_rematch');
    } else {
      socket.to(socket.roomId).emit('peer_wants_rematch');
    }
  });

  socket.on('disconnect', () => {
    const room = roomOf(socket);
    if (room) {
      io.to(socket.roomId).emit('opponent_disconnected');
      delete rooms[socket.roomId];
      broadcastRooms();
    }
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
