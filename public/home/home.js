angular.module('pokemon.home', [])

.controller('homeController',function($scope, userFactory) {
  $scope.user =  
  	{ 
	facebookId: 'Facebook123',
	displayName: 'Henry',
	gamesParticipating: [1],
	numGameWon: 0
	}
  $scope.gameId = 1;
  $scope.gameList = [];

  $scope.hitEnter = function($event, input) {
    if($event.which === 13) {
    $scope.makeNewGame(input);
  	}
  };

  $scope.makeNewGame = function(newGameName) {
  	$scope.gameList.push($scope.newGameName);
    console.log($scope.newGameName)
  	userFactory.addGame($scope.gameId, $scope.newGameName, $scope.user.facebookId)
  	.then(function (resp) {
      $location.path('/');
    }).catch(function (error) {
      console.error(error);
    });
  	$scope.newGameName = '';
  	$scope.gameId++;
    window.localStorage.setItem('pokemon.gameId', $scope.gameId);
  };

  $scope.userGames = function() {
    userFactory.getGames()
    .then(function(games){
      $scope.gameList = games.name;
      console.log('Got all games');
    })
    .catch(function(error) {
      console.log('Uhh... I could not get the games. Something exploded', error);
      window.alert('Oops, something went wrong with the GAMES D=');
    });
  }
  $scope.userGames();
});

 