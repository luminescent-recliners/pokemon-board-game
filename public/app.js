angular.module('pokemon', [
  'pokemon.board',
  'pokemon.home',
  'services',
  'pokemon.starter',
  'ngRoute',
  'ngAnimate'
])
.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: 'home/home.html',
      conroller: 'homeController'
    })
    .when('/board', {
      templateUrl: 'board/board.html',
      controller: 'boardController'
    })
    .when('/starter', {
      templateUrl: 'starterPokemon/starterPokemon.html',
      controller: 'starterController'
    });

});