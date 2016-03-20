angular.module('pokemon.lobby', [])
.controller('lobbyController', function (pokemonSocket, $scope, $location, gameFactory, $window) {

  $scope.lobbytest = "Welcome to the Lobby!";
  $scope.gamename;
  $scope.gameCreator;
  $scope.myGameCreator = false;

  
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');
  
  
  // DEV Todo: $scope.users has to be got from sockets
  // $scope.users = [ 
  //   {facebookId: "Facebook123", playerName: "Bob"}
  // ];

  pokemonSocket.on('joinLobby', function(currentUsers) {
    console.log('from joinLobby',currentUsers);
    $scope.users = currentUsers;
  });

  pokemonSocket.on('currentUsers', function(userArray) {
    $scope.users = userArray;
  });

  var initialize = function () {
    gameFactory.lobbyInit($scope.gameId)
      .then(function (resp) {
        $scope.gameName = resp.gameName;
        $scope.gameCreator = resp.gameCreator;
        $scope.gameCreatorName = resp.creatorName;
        if($scope.gameCreator !== $scope.facebookId) {
          $scope.myGameCreator = true;
        } 
        pokemonSocket.emit('enteredLobby', {gameId: $scope.gameId});

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