var mongoose = require('mongoose');

var gymLeaderSchema = new mongoose.Schema({
  gameData: {}
});

var gymLeader = mongoose.model('gymLeader', gymLeaderSchema);

module.exports = gymLeader;