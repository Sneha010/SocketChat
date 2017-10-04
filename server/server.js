var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('user connected..');

    socket.on('disconnect', () => {
        console.log('user disconnected..'); 
    });

    socket.on('add-message', (message) => {
        io.emit('message', {type: 'new-message', text: message});
    })
});

http.listen(8000, () => {
    console.log('server running on 8000..');
});