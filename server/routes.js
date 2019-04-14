const router = require('express').Router();

const gymLeader = require('./gymLeader/gymLeaderController.js');
const gameController = require('./game/gameController.js');
const userController = require('./users/userController.js');

// temp event and city logic
const tempEventsController = require('./tempEvents/tempEventsController.js');
const tempCityController = require('./tempCity/tempCityController.js');


router.post('/api/games/addGame', gameController.addGame);

router.put('/api/games/addPokemon', gameController.playerInit);
router.put('/api/games/user/movePlayer', gameController.movePlayer);
router.put('/api/games/user', gameController.addUser);
router.put('/api/games/user/catchPokemon', gameController.catchPokemon);
router.put('/api/games/updateturn', gameController.updateTurn);
router.put('/api/games/currentPage', gameController.updateCurrentPage);
router.put('/api/games/requestlobbyentry', gameController.requestLobbyEntry);
router.put('/api/games/updateplayercounter', gameController.updatePlayerCounter);

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


router.post( '/login', userController.sendVerificationCode );
router.post( '/login/verify', userController.verifyCode );

router.get( '/user', userController.loggedInUser );




module.exports = router;