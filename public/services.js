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

  var addGame = function (gameId, gameName, gameCreator) {
    return $http({
      method: 'POST',
      url: 'api/games/addgame',
      data: {
        gameId: gameId,
        gameName: gameName,
        facebookId: gameCreator,
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };
 
  var getGames = function () {
    return $http({
      method: 'GET',
      url: 'api/games/getGames',
    })
    .then(function (resp) {
      console.log('All games:', resp.data);
      return resp.data;
    });
  };

  return {
    addStarterPokemon: addStarterPokemon,
    addGame: addGame,
    getGames: getGames
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

})

.factory('gameFactory', function ($http) {

  var getGameName = function (gameId) {
    return $http({
      method: 'GET',
      url: 'api/games/name',
      params: {
        gameId: gameId
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addUsers = function (gameId, users) {
    return $http({
      method: 'PUT',
      url: 'api/games/user',
      data: {
        gameId: gameId,
        users: users
      }
    })
    .then(function (resp) {
      return resp.data;
    })
  };

  return {
    getGameName: getGameName,
    addUsers: addUsers
  };

});