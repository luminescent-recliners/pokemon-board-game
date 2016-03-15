var Games = require('./gameModel.js');
var Q = require('q');
var gameHelperFn = require('./gameHelperFunctions.js');

var findGame = Q.nbind(Games.findOne, Games);

module.exports = {
  addPokemon: function(req, res, next) {
    var gameId = req.body.gameId;
    var userId = req.body.userId;
    var pokemon = req.body.pokemon;

    findGame({ gameId: gameId })
      .then(function(game) {
        game.users[userId].party.push(pokemon);
        game.markModified('users');
        game.save();
        res.send(game.users[userId].party);
      })
      .fail(function(error) {
        next(error);
      });
  },

  getPlayerOptions: function(req, res, next) {
    var gameId = req.query.gameId;
    var userPosition = Number(req.query.userPosition);
    var roll = Number(req.query.roll);
    var userId = req.query.userId;
    // var backwardOptionEndPoint = userPosition - roll;
    var forwardOptionEndPoint = (userPosition + roll > 73) ? 73 : userPosition + roll;
    var backwardOptionEndPoint = (userPosition - roll < 1) ? 1 : userPosition - roll;
    var playerOptions = {
      forwardOptions: [],
      backwardOptions: []
    };

    console.log('here is the roll', roll);
    console.log('player is at position', userPosition);
    findGame({ gameId: gameId })
      .then(function(game) {
        for (var i = userPosition + 1; i < forwardOptionEndPoint; i++) {
          var spot = game.gameBoard[i];
          gameHelperFn.checkOption(spot, playerOptions.forwardOptions, i, 'forward');
        }
        var rolledForwardSpot = game.gameBoard[forwardOptionEndPoint];
        playerOptions.forwardOptions.push(gameHelperFn.addOptionDescription(rolledForwardSpot, roll, 'forward'));

        var counter = 0;
        for (var j = userPosition - 1; j > backwardOptionEndPoint; j--) {
          counter ++;
          var spot = game.gameBoard[j];
          gameHelperFn.checkOption(spot, playerOptions.backwardOptions, counter, 'backward');
        }
        var rolledBackwardSpot = game.gameBoard[backwardOptionEndPoint];
        playerOptions.backwardOptions.push(gameHelperFn.addOptionDescription(rolledBackwardSpot, roll, 'backward'));

        console.log('this is the options', playerOptions);
        res.send(playerOptions);
      });
  }
};

