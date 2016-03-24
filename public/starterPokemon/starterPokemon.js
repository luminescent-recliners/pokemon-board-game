angular.module('pokemon.starter', ['ui.bootstrap'])

.controller('starterController', function($scope, $location, userFactory, gameFactory, $window, pokemonSocket){

  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');

  $scope.selectedPokemon = null;
  $scope.gameTurnFacebookId;

  $scope.list = [];

  var initialize = function () {
    gameFactory.getGameTurn($scope.gameId)
      .then(function (resp) {
        $scope.gameTurnName = resp.playerName;
        $scope.gameTurnFacebookId = resp.facebookId;

        gameFactory.getRemainingStarterPokemon($scope.gameId)
          .then(function(resp2) {
            $scope.list = resp2;
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.getStarter = function (currpokemon) {
    $scope.selectedPokemon = currpokemon;
  };

  $scope.playerInit = function () {
    if($scope.selectedPokemon !== null) {

    userFactory.playerInit($scope.gameId, $scope.facebookId, $scope.selectedPokemon)
      .then(function (resp) {
        $scope.gameTurnName = resp.playerName;
        $scope.gameTurnFacebookId = resp.facebookId
        pokemonSocket.emit('a pokemon was selected', {gameId: $scope.gameId, pokemon: $scope.selectedPokemon});
      })
      .catch(function (error) {
        console.error(error);
      });
    } else {
      $scope.message = "Have To Select a Pokemon";
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
          }
        }
      });
  };

  confirmCurrentPage();
});