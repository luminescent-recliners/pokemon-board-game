// http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.VunkLRIrJo4
var chai = require('chai');
var sinonChai = require('sinon-chai');
var mongoose = require('mongoose');
var game = require('../server/game/gameModel.js');
var gameController = require('../server/game/gameController.js');
var chaiHTTP = require('chai-http')
var server = require('../server/server.js');

var dbURI = 'mongodb://localhost/pokemon';

global.expect = chai.expect;
global.should = chai.should();
global.sinon = require('sinon');

chai.use(sinonChai);
chai.use(chaiHTTP);

// Controller Function Tests
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

// router.post('/api/games/addGame', gameController.addGame);

// router.get('/api/games/getGames', gameController.getGames);
// router.get('/api/games/name', gameController.findName);
// router.get('/api/games/gameturn', gameController.findTurn);
// router.get('/api/games/playerOptions', gameController.getPlayerOptions);

// router.put('/api/games/user', gameController.addUser);
// router.put('/api/games/addPokemon', gameController.addPokemon);


// Server Tests
describe('Server Tests', function() {
  it('should list ALL games on /api/games/getGames GET', function(done) {
    chai.request(server)
      .get('/api/games/getGames')
      .end(function(err, res) {
      	// console.log('res.body is: ', res.body)
        res.should.have.status(200);
        res.should.be.json;
        // expect(Array.isArray(res.body)).to.equal(true);
        // expect(res.body).to.be.a('array');
        done();
      });
  });

  it('should list ALL names on /api/games/name GET', function(done) {
    chai.request(server)
      .get('/api/games/name')
      .end(function(err, res) {
      	// console.log('res.body is: ', res.body)
        res.should.have.status(200);
        res.should.be.json;
        // expect(Array.isArray(res.body)).to.equal(true);
        // expect(res.body).to.be.a('array');
        done();
      });
  });

  it('should list game turns on /api/games/gameturn GET', function(done) {
    chai.request(server)
      .get('/api/games/gameturn')
      .end(function(err, res) {
      	// console.log('res.body is: ', res.body)
        res.should.have.status(200);
        res.should.be.json;
        // expect(Array.isArray(res.body)).to.equal(true);
        // expect(res.body).to.be.a('array');
        done();
      });
  });

  it('should list player options on /api/games/playerOptions GET', function(done) {
    chai.request(server)
      .get('/api/games/getGames')
      .end(function(err, res) {
      	// console.log('res.body is: ', res.body)
        res.should.have.status(200);
        res.should.be.json;
        // expect(Array.isArray(res.body)).to.equal(true);
        // expect(res.body).to.be.a('array');
        done();
      });
  });

  it('should add a SINGLE game on /api/games/addGame POST', function(done) {
    chai.request(server)
      .post('/api/games/addGame')
      .send({})
      .end(function(err, res){
      	// console.log("RES: ", res)
      	// console.log("ERR: ", err)
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        done();
      });
  });  

  it('should update a User on /api/games/user PUT', function(done) {
    chai.request(server)
      .get('/api/games/user')
      .end(function(err, res){
        chai.request(server)
          .put('/api/games/user')
          .send({'playerName': 'TEST FACEBOOK ID'})
          .end(function(error, response){
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.UPDATED.should.be.a('object');
            response.body.UPDATED.should.have.property('user');
            response.body.UPDATED.should.have.property('_id');
            done();
        });
      });
  });  // it('should delete a SINGLE blob on /blob/<id> DELETE');
});





