var Pokemons = require('./pokemonModel.js');
var Q = require('q');

var findPokemon = Q.nbind(Pokemons.findOne, Pokemons);
var findPokemons = Q.nbind(Pokemons.find, Pokemons);

module.exports = {
  findPokemon: findPokemon,
  findPokemons: findPokemons,
  
  getPokemon: async ( req, res, next ) => {
    const result = {
      pokemon: [],
      result: false,
    }
    try {
      result.pokemon = await findPokemons({});
      result.result = true;
    }
    catch( e ) {
      console.log( 'Error retrieving pokemon', e.message || e );
    }
    res.send( result );
  }

};