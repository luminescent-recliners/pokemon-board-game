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
      console.log(resp.data);
      return resp.data;
    });
  };
 
  var getGames = function () {
    return $http({
      method: 'GET',
      url: 'api/games/getGames',
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var movePlayer = function (nextPosition, user, currentPosition, gameId) {
    return $http({
      method: 'PUT',
      url: 'api/games/user/movePlayer',
      data: {
        nextPosition: nextPosition,
        currentPosition: currentPosition,
        user: user,
        gameId: gameId
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    addStarterPokemon: addStarterPokemon,
    addGame: addGame,
    getGames: getGames,
    movePlayer: movePlayer
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

  var lobbyInit = function (gameId) {
    return $http({
      method: 'GET',
      url: 'api/games/lobbyinit',
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
    });
  };

  var getGameTurn = function (gameId) {
    return $http({
      method: 'GET',
      url: 'api/games/gameturn',
      params: {
        gameId: gameId
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var catchPokemon = function (gameId, userId, roll, pokemonColor, pokemon) {
    return $http({
      method: 'PUT',
      url: 'api/games/user/catchPokemon',
      data: {
        gameId: gameId,
        userId: userId,
        roll: roll,
        pokemonColor: pokemonColor,
        pokemon: pokemon
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  var getAvailablePokemon = function(gameId, userId) {
    return $http({
      method: 'GET',
      url: '/api/games/availablePokemon',
      params: {
        gameId: gameId,
        userId: userId
      }
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    lobbyInit: lobbyInit,
    addUsers: addUsers,
    getGameTurn: getGameTurn,
    catchPokemon: catchPokemon,
    getAvailablePokemon: getAvailablePokemon
  };

});