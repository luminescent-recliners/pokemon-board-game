angular.module('services', [])
.factory('userFactory', function ($http) {

  var addStarterPokemon = function (gameId, userId, pokemon) {
    return $http({
      method: 'PUT',
      url: 'api/games/addpokemon',
      data: {
        gameId: gameId,
        userId: userId,
        pokemon: pokemon
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addGame = function (gameName, gameCreator) {
    return $http({
      method: 'PUT',
      url: 'api/games/addgame',
      data: {
        gameName: gameName,
        facebookId: gameCreator,
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    addStarterPokemon: addStarterPokemon,
    addGame: addGame
  };
  
})
.factory('gameDashboardFactory', function ($http) {
  //Input: Receives dice roll, userId, and gameId
  //Output: Retrieves an array of possible game spots to move
  var getPlayerOptions = function (roll, userPosition, gameId, userId) {
    return $http({
      method: 'GET',
      url: '/api/games/playerOptions',
      params: {
        roll: roll,
        gameId: gameId,
        userId: userId,
        userPosition: userPosition
      }
    })
    .then(function (resp) {
      return resp.data;
    });

  };

  return {
    getPlayerOptions: getPlayerOptions
  };
});