angular.module('services', [])
.factory('userFactory', function ($http) {

  var addStarterPokemon = function (pokemon) {
    return $http({
      method: 'PUT',
      url: 'api/game/addpokemon'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    addStarterPokemon: addStarterPokemon
  };
  
});