var mongoose = require('mongoose');

var spriteSchema = mongoose.Schema({
  name: String,
  spriteId: Number,
  type: String,
  description: String,
  imageURL: String
});

var sprite = mongoose.model('sprite', spriteSchema);

module.exports = sprite;