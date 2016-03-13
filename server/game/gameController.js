var Games = require('./gameModel.js');
var Q = require('q');

var findGame = Q.nbind(Games.findOne, Games);

module.exports = {
  addPokemon: function(req, res, next) {
    var gameId = req.body.gameId;
    var userId = req.body.userId;
    var pokemon = req.body.pokemon;

    findGame({gameId: gameId})
      .then(function(game){
        game.users[userId].party.push(pokemon);
        game.markModified('users');
        game.save();
        res.send(game.users[userId].party);
      })
      .fail(function(error){
        next(error);
      });
  }
};
