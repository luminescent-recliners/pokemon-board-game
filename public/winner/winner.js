angular.module('pokemon.winner', [])
.controller('winnerController', function ($scope, $window, $location, userFactory, gameFactory, pokemonSocket) {
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');

  var initialize = function () {
    userFactory.getUsers($scope.gameId)
      .then(function (resp) {
        pokemonSocket.emit('get winner', { gameId: $scope.gameId });
        pokemonSocket.on('display winner', function (data) {
          $scope.winner = data.winner;
        });
        $scope.users = resp;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  var confirmCurrentPage = function() {
    gameFactory.getCurrentPage($scope.gameId)
      .then(function(currentPage){
        if (currentPage === 'winnerView') {
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

  $scope.goHome = function () {
    $location.path('/home');
  };
  
});