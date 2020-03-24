var io;
var players = {};
var rooms = {};

module.exports = function(server) {
    io = require('socket.io')(server);

    io.on('connection', function(socket) {

        socket.on('join', function(room, nickname) {
            var id = socket.id;

            if (players.hasOwnProperty(id)) {
                return;
            }

            players[id] = { room: room, nickname: nickname, points: 0 };

            rooms[room] = rooms[room] || new Set();
            rooms[room].add(id);

            socket.join(room);
            io.in(room).emit('lobby', [...rooms[room]].map((id) => players[id]));
        });

        socket.on('disconnect', function() {
            var id = socket.id;

            var room = players[id].room;
            rooms[room].delete(id);

            io.in(room).emit('lobby', [...rooms[room]].map((id) => players[id]));
        });

    });
}