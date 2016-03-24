var Sprites = require('./spriteModel.js');
var Q = require('q');

var findSprite = Q.nbind(Sprites.findOne, Sprites);
var findSprites = Q.nbind(Sprites.find, Sprites);

module.exports = {
  findSprite: findSprite,
  findSprites: findSprites
};