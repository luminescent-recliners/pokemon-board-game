angular.module('pokemon.winner', [])
.controller('winnerController', function ($scope, $window, userFactory, pokemonSocket) {
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');

  var winnerInit = function () {
    userFactory.getUsers($scope.gameId)
      .then(function (resp) {
        pokemonSocket.emit('get winner', { gameId: $scope.gameId });
        pokemonSocket.on('display winner', function (data) {
          $scope.winner = data.winner;
        });
        $scope.users = resp;
      })
      .catch(function (error) {
        console.error(error);
      });
    
  };

  winnerInit();
});