angular.module('pokemon.lobby', [])
.controller('lobbyController', function ($scope, $location, gameFactory) {

  $scope.lobbytest = "Welcome to the Lobby!";
  $scope.gamename;
  $scope.gameCreator;

  // Post Dev values
  // $scope.gameId = $window.loaclStorage.getItem('pokemon.gameId');
  // $scope.displayName = $window.localStorage.getItem('pokemon.displayName');

  //Dev values
  $scope.gameId = 1;
  $scope.displayName = "Bob";
  
  //Todo: $scope.users has to be got from database in user table
  $scope.users = [
    {facebookId: "Facebook123", displayName: "arthicuno"}, 
    {facebookId: "Facebook456", displayName: "choumander"}
  ];

  var initialize = function () {
    gameFactory.lobbyInit($scope.gameId)
      .then(function (resp) {
        $scope.gameName = resp.gameName;
        $scope.gameCreator = resp.gameCreator;
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

  initialize();
});