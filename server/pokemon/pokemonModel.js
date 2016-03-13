var mongoose = require('mongoose');

var pokemonSchema = mongoose.Schema({
  gameData:{}
});

var pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = pokemon;
