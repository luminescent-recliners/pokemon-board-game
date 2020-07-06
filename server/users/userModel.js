const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  email: String,
  name: String,
  gamesParticipating: [],
  numGameWon: Number
});

const Users = mongoose.model( 'users', usersSchema );

module.exports = Users;
