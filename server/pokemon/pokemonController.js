const Pokemons = require('./pokemonModel.js');


function countPokemon( query ) {
  return new Promise(( resolve, reject) => {
    query = query || {};
    Pokemons.countDocuments( query, ( e, c ) => { 
      if( e) reject(e); 
      else resolve(c)
    })
  });
}

function findPokemon( query, projection, options ) {
  return new Promise(( resolve, reject ) => {
    query = query || {};
    options = options || {};
    projection = projection || {};
    Pokemons.find( query, projection, options,  ( e, a ) => {
      if ( e ) reject( e );
      else {
        resolve( a );
      }
    })
  });
}

async function getPokemon( start, count, search ) {
  const query = {};
  if ( search ) {
    query.$or = [
      { name: new RegExp( search, 'i' ) },
      { color: new RegExp( search, 'i' ) },
      { description: new RegExp( search, 'i' ) }
    ];
  }
  const project = {};
  const options = {};
  options.skip = start || 0;
  options.limit = count || 10;

  try {
    const total = await countPokemon( query );
    if ( options.skip >= total ) {
      if ( total <= options.limit ) {
        options.skip = 0;
      }
      else {
        options.skip = total - options.limit;
      }
    }
    const pokemon = await findPokemon( query, project, options );
    return {
      pokemon,
      total,
    };
  }
  catch( e ) {
    throw e; 
  }
}

module.exports = {
  findPokemon: findPokemon,
  
  getPokemon: async ( req, res, next ) => {
    const start = parseInt( req.query.start || "0");
    const count = parseInt( req.query.count || "9" );
    const search = req.query.search || '';
    const result = {
      pokemon: [],
      result: false,
    }
    try {
      const pokemons = await getPokemon( start, count, search );
      result.result = true;
      result.pokemon = pokemons.pokemon;
      result.total = pokemons.total;
    }
    catch( e ) {
      console.log( 'Error retrieving pokemon', e.message || e );
    }
    res.send( result );
  }

};