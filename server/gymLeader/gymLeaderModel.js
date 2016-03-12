var mongoose = require('mongoose');

var gymLeaderSchema = new mongoose.Schema({
  name: String,
  city: String,
  attackStrength: Number,
  attackBonus: {},
  imageURL: String
});

var gymLeader = mongoose.model('gymLeader', gymLeaderSchema);

module.exports = gymLeader;