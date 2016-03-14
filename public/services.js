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

  return {
    addStarterPokemon: addStarterPokemon
  };
  
});