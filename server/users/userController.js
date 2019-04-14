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


const createSession =  email => {
  return new Promise( async ( resolve, reject ) => {
    if ( !email ) {
      reject( new Error( 'Missing email.' ));
      return;
    }
    try {
      let user = await findUser({ email: email });
      if ( !user ) {
        const newuser = {
          email: email,
          name: email.trim().split( '@' )[ 0 ],
          gamesParticipating: [],
          numGameWon: 0
        };
        user = await createUser( newuser );
      }
      resolve( user._id.toString() );
    }
    catch( error ) {
      const message = `Error getting or creating user: ${error.message || error}`; 
      console.error( message );
      reject( new Error( message ) );
    };
  });
}

module.exports = {

  findUser,

  sendVerificationCode: async ( req, res, next ) => {
    const email = req.body.email;
    if ( !email || typeof email !== 'string' || email.length < 5 ) {
      const message = 'Invalid email';
      console.error( message);
      res.send( JSON.stringify({ message: message , result: false }) );
      return;
    }
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
      res.cookie( 'pokemon.session', ses, { signed: true } );
      res.send( JSON.stringify({ message: 'Login Success', result: true }) );
    }
    else {
      res.send( JSON.stringify({ message: 'Incorrect Code', result: false }) );
    }
  },
  
};
