angular.module('pokemon.capture', [])
.controller('captureController', function ($scope, gameFactory, $window) {
  $scope.capturetest = "Get ready to capture a Pokemon!";

  // Post Dev values
  // $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  // $scope.userId = $window.localStorage.getItem('pokemon.userId');
  
  // Dev values
  $scope.gameId = 1;
  $scope.userId = "Facebook123";

  // $scope.pokemonColor = 'pink';
  // $scope.pokemon = {id: 25, name: 'Pikachu', specs: { diceRoll: null, attackname: 'ThunderShock', strength: 3}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/25.png'};

  var initialize = function() {
  
    gameFactory.getAvailablePokemon($scope.gameId, $scope.userId)
      .then(function(pokemon) {
        $scope.imageUrl = pokemon.imageUrl;
        $scope.pokemonColor = pokemon.color;
        $scope.pokemon = pokemon;
        $scope.message = "ready";
        $scope.description = pokemon.description;
        $scope.name = pokemon.name;

      });
  };
  
  $scope.rollvalue;
  $scope.result;

  $scope.rollDice = function () {
    $scope.rollvalue = Math.ceil(Math.random() * 6);
    gameFactory.catchPokemon($scope.gameId, $scope.userId, $scope.rollvalue, $scope.pokemonColor, $scope.pokemon)
      .then(function (resp) {
        $scope.result = resp;
      }).catch(function (error) {
        console.error(error);
      });
    $scope.message = "";
  };

  initialize();

});