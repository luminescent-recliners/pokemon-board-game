angular.module('pokemon.event', [])
.controller('eventController', function ($scope, gameFactory, $window, $location) {

  // Post Dev values
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');
  
  $scope.updateTurn = function () {
    gameFactory.updateTurn($scope.gameId)
      .then(function (resp) {
        $location.path('/board');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

});