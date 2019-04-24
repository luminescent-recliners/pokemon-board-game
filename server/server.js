const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const IO = require('socket.io');
const cookieParser = require('cookie-parser')

require('./db/db.js'); // sets up db
const router = require('./routes.js');
const Users = require( './users/userController' );
const { keyGen } = require( './utils' );
const gameController = require('./game/gameController.js');

const dev = process.env.NODE_ENV === 'development';

const debug = true;

mongoose.connect('mongodb://localhost/pokemon', { useNewUrlParser: true });

const port = dev ? 3000 : 80;

const app = express();


app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( cookieParser( keyGen() ) );

if ( dev )  app.use( (req, res, next) => {
  console.log( req.method, req.path, 'params:', req.params, 'query:', req.query, 'body:', req.body );
  next()
});

app.use( async ( req, res, next ) => {
  const cookie = req.signedCookies[ 'pokemon.session' ];
  // console.log( req.cookies, req.signedCookies )
  if ( cookie ) {
    const user = await Users.findUser({ _id: cookie });
    if ( !user ) {
      debug && console.log( 'stale cookie' )
      res.clearCookie( 'pokemon.session' );
      res.clearCookie( 'io' );
      res.redirect( '/' );
    }
    else {
      debug && console.log( 'valid cookie' )
      next();
    }
  }
  else {
    debug && console.log( 'no cookie' )
    next();
  }
});

app.use(express.static(__dirname + '/../frontend/dist'));
app.use(express.static(__dirname + '/../frontend/dist/assets'));
app.use(express.static(__dirname + '/../frontend/dist/assets/img'));

app.use(router);

//this catch all must be after all routes
app.get( '*', ( req, res, next ) => {
  res.redirect( '/' );
})

const server = http.createServer( app );
server.on( 'error', error => {
  console.log( '\nUnhandled Server Error')
  console.log( error.code );
  console.log( error.message );
  console.log( error.stack );
});

app.on( 'error', error => {
  console.log( '\nUnhandled Server App Error')
  console.log( error.code );
  console.log( error.message );
  console.log( error.stack );
});

// for sockets
const usersInGames = {}; 
const usersInResumeGameLobby = {};
const selectionPokemon = {};
const winners = {};
const io = IO( server );

gameController.setIoHandle( io );

if ( debug && false ) {
  setInterval( () => {
    console.log( '\n UsersInGames: ', JSON.stringify( usersInGames ) );
    console.log( '\n UsersInREsumeGameLobby:\n', JSON.stringify( usersInResumeGameLobby ) );
  }, 10000 );
}

io.on( 'error', error => {
  console.log( '\nUnhandled IO Error')
  console.log( error.code );
  console.log( error.message );
  console.log( error.stack );
});



io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', function() {
    console.log('a user disconnected');
  });

  socket.on('joinLobby', function(data) {
    socket.join(data.gameId);
    usersInGames[data.gameId] = usersInGames[data.gameId] || [];
    const alreadyjoined = usersInGames[data.gameId].filter( u => u.email === data.user.email );
    if ( alreadyjoined.length === 0 ) {
      usersInGames[data.gameId].push(data.user);
    }
    io.to(data.gameId).emit('join-Lobby', usersInGames[data.gameId]);
  });

  socket.on('join resume lobby', function(data) {
    socket.join(data.gameId);
    usersInResumeGameLobby[data.gameId] = usersInResumeGameLobby[data.gameId] || [];

    const alreadyjoined = usersInResumeGameLobby[data.gameId].filter( u => u.email === data.user.email );
    if ( alreadyjoined.length === 0 ) {
      usersInResumeGameLobby[data.gameId].push(data.user);
    }
    
    io.to(data.gameId).emit('join resume lobby', usersInResumeGameLobby[data.gameId]);
  });

  socket.on('entered resume lobby', function(data) {
    var resumeGameUserArray = usersInResumeGameLobby[data.gameId];
    io.to(data.gameId).emit('users in resumegamelobby', resumeGameUserArray);
  });

  socket.on('creater enters board', function(data) {
    delete usersInResumeGameLobby[data.gameId];
    io.to(data.gameId).emit('moveAllPlayersToBoard');
  });
  // removes a user from usersIngGames object when they leave lobby and go to home page &
  // updates users in room to other players in lobby
  socket.on('a user left lobby', function(data) {
    socket.join(data.gameId);
    if(usersInGames[data.gameId]) {
      for(var j = 0; j < usersInGames[data.gameId].length; j++) {
        if(usersInGames[data.gameId][j].email === data.user.email) {
          var index = j;
        }
      }
      usersInGames[data.gameId].splice(index, 1);
      io.to(data.gameId).emit('user update', usersInGames[data.gameId]);
    }
    if(usersInResumeGameLobby[data.gameId]) {
      for(var j = 0; j < usersInResumeGameLobby[data.gameId].length; j++) {
        if(usersInResumeGameLobby[data.gameId].email === data.user.email) {
          var userIndex = j;
        }
      }
      usersInResumeGameLobby[data.gameId].splice(userIndex, 1);
      io.to(data.gameId).emit('update users in room', usersInResumeGameLobby[data.gameId]);
    }
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
  });

  socket.on('redirect users to action', function(data) {
    io.to(data.gameId).emit('send redirect path to users', data.action);
  });

  socket.on('a player moved', function(data) {
    io.to(data.gameId).emit('send player to move', data);
  });

  socket.on('roll die for capture', function(data) {
    socket.broadcast.to(data.gameId).emit('send response for capture page', {result: data.result, roll: data.roll});
  });

  socket.on('emit users back to board', function(data) {
    socket.broadcast.to(data.gameId).emit('redirect back to board');
  });

  socket.on('player won', function(data) {
    winners[data.gameId] = data.winner;
    io.to(data.gameId).emit('winner announcement', { winner: data.winner });
  });

  socket.on('get winner', function(data) {
    io.to(data.gameId).emit('display winner', { winner: winners[data.gameId] });
  });

  socket.on('player wants to pause game', function(data) {
    io.to(data.gameId).emit('player leaving game', data); 
  });

});

// /*
let count = 0;
setInterval( () => io.emit( 'hello-world', `testing -- ${count++}`), 10000 );
// */

server.listen( port, () => {
  console.log('Server listening on..', port);
})

module.exports = app;