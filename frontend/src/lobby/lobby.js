angular.module('pokemon.lobby', [])
.controller('lobbyController', function (pokemonSocket, $scope, $location, gameFactory, $window, authFactory, $cookies ) {
  
  const debug = false;
  
  if ( !authFactory.isAuth('lobbyController') ){
    debug && console.log( 'lobbyController isAuth', false );
    $location.path('/');
    return;
  }
  
  authFactory.getCurrentUser()
  .then( u => {
    debug && console.log( 'lobbyController getCurrentUser', u );
    $scope.name = u.name;
    $scope.email = u.email;
    $scope.gameId = u.gameId;
    initialize();
  })
  .catch( e => {
    console.error( 'What to do with this error', e );
  });

  $scope.gamename;
  $scope.gameCreator;
  $scope.myGameCreator = false;
  $scope.users =[];

  // setInterval(()=>console.log($scope.users), 10000); ///////// delete me

  pokemonSocket.on('join-Lobby', function(currentUsers) {
    $scope.users = currentUsers;
  });

  pokemonSocket.on('currentUsers', function(userArray) {
    $scope.users = userArray;
  });

  pokemonSocket.on('moveAllPlayersToSelectPokemon', function( ){
    $location.path('/starter');
  });

  // Updates players in room, if a player leaves lobby and goes to home page
  pokemonSocket.on('user update', function(userArrayUpdated) {
    $scope.users = userArrayUpdated;
    initialize(); // TODO: do we need this here?
  });

  var initialize = function () {
    gameFactory.lobbyInit($scope.gameId)
    .then(function (resp) {
      $scope.gameName = resp.gameName;
      $scope.gameCreator = resp.gameCreator;
      $scope.gameCreatorName = resp.creatorName;
      if($scope.gameCreator !== $scope.email) {
        $scope.myGameCreator = true;
      } 
      pokemonSocket.emit('enteredLobby', { gameId: $scope.gameId });

    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.getStarterView = function () {
    gameFactory.addUsers($scope.gameId, $scope.users)
    .then(function (resp) {
      pokemonSocket.emit('creatorStartsGame',{ gameId: $scope.gameId });
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  
});