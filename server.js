const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });

app.use(express.static(__dirname));

const rooms = {};

function getPublicRooms() {
  const list = [];
  for (const [id, r] of Object.entries(rooms)) {
    if (!r.isPrivate && !r.guest) {
      list.push({ roomId: id, hostName: r.hostName });
    }
  }
  return list;
}

io.on('connection', (socket) => {
  socket.emit('public_rooms_update', getPublicRooms());

  socket.on('create_room', ({ isPrivate, passkey, hostName }) => {
    const roomId = Math.random().toString(36).substring(2, 7).toUpperCase();
    rooms[roomId] = {
      host: socket.id,
      guest: null,
      hostName: hostName || 'Player 1',
      isPrivate: !!isPrivate,
      passkey: isPrivate ? String(passkey).trim() : null
    };

    socket.join(roomId);
    socket.roomId = roomId;
    socket.isHost = true;

    socket.emit('room_created', { roomId, isPrivate });
    io.emit('public_rooms_update', getPublicRooms());
  });

  socket.on('join_room', ({ roomId, passkey }) => {
    const id = roomId.trim().toUpperCase();
    const room = rooms[id];

    if (!room) {
      return socket.emit('join_error', 'Room does not exist.');
    }
    if (room.guest) {
      return socket.emit('join_error', 'Room is already full.');
    }
    if (room.isPrivate && room.passkey !== String(passkey).trim()) {
      return socket.emit('join_error', 'Incorrect room key.');
    }

    room.guest = socket.id;
    socket.join(id);
    socket.roomId = id;
    socket.isHost = false;

    socket.emit('joined_room', { roomId: id });
    io.to(room.host).emit('player_connected');
    io.emit('public_rooms_update', getPublicRooms());
  });

  // GAMEPLAY RELAYS
  socket.on('host_state', (data) => {
    if (socket.roomId) {
      socket.to(socket.roomId).emit('sync_state', data);
    }
  });

  socket.on('guest_input', (data) => {
    if (socket.roomId) {
      socket.to(socket.roomId).emit('sync_input', data);
    }
  });

  // START MATCH EVENT
  socket.on('force_start_match', () => {
    if (socket.roomId) {
      io.to(socket.roomId).emit('jump_to_arena');
    }
  });

  socket.on('disconnect', () => {
    if (socket.roomId && rooms[socket.roomId]) {
      io.to(socket.roomId).emit('opponent_disconnected');
      delete rooms[socket.roomId];
      io.emit('public_rooms_update', getPublicRooms());
    }
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Server listening on port ${PORT}`));