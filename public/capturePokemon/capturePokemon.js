angular.module('pokemon.capture', [])
.controller('captureController', function ($scope, gameFactory, $window, $location) {
  $scope.capturetest = "Get ready to capture a Pokemon!";
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
    gameFactory.getAvailablePokemon($scope.gameId, $scope.facebookId)
      .then(function(pokemon) {
        $scope.imageUrl = pokemon.imageURL;
        $scope.pokemonColor = pokemon.color;
        $scope.pokemon = pokemon;
        $scope.message = "ready";
        $scope.description = pokemon.description;
        $scope.name = pokemon.name;

      });
  };
  
  $scope.dicerolled = false;
  $scope.rollDice = function () {
    $scope.rollvalue = Math.ceil(Math.random() * 6);
    gameFactory.catchPokemon($scope.gameId, $scope.facebookId, $scope.rollvalue, $scope.pokemonColor, $scope.pokemon)
      .then(function (resp) {
        $scope.result = resp;
      }).catch(function (error) {
        console.error(error);
      });
    $scope.message = "";
    $scope.dicerolled = true;
  };

  $scope.updateTurn = function () {
    gameFactory.updateTurn($scope.gameId)
      .then(function (resp) {
        $location.path('/board');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

initialize();

});