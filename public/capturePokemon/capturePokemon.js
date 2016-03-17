angular.module('pokemon.capture', [])
.controller('captureController', function ($scope, gameFactory) {
  $scope.capturetest = "Get ready to capture a Pokemon!";
  $scope.gameId = 1;
  $scope.userId = "Facebook123";
  $scope.pokemonColor = 'pink';
  $scope.pokemon = {id: 25, name: 'Pikachu', specs: { diceRoll: null, attackname: 'ThunderShock', strength: 3}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/25.png'};
  $scope.rollvalue;
  $scope.result;

  $scope.rollDice = function () {
    $scope.rollvalue = Math.floor(Math.random() * 6);
    gameFactory.catchPokemon($scope.gameId, $scope.userId, $scope.rollvalue, $scope.pokemonColor, $scope.pokemon)
      .then(function (resp) {
        $scope.result = resp;
      }).catch(function (error) {
        console.error(error);
      });
  };

});