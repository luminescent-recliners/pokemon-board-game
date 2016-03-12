var app = angular.module('pokemon.board',[]);

app.controller('boardController', function($scope, gameDashboardFactory) {
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

  $scope.testPass = function(arg) {
    console.log('This is the gameboard spot object', arg);
  };

  $scope.init = function() {
    $scope.boardData = boardFactory.getBoard();
    // .then(function (resp) {
    //   $scope.boardData = resp;
    // }).catch(function(err) {
    //   console.error(err);
    // });
  };
  
 $scope.doublea =[[10,20,30,60,80,20,50],[30,20,30,60,80,20,50],[50,20,30,60,80,20,50]];
 $scope.boardData = gameBoard;
  // $scope.boardData = [10,20,30,60,80,20,50];
  // $scope.test = {1:1,2:2,3:3,4:4};
  $scope.input;
  $scope.inputValue = function($event) {
    if($event.which === 13) {
      $scope.boardData[3] = $scope.input;
    console.log('Iget here', $scope.input, $scope.boardData);
    }
  };

  // $scope.init();

})

.factory('boardFactory', function($http) {

  // assume that this function retuns only the
  // game board
  var getBoard = function() {
    return fakeboard;
      // return $http({
    //   method: 'GET',
    //   url: '/games/' + gameId
    // })
    // .then(function(resp) {
    //   return resp.data;
    // });

  };

  return {
    getBoard: getBoard
  };
})

.directive('drawBoard',function() {
  var drawd3 = function(scope, element, attrs){
    var chart = d3.select(element[0]);
      chart.selectAll('*').remove();
      chart.append("div").attr("class", "chart")
       .selectAll('div')
       .data(scope.data).enter().append("div")
       .transition().ease("elastic")
       .style("width", function(d) { return d + "%"; })
       .text(function(d) { return d + "%"; });
  };

  var directiveObject = {
    restrict: 'E',
    replace: false,
    scope: {data: '=boardData'},
    link: function(scope, element, attrs) {
      drawd3(scope, element, attrs);
      scope.$watch('data', function(newValue, oldValue) {
        if(newValue) {
          drawd3(scope, element, attrs);
          console.log("A data change", attrs);
        }
      },true);
    }
  };
  return directiveObject;
});


// this derective is to just draw a singe node on the board
// given the single node object
app.directive('drawNode', function() {

  // this draws the node on the canvas
  var drawNode = function(scope, element, attrs) {
    // decide on dimensions of svg canvas and figure out
    // multipliers
    // have to figure out how to get his info from the
    // document itself to allow resizing
    var width = 1200;
    var height= 800;
    var wfactor = width/20;
    var hfactor = height/4.3;
    // select node on html where we will be adding board 
    // using d3
    var board = d3.select(element[0]);

    board.selectAll('.dontexistyet')
      .append('circle')
      .data(scope.data)
      .enter()
      .append('circle')
      .transition().ease('elastic')
      .attr('r', 15)
      .attr('fill', 'pink')
      .attr('cx', function(d){console.log(d);return 50 + d.row * wfactor;})
      .attr('cy', function(d){return 50 + d.col * hfactor;});


  };

  var directiveObject = {
    restrict: 'E',
    replace: false,
    scope: {data: '=nodeData'},
    link: function(scope, element, attrs) {
      drawNode(scope, element, attrs);
      scope.$watch('data', function(newValue, oldValue) {
        if(newValue) {
          drawNode(scope, element, attrs);
          console.log("A data change", attrs);
        }
      },true);
    }
  };
  return directiveObject;

});
