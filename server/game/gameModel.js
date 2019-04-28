var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  gameId: String,
  name: String,
  users: [],
  gameBoard: {},
  availablePokemon: {},
  availableItemCards: [],
  gameCreator: {},
  gameTurn: {},
  gameStarted: {
    type: Boolean,
    default: false
  },
  gameCounter: Number,
  currentPage: String,
  availableSprites: []
});

var Games = mongoose.model('games', gameSchema);

module.exports = Games;