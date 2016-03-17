angular.module('pokemon.lobby', [])
.controller('lobbyController', function ($scope, $location, gameFactory) {
  $scope.lobbytest = "Welcome to the Lobby!";
  $scope.userId = "Facebook123";
  $scope.gameId = 1;
  $scope.gamename;
  //Todo: $scope.users has to be got from database in user table
  $scope.users = [
    {facebookId: "Facebook123", displayName: "arthicuno"}, 
    {facebookId: "Facebook456", displayName: "choumander"}
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
    gameFactory.addUsers($scope.gameId, $scope.users)
      .then(function (resp) {
        $location.path('/starter');
      }).catch(function (error) {
        console.error(error);
      });
  };

  $scope.initialize();
});