
angular.module('pokemon.auth', [])
.controller('authController', function ($scope, authFactory, $location) {

  if (authFactory.isAuth()){
    $location.path('/home');
  }

  $scope.user = {};

  $scope.phase = 'start';

  $scope.message = '';

  $scope.sendCode = () => {
    authFactory.sendCode( $scope.user.email )
    .then( r => {
      // console.log( 'response', r)
      if ( r.result ) {
        $scope.phase = 'email';
        $scope.message = r.message;
      }
      else {
        $scope.message = r.message;
      }
    })
    .catch( e => {
      // console.error( e );
      $scope.phase = 'error';
      $scope.message = e.message;
    })
  }

  $scope.verifyCode = () => {
    authFactory.verifyCode( $scope.user.email, $scope.user.code )
    .then( r => {
      // console.log( 'response', r);
      if ( r.result ) {
        $scope.phase = 'start';
        $scope.message = r.message;
        $location.path('/home');
      }
      else {
        $scope.message = r.message;
      }
    })
    .catch( e => {
      // console.error( e );
      $scope.phase = 'error';
      $scope.message = e.message;
    })
  }


});