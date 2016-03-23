angular.module('pokemon.city', [])
.controller('cityController', function ($scope, gameFactory, $window, $location, pokemonSocket) {

  // Post Dev values
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');

  $scope.currentTurnPlayerName;
  $scope.currentTurnPlayerId;
  
  $scope.updateTurn = function () {
    gameFactory.updateTurn($scope.gameId)
      .then(function (resp) {
        pokemonSocket.emit('emit users back to board', {gameId: $scope.gameId});
        $location.path('/board');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  pokemonSocket.on('redirect back to board', function() {
    $location.path('/board');
  });

  var initialize = function () {
    gameFactory.getGameTurn($scope.gameId)
      .then(function (resp) {
        $scope.currentTurnPlayerName = resp.playerName;
        $scope.currentTurnPlayerId = resp.facebookId;
      });
  };

  initialize();

  // setTimeout(function(){ 
  //   pokemonSocket.emit('emit users back to board', {gameId: $scope.gameId});
  // }, 3000);

});