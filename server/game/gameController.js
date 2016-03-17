var Games = require('./gameModel.js');
var Q = require('q');
var gameHelperFn = require('./gameHelperFunctions.js');
var gameBoardData = require('../data/gameBoardData.js');
var availablePokemonData = require('../data/availablePokemonData.js');


var findGame = Q.nbind(Games.findOne, Games);
var findGames = Q.nbind(Games.find, Games);

var pokemonController = require('../pokemon/pokemonController');

module.exports = {
  addPokemon: function(req, res, next) {
    var gameId = req.body.gameId;
    var userId = req.body.userId;
    var pokemon = req.body.pokemon;
    var result;

    findGame({ gameId: gameId })
      .then(function(game) {
        for(var i=0;i<game.users.length;i++) {
          if(game.users[i].playerName === userId) {
            game.users[i].party.push(pokemon);
            game.markModified('users');
            game.save();
            result = game.users[i].party;
          }
        }
        res.send(result);
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
        var counter = 0;
        for (var i = userPosition + 1; i < forwardOptionEndPoint; i++) {
          counter ++;
          var spot = game.gameBoard[i];
          gameHelperFn.checkOption(spot, playerOptions.forwardOptions, counter, 'forward');
        }
        if (userPosition !== 73) {
          var rolledForwardSpot = game.gameBoard[forwardOptionEndPoint];
          playerOptions.forwardOptions.push(gameHelperFn.addOptionDescription(rolledForwardSpot, roll, 'forward'));
        }

        counter = 0;
        for (var j = userPosition - 1; j > backwardOptionEndPoint; j--) {
          counter ++;
          var spot = game.gameBoard[j];
          gameHelperFn.checkOption(spot, playerOptions.backwardOptions, counter, 'backward');
        }
        if (userPosition !== 1){
          var rolledBackwardSpot = game.gameBoard[backwardOptionEndPoint];
          playerOptions.backwardOptions.push(gameHelperFn.addOptionDescription(rolledBackwardSpot, roll, 'backward'));
        }

        console.log('this is the options', playerOptions);
        res.send(playerOptions);
      });
  },

  lobbyInit: function (req, res, next) {
    var gameId = req.query.gameId;
    var result;

    findGame({gameId: gameId})
      .then(function (game) {
        result = {
          gameName: game.name,
          gameCreator: game.gameCreator
        }
        res.send(result);
      })
      .fail(function (error) {
        next(error);
      });
  },

  addUser: function (req, res, next) {
    var gameId = req.body.gameId;
    var users = req.body.users;

    findGame({gameId: gameId})
      .then(function (game) {
        for(var i=0;i<users.length;i++) {
          game.users.push({
            facebookId: users[i].facebookId,
            playerName: users[i].userId,
            playerIndex: 0,
            badges: [],
            party: [],
            box: [],
            itemCards: [],
            positionOnBoard: 0,
            citiesVisited: [0],
            lastCity: 0
          });
          game.markModified('users');
          game.save();
        }
      res.send(game.gameTurn);
      })
      .fail(function (error) {
        next(error);
      });
  },

  findTurn: function (req, res, next) {
    var gameId = req.query.gameId;

    findGame({gameId: gameId})
      .then(function (game) {
        game.gameTurn = game.users[ game.gameCounter % game.users.length ].playerName;
        res.send(game.gameTurn);
      })
      .fail(function (error) {
        next(error);
      });
  },

  getBoard: function(req, res, next) {
    var gameId = req.query.gameId;
    var userId = req.query.userId;

    findGame({ gameId: gameId })
      .then(function(game) {
        var gameData = {
          board: game.gameBoard,
          user: gameHelperFn.findUser(game, userId)
        };

        res.send(gameData);
      })
      .fail(function(error) {
        next(error);
      });
  },

  //Output Sends a Board Spot Back to the client with Current User On the new board spot 
  //and updates the new user position in the database
  movePlayer: function(req, res, next) {
    var userId = req.body.userId;
    var currentPosition = req.body.currentPosition;
    var nextPosition = req.body.nextPosition;
    var gameId = req.body.gameId;

    findGame({gameId: gameId})
    .then(function(game) {
      //Removes and adds user from the current board spot to the next one
      game.gameBoard[currentPosition].users.splice(userId, 1);
      game.gameBoard[nextPosition].users.push(userId);
      game.markModified('gameBoard');
      game.save();

      //Updates new user position
      var user = gameHelperFn.findUser(game, userId);
      user.positionOnBoard = nextPosition;
      game.markModified('users');
      game.save();
      res.send(game.gameBoard[nextPosition]);
    })
    .fail(function(error) {
      next(error);
    });
  },

  addGame: function(req, res, next) {
    findGames()
    .then(function(games) {
      var gameName = req.body.gameName;
      var facebookId = req.body.facebookId;
      var id = games.length + 1;
      console.log('GAME ID IS: ', id)
        var newGame = new Games({
          gameId: id, 
          name: gameName,
          users: {
            facebookId: facebookId,
            playerIndex: 0,
            badges: [],
            party: [],
            box: [],
            itemCards: [],
            positionOnBoard: 0,
            citiesVisited: [0],
            lastCity: 0
          },
          gameBoard: gameBoardData,
          availablePokemon: availablePokemonData,
          availableItemCards: [],
          gameCreator: facebookId,
          gameTurn: 'Alex',
          gameStarted: true
        });
        newGame.save(function (err) {
          if (err) throw err;
        });
    res.send(newGame);
    })
  },

  getGames: function(req, res, next) {
    findGames({})
      .then(function(games){
        var results = [];
        for(var i = 0; i < games.length; i++) {
          var resObj = {
            gameId: games[i].gameId,
            gameName: games[i].name
          };
          results.push(resObj);
          console.log('get games from database', resObj);
        }
          res.send(results);
      })
      .fail(function(error){
        next(error);
      });
  },

  catchPokemon: function (req, res, next) {
    var gameId = req.body.gameId;
    var userId = req.body.userId;
    var pokemonColor = req.body.pokemonColor;
    var pokemon = req.body.pokemon;
    var roll = req.body.roll;
    var result;

    findGame({ gameId: gameId })
      .then(function (game) {
        if(gameHelperFn.checkRoll(roll, pokemonColor)) {
          result = "success";
          for(var i=0;i<game.users.length;i++) {
            if(game.users[i].facebookId === userId) {
              game.users[i].party.push(pokemon);
              game.markModified('users');
              game.save();
            }
          }
        } else {
          result = "Sorry!";
        }
        res.send(result);
      })
      .fail(function (error) {
        next(error);
      });
  },

  getAvailablePokemon: function(req, res, next) {
    var gameId = req.query.gameId;
    var userId = req.query.userId;

    var getRandomId = function(length) {
      return Math.floor(Math.random()*length);
    };

    findGame({ gameId: gameId })
      .then(function(game){
        // find player and look for position
        var player = game.users.filter(function(user){
          return user.facebookId === userId;
        })[0];
        var playerPosition = player.positionOnBoard;

        var pokemonPresent = game.gameBoard[playerPosition].pokemon;
        // if pokemon on board spot send pokemon back to board
        if(pokemonPresent) {
          res.send(pokemonPresent);

        } else {
          // look at gameboard at user position and find type of spot
          var color = game.gameBoard[playerPosition].colorOfSpot;
          // get color array of avail pokemon ids
          var pokemons = game.availablePokemon[color];
          var randomPokemonsId = getRandomId(pokemons.length);
          
          // pop id off avail pokemon array
          var pokemonId = pokemons.splice(randomPokemonsId, 1)[0];

          // save modified pokemons array to game
          game.availablePokemon[color] = pokemons;
          game.markModified('availablePokemon');
          game.save();

          // query pokemon table to get pokemon data
          pokemonController.findPokemon({pokemonId: pokemonId})
            .then(function(pokemonObject){

              // add pokemon to the spot on game board
              game.gameBoard[playerPosition].pokemon = pokemonObject;
              game.markModified('gameBoard');
              game.save();

              // send pokemon client
              res.send(pokemonObject);
            });
        }
      });
  }
};
