|  URL | HTTP Verb |  Controller Function |
|:----:|:---------:|:--------------------:|
| /api/games/addGame | POST | gameController.addGame | 
| /api/games/addPokemon | PUT | gameController.playerInit | 
| /api/games/user/movePlayer | PUT | gameController.movePlayer | 
| /api/games/user | PUT | gameController.addUser | 
| /api/games/user/catchPokemon | PUT | gameController.catchPokemon | 
| /api/games/updateturn | PUT | gameController.updateTurn | 
| /api/games/currentPage | PUT | gameController.updateCurrentPage | 
| /api/games/currentPage | GET | gameController.getCurrentPage | 
| /api/games/gameturn | GET | gameController.findTurn | 
| /api/games/playerOptions | GET | gameController.getPlayerOptions | 
| /api/games/availablePokemon | GET | gameController.getAvailablePokemon | 
| /api/games/getGames | GET | gameController.getGames | 
| /api/games/lobbyinit | GET | gameController.lobbyInit | 
| /api/games/remainingStarterPokemon | GET | gameController.getRemainingStarterPokemon | 
| /api/games/boardInit | GET | gameController.boardInit | 
| /api/games/remainingSprites | GET | gameController.getAvailableSprites | 
| /api/games/getusers | GET | gameController.getUsers | 
| /signin/facebook | GET | passport.authenticate('facebook') | 
| /signin/facebook/callback | GET | redirect to /#/home | 


1. __/api/games/addGame__  POST

 Controller: gameController.addGame

 Request Body: { gameName: string, facebookId: string, playerName: string }

 Description: creates a new game with game name, game Id, gameCreator object and initial static data


1. __/api/games/addPokemon__  PUT

 Controller: gameController.playerInit

 Request Body:

 Description:


1. __/api/games/user/movePlayer__  PUT

 Controller: gameController.movePlayer

 Request Body:

 Description:


1. __/api/games/user__  PUT

 Controller: gameController.addUser

 Request Body:

 Description:


1. __/api/games/user/catchPokemon__  PUT

 Controller: gameController.catchPokemon

 Request Body:

 Description:


1. __/api/games/updateturn__  PUT

 Controller: gameController.updateTurn

 Request Body:

 Description:


1. __/api/games/currentPage__  PUT

 Controller: gameController.updateCurrentPage

 Request Body:

 Description:


1. __/api/games/currentPage__  GET

 Controller: gameController.getCurrentPage

 Request Body:

 Description:


1. __/api/games/gameturn__  GET

 Controller: gameController.findTurn

 Request Body:

 Description:


1. __/api/games/playerOptions__  GET

 Controller: gameController.getPlayerOptions

 Request Body:

 Description:


1. __/api/games/availablePokemon__  GET

 Controller: gameController.getAvailablePokemon

 Request Body:

 Description:


1. __/api/games/getGames__  GET

 Controller: gameController.getGames

 Request Body:

 Description:


1. __/api/games/lobbyinit__  GET

 Controller: gameController.lobbyInit

 Request Body:

 Description:


1. __/api/games/remainingStarterPokemon__  GET

 Controller: gameController.getRemainingStarterPokemon

 Request Body:

 Description:


1. __/api/games/boardInit__  GET

 Controller: gameController.boardInit

 Request Body:

 Description:


1. __/api/games/remainingSprites__  GET

 Controller: gameController.getAvailableSprites

 Request Body:

 Description:


1. __/api/games/getusers__  GET

 Controller: gameController.getUsers

 Request Body:

 Description:


1. __/signin/facebook | GET |__  ssport

 Controller: thenticate('facebook')

 Request Body:

 Description:


1. __/signin/facebook/callback |__  T

 Controller: redirect to /#/home

 Request Body:

 Description:

