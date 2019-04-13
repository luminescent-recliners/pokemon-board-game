const Users = require('./userModel.js');
const Codes = require( '../verificationCode' );
const { sendLoginCode } = require( '../mailModule' );

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

function createSession( email ) {
  return new Promise(( resolve, reject ) => {
    console.log( 'Email:', email );
    
    setTimeout( ()=>resolve(Date.now()), 1000 );
  });
}

module.exports = {

  sendVerificationCode: async ( req, res, next ) => {
    const email = req.body.email;
    const code = Codes.getLoginCode( email )
    sendLoginCode( email, code )
    .then( u => {
      res.send( JSON.stringify({ message: 'Verification Code Sent', result: true }) );
    })
    .catch( e => {
      console.error( e.message || e );
      res.send( JSON.stringify({ message: e.message || e , result: false }) );
    })
  },

  verifyCode: async ( req, res, next ) => {
    const email = req.body.email;
    const code = req.body.code;
    const result = Codes.verifyCode( email, code );
    if ( result ) {
      const ses = await createSession( email );
      res.cookie( 'pokemon.session', ses );
      res.send( JSON.stringify({ message: 'Login Success', result: true }) );
    }
    else {
      res.send( JSON.stringify({ message: 'Incorrect Code', result: false }) );
    }
  },



  

  
};
