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
    } else if (spot.users.length) {
      spot.description = "Move " + roll + " " + direction + " and say hi to trainer";
    } else if (spot.typeOfSpot === 'pokemon') {
      spot.description = "Move " + roll + " " + direction + " and catch a " + spot.colorOfSpot + " Pokemon";
    } else if (spot.typeOfSpot === 'event') {
      spot.description = "Move " + roll + " " + direction + " and grab an event card";
    }
    return spot;
  },

  findUser: function(game, userId) {
    for (var i = 0; i < game.users.length; i++) {
      if (game.users[i].facebookId === userId) {
        return game.users[i];
      }
    }
  }


};
