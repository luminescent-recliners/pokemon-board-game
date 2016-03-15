var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  name: String,
  users: {},
  gameBoard: {},
  availablePokemon: {},
  availableItemCards: [],
  gameCreator: String,
  gameTurn: String,
  gameStarted: Boolean
});

var Games = mongoose.model('games', gameSchema);

module.exports = Games;
