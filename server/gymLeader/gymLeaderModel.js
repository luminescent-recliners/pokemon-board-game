var mongoose = require('mongoose');

var gymLeaderSchema = new mongoose.Schema({
  name: String,
  city: String,
  attackStrength: Number,
  attackBonus: {
    1: Number,
    2: Number,
    3: Number,
    4: Number, 
    5: Number, 
    6: Number
  },
  imageURL: String
});

var gymLeader = mongoose.model('gymLeader', gymLeaderSchema);

module.exports = gymLeader;