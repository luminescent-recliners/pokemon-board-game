var mongoose = require('mongoose');

var pokemonSchema = mongoose.Schema({
  facebookId: String,
  displayName: String,
  gamesParticipating: [],
  numGameWon: Number
});

var pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = pokemon;
