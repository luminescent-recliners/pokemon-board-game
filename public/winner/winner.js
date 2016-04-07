angular.module('pokemon.winner', [])
.controller('winnerController', function ($scope, $window, $location, userFactory, gameFactory, pokemonSocket) {
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');

  $scope.circleData = [
    {row: 225, col: 30, typeOfSpot: 'white'},
    {row: 350, col: 150, typeOfSpot: 'pink'},
    {row: 105, col: 150, typeOfSpot: 'blue'},
    {row: 225, col: 270, typeOfSpot: 'green'},
    {row: 165, col: 255, typeOfSpot: 'green'},
    {row: 120, col: 210, typeOfSpot: 'blue'},
    {row: 330, col: 90, typeOfSpot: 'pink'},
    {row: 285, col: 50, typeOfSpot: 'pink'},
    {row: 285, col: 250, typeOfSpot: 'green'},
    {row: 330, col: 210, typeOfSpot: 'pink'},
    {row: 120, col: 90, typeOfSpot: 'red'},
    {row: 163, col: 42, typeOfSpot: 'red'}
  ];
  
  var checkWinner = function (pokemonCount) {
    if(pokemonCount.pink >= 4 && pokemonCount.green >= 3 &&
      pokemonCount.blue >= 2 && pokemonCount.red >= 2) {
      return true;
    } else {
      return false;
    }
  };

  var initialize = function () {
    userFactory.getUsers($scope.gameId)
      .then(function (resp) {
        $scope.users = resp;

        for(var i = 0; i < $scope.users.length; i++) {
          if(checkWinner($scope.users[i].pokemonCount)) {
            $scope.winner = $scope.users[i];
            break;
          }
        }

        $scope.party = $scope.winner.party;
        $scope.circleData[0].gifURL = $scope.party.shift().gifURL;
        
        for(var i = 1; i < $scope.circleData.length; i++) {
          for(var j = 0; j < $scope.party.length; j++) {
            if($scope.party[j].color === $scope.circleData[i].typeOfSpot) {
              $scope.circleData[i].gifURL = $scope.party[j].gifURL;
              $scope.party.splice(j, 1);
              break;
            }
          }
        }

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