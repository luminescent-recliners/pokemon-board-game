var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
  facebookId: String,
  playerName: String,
  gamesParticipating: [],
  numGameWon: Number
});

var users = mongoose.model('users', usersSchema);

module.exports = users;
