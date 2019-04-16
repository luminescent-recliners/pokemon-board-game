angular.module('pokemon.home', [])

.controller('homeController',function($cookies, $location, $scope, userFactory, $window, pokemonSocket, authFactory, gameFactory) {

  const debug = false;

  if ( !authFactory.isAuth('homeController') ){
    debug && console.log( 'homeController isAuth', false );
    $location.path('/');
    return;
  }

   authFactory.getCurrentUser()
   .then( u => {
     debug && console.log( 'homeController user', u );
     $scope.name = u.name;
     $scope.email = u.email;
     $scope.gameId = u.gameId;
     userGames();
   })
   .catch( e => {
      debug && console.log( 'homeController getCurrentUser', e );
      $location.path('/');
   });

  $scope.games = [];
  $scope.myGames = [];

  if( $scope.gameId !== null ) {
    pokemonSocket.emit("a user left lobby", { gameId: $scope.gameId, user: { email: $scope.email, name: $scope.name } });

    authFactory.delGameId();

    gameFactory.updatePlayerCounter($scope.gameId)
    .catch(function (error) {
      // TODO: the question is what to do...
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

  $scope.logout = () => {
    authFactory.logOut();
  };

  $scope.makeNewGame = function() {
    if($scope.newGameName) {
      $scope.showMessage = false;
      userFactory.addGame($scope.gameId, $scope.newGameName, $scope.email, $scope.name)
      .catch(function (error) {
        console.error(error);
      });
      $scope.newGameName = '';
    } 
    else {
      $scope.showMessage = true;
    }
  };

  $scope.joinLobby = function(id, gameStarted) {
    if(gameStarted === false) {
      gameFactory.requestLobbyEntry(id)
      .then(function (resp) {
        if(resp.requestAccepted) {
          authFactory.setGameId( id );
          pokemonSocket.emit('joinLobby', {
            gameId: id,
            user: {
              name: $scope.name,
              email: $scope.email
            }
          });
          $location.path('/lobby');
        } 
        else {
          alert("Sorry, This game already has 6 players! Pls select another game.");
        }
      }) 
      .catch(function (error) {
        console.error(error);
      });  
    } 
    else {
      authFactory.setGameId( id );
      pokemonSocket.emit('join resume lobby', {
        gameId: id,
        user: {
          name: $scope.name,
          email: $scope.email
        }
      });
      $location.path('/resumelobby'); 
    } 
  };

  var userGames = function() {
    userFactory.getGames()
    .then( populateGamesAndMyGames )
    .catch(function(error) {
      console.error(error);
    });
  };
  
  pokemonSocket.on('updateAvailGames',  populateGamesAndMyGames );

  function populateGamesAndMyGames( games ) {
    $scope.games = games;
    $scope.myGames = [];
    for( let i = 0; i < games.length; i++ ) {
      const game = games[i];
      if ( game.gameStarted ) {
        for( let j = 0; j < game.gamePlayers.length; j++){
          if(game.gamePlayers[j].email === $scope.email) {
            $scope.myGames.push(game);
          }
        }
      } 
      else {
        if ( game.gameCreator.email === $scope.email ) {
          $scope.myGames.push(game);
        }
      }
    }
  }

});
