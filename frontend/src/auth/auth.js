
angular.module('pokemon.auth', [])
.controller('authController', function ($scope, authFactory, $location) {

  const debug = false;
  
  if ( authFactory.isAuth('authController') ) {
    $location.path('/home');
    return;
  }

  $scope.user = {};

  $scope.phase = 'start';

  debug && console.log( 'phase', $scope.phase )

  $scope.message = '';

  $scope.sendCode = () => {
    authFactory.sendCode( $scope.user.email )
    .then( r => {
      debug && console.log( 'authController sendCode', r)
      if ( r.result ) {
        $scope.phase = 'email';
        $scope.message = r.message;
      }
      else {
        $scope.message = r.message;
      }
    })
    .catch( e => {
      debug && console.error( e );
      $scope.phase = 'error';
      $scope.message = e.message;
    })
  }

  $scope.verifyCode = () => {
    authFactory.verifyCode( $scope.user.email, $scope.user.code )
    .then( r => {
      debug && console.log( 'authController verifyCode', r);
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
      debug && console.error( e );
      $scope.phase = 'error';
      $scope.message = e.message;
    })
  }


});