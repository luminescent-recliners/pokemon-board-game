import * as angular from 'angular';
import 'angular-route';
import 'angular-animate';
import 'angular-audio';
import 'angular-bootstrap';
import 'angular-cookies';
import 'angular-socket-io';

import './services';
import './auth/auth.js';
import './board/board.js';
import './capturePokemon/capturePokemon.js';
import './city/city.js';
import './event/event.js';
import './home/home.js';
import './lobby/lobby.js';
import './resumeLobby/resumeLobby.js';
import './starterPokemon/starterPokemon.js';
import './trainer/trainer.js';
import './winner/winner.js';


angular.module('pokemon', [
  'ngRoute',
  'ngAnimate',
  'ngCookies',
  'ngAudio',

  'btford.socket-io',
  
  'services',
  'pokemon.auth',
  'pokemon.board',
  'pokemon.home',
  'pokemon.starter',
  'pokemon.lobby',
  'pokemon.capture',
  'pokemon.event',
  'pokemon.city',
  'pokemon.winner',
  'pokemon.trainer',
  'pokemon.resumelobby',
])
.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
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
    .when('/winner', {
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
      redirectTo: '/signin'
    });
})
.run(function ($rootScope, $location, authFactory) {

  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if ( next.$$route && next.$$route.authenticate && !authFactory.isAuth('app.run')) {
      $location.path('/signin');
    }
  });
  
});
