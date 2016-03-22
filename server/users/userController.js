var Users = require('./userModel.js');
var Q = require('q');

var findUser = Q.nbind(Users.findOne, Users);
var createUser = Q.nbind(Users.create, Users);



module.exports = {
  findOrCreate: function(profile, callback) {
    findUser({facebookId: profile.id})
      .then(function(user){
        if (!user) {
          createUser({
            facebookId: profile.id,
            playerName: profile.displayName,
            gamesParticipating: [],
            numGameWon: 0
          });
        }else{
          console.log('this ID already exists!');
        }
      })
      .fail(function(error){
        console.error(error);
      });
  }
};
