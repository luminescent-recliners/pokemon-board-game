angular.module('pokemon.starter', ['ui.bootstrap'])

.controller('starterController', function($scope, $location, userFactory, gameFactory, $window, pokemonSocket, $cookies, authFactory){
  const debug = false;

  if ( !authFactory.isAuth('starterController') ){
    debug && console.log( 'starterController isAuth', false );
    $location.path('/');
    return;
  }

   authFactory.getCurrentUser()
   .then( u => {
     debug && console.log( 'starterController user', u );
     $scope.name = u.name;
     $scope.email = u.email;
     $scope.gameId = u.gameId;
     initialize();
   })
   .catch( e => {
      debug && console.log( 'starterController getCurrentUser', e );
      $location.path('/');
   });

  $scope.selectedPokemon = null;
  $scope.gameTurnEmail;

  $scope.list = [];

  var initialize = function () {
    gameFactory.getGameTurn($scope.gameId)
    .then(function (resp) {
      $scope.gameTurnName = resp.name;
      $scope.gameTurnEmail = resp.email;
      return gameFactory.getRemainingStarterPokemon($scope.gameId);
    })
    .then(function(resp2) {
      $scope.list = resp2;
      return gameFactory.getRemainingSprites($scope.gameId)
    })
    .then(function(resp3) {
      $scope.spriteList = resp3;
      // confirmCurrentPage();
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.getStarter = function (currpokemon) {
    $scope.selectedPokemon = currpokemon;
  };

  var selectedSprite = null;
  $scope.selectSprite = currentSprite => { selectedSprite = currentSprite; }

  $scope.playerInit = () => {
    if($scope.selectedPokemon !== null && selectedSprite !== null)  {
      userFactory.playerInit($scope.gameId, $scope.email, $scope.selectedPokemon, selectedSprite)
      .then(function (resp) {
        $scope.gameTurnName = resp.name;
        $scope.gameTurnEmail = resp.email;
        pokemonSocket.emit('a pokemon was selected', {gameId: $scope.gameId, pokemon: $scope.selectedPokemon});
      })
      .catch(function (error) {
        console.error(error);
      });
    } else {
      $scope.message = "Have To Select a Pokemon And a Trainer!!";
    }
  };

  pokemonSocket.on('refresh after pokemon selection', function(data){
    if(data.doneselection) {
      gameFactory.updateCurrentPage($scope.gameId, 'boardView')
      .then(function() {
        $location.path('/board');
      });
    } else {
      initialize();
    }
  });

  var confirmCurrentPage = function() {
    gameFactory.getCurrentPage($scope.gameId)
      .then(function(currentPage){
        if (currentPage === 'starterView') {
          initialize();
        }else{
          switch (currentPage) {
            case 'captureView':
              $location.path('/capture');
              break;
            case 'boardView':
              $location.path('/board');
              break;
            case 'eventView':
              $location.path('/event');
              break;
            case 'cityView':
              $location.path('/city');
              break;
            case 'trainerView':
              $location.path('/trainer');
              break;
          }
        }
      });
  };

  // confirmCurrentPage();
});