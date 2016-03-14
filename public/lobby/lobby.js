angular.module('pokemon.lobby', [])
.controller('lobbyController', function ($scope, $location, gameFactory) {
  $scope.lobbytest = "Welcome to the Lobby!";
  $scope.userId = "choumander";
  $scope.gameId = 1;
  $scope.gamename;
  $scope.users = [
    {"Facebook123": "choumander"}
  ];

  $scope.initialize = function (gameId) {
    gameFactory.getGameName(gameId)
    .then(function (resp) {
      $scope.gameName = resp;
    }).catch(function (error) {
      console.error(error);
    });
  };

  $scope.getStarterView = function (gameId) {
    $location.path('/starter');
    gameFactory.addUsers(gameId)
    .then(function (resp) {
      $location.path('/starter');
    }).catch(function (error) {
      console.error(error);
    });
  };

  $scope.initialize();
});