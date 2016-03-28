angular.module('pokemon.home', [])

.controller('homeController',function($cookies, $location, $scope, userFactory, $window, pokemonSocket, authFactory, gameFactory) {
  $window.localStorage.setItem('pokemon.facebookId', $cookies.get('facebookId'));
  $window.localStorage.setItem('pokemon.playerName', $cookies.get('playerName'));
  // --------------------------------------<<<<<<
  
  // this should happen after face book auth
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');
  $scope.games = [];
  $scope.myGames = [];
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');

  if($scope.gameId !== null) {
    pokemonSocket.emit("a user left lobby", { gameId: $scope.gameId, user: { facebookId: $scope.facebookId, playerName: $scope.playerName}});
    window.localStorage.removeItem("pokemon.gameId");
    gameFactory.updatePlayerCounter($scope.gameId)
      .then(function (resp) {
        console.log("player counter is updated!", resp);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  $scope.hitEnter = function($event) {
    if($event.which === 13) {
      if($scope.newGameName) {
        $scope.makeNewGame();
      } else {
        $scope.showMessage = true;
      }
    }
  };

  $scope.logout = function() {
    window.localStorage.removeItem("pokemon.facebookId");
    window.localStorage.removeItem("pokemon.gameId");
    window.localStorage.removeItem("pokemon.playerName");
    $cookies.remove("facebookId");
    $cookies.remove("playerName");
    $location.path('/');
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
        pokemonSocket.emit('newGame', userGame);
       }).catch(function (error) {
        console.error(error);
      });
        $scope.newGameName = '';
    } else {
      $scope.showMessage = true;
    }
  };

  $scope.joinLobby = function(id, gameStarted) {
    if(gameStarted === false) {
      gameFactory.requestLobbyEntry(id)
      .then(function (resp) {
        if(resp.requestAccepted) {
          $window.localStorage.setItem('pokemon.gameId', id);
          $location.path('/lobby');
          pokemonSocket.emit('joinLobby', {
            gameId: id,
            user: {
              playerName: $scope.playerName,
              facebookId: $scope.facebookId
            }
          });
        } else {
          alert("Sorry, This game already has 6 players! Pls select another game.");
        }
      }) 
      .catch(function (error) {
        console.error(error);
      });  
    } else {
      $location.path('/resumelobby');
      pokemonSocket.emit('join resume lobby', {
        gameId: id,
        user: {
          playerName: $scope.playerName,
          facebookId: $scope.facebookId
        }
      }); 
    } 
  };

  var userGames = function() {
    userFactory.getGames()
    .then(function(games) {
      $scope.games = games;
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
          if(games[i].gameCreator.facebookId === $scope.facebookId) {
            $scope.myGames.push(games[i]);
          }
        }
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  };
  
  userGames();

  pokemonSocket.on('updateAvailGames', function(newGame) {
    $scope.games = [];
    $scope.myGames = [];
    userGames();
  });

});
