var Games = require('./gameModel.js');
var Q = require('q');
var gameHelperFn = require('./gameHelperFunctions.js');
var gameBoardData = require('../data/gameBoardData.js');
var availablePokemonData = require('../data/availablePokemonData.js');
var availableSpritesData = require('../data/availableSpritesData.js');

var findGame = Q.nbind(Games.findOne, Games);
var findGames = Q.nbind(Games.find, Games);

var pokemonController = require('../pokemon/pokemonController.js');

var spriteController = require('../sprites/spriteController.js');

var playerCounter = {};

module.exports = {
  findGame: findGame,

  updateCurrentPage: function(req, res, next) {
    var gameId = req.body.gameId;
    var currentPage = req.body.currentPage;

    findGame({gameId: gameId})
      .then(function(game) {
        game.currentPage = currentPage;
        game.save();
        res.send(game.currentPage);
      });
  },

  getCurrentPage: function(req, res, next) {
    var gameId = req.query.gameId;

    findGame({gameId: gameId})
      .then(function(game) {
        res.send(game.currentPage);
      })
      .fail(function(error) {
        next(error);
      });
  },
  
  playerInit: function(req, res, next) {
    var gameId = req.body.gameId;
    var userId = req.body.userId;
    var pokemon = req.body.pokemon;
    var sprite = req.body.sprite;

    findGame({ gameId: gameId })
      .then(function(game) {
        // adds starter pokemon object to user's party and
        // sets user sprite url
        for(var i = 0; i < game.users.length; i++) {
          if(game.users[i].facebookId === userId) {
            var currentUser = game.users[i];
            game.users[i].party.push(pokemon);
            game.users[i].positionOnBoard = 1;
            game.users[i].sprite = sprite.imageURL;
          }
        }

        // Removes the pokemon's ID from available pokemons
        var id = pokemon.pokemonId;
        var starterPokemon = game.availablePokemon.starter;
        var index = starterPokemon.indexOf(id);
        starterPokemon.splice(index, 1);

        // Remove the sprite's ID from available sprites
        var spriteId = sprite.spriteId;
        var remainingSprites = game.availableSprites;
        var spriteIndex = remainingSprites.indexOf(spriteId);
        remainingSprites.splice(spriteIndex, 1);


        // increment counter and set next turn
        game.gameCounter = game.gameCounter + 1;
        var gameTurnFacebookId = game.users[game.gameCounter % game.users.length ].facebookId;
        var gameTurnPlayerName = game.users[game.gameCounter % game.users.length ].playerName;
        game.gameTurn = {
          facebookId: gameTurnFacebookId,
          playerName: gameTurnPlayerName
        };
        game.gameBoard['1'].users.push(currentUser);
        game.markModified('users');
        game.markModified('gameTurn');
        game.markModified('gameBoard');
        game.markModified('availablePokemon');
        game.save();
        res.send(game.gameTurn);
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

        res.send(playerOptions);
      });
  },

  lobbyInit: function (req, res, next) {
    var gameId = req.query.gameId;

    findGame({ gameId: gameId })
      .then(function (game) {
        var result = {
          gameName: game.name,
          gameCreator: game.gameCreator.facebookId,
          creatorName: game.gameCreator.playerName
        };
        res.send(result);
      })
      .fail(function (error) {
        next(error);
      });
  },

  resumeGameLobbyInit: function (req, res, next) {
    var gameId = req.query.gameId;

    findGame({ gameId: gameId })
    .then(function (game) {
      var users = [];
      for(var i = 0;i < game.users.length; i++) {
        users.push({
          facebookId: game.users[i].facebookId,
          playerName: game.users[i].playerName
        });
      }
      var result = {
        gameName: game.name,
        gameCreator: game.gameCreator.facebookId,
        creatorName: game.gameCreator.playerName,
        users: users
      };
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
            playerName: users[i].playerName,
            playerIndex: 0,
            badges: [],
            party: [],
            box: [],
            itemCards: [],
            positionOnBoard: 0,
            citiesVisited: [0],
            lastCity: 0,
            pokemonCount: {
              pink: 0,
              green: 0,
              blue: 0,
              red: 0
            },
            sprite:''
          });
        }
        game.gameStarted = true;
        game.currentPage = 'starterView';
        game.markModified('users');
        game.save();
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
        var gameTurn = game.users[ game.gameCounter % game.users.length ];
        game.gameTurn = {
          facebookId: gameTurn.facebookId,
          playerName: gameTurn.playerName
        };
        res.send(game.gameTurn);
      })
      .fail(function (error) {
        next(error);
      });
  },

  boardInit: function(req, res, next) {
    var gameId = req.query.gameId;
    var userId = req.query.userId;

    findGame({ gameId: gameId })
      .then(function(game) {
        var allUsers = [];
        for(var i=0;i<game.users.length;i++) {
          allUsers.push({
            facebookId: game.users[i].facebookId,
            playerName: game.users[i].playerName,
            positionOnBoard: game.users[i].positionOnBoard,
            sprite: game.users[i].sprite
          });
        }
        var user  = gameHelperFn.findUser(game, userId);
        var pokemonCount = user.pokemonCount;
        var won = gameHelperFn.checkWinner(pokemonCount);
        var winner = won ? user : null;
        var gameData = {
          board: game.gameBoard,
          user: user,
          currentTurn: game.gameTurn,
          allUsers: allUsers,
          winner: winner
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
    var userObject = req.body.user;
    var currentPosition = req.body.currentPosition;
    var nextPosition = req.body.nextPosition;
    var gameId = req.body.gameId;

    findGame({gameId: gameId})
    .then(function(game) {
      //Removes and adds user from the current board spot to the next one
      game.gameBoard[currentPosition].users.splice(userObject, 1);
      game.gameBoard[nextPosition].users.push(userObject);
      game.markModified('gameBoard');
      game.save();

      //Updates new user position
      var user = gameHelperFn.findUser(game, userObject.facebookId);
      user.positionOnBoard = nextPosition;
      game.markModified('users');
      game.save();
      res.send(game.gameBoard[nextPosition]);
    })
    .fail(function(error) {
      next(error);
    });
  },

  // creates a new game with game name, game Id, gameCreator object and initial static data
  addGame: function(req, res, next) {
    // we are finding all the games first so we can count how many and use
    // that count to create the next id
    findGames()
    .then(function(games) {
      var gameName = req.body.gameName;
      var facebookId = req.body.facebookId;
      var playerName = req.body.playerName;
      var id = games.length + 1;
        var newGame = new Games({
          gameId: id, 
          name: gameName,
          gameBoard: gameBoardData,
          users: [],
          availablePokemon: availablePokemonData,
          availableItemCards: [],
          gameCreator: {
            facebookId: facebookId,
            playerName: playerName
          },
          gameStarted: false,
          gameTurn: {},
          gameCounter: 0,
          currentPage: 'lobbyView',
          availableSprites: availableSpritesData
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

          // extract the names of the players in game
          var playersInGame = [];
          for(var j= 0; j < games[i].users.length; j++) {
            playersInGame.push({
              facebookId: games[i].users[j].facebookId,
              playerName:  games[i].users[j].playerName
            });
          }
          
          var resObj = {
            gameId: games[i].gameId,
            gameName: games[i].name,
            gameStarted:  games[i].gameStarted,
            gamePlayers: playersInGame,
            gameCreator:  games[i].gameCreator
          };
          results.push(resObj);
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
    var currentPosition;

    findGame({ gameId: gameId })
      .then(function (game) {
        // check if roll captures poekmon
        if(gameHelperFn.checkRoll(roll, pokemonColor)) {
          result = "Success!! Pokemon Captured";
          for(var i = 0; i < game.users.length; i++) {
            if(game.users[i].facebookId === userId) {
              game.users[i].party.push(pokemon);
              currentPosition = game.users[i].positionOnBoard;
              game.gameBoard[currentPosition].pokemon = null;
              game.users[i].pokemonCount[pokemonColor] = game.users[i].pokemonCount[pokemonColor] + 1;
              game.markModified('gameBoard');
              game.markModified('users');
              game.save();
            }
          }
        // if not change visibility of pokemon on game board  
        } else {
          result = "Sorry!! Pokemon Got Away";
          // figure out board spot
          for(var i = 0; i < game.users.length; i++) {
            if(game.users[i].facebookId === userId) {
              currentPosition = game.users[i].positionOnBoard;
            }
          }
          // unhide pokemon on that spot on board
          game.gameBoard[currentPosition].pokemon.visible = true;
          game.markModified('gameBoard');
          game.save();
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
  },

  updateTurn: function (req, res, next) {
    var gameId = req.body.gameId;
    var currentPage = req.body.currentPage;

    findGame({ gameId: gameId })
      .then(function (game) {
        game.gameCounter = game.gameCounter + 1;
        var userObject = game.users[ game.gameCounter % game.users.length ];

        game.currentPage = currentPage;
        game.gameTurn = {
          facebookId: userObject.facebookId,
          playerName: userObject.playerName
        };
        game.markModified('gameTurn');
        game.markModified('gameCounter');
        game.save();
        res.send(game.gameTurn);
      })
      .fail(function (error) {
        next(error);
      });
  },

  getRemainingStarterPokemon: function(req, res, next) {
    var gameId = req.query.gameId;

    findGame({ gameId: gameId })
    .then(function(game) {
      availPokemonIds = game.availablePokemon.starter;

      pokemonController.findPokemons({ pokemonId: { $in: availPokemonIds}})
      .then(function(availPokemon) {
        res.send(availPokemon);
      });
    });
  },

  getAvailableSprites: function(req, res, next) {
    findGame( { gameId: req.query.gameId } )
    .then(function(game) {
      var availSprite = game.availableSprites;

      spriteController.findSprites({ spriteId: { $in: availSprite } })
      .then(function(sprites) {
        res.send(sprites);
      });
    });
  },

  getUsers: function(req, res, next) {
    findGame({ gameId: req.query.gameId })
    .then(function (game) {
      res.send(game.users);
    });
  },

  requestLobbyEntry: function(req, res, next) {
    var gameId = req.body.gameId;
    var requestAccepted;

    playerCounter[gameId] = playerCounter[gameId] || 0;
    if(playerCounter[gameId] === 6) {
      requestAccepted = false;
    } else {
      playerCounter[gameId] = playerCounter[gameId] + 1;
      requestAccepted = true;
    }
    res.send({ requestAccepted: requestAccepted });
  },

  updatePlayerCounter: function(req, res, next) {
    var gameId = req.body.gameId;
    if(playerCounter[gameId]) {
      playerCounter[gameId] = playerCounter[gameId] - 1;
    }
    res.send("updated!");
  },
  trainerInit: function(req, res, next) {
    var gameId = req.query.gameId;
    var currentTurnUserId = req.query.currentTurnUserId;

    findGame({ gameId: gameId })
    .then(function (game) {
      var initObject = {};
      var otherTrainers = [];
      var currentTrainer = gameHelperFn.findUser(game, currentTurnUserId);
      var usersOnSpot = game.gameBoard[currentTrainer.positionOnBoard].users;
      
      initObject.currentTrainer = currentTrainer;
      
      //Removes Current Turn User From the Users On Spot Array
      for (var i = 0; i < usersOnSpot.length; i++) {
        var user = usersOnSpot[i];
        if (user.facebookId === currentTurnUserId) {
          usersOnSpot.splice(i, 1);
        }
      }

      for (var j = 0; j < usersOnSpot.length; j++) {
        var user = usersOnSpot[j];
        otherTrainers.push(gameHelperFn.findUser(game, user.facebookId));
      }

      initObject.otherTrainers = otherTrainers;
      res.send(initObject);

    });
  }

};
