
angular.module('pokemon.auth', [])
.controller('authController', function ($scope, authFactory, $location) {
  if (authFactory.isAuth()){
    $location.path('/home');
  }
});