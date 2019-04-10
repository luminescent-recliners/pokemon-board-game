const Users = require('./userModel.js');
const Q = require('q');

const findUser = Q.nbind(Users.findOne, Users);
const createUser = Q.nbind(Users.create, Users);



module.exports = {
  findOrCreate: profile => {
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
