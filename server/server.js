var express = require('express');
var app = express();
var dbConfig = require('./db/db.js');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var router = require('./routes.js');
var fbConfig = require('./config/fbKeys.js');

mongoose.connect('mongodb://localhost/pokemon');

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/../public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

var userController = require('./users/userController.js');

passport.use(new FacebookStrategy({
    clientID: fbConfig.appId,
    clientSecret: fbConfig.appSecret,
    callbackURL: "/signin/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    userController.findOrCreate(profile);
    return cb(null, profile);
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// for sockets
var usersInGames = {};
var selectionPokemon = {};
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

  socket.on('a pokemon was selected', function(data) {
    //first add pokemon to selectionPokemon object
    selectionPokemon[data.gameId] = selectionPokemon[data.gameId] || [];
    selectionPokemon[data.gameId].push(data.pokemon);
    var numPlayers = usersInGames[data.gameId].length;
    var numStartPokemon = selectionPokemon[data.gameId].length;

    var doneselection = false;
    if(numStartPokemon === numPlayers) {
      doneselection = true;
    }
    io.to(data.gameId).emit('refresh after pokemon selection',{doneselection: doneselection});

  });

  socket.on('player rolled dice to move', function(data) {
    socket.broadcast.to(data.gameId).emit('send player roll to move', data.roll);
  });

  socket.on('update action description', function(data) {
    socket.broadcast.to(data.gameId).emit('send action description', data.description);
  })
});

// for sockets
http.listen(port, function() {
  console.log('Server listening on..', port);
});

module.exports = app;