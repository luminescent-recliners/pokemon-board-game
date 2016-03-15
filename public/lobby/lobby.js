angular.module('pokemon.lobby', [])
.controller('lobbyController', function ($scope, $location, gameFactory) {
  $scope.lobbytest = "Welcome to the Lobby!";
  $scope.userId = "choumander";
  $scope.gameId = 1;
  $scope.gamename;
  $scope.users = [
    {facebookId: "Facebook123", userId: "choumander"}
  ];

  $scope.initialize = function () {
    gameFactory.getGameName($scope.gameId)
    .then(function (resp) {
      $scope.gameName = resp;
    }).catch(function (error) {
      console.error(error);
    });
  };

  $scope.getStarterView = function () {
    $location.path('/starter');
    gameFactory.addUsers($scope.gameId, $scope.users)
    .then(function (resp) {
      $location.path('/starter');
    }).catch(function (error) {
      console.error(error);
    });
  };

  $scope.initialize();
});