angular.module('pokemon.resumelobby', [])
.controller('resumeLobbyController', function ($scope, $window, $location, gameFactory) {
  $scope.resumelobbytest = " welcome to the resume game Lobby!";

  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');

  $scope.isCreator = false;

  var initialize = function (gameId) {
    gameFactory.lobbyInit($scope.gameId)
    .then(function (resp) {
      $scope.gameName = resp.gameName;
      $scope.gameCreator = resp.gameCreatorName;
      $scope.gameCreatorId = resp.gameCreator;
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  initialize($scope.gameId);

  $scope.getBoardView = function () {
    $location.path('/board');
  };

});