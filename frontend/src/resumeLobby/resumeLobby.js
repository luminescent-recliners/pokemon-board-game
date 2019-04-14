angular.module('pokemon.resumelobby', [])
.controller('resumeLobbyController', function ($scope, $cookies, $window, $location, gameFactory, pokemonSocket, authFactory ) {
  
  const debug = false;

  if ( !authFactory.isAuth('resumeLobbyController') ){
    debug && console.log( 'resumeLobbyController isAuth', false );
    $location.path('/');
    return;
  }
  authFactory.getCurrentUser()
  .then( u => {
    debug && console.log( 'resumeLobbyController getCurrentUser', u );
    $scope.name = u.name;
    $scope.email = u.email;
    $scope.gameId = u.gameId;
    initialize();
  })
  .catch( e => {
    console.error( 'What to do with this error', e );
  });

  $scope.resumelobbytest = " welcome to the resume game Lobby!";

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

  $scope.getBoardView = function () {
    pokemonSocket.emit('creater enters board', { gameId: $scope.gameId });
  };

});