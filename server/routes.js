var router = require('express').Router();
var gymLeader = require('./gymLeader/gymLeaderController.js');
var gameController = require('./game/gameController.js');


router.put('/api/games/addPokemon', gameController.addPokemon);
router.post('/api/games/addGame', gameController.addGame);
router.get('/api/games/getGames', gameController.getGames);


router.get('/api/games/playerOptions', gameController.getPlayerOptions);






// a quick add to play with board object
router.get('/api/games/getBoard', gameController.getBoard);

module.exports = router;