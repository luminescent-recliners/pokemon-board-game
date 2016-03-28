angular.module('pokemon.event', [])
.controller('eventController', function ($scope, gameFactory, $window, $location, pokemonSocket) {

  // Post Dev values
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');

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
        $scope.currentTurnPlayerName = resp.playerName;
        $scope.currentTurnPlayerId = resp.facebookId;
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
  getGif();

  confirmCurrentPage();

  // setTimeout(function(){ 
  //   pokemonSocket.emit('emit users back to board', {gameId: $scope.gameId});
  // }, 3000);


});