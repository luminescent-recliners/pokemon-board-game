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
      pokemonSocket.emit('load event gif', {gameId: $scope.gameId, desc: $scope.gifDescrip, url:$scope.gifURL});
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  pokemonSocket.on('all user event gif', function(data) {
    console.log("all user EVENT gif is working ", data)
    $scope.gifDescrip = data.desc;
    $scope.gifURL = data.url;
  });

  $scope.updateTurn = function () {
    console.log("POP from updateTurn")
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
    console.log("POP from redirect back to board")
    var audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
  });

  var initialize = function () {
    gameFactory.getGameTurn($scope.gameId)
      .then(function (resp) {
        $scope.currentTurnPlayerName = resp.playerName;
        $scope.currentTurnPlayerId = resp.facebookId;
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


  confirmCurrentPage();

  // setTimeout(function(){ 
  //   pokemonSocket.emit('emit users back to board', {gameId: $scope.gameId});
  // }, 3000);


});