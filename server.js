var express = require('express');
var socket = require('socket.io')

var app = express();
var server = app.listen(3000);

console.log("Running...")

app.use(express.static('public'));

var io = socket(server);

io.sockets.on('connection', (socket) => {
	console.log('Socket ' + socket.id + ' connected')
})

