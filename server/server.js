var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dbConfig = require('./db/db.js');

mongoose.connect('mongodb://localhost/pokemon');


var router = require('./routes.js');
var app = express();
// for sockets
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(router);
app.use(express.static(__dirname + '/../public'));

// for sockets
var usersInGames = {};
var starterPokemonLists = {};

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('a user disconnected');
  });

  socket.on('newGame', function(newGame) {
    io.emit('updateAvailGames', newGame);
  });

  socket.on('joinLobby', function(data) {
    socket.join(data.gameId);
    usersInGames[data.gameId] = usersInGames[data.gameId] || [];
    usersInGames[data.gameId].push(data.user);
    io.to(data.gameId).emit('joinLobby', usersInGames[data.gameId]);
  });

  socket.on('enteredLobby', function(data) {
    var userArray = usersInGames[data.gameId];
    io.to(data.gameId).emit('currentUsers', userArray);
  });

  socket.on('creatorStartsGame', function(data) {
    io.to(data.gameId).emit('moveAllPlayersToSelectPokemon');
  });

});


// app.listen(port);
// console.log('Server listening on..', port);

// for sockets
http.listen(port, function() {
  console.log('Server listening on..', port);
});

module.exports = app;