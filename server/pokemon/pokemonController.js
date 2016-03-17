var Pokemons = require('./pokemonModel.js');
var Q = require('q');

var findPokemon = Q.nbind(Pokemons.findOne, Pokemons);
var findPokemons = Q.nbind(Pokemons.find, Pokemons);

module.exports = {
  findPokemon: findPokemon,
  findPokemons: findPokemons
};