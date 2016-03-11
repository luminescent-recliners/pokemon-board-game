var router = require('express').Router();
var boardController = require('./board/boardController');

router.get('/pokemon/:pokemonID', pokemonController.get);
router.get('/gymleader/:gymleaderID', gymLeaderController.get);

module.exports = router;