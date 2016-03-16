var app = angular.module('pokemon.board',[]);

app.controller('boardController', function($scope, gameDashboardFactory, boardFactory) {
  $scope.hello = 'hello testing testing';
  $scope.userId = 'Facebook123';
  $scope.playerOptions = [[],[]];
  $scope.gameId = 1;
  $scope.userPosition;
  $scope.roll;

  $scope.counter = 0;
  $scope.rollDice = function() {
    var arr = [1,2,3,4,5,6];

    // $scope.roll = Math.ceil(Math.random() * 6);
    $scope.roll = arr[$scope.counter % 6];
    $scope.counter ++;

    console.log($scope.userPosition);
    gameDashboardFactory.getPlayerOptions($scope.roll, $scope.userPosition, $scope.gameId, $scope.userId)
      .then(function(options){
        $scope.playerOptions[0] = options.forwardOptions;
        $scope.playerOptions[1] = options.backwardOptions;
      });
  };

  $scope.movePlayer = function(newSpot, userId) {
    $scope.userPosition = newSpot.id;
    $scope.playerPosition = $scope.userPosition - 1;
  };

  $scope.init = function() {
    boardFactory.getBoard($scope.gameId, $scope.userId)
      .then(function(data){
        $scope.boardData = boardFactory.createBoardArray(data.board);
        // get board data from database
        // preprocessed to be an array 
        // calculate path data and path string
        $scope.pathData = boardFactory.createPath($scope.boardData);
        $scope.pathString = boardFactory.createPathString($scope.pathData);

        $scope.userPosition = data.user.positionOnBoard;
        $scope.playerPosition = $scope.userPosition - 1;
      });
  };

  // these should probably be initialized at the same time as board above
  $scope.playerList = [];
  $scope.turn = 'player name or player index number';
  $scope.playerName = 'get after log in get this for board view?';

  $scope.input ='';
  $scope.inputValue = function($event) {
    if($event.which === 13) {
      $scope.playerPosition = ($scope.input - 1);
      $scope.input = '';
      $scope.userPosition = $scope.playerPosition + 1;
    }
  };

  $scope.init();
});

app.factory('boardFactory', function($http) {

  var createBoardArray = function(board) {
    // this section adds rows and columns onto data from
    // database
    var xRatio = 6; // total length 120
    var yRatio = 12; // total length 60
    for(var i = 1; i <= 73; i++) {
      if(i <= 18) {
        board[i].row = yRatio;
        board[i].col = xRatio * i;

      } else if(i <= 37) {
        board[i].row = 2 * yRatio;
        board[i].col = (xRatio * 19) - (i % 19) * xRatio;

      } else if(i <= 56) {
        board[i].row = 3 * yRatio;
        board[i].col = xRatio * (i % 19);

      } else {
        board[i].row = 4 * yRatio;
        board[i].col = (xRatio * 19) - (i % 18) * xRatio;
      }
    }

    var boardArray = [];
    for(var key in board) {
      boardArray.push(board[key]);
    }
    return boardArray;
  };

  var createPath = function(boardArray) {
    var xscale = 10;
    var yscale = 10;
    var path = boardArray.map(function(item, index) {
      var x = item.col * xscale;
      var y = item.row * yscale;
      return [x, y];
    });
    return path;
  };

  var createPathString = function(coordinates) {
      var coords = coordinates.map(function(xypair){
        return xypair[0] + ',' + xypair[1];
      });
      coords = coords.join('L');
      coords = 'M' + coords;
      return coords;
  };

  // assume that this function retuns only the
  // game board could not get data extracted
  var getBoard = function(gameId, userId) {
    return $http({
      method: 'GET',
      url: '/api/games/getBoard',
      params: {
        gameId: gameId,
        userId: userId
      }
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    getBoard: getBoard,
    createPath: createPath,
    createBoardArray: createBoardArray,
    createPathString: createPathString
  };
});

app.directive('drawSpot', function() {
  return {
    templateNamespace: 'svg',
    restrict: 'E',
    replace: true,
    scope: {data: '=nodeData'},
    template: function() {
        return '<circle ng-attr-cx="{{data.col*10}}" ng-attr-cy="{{data.row*10}}"'+
          ' r=12 fill={{data.colorOfSpot}} data-node={{data}}/>';
    },

    link: function(scope, element1, attrs) {
      
      // both options below show up in the dom tree but does not render the first 
      // with the directive tag instead of the text tag.
      if(scope.data.users.length > 0) {
        // for (var i = 0; i < scope.data.users.length; i++) {
        //   var newTag = angular.element('<write-name data='+scope.data.users[i]+'>'+scope.data.users[i]+'</write-name>');
        //   angular.element(element1[0]).after(newTag);
        // }
        for (var i = 0; i < scope.data.users.length; i++) {
          var x = Number(attrs.cx) + 15;
          var y = Number(attrs.cy) + 15;
          var newTag = angular.element('<text data="'+scope.data.users[i]+
            '" fill="#00BCD4" ng-attr-x="' + x + '"ng-attr-y="' + y +
            '">' + scope.data.users[i]+ '</text>');
          angular.element(element1[0]).after(newTag);
        }
      }

      element1.on('mouseenter', function(event) {
        // do other stuff
        element1.attr('fill', 'orange');
      });

      element1.on('mouseleave', function(event) {
        // do other stuff
        element1.attr('fill', scope.data.colorOfSpot);
      });
    }
  };
});


// right now this one is hard coded cant figure out why it will
// not read from the input data
app.directive('drawPath', function() {
  return {
    templateNamespace: 'svg',
    restrict: 'E',
    replace: true,
    scope: {path1: '=pathString'},
    template: function(){
      // return '<path d="{{path1}}" stroke="#795548" stroke-width=3 fill="none"></path>';
      return '<path d="M60,120L120,120L180,120L240,120L300,120L360,120L420,120L480,120L540,120L600,120L660,120L720,120L780,120L840,120L900,120L960,120L1020,120L1080,120L1140,240L1080,240L1020,240L960,240L900,240L840,240L780,240L720,240L660,240L600,240L540,240L480,240L420,240L360,240L300,240L240,240L180,240L120,240L60,240L0,360L60,360L120,360L180,360L240,360L300,360L360,360L420,360L480,360L540,360L600,360L660,360L720,360L780,360L840,360L900,360L960,360L1020,360L1080,360L960,480L900,480L840,480L780,480L720,480L660,480L600,480L540,480L480,480L420,480L360,480L300,480L240,480L180,480L120,480L1140,480L1080,480" stroke="#795548" stroke-width=3 fill="none"></path>';

    }
  };
});

app.directive('writeName', function() {
  return {
    templateNamespace: 'svg',
    restrict: 'E',
    replace: true,
    scope: {data: '=data'},
    template: '<text ng-attr-x="{{50+data.col*70}}" '+
      'ng-attr-y="{{50+data.col*50}}" fill="#00BCD4">{{data.users}}</text>'
  };
});

app.directive('drawPlayer', function($animate) {
  return {
    templateNamespace: 'svg',
    restrict: 'E',
    replace: true,
    scope: {
      player: '=player',
      position: '=position',
      board: '=board'
    },
    template: function() {
      var x = '{{board[position].col * 10}}';
      var y = '{{board[position].row * 10}}';
      var r = '18';
      var fillOpacity = '.9';
      var fillColor = 'beige';
      var stroke = 'black';
      var strokeWidth = '1';
      return '<circle ng-attr-cx="'+ x +'" ng-attr-cy="'+ y +'"'+
                ' r="'+r+'" fill="'+ fillColor+'" fill-opacity="'+
                fillOpacity +'" stroke="'+ stroke +
                '" stroke-width="'+ strokeWidth +'"/>';
                
    },
    link: function(scope, element1, attrs) {
      element1.on('mouseover', function(event) {
        // do stuff
        console.log('mouse on player');
      });
      element1.on('mouseleave', function(event) {
        // do stuff
        console.log("mouse not on player");
      });
    }
  };
});


