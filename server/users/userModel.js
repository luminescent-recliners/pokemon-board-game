const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  facebookId: String, // maybe email
  playerName: String, // name
  gamesParticipating: [],
  numGameWon: Number
});

const users = mongoose.model( 'users', usersSchema );

module.exports = users;
