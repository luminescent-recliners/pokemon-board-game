angular.module('pokemon.trainer', [])
.controller('trainerController', function (authFactory, $scope, gameFactory, $window, $location, pokemonSocket) {
  const debug = false;

  if ( !authFactory.isAuth( 'trainerController' ) ){
    debug && console.log( 'trainerController isAuth', false );
    $location.path('/');
    return;
  }
  authFactory.getCurrentUser()
  .then( u => {
    debug && console.log( 'trainerController getCurrentUser', u );
    $scope.name = u.name;
    $scope.email = u.email;
    $scope.gameId = u.gameId;
    initialize();
  })
  .catch( e => {
    console.error( 'What to do with this error', e );
  });

  $scope.currentTurnPlayerName;
  $scope.currentTurnPlayerId;
  
  $scope.updateTurn = function () {
    gameFactory.updateTurn($scope.gameId, 'boardView')
      .then(function (resp) {
        var audioRedir = new Audio('../assets/sounds/pop.mp3');
        audioRedir.play();
        pokemonSocket.emit('emit users back to board', {gameId: $scope.gameId});
        $location.path('/board');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  pokemonSocket.on('redirect back to board', function() {
    var audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
    $location.path('/board');
  });

  var initialize = function () {
    gameFactory.getGameTurn($scope.gameId)
      .then(function (resp) {
        $scope.currentTurnPlayerName = resp.name;
        $scope.currentTurnPlayerId = resp.email;
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

  // confirmCurrentPage();

});