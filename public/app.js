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
  'pokemon.winner',
  'pokemon.trainer',
  'pokemon.resumelobby',
  'ngCookies',
  'ngAudio'
])
.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: 'home/home.html',
      conroller: 'homeController',
      authenticate: true
    })
    .when('/board', {
      templateUrl: 'board/board.html',
      controller: 'boardController',
      authenticate: true
    })
    .when('/starter', {
      templateUrl: 'starterPokemon/starterPokemon.html',
      controller: 'starterController',
      authenticate: true
    })
    .when('/lobby', {
      templateUrl: 'lobby/lobby.html',
      controller: 'lobbyController',
      authenticate: true
    })
    .when('/capture', {
      templateUrl: 'capturePokemon/capturePokemon.html',
      controller: 'captureController',
      authenticate: true
    })
    .when('/city', {
      templateUrl: 'city/city.html',
      controller: 'cityController',
      authenticate: true
    })
    .when('/event', {
      templateUrl: 'event/event.html',
      controller: 'eventController',
      authenticate: true
    })
    .when("/winner", {
      templateUrl: 'winner/winner.html',
      controller: 'winnerController',
      authenticate: true
    })
    .when("/signin", {
      templateUrl: 'auth/signin.html',
      conroller: 'authController'
    })
    .when("/trainer", {
      templateUrl: 'trainer/trainer.html',
      controller: 'trainerController',
      authenticate: true
    })  
    .when("/resumelobby", {
      templateUrl: 'resumeLobby/resumeLobby.html',
      controller: 'resumeLobbyController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/home'
    });
})
.run(function ($rootScope, $location, authFactory) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.$$route && next.$$route.authenticate && !authFactory.isAuth()) {
      $location.path('/signin');
    }
  });
});
