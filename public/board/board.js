
angular.module('pokemon.board',[])

.controller('boardController', function($scope, gameDashboardFactory) {
  $scope.hello = 'hello testing testing';
  $scope.playerOptions = [[1,2,3],[1,2,3,4]];
  $scope.gameId = 1;
  $scope.userId = 1;
  $scope.userPosition = 6;
  $scope.roll;

  $scope.rollDice = function() {
    $scope.roll = Math.ceil(Math.random() * 6);
    gameDashboardFactory.getPlayerOptions($scope.roll, $scope.userPosition, $scope.gameId, $scope.userId)
      .then(function(options){
        $scope.playerOptions[0] = options.forwardOptions;
        $scope.playerOptions[1] = options.backwardOptions;
      });


  };

})

.factory('boardFactory', function($dcoument, $q, $rootScope) {

})

.directive('boardDirective',function() {
  // $scope.watch



});

// .factory('d3Service', ['$document', '$q', '$rootScope',
//     function($document, $q, $rootScope) {
//       var d = $q.defer();
//       function onScriptLoad() {
//         // Load client in the browser
//         $rootScope.$apply(function() { d.resolve(window.d3); });
//       }
//       // Create a script tag with d3 as the source
//       // and call our onScriptLoad callback when it
//       // has been loaded
//       var scriptTag = $document[0].createElement('script');
//       scriptTag.type = 'text/javascript'; 
//       scriptTag.async = true;
//       scriptTag.src = 'http://d3js.org/d3.v3.min.js';
//       scriptTag.onreadystatechange = function () {
//         if (this.readyState == 'complete') onScriptLoad();
//       }
//       scriptTag.onload = onScriptLoad;
 
//       var s = $document[0].getElementsByTagName('body')[0];
//       s.appendChild(scriptTag);
 
//       return {
//         d3: function() { return d.promise; }
//       };
// }]);