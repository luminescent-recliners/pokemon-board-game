angular.module('pokemon', [
  'pokemon.board',
  'pokemon.home',
  'services',
  'pokemon.starter',
  'ngRoute',
  'ngAnimate',
  'pokemon.lobby',
  'pokemon.capture',
  'pokemon.event',
  'pokemon.city',
  'btford.socket-io',
  'pokemon.auth',
  'ngCookies',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
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
    })
    .when('/lobby', {
      templateUrl: 'lobby/lobby.html',
      controller: 'lobbyController'
    })
    .when('/capture', {
      templateUrl: 'capturePokemon/capturePokemon.html',
      controller: 'captureController'
    })
    .when('/city', {
      templateUrl: 'city/city.html',
      controller: 'cityController'
    })
    .when('/event', {
      templateUrl: 'event/event.html',
      controller: 'eventController'
    })
    .when("/", {
      templateUrl: 'auth/signin.html',
      conroller: 'authController'
    });
});
