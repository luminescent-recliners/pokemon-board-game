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
| /api/games/resumegamelobbyinit | GET | gameController.resumeGameLobbyInit |
| /api/games/trainerInit | GET | gameController.trainerInit |
| /signin/facebook | GET | passport.authenticate('facebook') | 
| /signin/facebook/callback | GET | redirect to /#/home | 


1. __/api/games/addGame__  POST

 Controller: gameController.addGame

 Request Body: { gameName: string, facebookId: string, playerName: string }

 Description: Creates a new game with game name, game Id, gameCreator object and initial start data.


1. __/api/games/addPokemon__  PUT

 Controller: gameController.playerInit

 Request Body: { gameId: number, userId: string, pokemon: object, sprite: object}

 Description: Adds selected starter pokemon object to user's party, sets the users selected sprite url, removes the pokemons ID  and sprites ID from their respective available arrays, increments game counter and sets the next turn.


1. __/api/games/user/movePlayer__  PUT

 Controller: gameController.movePlayer

 Request Body: {user: object, currentPosition: number, nextPosition: number, gameId: number }

 Description: Removes user from the current board spot and adds user to the new position. Updates the new user position in the database.


1. __/api/games/user__  PUT

 Controller: gameController.addUser

 Request Body: { gameId: number, users: array }

 Description:  This function is called at the beginning of a game.  Takes all users in array and adds them to the users array in the game initializing all player values.


1. __/api/games/user/catchPokemon__  PUT

 Controller: gameController.catchPokemon

 Request Body: { gameId: number, userId: number, pokemonColor: string, pokemon: object, roll: number }

 Description: This function is called when a player tires to catch a pokemon.  It checks to see if players dice roll will capture poekmon.  If it does the pokemon is removed from the board spot and then added to players party.  If the the pokemon gets away the visibility of the pokemon is set to true.


1. __/api/games/updateturn__  PUT

 Controller: gameController.updateTurn

 Request Body: { gameId: number, currentPage: string }

 Description: This function increments the gameCounter, sets the currentPage, and sets the gameTurn.  Returns the gameTurn.


1. __/api/games/currentPage__  PUT

 Controller: gameController.updateCurrentPage

 Request Body: { gameId: number, currentPage: string }

 Description:  Sets the currentPage field in the game with gameId


1. __/api/games/currentPage__  GET

 Controller: gameController.getCurrentPage

 Request Params: { gameId: number }

 Description:  Returns the currentPage from game with gameId.


1. __/api/games/gameturn__  GET

 Controller: gameController.findTurn

 Request Params: { gameId: number }

 Description:  Returns the user object who's turn it is to play from game with gameId.


1. __/api/games/playerOptions__  GET

 Controller: gameController.getPlayerOptions

 Request Params:

 Description:


1. __/api/games/availablePokemon__  GET

 Controller: gameController.getAvailablePokemon

 Request Params:

 Description:


1. __/api/games/getGames__  GET

 Controller: gameController.getGames

 Request Params:

 Description:


1. __/api/games/lobbyinit__  GET

 Controller: gameController.lobbyInit

 Request Params:

 Description:


1. __/api/games/remainingStarterPokemon__  GET

 Controller: gameController.getRemainingStarterPokemon

 Request Params:

 Description:


1. __/api/games/boardInit__  GET

 Controller: gameController.boardInit

 Request Params:

 Description:


1. __/api/games/remainingSprites__  GET

 Controller: gameController.getAvailableSprites

 Request Params:

 Description:


1. __/api/games/getusers__  GET

 Controller: gameController.getUsers

 Request Params:

 Description:

1. __/api/games/trainerInit__  GET 

  Controller: gameController.trainerInit 

  Request Params:

  Description:


1. __/api/games/resumegamelobbyinit__  GET 

 Controller:  gameController.resumeGameLobbyInit

 Request Params:

 Description:
 

1. __/signin/facebook | GET |__  ssport

 Controller: thenticate('facebook')

 Request Params:

 Description:


1. __/signin/facebook/callback |__  T

 Controller: redirect to /#/home

 Request Params:

 Description:

