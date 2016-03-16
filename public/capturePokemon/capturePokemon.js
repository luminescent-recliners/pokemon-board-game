angular.module('pokemon.capture', [])
.controller('captureController', function ($scope, gameFactory) {
  $scope.capturetest = "Get ready to capture a Pokemon!";
  $scope.gameId = 1;
  $scope.userId = "choumander";
  $scope.pokemonColor = 'pink';
  $scope.rollvalue;
  $scope.result;

  $scope.rollDice = function () {
    $scope.rollvalue = Math.floor(Math.random() * 6);
    gameFactory.catchPokemon($scope.gameId, $scope.userId, $scope.rollvalue, $scope.pokemonColor)
      .then(function (resp) {
        $scope.result = resp;
      }).catch(function (error) {
        console.error(error);
      });
  };

});