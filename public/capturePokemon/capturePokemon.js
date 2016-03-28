angular.module('pokemon.capture', [])
.controller('captureController', function ($scope, gameFactory, $window, $location, pokemonSocket) {
  $scope.currentTurnPlayerName;
  $scope.currentTurnPlayerId;

  $scope.rollvalue;
  $scope.result;


  // Post Dev values
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');
  
  // Dev values
  // $scope.gameId = 1;
  // $scope.facebookId = "Facebook123";

  // $scope.pokemonColor = 'pink';
  // $scope.pokemon = {id: 25, name: 'Pikachu', specs: { diceRoll: null, attackname: 'ThunderShock', strength: 3}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/25.png'};

  var initialize = function() {
    gameFactory.getGameTurn($scope.gameId)
      .then(function (resp) {
        $scope.currentTurnPlayerName = resp.playerName;
        $scope.currentTurnPlayerId = resp.facebookId;

        gameFactory.getAvailablePokemon($scope.gameId, $scope.currentTurnPlayerId)
          .then(function(pokemon) {
            $scope.rollNeeded = pokemon.capture.join(', ');
            $scope.dice = pokemon.diceImg;
            $scope.imageUrl = pokemon.gifURL;
            $scope.pokemonColor = pokemon.color;
            $scope.pokemon = pokemon;
            $scope.message = "ready";
            $scope.description = pokemon.description;
            $scope.name = pokemon.name;
          });

      });

  };
  
  $scope.diceRolled = false;
  $scope.rollDice = function () {
    var audioDice = new Audio('../assets/sounds/dice.mp3');
    audioDice.play();
    $scope.rollvalue = Math.ceil(Math.random() * 6);
    gameFactory.catchPokemon($scope.gameId, $scope.facebookId, $scope.rollvalue, $scope.pokemonColor, $scope.pokemon)
      .then(function (resp) {
        $scope.result = resp;
        if ($scope.result === "Sorry!! Pokemon Got Away") {
          var audioDice = new Audio('../assets/sounds/bloop.mp3');
          audioDice.play();
        } else {
          var audioDice = new Audio('../assets/sounds/caught.mp3');
          audioDice.play();
        }
        pokemonSocket.emit('roll die for capture', {gameId: $scope.gameId, result: $scope.result, roll: $scope.rollvalue});
      }).catch(function (error) {
        console.error(error);
      });
    $scope.message = "";
    $scope.diceRolled = true;
  };

  pokemonSocket.on('send response for capture page', function(data) {
    $scope.result = data.result;
    $scope.rollvalue = data.roll;
    $scope.diceRolled = true;
    var audioDice = new Audio('../assets/sounds/dice.mp3');
    audioDice.play();
    if ($scope.result === "Sorry!! Pokemon Got Away") {
      var audioDice = new Audio('../assets/sounds/bloop.mp3');
      audioDice.play();
    } else {
      var audioDice = new Audio('../assets/sounds/caught.mp3');
      audioDice.play();
    }
  });

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
    var audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
  });

  var confirmCurrentPage = function() {
    gameFactory.getCurrentPage($scope.gameId)
      .then(function(currentPage){
        if (currentPage === 'captureView') {
          initialize();
        }else{
          switch (currentPage) {
            case 'starterView':
              $location.path('/starter');
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

  confirmCurrentPage();
});