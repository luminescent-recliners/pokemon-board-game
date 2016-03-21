angular.module('pokemon.home', [])

.controller('homeController',function($location, $scope, userFactory, $window, pokemonSocket) {
  //happen after face book auth
  // >>>>>>>>-----------------------------------
  // mimiciking facebook auth with next two lines
  // DELETE AFTER IMPLEMENTING FACEBOOK AUTH
  $window.localStorage.setItem('pokemon.facebookId', "Facebook123");
  $window.localStorage.setItem('pokemon.playerName', "Bob");
  // --------------------------------------<<<<<<
  
  // this should happen after face book auth
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');
  $scope.games = [];
  $scope.myGames = [];

  pokemonSocket.on('updateAvailGames', function(newGame) {
    $scope.games = [];
    $scope.myGames = [];
    $scope.userGames();
  });

  $scope.hitEnter = function($event) {
    if($event.which === 13) {
      if($scope.newGameName) {
        $scope.makeNewGame();
      } else {
        $scope.showMessage = true;
      }
    }
  };

  $scope.makeNewGame = function() {
    if($scope.newGameName) {
      $scope.showMessage = false;
      userFactory.addGame($scope.gameId, $scope.newGameName, $scope.facebookId, $scope.playerName)
      .then(function (resp) {
        var userGame = {
          gameId: resp.gameId,
          gameName: resp.name
        };
        // $scope.games.push(userGame);
        // $scope.myGames.push(userGame);
        pokemonSocket.emit('newGame', userGame);
       }).catch(function (error) {
        console.error(error);
      });
        $scope.newGameName = '';
    } else {
      $scope.showMessage = true;
    }
  };

  $scope.joinLobby = function(id) {
    $window.localStorage.setItem('pokemon.gameId', id);
    $location.path('/lobby');

    pokemonSocket.emit('joinLobby', {
      gameId: id,
      user: {
        playerName: $scope.playerName,
        facebookId: $scope.facebookId
      }
    });

  };

  $scope.userGames = function() {
    userFactory.getGames()
    .then(function(games) {
      $scope.games = games;
      console.log('userGame game', games);
      // figure out if player is in any of the started games
      // should this logic go on the server side?
      for(var i = 0; i < games.length; i++) {
        if(games[i].gameStarted){
          for(var j = 0; j < games[i].gamePlayers.length; j++){
            if(games[i].gamePlayers[j].facebookId === $scope.facebookId) {
              $scope.myGames.push(games[i]);
            }
          }
        } else {
          console.log('from userGames :', games[i].gameCreator.facebookId );
          if(games[i].gameCreator.facebookId === $scope.facebookId) {
            $scope.myGames.push(games[i]);
          }
        }
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  $scope.userGames();

  // test function
  $scope.changeUserInfo = function() {
    $window.localStorage.setItem('pokemon.facebookId', "Facebook1234");
    $window.localStorage.setItem('pokemon.playerName', "Henry");
    $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
    $scope.playerName = $window.localStorage.getItem('pokemon.playerName');
    
  }
});

 