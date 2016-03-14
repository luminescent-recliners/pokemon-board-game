var router = require('express').Router();
var gymLeader = require('./gymLeader/gymLeaderController.js');
var gameController = require('./game/gameController.js');

router.put('/api/games/addPokemon', gameController.addPokemon);

router.get('/api/games/playerOptions', gameController.getPlayerOptions);

module.exports = router;