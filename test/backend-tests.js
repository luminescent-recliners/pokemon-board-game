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
// router.get('/api/games/lobbyinit', gameController.lobbyInit);
// router.get('/api/games/gameturn', gameController.findTurn);
// router.get('/api/games/playerOptions', gameController.getPlayerOptions);
// router.get('/api/games/availablePokemon', gameController.getAvailablePokemon);


describe('Server Integration Tests', function() {

  // Server POST Request Tests

  it('should add a SINGLE game on /api/games/addGame POST', function(done) {
    chai.request(server)
      .post('/api/games/addGame')
      .send({})
      .end(function(err, res){
    	// console.log(res.body)
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        // res.body.should.have.property('gameId');
        // res.body.should.have.property('gameName');
        done();
      });
  });  	

  // Server GET Request Tests	
  it('should list ALL games on /api/games/getGames GET', function(done) {
    chai.request(server)
      .get('/api/games/getGames')
      .end(function(err, res) {
      	// console.log('res.body is: ', res.body)
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[res.body.length-1].should.have.property('gameId');
        res.body[res.body.length-1].should.have.property('gameName');
        done();
      });
  });

  it('should list ALL users in a game on /api/games/lobbyinit GET', function(done) {
    var newGame = new game({
      gameId: 3,
      name: "test",
      gameCreator: {
      	facebookId: "test123", 
      	playerName: "Pleasework Now"
      }
    });
    newGame.save(function(err, data) {
      chai.request(server)
        .get('/api/games/lobbyinit')
        .query({gameId:3})
        .end(function(err, res) {
        	console.log(err, data.id)
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          // res.body.should.have.property('gameId');
          // res.body.should.have.property('name');
          // res.body.should.have.property('gameCreator');
          done();
        });
    });
  });

  it('should list game turns on /api/games/gameturn GET', function(done) {
  	var newGame = new game({
  	  gameId: 3,
  	  name: "test",
  	  gameCreator: {
  	  	facebookId: "test123", 
  	  	playerName: "Pleasework Now"
  	  }
  	});
  	newGame.save(function(err, data) {
  	  chai.request(server)
  	    .get('/api/games/gameturn')
  	    .query({gameId:3})
  	    .end(function(err, res) {
  	    	console.log(err, data.id)
  	      res.should.have.status(200);
  	      res.should.be.json;
  	      res.body.should.be.a('object');
  	      // res.body.should.have.property('gameId');
  	      // res.body.should.have.property('name');
  	      // res.body.should.have.property('gameCreator');
  	      done();
  	    });
  	});
  });

  // it('should list player options on /api/games/playerOptions GET', function(done) {
  //   chai.request(server)
  //     .get('/api/games/playerOptions')
  //     .end(function(err, res) {
  //     	// console.log('res.body is: ', res.body)
  //       res.should.have.status(200);
  //       res.should.be.json;
  //       // expect(Array.isArray(res.body)).to.equal(true);
  //       // expect(res.body).to.be.a('array');
  //       done();
  //     });
  // });

  // it('should list available Pokemon on /api/games/availablePokemon GET', function(done) {
  //   chai.request(server)
  //     .get('/api/games/availablePokemon')
  //     .end(function(err, res) {
  //     	// console.log('res.body is: ', res.body)
  //       res.should.have.status(200);
  //       res.should.be.json;
  //       // expect(Array.isArray(res.body)).to.equal(true);
  //       // expect(res.body).to.be.a('array');
  //       done();
  //     });
  // });

  // it('should update a User on /api/games/user PUT', function(done) {
  //   chai.request(server)
  //     .get('/api/games/user')
  //     .end(function(err, res){
  //       chai.request(server)
  //         .put('/api/games/user')
  //         .send({'': 'TEST FACEBOOK ID'})
  //         .end(function(error, response){
  //           response.should.have.status(200);
  //           response.should.be.json;
  //           response.body.should.be.a('object');
  //           response.body.UPDATED.should.be.a('object');
  //           response.body.UPDATED.should.have.property('user');
  //           response.body.UPDATED.should.have.property('_id');
  //           done();
  //       });
  //     });
  // }); 

  it('should update a User on /api/games/updateturn PUT', function(done) {
    chai.request(server)
      .get('/api/games/updateturn')
      .end(function(err, res){
      	// console.log("PUT REQUEST", res.body)

        chai.request(server)
          .put('/api/games/updateturn' + res.body[res.body.length-1].gameId)
          .send({})
          .end(function(error, response){
          	// console.log("PUT REQUEST", response.body)
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            // response.body.UPDATED.should.be.a('object');
            // response.body.UPDATED.should.have.property('user');
            // response.body.UPDATED.should.have.property('_id');
            done();
        });
      });
  }); 



  // router.put('/api/games/addPokemon', gameController.playerInit);
// router.put('/api/games/user/movePlayer', gameController.movePlayer);
// router.put('/api/games/user/catchPokemon', gameController.catchPokemon);
// router.put('/api/games/updateturn', gameController.updateTurn);
});





