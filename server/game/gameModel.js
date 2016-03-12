var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  gameID: Number,
  users: {},
  gameBoard: {},
  AvailablePokemon: {},
  availableItemCards: [],
  gameCreator: String,
  gameTurn: String,
  gameStarted: Boolean
});

var game = mongoose.model('game', gameSchema);

module.exports = game;
