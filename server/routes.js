var router = require('express').Router();
var gymLeader = require('./gymLeader/gymLeaderController.js');
var gameController = require('./game/gameController.js');


router.post('/api/games/addGame', gameController.addGame);

router.put('/api/games/addPokemon', gameController.playerInit);
router.put('/api/games/user/movePlayer', gameController.movePlayer);
router.put('/api/games/user', gameController.addUser);
router.put('/api/games/user/catchPokemon', gameController.catchPokemon);
router.put('/api/games/updateturn', gameController.updateTurn);

router.get('/api/games/gameturn', gameController.findTurn);
router.get('/api/games/playerOptions', gameController.getPlayerOptions);
router.get('/api/games/availablePokemon', gameController.getAvailablePokemon);
router.get('/api/games/getGames', gameController.getGames);
router.get('/api/games/lobbyinit', gameController.lobbyInit);
router.get('/api/games/remainingStarterPokemon', gameController.getRemainingStarterPokemon);
router.get('/api/games/boardInit', gameController.boardInit);





// a quick add to play with board object

module.exports = router;