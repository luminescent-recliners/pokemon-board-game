angular.module('pokemon.home', [])

.controller('homeController',function($scope, userFactory) {
  $scope.user =  
    { 
      facebookId: 'Facebook123',
      displayName: 'Henry',
      gamesParticipating: [1],
      numGameWon: 0
    }
  $scope.gameList = [];

  $scope.hitEnter = function($event, input) {
    if($event.which === 13) {
    $scope.makeNewGame(input);
    }
  };

  $scope.makeNewGame = function(newGameName) {
     console.log($scope.newGameName)
    userFactory.addGame($scope.gameId, $scope.newGameName, $scope.user.facebookId)
    .then(function (resp) {
     }).catch(function (error) {
      console.error(error);
    });
    $scope.newGameName = '';
    $scope.userGames();
  };

  $scope.localStorage = function( ) {
    window.localStorage.setItem('pokemon.gameId', $scope.gameId);
  };

  $scope.userGames = function() {
    userFactory.getGames()
    .then(function(games) {
      $scope.gameList = [];
      $scope.gameId = [];
      for(var i = 0; i < games.length; i++) {
        $scope.gameList.push(games[i].gameName);
        $scope.gameId.push(games[i].gameId);
      console.log('Got all games:', games);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  $scope.userGames();
});

 