|  URL | HTTP Verb |  Controller Function |
|:----:|:---------:|:--------------------:|
| /api/games/addGame | POST | gameController.addGame | 
| /api/games/addPokemon | PUT | gameController.playerInit | 
| /api/games/user/movePlayer | PUT | gameController.movePlayer | 
| /api/games/user | PUT | gameController.addUser | 
| /api/games/user/catchPokemon | PUT | gameController.catchPokemon | 
| /api/games/updateturn | PUT | gameController.updateTurn | 
| /api/games/currentPage | PUT | gameController.updateCurrentPage | 
| /api/games/requestlobbyentry | PUT | gameController.requestLobbyEntry | 
| /api/games/updateplayercounter | PUT | gameController.updatePlayerCounter | 
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
| /api/tempEvents/getURL | GET | tempEventsController.getRandomURL |
| /api/tempCity/getURL | GET | tempCityController.getRandomURL |
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


1. __/api/games/requestlobbyentry__  PUT

 Controller: gameController.requestLobbyEntry

 Request Body: { gameId: number }

 Description: Returns an object with a requestAccepted property to check if a user is permitted to enter the lobby. If the user is accepted, the function also increments a global variable playerCounter[gameId] defined in the game controller.


1. __/api/games/updatePlayerCounter__  PUT

 Controller: gameController.updateCurrentPage

 Request Body: { gameId: number }

 Description:  Decrements the global variable playerCounter[gameId] if the game exists in the playerCounter object.


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

 Request Params: { roll: number, gameId: number, userId: number, userPosition: number}

 Description: Returns a player options object containing two arrays of potential forward/backward spot objects on the board a user can move to. Spot objects also contain a specific action that can be executed.


1. __/api/games/availablePokemon__  GET

 Controller: gameController.getAvailablePokemon

 Request Params: { gameId: number, userId: number}

 Description: This function is called when a user lands on a Pokemon spot on the board. The function removes a Pokemon from the Available Pokemon of the specific board spot color, and returns the Pokemon Object. If a Pokemon has already been revealed, this function returns the Pokemon associated to that board spot.


1. __/api/games/getGames__  GET

 Controller: gameController.getGames

 Request Params: N/A

 Description: Returns an array of all game objects. Objects contain the properties gameId, gameName, gameStarted, gamePlayers, and gameCreator. The gamePlayers property in the object is an array of player objects containing their facebook ID and display name.


1. __/api/games/lobbyinit__  GET

 Controller: gameController.lobbyInit

 Request Params: { gameId: gameId }

 Description: Returns an object containing the game name, the game creator's name and the game creator's facebook ID.


1. __/api/games/remainingStarterPokemon__  GET

 Controller: gameController.getRemainingStarterPokemon

 Request Params: { gameId: number }

 Description:	Returns an array of remaining starter Pokemon with data from the Pokemons table.


1. __/api/games/boardInit__  GET

 Controller: gameController.boardInit

 Request Params: { gameId: number, userId: number }

 Description: Returns an object containing the board object, the current user object, current turn object, containing the user's facebook ID, and their display name, users array of object, containing player name, facebook ID, position and sprite image, and a winner property.


1. __/api/games/remainingSprites__  GET

 Controller: gameController.getAvailableSprites

 Request Params: { gameId: number }

 Description: Returns an array of remaining sprites with data from the Sprites table.


1. __/api/games/getusers__  GET

 Controller: gameController.getUsers

 Request Params: { gameId: number }

 Description: Returns an array of user objects.

1. __/api/games/trainerInit__  GET 

  Controller: gameController.trainerInit 

  Request Params: { gameId: number, currentTurnUserId: string }

  Description: Returns an object containing two properties currentTrainer, which is a user object of the trainer who initiated the trainer event and other trainers is an array of user objects of trainers who are located on the spot the original trainer landed on.


1. __/api/games/resumegamelobbyinit__  GET 

 Controller:  gameController.resumeGameLobbyInit

 Request Params: { gameId: number }

 Description: Returns an object, containing the gameName, game creator's facebook ID, game creator's display name and the users associated to the game.
 
1. __/api/tempEvents/getURL__  GET 

  Controller: tempEventsController.getRandomURL

  Request Params: N/A

  Description: Returns a random description and gif URL from the temporary event data object.


1. __/api/tempCity/getURL__  GET 

 Controller:  tempCityController.getRandomURL

 Request Params: N/A

 Description: Returns a random description and gif URL from the temporary city data object.


1. __/signin/facebook |__ GET 

 Controller: passport.authenticate('facebook')

 Request Params: N/A

 Description: This function uses Passport's Facebook Strategy, authentication middleware for Node, to assist in authenticating users from Facebook to allow users to be redirected to Facebook and attempt to login.


1. __/signin/facebook/callback |__ GET

 Controller: redirect to /#/home

 Request Params: N/A

 Description: This function handles a user's login from Facebook. If the user's login failed then the user will be redirected back to the sign-in page, otherwise the user will be redirected to the home page, and server will send a cookie containing the user's Facebook ID and display name.


