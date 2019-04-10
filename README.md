# Pokemon Master Trainer

> A re-creation of the Pokemon Master Trainer Board game

> __Status:__ in development

## Team

  - __Product Owner__: Alex Chou (Choumander)
  - __Scrum Master__: Hitesh Lala (Hiteshmonlee)
  - __Development Team Members__: Arthi Palaniappan (Arthicuno), Linda Zou (Zoubat)

## Table of Contents

1. [Game Play](#game-play)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Project Details](#project-details)
      * [Server Design](#server-design)
      * [Client Design](#client-design)
      * [Database Design](#database-design)
    1. [Roadmap](#roadmap)
1. [Team](#team)
1. [Contributing](#contributing)


## Game Play

1. Roll the dice
1. Check the number of positions in both direction and offer player options:
  * If spot has a pokemon then try to catch pokemon - implemented
  * If other players on spot, can battle or trade - not implemented yet
  * If spot is city, can exchange pokemon in box, battle gym leader or heal - not implemented yet
  * If spot is event pick an event card and do what it says - not impelemented yet


## Requirements

### Server Side
  - Body-parser  1.15.0
  - Chai  3.5.0
  - Chai-http  2.0.1
  - Express  4.13.4
  - Express-routes  0.0.2
  - Express-session  1.13.0
  - Mocha  2.4.5
  - Mongoose  4.4.6
  - Morgan  1.7.0
  - Passport  0.3.2
  - Passport-facebook  2.1.0
  - Q  1.4.1
  - Socket.io  1.4.5
  - Sinon  1.17.3
  - Sinon-chai  2.8.0

### Client Side
  - Bootstrap  3.3.6
  - Jquery  2.2.2
  - Angular-bootstrap  1.2.4
  - Angular  1.5.1
  - Angular-cookies  1.5.2
  - Angular-animate  1.5.1
  - Angular-route  1.5.1
  - Angular-socket-io  0.7.0
  - Socket.io  1.4.5
  - Socket.io-client  1.4.5
  - Angular-audio  1.7.1

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Project Details

A single page application using Angular front end, Express server, and MongoDB database.  Five data items are stored on the players machine.  Two cookies for Facebook authentication - containing the player name, and Facebook ID.  Three local storage items, the playe name, Facebook ID, and the current game.

#### Server Design

A RESTful API was built using Node and Express.  A table with the endpoints can be found below and a more detailed description of the routes can be found [here](serverRoutes.md).

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


#### Client Design

Angular was used as the front end framework.

|  URL      | Controller            | Template            | Authenticate |
|:---------:|:---------------------:|:-------------------:|:------------:|
| /home |  homeController | home/home.html | true |
| /board | boardController | board/board.html | true |
| /starter | starterController | starterPokemon/starterPokemon.html | true |
| /lobby | lobbyController | lobby/lobby.html | true |
| /capture | captureController | capturePokemon/capturePokemon.html | true |
| /city | cityController | city/city.html | true |
| /event | eventController | event/event.html | true |
| /winner | winnerController | winner/winner.html | true |
| /signin | authController | auth/signin.html | false |
| /resumelobby |resumeLobbyController | resumelobby/resumeLobby.html | true |

#### Database Design

MongoDB was chosen for the database in order to allow storage of objects.  Q was used to promisify the interface and Mongoose was used to connect the database and server.  The size of the record for MongoDB is 16MB so our game object which is large is still within the size limit.

There are seven tables in the database as listed below.  The Users and Games table are the only talbes that are ever changed - during game play and new user creation.

1. [Pokemon](pokemonTable.md) 
1. [GymLeader](gymLeaderTable.md)
1. [ItemCards](itemCardsTable.md)
1. [EventCards](eventCardsTable.md)
1. [Sprites](spritesTable.md)
1. [Users](usersTable.md) - stores users of the app and is updated when a new user joins and also when users join a game
1. [Games](gamesTable.md) - stores the game state and is updated on every turn

### Roadmap

View the project roadmap [here](https://github.com/luminescent-recliners/pokemon-board-game/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.



organization image:
http://clipart-library.com/pikachu-cliparts.html


