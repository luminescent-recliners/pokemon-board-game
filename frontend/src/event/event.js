angular.module('pokemon.event', [])
.controller('eventController', function (authFactory, $scope, gameFactory, $window, $location, pokemonSocket) {
  const debug = false;

  if ( !authFactory.isAuth('eventController') ){
    debug && console.log( 'eventController isAuth', false );
    $location.path('/');
    return;
  }
  authFactory.getCurrentUser()
  .then( u => {
    debug && console.log( 'eventController getCurrentUser', u );
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
  
  var getGif = function() {
    gameFactory.getEventGif()
    .then(function (resp) {
      $scope.gifDescrip = resp.descriptions;
      $scope.gifURL = resp.eventURL;
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.updateTurn = function () {
    var audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
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
    var audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
  });

  var initialize = function () {
    gameFactory.getGameTurn($scope.gameId)
      .then(function (resp) {
        $scope.currentTurnPlayerName = resp.name;
        $scope.currentTurnPlayerId = resp.email;
        getGif();
      });
  };

  var confirmCurrentPage = function() {
    gameFactory.getCurrentPage($scope.gameId)
      .then(function(currentPage){
        if (currentPage === 'eventView') {
          initialize();
        }else{
          switch (currentPage) {
            case 'starterView':
              $location.path('/starter');
              break;
            case 'boardView':
              $location.path('/board');
              break;
            case 'captureView':
              $location.path('/capture');
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