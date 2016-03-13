var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  gameId: Number,
  name: String,
  users: {},
  gameBoard: {},
  AvailablePokemon: {},
  AvailableItemCards: [],
  gameCreator: String,
  gameTurn: String,
  gameStarted: Boolean
});

var Games = mongoose.model('games', gameSchema);

module.exports = Games;

// create temp function to insert 1 game into the DB
var createGame = function() {
  Games.find({}, function(err, games) {
    if (!games.length){
      var newGame = new Games({ 
        gameId: 1,
        name: 'hoooli Dungeon',
        users: {choumander : {
          playerIndex: 0,
          badges: [],
          party: [],
          box: [],
          itemCards: [],
          positionOnBoard: 0,
          citiesVisited: [0],
          lastCity: 0
        }},
        gameBoard: {
          0: 'hi',
          1: 'hello'
        },
        AvailablePokemon: {},
        AvailableItemCards: [],
        gameCreator: 1,
        gameTurn: 'Alex',
        gameStarted: true
      });
      newGame.save(function(err) {
        if (!err) {
          console.log('WORKS')
        }
      });
    }
  });
};

createGame();
