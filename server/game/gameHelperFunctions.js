var gameWinData = require('../data/gameWinData.js');

module.exports = {
  //Input: Takes a spot from the board and array to store the spots
  //Output: Stores board spots into an array if they pass the 2 conditions
  checkOption: function(spot, array, roll, direction) {
    if ((spot.users.length > 0 && spot.typeOfSpot !== 'city') || spot.typeOfSpot === 'city') {
      array.push(this.addOptionDescription(spot, roll, direction));
    }
  },

  addOptionDescription: function(spot, roll, direction) {
    if (spot.typeOfSpot === 'city') {
      spot.description = "Move " + roll + " " + direction + " and land on a city";
      spot.action = 'city';
    } else if (spot.users.length) {
      spot.description = "Move " + roll + " " + direction + " and say hi to trainer";
      spot.action = 'trainer';
    } else if (spot.typeOfSpot === 'pokemon') {
      spot.description = "Move " + roll + " " + direction + " and catch a " + spot.colorOfSpot + " Pokemon";
      spot.action = 'pokemon';
    } else if (spot.typeOfSpot === 'event') {
      spot.description = "Move " + roll + " " + direction + " and grab an event card";
      spot.action = 'event';
    }
    return spot;
  },

  findUser: function(game, userId) {
    for (var i = 0; i < game.users.length; i++) {
      if (game.users[i].facebookId === userId) {
        return game.users[i];
      }
    }
  },

  checkRoll: function (roll,pokemonColor) {
    var gamematrix = {
      blue: [3,4],
      green: [4,5],
      pink: [3,4,5],
      gold: [6],
      red: [5]
    };
    var rollneeded = gamematrix[ pokemonColor ];
    
    for(var i = 0; i < rollneeded.length; i++) {
      if(rollneeded[i] === roll) {
        return true;
      }
    }
    return false;
  },

  checkWinner: function (pokemonCount) {
    if(pokemonCount.pink >= gameWinData.pink && pokemonCount.green >= gameWinData.green && 
      pokemonCount.blue >= gameWinData.blue && pokemonCount.red >= gameWinData.red) {
      return true;
    } else {
      return false;
    }
  }

};
