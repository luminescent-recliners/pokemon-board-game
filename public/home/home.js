angular.module('pokemon.home', [])

.controller('homeController',function($scope, userFactory, $window, pokemonSocket) {
  //happen after face book auth
  $window.localStorage.setItem('pokemon.facebookId', "Facebook123");
  $window.localStorage.setItem('pokemon.playerName', "Bob");
  
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');
  $scope.games;


  pokemonSocket.on('updateAvailGames', function(newGame) {
    $scope.userGames();
  });

  $scope.hitEnter = function($event, input) {
    if($event.which === 13) {
    $scope.makeNewGame(input);
    }
  };

  $scope.makeNewGame = function(newGameName) {
     userFactory.addGame($scope.gameId, $scope.newGameName, $scope.facebookId, $scope.playerName)
    .then(function (resp) {
      pokemonSocket.emit('newGame');
     })
    .catch(function (error) {
      console.error(error);
    });
    $scope.newGameName = '';
  };

  $scope.localStorage = function(id) {
    $window.localStorage.setItem('pokemon.gameId', id);
  };

  $scope.userGames = function() {
    userFactory.getGames()
    .then(function(games) {
      $scope.games = [];
      for(var i = 0; i < games.length; i++) {
        $scope.games.push(games[i]);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  $scope.userGames();
});

 