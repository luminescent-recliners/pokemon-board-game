var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  gameId: Number,
  name: String,
  users: [],
  gameBoard: {},
  availablePokemon: {},
  availableItemCards: [],
  gameCreator: {},
  gameTurn: {},
  gameStarted: Boolean,
  gameCounter: Number
});

var Games = mongoose.model('games', gameSchema);

module.exports = Games;