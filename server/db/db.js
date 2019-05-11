const mongoose = require('mongoose');

// data
const gameBoardData = require('../data/gameBoardData.js');
const availablePokemonData = require('../data/availablePokemonData.js');
const gymLeaderData = require('../data/gymLeaderData.js');
const pokemonData = require('../data/pokemonData.js');
const usersData = require('../data/usersData.js');
const spriteData = require('../data/spriteData.js');
const gamesFake = require( '../data/gamesFake' );

// models
const Games = require('../game/gameModel.js');
const GymLeaders = require('../gymLeader/gymLeaderModel.js');
const Pokemons = require('../pokemon/pokemonModel.js');
const Users = require('../users/userModel.js');
const Sprites = require('../sprites/spriteModel.js');

// flags
const debug = process.env.NODE_ENV === 'development';
const reset = debug && true;


function cbToPromise( binding, operation, data ) {
  const fn = binding? operation.bind( binding ): operation;
  return new Promise(( resolve, reject ) => {
    fn( data , ( err, res ) => {
      if ( err ) reject( err );
      else resolve( res );
    })
  });
}

async function deleteDatabaseEntries() {
  try {
    console.log( 'Deleting all database entries...');
    await cbToPromise( Games, Games.deleteMany, {} );
    await cbToPromise( GymLeaders, GymLeaders.deleteMany, {} );
    await cbToPromise( Pokemons, Pokemons.deleteMany, {} );
    await cbToPromise( Users, Users.deleteMany, {} );
    await cbToPromise( Sprites, Sprites.deleteMany, {} );

    console.log( 'Database collections dumped.')
  }
  catch( e ) {
    console.error( 'Error deleting database collections:', e.message || e );
    throw new Error( e.message || e );
  }
}

async function resetDatabase() {
  try {
    await deleteDatabaseEntries();

    console.log( 'Adding default database entries...');
    await cbToPromise( Games, Games.create, gamesFake );
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

async function resetDatabaseProduction() {
  try {
    await deleteDatabaseEntries();

    console.log( 'Adding default database entries...');
    await cbToPromise( GymLeaders, GymLeaders.create, gymLeaderData );
    await cbToPromise( Pokemons, Pokemons.create, pokemonData );
    await cbToPromise( Sprites, Sprites.create, spriteData );
    await cbToPromise( Users, Users.create, usersData );

    fakeGameProd();
    await cbToPromise( Games, Games.create, gamesFake );

    console.log( 'Database initilization complete.')
  }
  catch( e ) {
    console.error( 'Error reseting database:', e.message || e );
    throw new Error( e.message || e );
  }
}

function fakeGameProd() {
  const p1 = usersData[3];
  const p2 = usersData[4];
  const p3 = usersData[5];

  gamesFake[0].gameCreator.email = p1.email;
  gamesFake[0].gameCreator.name = p1.name;
  gamesFake[0].gameTurn.email = p1.email;
  gamesFake[0].gameTurn.name = p1.name;
  gamesFake[0].users[0].email = p1.email;
  gamesFake[0].users[0].name = p1.name;
  gamesFake[0].users[1].email = p2.email;
  gamesFake[0].users[1].name = p2.name;
  gamesFake[0].users[2].email = p3.email;
  gamesFake[0].users[2].name = p3.name;

  gamesFake[1].gameCreator.email = p1.email;
  gamesFake[1].gameCreator.name = p1.name;
  gamesFake[1].gameTurn.email = p1.email;
  gamesFake[1].gameTurn.name = p1.name;
  gamesFake[1].users[0].email = p1.email;
  gamesFake[1].users[0].name = p1.name;

  gamesFake[2].gameCreator.email = p1.email;
  gamesFake[2].gameCreator.name = p1.name;
  gamesFake[2].gameTurn.email = p1.email;
  gamesFake[2].gameTurn.name = p1.name;
  gamesFake[2].users[0].email = p1.email;
  gamesFake[2].users[0].name = p1.name;
  gamesFake[2].users[1].email = p3.email;
  gamesFake[2].users[1].name = p3.name;

  gamesFake[3].gameCreator.email = p3.email;
  gamesFake[3].gameCreator.name = p3.name;
  gamesFake[3].gameTurn.email = p3.email;
  gamesFake[3].gameTurn.name = p3.name;
  gamesFake[3].users[0].email = p3.email;
  gamesFake[3].users[0].name = p3.name;

}



if ( reset ) {
  resetDatabase()
  .catch( console.error );
}

if ( process.argv[2] === 'reset' ) {
  console.log( 'Clearing DB and resetting with default users and games' );
  mongoose.connect('mongodb://localhost/pokemon', { useNewUrlParser: true });
  resetDatabaseProduction()
  .then(() => {
    console.log( 'Initialization complete' );
    mongoose.disconnect();
  })
  .catch( console.error );
}

