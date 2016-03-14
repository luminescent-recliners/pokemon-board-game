angular.module('services', [])
.factory('userFactory', function ($http) {

  var addStarterPokemon = function (pokemon) {
    return $http({
      method: 'PUT',
      url: 'api/games/addpokemon',
      data: {
        gameId: 1,
        userId: "choumander",
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