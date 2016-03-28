|  URL | HTTP Verb | POST Body | Controller Function | Result |
|:----:|:---------:|:---------:|:-------------------:|-------:|
| /api/games/addGame | POST | gameController.addGame | |
| /api/games/addPokemon | PUT | gameController.playerInit | |
| /api/games/user/movePlayer | PUT | gameController.movePlayer | |
| /api/games/user | PUT | gameController.addUser | |
| /api/games/user/catchPokemon | PUT | gameController.catchPokemon | |
| /api/games/updateturn | PUT | gameController.updateTurn | |
| /api/games/currentPage | PUT | gameController.updateCurrentPage | |
| /api/games/currentPage | GET | gameController.getCurrentPage | |
| /api/games/gameturn | GET | gameController.findTurn | |
| /api/games/playerOptions | GET | gameController.getPlayerOptions | |
| /api/games/availablePokemon | GET | gameController.getAvailablePokemon | |
| /api/games/getGames | GET | gameController.getGames | |
| /api/games/lobbyinit | GET | gameController.lobbyInit | |
| /api/games/remainingStarterPokemon | GET | gameController.getRemainingStarterPokemon | |
| /api/games/boardInit | GET | gameController.boardInit | |
| /api/games/remainingSprites | GET | gameController.getAvailableSprites | |
| /api/games/getusers | GET | gameController.getUsers | |
| /signin/facebook | GET | passport.authenticate('facebook') | |
| /signin/facebook/callback | GET | redirect to /#/home | |


