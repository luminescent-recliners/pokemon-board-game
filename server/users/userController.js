const Users = require('./userModel.js');

const debug = process.env.NODE_ENV === 'development';

const findUser = ( user ) => new Promise(( resolve, reject) => {
  Users.findOne( user, ( error, response ) => {
    if( error ) reject( error );
    else resolve( response );
  });
});

const createUser = ( user ) => new Promise(( resolve, reject) => {
  Users.create( user, ( error, response ) => {
    if( error ) reject( error );
    else resolve( response );
  });
});


const findOrCreate =  profile => {
  return new Promise( async ( resolve, reject ) => {
    if ( !profile.email ) {
      reject( new Error( 'Missing email.' ));
      return;
    }
    try {
      let user = await findUser({ email: profile.email });
      if ( !user ) {
        user = {
          email: profile.email,
          name: profile.email.trim().split( '@')[0],
          gamesParticipating: [],
          numGameWon: 0
        };
        await createUser( user );
      }
      resolve( user );
    }
    catch( error ) {
      const message = `Error getting or creating user: ${error.message || error}`; 
      console.error( message );
      reject( new Error( message ) );
    };
  });
}



module.exports = {
  sendVerificationCode: async ( req, res, next ) => {
    findOrCreate( req.body )
    .then( u => {
      res.cookie('playerName', u.name );
      res.cookie('facebookId', `${Date.now()}-${u.name}`);
      res.redirect('/#/home');
    })
    .catch( e => {
      console.error( e.message || e );
      res.redirect('/');
    })
  },

  
};
