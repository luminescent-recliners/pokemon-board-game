angular.module('pokemon.home', [])

.controller('homeController',function($scope, userFactory, $window) {

  $scope.facebookId = $window.localStorage.setItem('pokemon.userId', "Facebook123");
  $scope.displayName = $window.localStorage.setItem('pokemon.displayName', "bob");

  $scope.user =  
    { 
      facebookId: 'Facebook123',
      displayName: 'Bob',
      gamesParticipating: [1],
      numGameWon: 0
    }

  // $scope.gameList = [];
  // $scope.id = null;

  $scope.hitEnter = function($event, input) {
    if($event.which === 13) {
    $scope.makeNewGame(input);
    }
  };

  $scope.makeNewGame = function(newGameName) {
     userFactory.addGame($scope.gameId, $scope.newGameName, $scope.user.facebookId)
    .then(function (resp) {
     }).catch(function (error) {
      console.error(error);
    });
    $scope.newGameName = '';
    $scope.userGames();
  };

  $scope.localStorage = function(id) {
    console.log('pokemon.gameId', id)
    $window.localStorage.setItem('pokemon.gameId', id);
  };

  $scope.userGames = function() {
    userFactory.getGames()
    .then(function(games) {
      $scope.games = [];
      $scope.gameList = [];
      $scope.gameId = [];
      for(var i = 0; i < games.length; i++) {
        $scope.games.push(games[i])
        $scope.gameList.push(games[i].gameName);
        $scope.gameId.push(games[i].gameId);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  $scope.userGames();
});

 