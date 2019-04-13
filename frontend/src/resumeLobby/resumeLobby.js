angular.module('pokemon.resumelobby', [])
.controller('resumeLobbyController', function ($scope, $window, $location, gameFactory, pokemonSocket) {
  $scope.resumelobbytest = " welcome to the resume game Lobby!";

  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');
  $scope.usersInRoom = [];

  pokemonSocket.on('join resume lobby', function (data) {
    $scope.usersInRoom = data;
  });

  pokemonSocket.on('users in resumegamelobby', function (resumeGameUserArray) {
    $scope.usersInRoom = resumeGameUserArray;
  });

  pokemonSocket.on('moveAllPlayersToBoard', function () {
    $location.path('/board');
  });

  pokemonSocket.on('update users in room', function(updatedusers) {
    $scope.usersInRoom = updatedusers;
    initialize();
  });

  var initialize = function () {
    gameFactory.resumeGameLobbyInit($scope.gameId)
    .then(function (resp) {
      $scope.gameName = resp.gameName;
      $scope.gameCreator = resp.creatorName;
      $scope.gameCreatorId = resp.gameCreator;
      $scope.users = resp.users;
      pokemonSocket.emit('entered resume lobby', { gameId: $scope.gameId });
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  initialize();

  $scope.getBoardView = function () {
    pokemonSocket.emit('creater enters board', { gameId: $scope.gameId });
  };

});