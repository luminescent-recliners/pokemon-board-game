 

class VerificationCodes {
  constructor() {
    this.ttl = 10 * 60 * 1000;
    this.codes = {};
    this.options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }
  createCode() {
    let key = 'xxxxx';
    return key.replace(/[x]/g, c => {
      const i = Math.floor( Math.random() * this.options.length );
      return this.options[i];
    });
  }
  getLoginCode( email ) {
    const code = this.createCode();
    const key = email.trim();
    this.codes[ key ] = code;
    setTimeout( () => {
      delete this.codes[ key ];
    }, this.ttl );
    return code;
  }
  verifyCode( email, code ) {
    const key = email.trim();
    code = code.trim().toUpperCase();
    return this.codes[ key ] && ( this.codes[ key ] === code ); 
  }
}

const store = new VerificationCodes();

module.exports.getLoginCode = ( email ) => store.getLoginCode( email );
module.exports.verifyCode = ( email, code ) => store.verifyCode( email, code );


