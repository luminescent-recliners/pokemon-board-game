const mongoose = require('mongoose');
const gameBoardData = require('../data/gameBoardData.js');
const gymLeaderData = require('../data/gymLeaderData.js');
const pokemonData = require('../data/pokemonData.js');
const usersData = require('../data/usersData.js');
const availablePokemonData = require('../data/availablePokemonData.js');
const spriteData = require('../data/spriteData.js');

const Games = require('../game/gameModel.js');
const GymLeaders = require('../gymLeader/gymLeaderModel.js');
const Pokemons = require('../pokemon/pokemonModel.js');
const Users = require('../users/userModel.js');
const Sprites = require('../sprites/spriteModel.js');

const debug = process.env.NODE_ENV === 'development';
const reset = debug && true;

const defaultUserRef = {
  email: usersData[0].email,
  name: usersData[0].name,
};
const defaultGame = {
  gameId: 1,
  name: 'Hoooli Dungeon',
  users: [
    defaultUserRef
  ],
  gameBoard: gameBoardData,
  availablePokemon: availablePokemonData,
  availableItemCards: [],
  gameCreator: defaultUserRef,
  gameTurn: defaultUserRef,
  gameStarted: true,
  gameCounter: 0
};


function cbToPromise( binding, operation, data ) {
  const fn = binding? operation.bind( binding ): operation;
  return new Promise(( resolve, reject ) => {
    fn( data , ( err, res ) => {
      if ( err ) reject( err );
      else resolve( res );
    })
  });
}

async function resetDatabase() {
  try {
    console.log( 'Deleting all database entries...');
    await cbToPromise( Games, Games.deleteMany, {} );
    await cbToPromise( GymLeaders, GymLeaders.deleteMany, {} );
    await cbToPromise( Pokemons, Pokemons.deleteMany, {} );
    await cbToPromise( Users, Users.deleteMany, {} );
    await cbToPromise( Sprites, Sprites.deleteMany, {} );

    console.log( 'Adding default database entries...');
    await cbToPromise( Games, Games.create, defaultGame );
    await cbToPromise( GymLeaders, GymLeaders.create, gymLeaderData );
    await cbToPromise( Pokemons, Pokemons.create, pokemonData );
    await cbToPromise( Users, Users.create, usersData );
    await cbToPromise( Sprites, Sprites.create, spriteData );

    console.log( 'Database initilization complete.')
  }
  catch( e ) {
    console.error( 'Error reseting database:', e.message || e );
    throw new Error( e.message || e );
  }
}

if ( reset ) {
  resetDatabase()
  .catch( console.error );
}

