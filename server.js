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
  console.log('Player connected:', socket.id);
  socket.emit('public_rooms_update', getPublicRooms());

  socket.on('get_public_rooms', () => {
    socket.emit('public_rooms_update', getPublicRooms());
  });

  socket.on('create_room', ({ isPrivate, passkey, hostName }) => {
    const roomId = Math.random().toString(36).substring(2, 7).toUpperCase();
    rooms[roomId] = {
      host: socket.id,
      guest: null,
      hostName: hostName || 'Player 1',
      isPrivate: !!isPrivate,
      passkey: isPrivate ? String(passkey).trim() : null,
      hostChar: null,
      guestChar: null
    };

    socket.join(roomId);
    socket.roomId = roomId;
    socket.isHost = true;

    console.log('Room created:', roomId, 'Private:', isPrivate);
    socket.emit('room_created', { roomId, isPrivate });
    io.emit('public_rooms_update', getPublicRooms());
  });

  socket.on('join_room', ({ roomId, passkey }) => {
    const id = roomId.trim().toUpperCase();
    const room = rooms[id];

    if (!room) {
      console.log('Join failed: Room does not exist:', id);
      return socket.emit('join_error', 'Room does not exist.');
    }
    if (room.guest) {
      console.log('Join failed: Room is full:', id);
      return socket.emit('join_error', 'Room is already full.');
    }
    if (room.isPrivate && room.passkey !== String(passkey).trim()) {
      console.log('Join failed: Incorrect key for:', id);
      return socket.emit('join_error', 'Incorrect room key.');
    }

    room.guest = socket.id;
    socket.join(id);
    socket.roomId = id;
    socket.isHost = false;

    console.log('Player joined room:', id, 'Guest:', socket.id);
    socket.emit('joined_room', { roomId: id });
    io.to(room.host).emit('player_connected');
    io.emit('public_rooms_update', getPublicRooms());
  });

  // CHARACTER SELECTION: Relay character choice to opponent
  socket.on('select_character', (charId) => {
    if (socket.roomId && rooms[socket.roomId]) {
      const room = rooms[socket.roomId];
      if (socket.id === room.host) {
        room.hostChar = charId;
      } else {
        room.guestChar = charId;
      }
      // Tell opponent
      socket.to(socket.roomId).emit('opponent_selected_char', charId);
      console.log('Character selected in', socket.roomId, ':', charId);
    }
  });

  // GAMEPLAY RELAYS: Host broadcasts physics state to guest
  socket.on('host_state', (data) => {
    if (socket.roomId) {
      socket.to(socket.roomId).emit('sync_state', data);
    }
  });

  // GAMEPLAY RELAYS: Guest sends input to host
  socket.on('guest_input', (data) => {
    if (socket.roomId) {
      socket.to(socket.roomId).emit('sync_input', data);
    }
  });

  // MATCH END: Relay end state to guest
  socket.on('match_ended', (data) => {
    if (socket.roomId) {
      socket.to(socket.roomId).emit('match_ended', data);
    }
  });

  // START MATCH EVENT: Host triggers match start for both players
  socket.on('force_start_match', () => {
    if (socket.roomId) {
      console.log('Starting match in room:', socket.roomId);
      io.to(socket.roomId).emit('jump_to_arena');
    }
  });

  // HANDLE DISCONNECTION
  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
    if (socket.roomId && rooms[socket.roomId]) {
      io.to(socket.roomId).emit('opponent_disconnected');
      console.log('Deleted room:', socket.roomId);
      delete rooms[socket.roomId];
      io.emit('public_rooms_update', getPublicRooms());
    }
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
