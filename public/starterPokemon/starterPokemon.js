angular.module('pokemon.starter', [])
.controller('starterController', function($scope, $location, userFactory){
  $scope.startertest = "I am a starter pokemon!";
  $scope.selectedPokemon = {};

  $scope.list = [ 
    {id: 52, name: 'Meowth', specs: { diceRoll: null, attackname: 'Bite' , strength: 3}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/52.png'},
    {id: 07, name: 'Squirtle', specs: { diceRoll: null, attackname: 'WaterGun', strength: 4}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/7.png'},
    {id: 01, name: 'Bulbasaur', specs: { diceRoll: null, attackname: 'LeechSeed', strength: 4}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/1.png'},
    {id: 35, name: 'Clefairy', specs: { diceRoll: null, attackname: 'Pound', strength: 3}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/35.png'},
    {id: 25, name: 'Pikachu', specs: { diceRoll: null, attackname: 'ThunderShock', strength: 3}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/25.png'},
    {id: 04, name: 'Charmander', specs: { diceRoll: null, attackname: 'Ember', strength: 4}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/4.png'}
  ];

  $scope.getStarter = function (currpokemon) {
    $scope.selectedPokemon = currpokemon;
    console.log($scope.selectedPokemon);
  };

  $scope.addStarter = function () {
    var gameId = 1;
    var userId = "choumander";
    userFactory.addStarterPokemon(gameId, userId, $scope.selectedPokemon)
    .then(function (resp) {
      $location.path('/board');
    }).catch(function (error) {
      console.error(error);
    });
  };

});