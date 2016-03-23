var app = angular.module('pokemon.board',[]);

app.controller('boardController', function($scope, gameDashboardFactory, boardFactory, userFactory, $window, $location, pokemonSocket, gameFactory) {
  $scope.hello = 'hello testing testing';
  $scope.facebookId = $window.localStorage.getItem('pokemon.facebookId');
  $scope.gameId = $window.localStorage.getItem('pokemon.gameId');
  $scope.playerName = $window.localStorage.getItem('pokemon.playerName');
  $scope.playerOptions = [[],[]];
  $scope.userPosition;

  $scope.roll;
  $scope.rollDisplay = false;

  $scope.actionDisplay = false;
  $scope.actionDescription = '';
  var action;

  $scope.counter = 0;
  $scope.rollDice = function() {
    var arr = [1,2,3,4,5,6];
    // $scope.roll = Math.ceil(Math.random() * 6);
    $scope.roll = arr[$scope.counter % 6];
    $scope.counter ++;

    pokemonSocket.emit('player rolled dice to move', {gameId: $scope.gameId, roll: $scope.roll});
    gameDashboardFactory.getPlayerOptions($scope.roll, $scope.userPosition, $scope.gameId, $scope.facebookId)
      .then(function(options){
        $scope.playerOptions[0] = options.forwardOptions;
        $scope.playerOptions[1] = options.backwardOptions;
      });
  };

  pokemonSocket.on('send player roll to move', function(roll) {
    $scope.roll = roll;
    $scope.rollDisplay = true;
  });

  var resetOptions = function () {
    $scope.actionDisplay = true;
    $scope.playerOptions = [[], []]; 
  };

  var checkAction = function(typeOfAction) {
    switch (typeOfAction) {
      case 'pokemon':
        action = 'pokemon';
        $scope.actionDescription = $scope.currentTurnPlayerName + ' is about to catch a wild Pokemon!';
        resetOptions();
        break;
      case 'city':
        action = 'city';
        $scope.actionDescription = $scope.currentTurnPlayerName + ' has arrived in a city. Rest up!';
        resetOptions();
        break;
      case 'event':
        action = 'event';
        $scope.actionDescription = $scope.currentTurnPlayerName + ' landed on an event card!';
        resetOptions();
        break;
    }
  };

  pokemonSocket.on('send player to move', function(data) {
    $scope.init();
  });

  $scope.movePlayer = function(newSpot, userId) {
    var userObject = {
      facebookId: $scope.facebookId,
      playerName: $scope.playerName
    };

    userFactory.movePlayer(newSpot.id, userObject, $scope.userPosition, $scope.gameId)
      .then(function(position){
        pokemonSocket.emit('a player moved', {gameId: $scope.gameId, allUsers: $scope.allPlayers});
        $scope.userPosition = position.id;
        $scope.playerPosition = $scope.userPosition - 1;
        checkAction(newSpot.typeOfSpot);

        if (newSpot.typeOfSpot === 'pokemon') {
          $scope.actionDescription = $scope.currentTurnPlayerName + ' is about to catch a wild Pokemon!';
          $scope.actionDisplay = true;
          $scope.playerOptions = [[], []];

          gameFactory.getAvailablePokemon($scope.gameId, $scope.facebookId);
        }

        pokemonSocket.emit('update action description',
        {
          gameId: $scope.gameId,
          description: $scope.actionDescription
        });
      });
  };

  pokemonSocket.on('send action description', function(description) {
    $scope.actionDescription = description;
    $scope.actionDisplay = true;
  });

  $scope.redirect = function(action) {
    switch (action) {
      case 'pokemon':
        $location.path('/capture');
        break;
      case 'city':
        $location.path('/city');
        break;
      case 'event':
        $location.path('/event');
        break;
    }
  };

  $scope.redirectAllUsers = function() {
    pokemonSocket.emit('redirect users to action', {gameId: $scope.gameId, action: action});
    $scope.redirect(action);
  };


  pokemonSocket.on('send redirect path to users', function(action){
    $scope.redirect(action);
  });

  $scope.init = function() {
    boardFactory.boardInit($scope.gameId, $scope.facebookId)
      .then(function(data){
        // get board data from database
        // preprocessed to be an array 
        // calculate path data and path string
        $scope.boardData = boardFactory.createBoardArray(data.board);
        $scope.pathData = boardFactory.createPath($scope.boardData);
        $scope.pathString = boardFactory.createPathString($scope.pathData);

        $scope.currentTurnPlayerName = data.currentTurn.playerName;
        $scope.currentTurnFacebookId = data.currentTurn.facebookId;
        
        $scope.userPosition = data.user.positionOnBoard;
        $scope.playerPosition = $scope.userPosition - 1;

        $scope.allPlayers = data.allUsers;
      });
  };

  // these should probably be initialized at the same time as board above
  $scope.playerList = []; // what is this used for???

  $scope.init();
});

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from outer templates domain.
    'http://sprites.pokecheck.org/i/**',
    'http://pokeapi.co/media/img/**'
  ]);
});

app.factory('boardFactory', function($http) {

  var createBoardArray = function(board) {
    // this section adds rows and columns onto data from
    // database
    var xRatio = 6; // total length 120
    var yRatio = 12; // total length 60
      var xyVals = [[],[2,3],[4.5,2.5], [5,1.2],[6.3,2.2],[8.2,2.3],[9.5,1.5],[10.5,3.2],[12.3,1],[11.5,4.5],[12,7.3],[9,7.5],
      [8.2,5.2],[6.8,4.3],[4.8,5.1],[2.6,4.7],[1.2,6.8],[1.3,9],[3.8,9],[4,6.8],[6.8,7],[9,8.4],[15.8,8.4],[14.5,7],[14,4.2],
      [15,2.8],[15.6,1],[17.2,2],[19,3],[19.5,1.3],[23,1.4],[23.6,3.6],[21,5],[18.5,5.5],[17,4.4],[16,6],[19,8],[21,7],[23,6.5],
      [23.1,8.5],[22,10.2],[23.3,13],[23.7,15],[21.2,15],[20.8,12.9],[20.5,10],[21.3,8.5],[19,9.3],[17.2,9],[16.6,10.4],
      [16.6,12.5],[19,14],[19,16],[17,15.5],[15,14],[13.7,15.4],[11.8,14.7],[13,12.4],[11,11],[10.2,13.5],[7.9,12.4],[8.5,14.5],
      [7,15.5],[5,14.5],[3.5,16],[1.4,14.1],[1,11],[2.8,13],[5.2,12.9],[4.5,10.8],[6.7,12],[8,10.8],[6,8.6],[11.5,9.5]];

    for(var i = 1; i <= 73; i++) {
      board[i].row = xyVals[i][1] * 3.5;
      board[i].col = (xyVals[i][0] * 3.6) + 10;//* 35.3;
      // if(i <= 18) {
      //   board[i].row = yRatio;
      //   board[i].col = xRatio * i;

      // } else if(i <= 37) {
      //   board[i].row = 2 * yRatio;
      //   board[i].col = (xRatio * 19) - (i % 19) * xRatio;

      // } else if(i <= 56) {
      //   board[i].row = 3 * yRatio;
      //   board[i].col = xRatio * (i % 19);

      // } else {
      //   board[i].row = 4 * yRatio;
      //   board[i].col = (xRatio * 19) - (i % 18) * xRatio;
      // }
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

  //Output Returns data to initialize the board 
  //**********Should Be Renamed Later to Initialize Board View
  //Returns data object with board, current user data, and Current Turn
  var boardInit = function(gameId, userId) {
    return $http({
      method: 'GET',
      url: '/api/games/boardInit',
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
    boardInit: boardInit,
    createPath: createPath,
    createBoardArray: createBoardArray,
    createPathString: createPathString
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
