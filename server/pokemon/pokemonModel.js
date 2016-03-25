var mongoose = require('mongoose');

var pokemonSchema = mongoose.Schema({
  name: String,
  pokemonId: Number,
  color: String,
  description: String,
  visible: {
    type: Boolean,
    default: true
  },
  alive: {
    type: Boolean,
    default: true
  },
  capture: {
    type: [],
    default: []
  },
  diceImg: {
    type: [],
    default: []
  },
  imageURL: String,
  gifURL: String,
  specs: {}
});

var pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = pokemon;
