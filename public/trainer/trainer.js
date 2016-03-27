angular.module('pokemon.trainer', [])
.controller('trainerController', function ($scope, gameFactory, $window, $location, pokemonSocket) {

  // Post Dev values
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');

  $scope.currentTurnPlayerName;
  $scope.currentTurnPlayerId;
  
  $scope.updateTurn = function () {
    gameFactory.updateTurn($scope.gameId, 'boardView')
      .then(function (resp) {
        pokemonSocket.emit('emit users back to board', {gameId: $scope.gameId});
        $location.path('/board');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  pokemonSocket.on('redirect back to board', function() {
    $location.path('/board');
  });

  var initialize = function () {
    gameFactory.getGameTurn($scope.gameId)
      .then(function (resp) {
        $scope.currentTurnPlayerName = resp.playerName;
        $scope.currentTurnPlayerId = resp.facebookId;
        gameFactory.trainerInit($scope.gameId, $scope.currentTurnPlayerId)
          .then(function (resp) {
            $scope.currentTrainer = resp.currentTrainer;
            $scope.otherTrainers = resp.otherTrainers;
          });
      });
  };

  var confirmCurrentPage = function() {
    gameFactory.getCurrentPage($scope.gameId)
      .then(function(currentPage){
        if (currentPage === 'trainerView') {
          initialize();
        }else{
          switch (currentPage) {
            case 'starterView':
              $location.path('/starter');
              break;
            case 'cityView':
              $location.path('/city');
              break;
            case 'boardView':
              $location.path('/board');
              break;
            case 'captureView':
              $location.path('/capture');
              break;
            case 'eventView':
              $location.path('/event');
              break;
          }
        }
      });
  };

  confirmCurrentPage();

  // setTimeout(function(){ 
  //   pokemonSocket.emit('emit users back to board', {gameId: $scope.gameId});
  // }, 3000);

});