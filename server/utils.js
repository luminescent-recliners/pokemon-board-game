 

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

module.exports.keyGen = ( key ) => {
  key = key || 'xxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  return key.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0;
    let v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


