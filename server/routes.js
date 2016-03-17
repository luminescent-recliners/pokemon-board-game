var router = require('express').Router();
var gymLeader = require('./gymLeader/gymLeaderController.js');
var gameController = require('./game/gameController.js');


router.put('/api/games/addPokemon', gameController.addPokemon);
router.put('/api/games/user/movePlayer', gameController.movePlayer);
router.post('/api/games/addGame', gameController.addGame);
router.get('/api/games/getGames', gameController.getGames);
router.get('/api/games/lobbyinit', gameController.lobbyInit);
router.put('/api/games/user', gameController.addUser);
router.get('/api/games/gameturn', gameController.findTurn);
router.get('/api/games/playerOptions', gameController.getPlayerOptions);
router.put('/api/games/user/catchPokemon', gameController.catchPokemon);
router.get('/api/games/availablePokemon', gameController.getAvailablePokemon);
router.get('/api/games/getAvailablePokemon', gameController.getAvailablePokemon);
router.put('/api/games/updateturn', gameController.updateTurn);






// a quick add to play with board object
router.get('/api/games/boardInit', gameController.boardInit);

module.exports = router;