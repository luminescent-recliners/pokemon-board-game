var mongoose = require('mongoose');

var gymLeaderSchema = mongoose.Schema({
  name: String,
  gymLeaderID: Number,
  attackStrength: Number,
  attackBonus: {
    1: Number,
    2: Number
  }
  imageURL: String
});

var gymLeader = mongoose.model('gymLeader', gymLeaderSchema);

module.exports = gymLeader;