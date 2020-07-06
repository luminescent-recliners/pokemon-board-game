const mailgun = require("mailgun-js");
const fs = require( 'fs' );
const path = require( 'path' );

const dev = process.env.NODE_ENV === 'development';

let config;

if ( dev ) {
  config = JSON.parse( fs.readFileSync( path.resolve('./config.dev.json'), 'utf8' ) );
}
else {
  config = JSON.parse( fs.readFileSync( path.resolve( './config.prod.json'), 'utf8' ) );
}

const api_key = config.apiKey;
const domain = config.mailDomain;
const mg = mailgun({apiKey: api_key, domain: domain});

function sendLoginCode( email, code ) {
  const data = {
    from: `Pokemon Login<postmaster@${domain}>`,
    to: email,
    subject: 'Login Token',
    text: `Hello!
    
    Here is your login token which is valid for 8 minutes.
    
    ${code}
    
    Happy hunting!
    
    `
  };
  if ( dev ) {
    console.log( 'Login Token:', code );
    return Promise.resolve({ 
      id: '<some.id@mail.chobek.com>',
      message: 'Queued. Thank you.' ,
      code
    });
  }
  else {
    return new Promise(( resolve, reject ) => {
      mg.messages()
      .send( data, (error, body) => {
        if ( error ) reject( error );
        else resolve( body );
      })
    });
  }

}

module.exports.sendLoginCode = sendLoginCode;