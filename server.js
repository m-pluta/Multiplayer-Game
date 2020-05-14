var express = require('express'); //importing library
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Socket server initialised");

var socket = require('socket.io'); //importing library
var io = socket(server);

io.sockets.on('connection', newConnection); //checking if there is a new connection

function newConnection(socket) {
  console.log('new connection: ' + socket.id);

  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data); //emits the data to all clients except the sender
    // io.sockets.emit('mouse', data);      //emits data to all clients including the sender
    console.log(data);
  }



}