angular.module('pokemon.starter', [])
.controller('starterController', function($scope, $location, userFactory, gameFactory, $window){
  $scope.select = false;

  // post dev values
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');

  $scope.selectedPokemon = {};
  $scope.gameTurnFacebookId;

  // TODO:  get request from pokemon table - and sort out game logic for available pokemon for player turn selections
  $scope.list = [ 
    {id: 52, name: 'Meowth', specs: { diceRoll: null, attackname: 'Bite' , strength: 3}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/52.png'},
    {id: 07, name: 'Squirtle', specs: { diceRoll: null, attackname: 'WaterGun', strength: 4}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/7.png'},
    {id: 01, name: 'Bulbasaur', specs: { diceRoll: null, attackname: 'LeechSeed', strength: 4}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/1.png'},
    {id: 35, name: 'Clefairy', specs: { diceRoll: null, attackname: 'Pound', strength: 3}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/35.png'},
    {id: 25, name: 'Pikachu', specs: { diceRoll: null, attackname: 'ThunderShock', strength: 3}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/25.png'},
    {id: 04, name: 'Charmander', specs: { diceRoll: null, attackname: 'Ember', strength: 4}, visible: true, alive: true, imageURL: 'http://pokeapi.co/media/img/4.png'}
  ];

  $scope.initialize = function () {
    gameFactory.getGameTurn($scope.gameId)
      .then(function (resp) {
        $scope.gameTurnName = resp.playerName;
        $scope.gameTurnFacebookId = resp.facebookId;
        if($scope.facebookId !== $scope.gameTurnFacebookId) {
          $scope.select = true;
        }
      }).catch(function (error) {
        console.error(error);
      });
  };

  $scope.getStarter = function (currpokemon) {
    $scope.selectedPokemon = currpokemon;
    console.log($scope.selectedPokemon);
  };

  $scope.playerInit = function () {
    userFactory.playerInit($scope.gameId, $scope.facebookId, $scope.selectedPokemon)
      .then(function (resp) {
        $location.path('/board');
      }).catch(function (error) {
        console.error(error);
      });
  };

  $scope.initialize();
});