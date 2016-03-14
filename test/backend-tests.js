var chai = require('chai');
var sinonChai = require('sinon-chai');
var mongoose = require('mongoose');
var Game = require('../server/game/gameModel.js');
var GameController = require('../server/game/gameController.js');

var dbURI = 'mongodb://localhost/testDB';

global.expect = chai.expect;
global.sinon = require('sinon');
chai.use(sinonChai);

describe('It should be equal to one', function () {
  it('1 should equal 1', function () {
    expect(1).to.equal(1);
  });
});

describe('Game Controller', function () {
  before(function (done) {
    if(mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });
});