angular.module('pokemon.winner', [])
.controller('winnerController', function ($scope, $window, pokemonSocket) {
  $scope.winnertest = "someone won the game!";

  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');

  var winnerInit = function () {
    pokemonSocket.emit('get winner', { gameId: $scope.gameId });
    pokemonSocket.on('display winner', function (data) {
      $scope.winner = data.winner;
    })
  };

  winnerInit();
});