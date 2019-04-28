const router = require('express').Router();

const gymLeader = require('./gymLeader/gymLeaderController.js');
const gameController = require('./game/gameController.js');
const userController = require('./users/userController.js');

// temp event and city logic
const tempEventsController = require('./tempEvents/tempEventsController.js');
const tempCityController = require('./tempCity/tempCityController.js');


router.post('/api/game', gameController.addGame);

router.put('/api/games/addPokemon', gameController.playerInit);
router.put('/api/games/user/movePlayer', gameController.movePlayer);
router.put('/api/games/user', gameController.addUser);
router.put('/api/games/user/catchPokemon', gameController.catchPokemon);
router.put('/api/games/updateturn', gameController.updateTurn);
router.put('/api/games/currentPage', gameController.updateCurrentPage);
router.put('/api/games/requestlobbyentry', gameController.requestLobbyEntry);

router.get('/api/games/currentPage', gameController.getCurrentPage);
router.get('/api/games/gameturn', gameController.findTurn);
router.get('/api/games/playerOptions', gameController.getPlayerOptions);
router.get('/api/games/availablePokemon', gameController.getAvailablePokemon);
router.get('/api/games/getGames', gameController.getGames);
router.get('/api/games/lobbyinit', gameController.lobbyInit);
router.get('/api/games/resumegamelobbyinit', gameController.resumeGameLobbyInit);
router.get('/api/games/remainingStarterPokemon', gameController.getRemainingStarterPokemon);
router.get('/api/games/boardInit', gameController.boardInit);
router.get('/api/games/remainingSprites', gameController.getAvailableSprites);
router.get('/api/games/getusers', gameController.getUsers);
router.get('/api/games/trainerInit', gameController.trainerInit);

// for temp city and events logic
router.get('/api/tempEvents/getURL', tempEventsController.getRandomURL);
router.get('/api/tempCity/getURL', tempCityController.getRandomURL);


router.post( '/api/login', userController.sendVerificationCode );
router.post( '/api/login/verify', userController.verifyCode );

router.get( '/api/user', userController.loggedInUser );

/* this is the arrangement I want to move towards
router.get( '/api/game/:id/thing', ( req, res, next ) => {
  console.log( '\n\ngot to my cool api endpoint' );
  console.log( 'req.params', req.params );
  console.log( 'req.query', req.query );
  console.log();
  res.send({ message: 'yay', params: req.params, query: req.query });
})
*/



module.exports = router;