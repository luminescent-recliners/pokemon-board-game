const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  email: String,
  // facebookId: String,
  // playerName: String,
  name: String,
  gamesParticipating: [],
  numGameWon: Number
});



const Users = mongoose.model( 'users', usersSchema );

module.exports = Users;
