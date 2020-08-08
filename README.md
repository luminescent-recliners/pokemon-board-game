# <img src="./frontend/src/game.png" alt="Logo" style="width:25px;" width="25px" height="25px"/> Pokemon Master Trainer

> A re-creation of the Pokemon Master Trainer Board game

> __Status:__ abandoned



## Table of Contents

- [<img src="./frontend/src/game.png" alt="Logo" style="width:25px;" width="25px" height="25px"/> Pokemon Master Trainer](#img-srcfrontendsrcgamepng-altlogo-stylewidth25px-width25px-height25px-pokemon-master-trainer)
  - [Table of Contents](#table-of-contents)
  - [Game Play](#game-play)
  - [Requirements](#requirements)
  - [Development](#development)
    - [Installing Dependencies](#installing-dependencies)
    - [Running Dev Environment](#running-dev-environment)
    - [Project Details](#project-details)
      - [Server Design](#server-design)
      - [Client Design](#client-design)
      - [Database Design](#database-design)
    - [Roadmap](#roadmap)
  - [Team](#team)
  - [Acknowledgements](#acknowledgements)


## Game Play

A user can create a game or join a game.  Only the game creator can start the game.
Single player games are permitted.

1. Roll the dice
1. Check the number of positions in both direction and offer player options:
    * If spot has a pokemon then try to catch pokemon - implemented
    * If other players on spot, can battle or trade - not implemented yet
    * If spot is city, can exchange pokemon in box, battle gym leader or heal - not implemented yet
    * If spot is event pick an event card and do what it says - not impelemented yet


## Requirements

Node >= 8.0

Angular 7 & Angular CLI 

MongoDB 


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
cd frontend
npm install
```

### Running Dev Environment

Make sure MongoDB is up and running.

Frontend: in the frontend folder we run the Angular dev environment:
```sh
ng serve
```
This serves the frontend on localhost:4200

Server: in the main folder we start the dev server:
```sh
npm run dev
```
This serves requests on localhost:3000 ( watch not implemneted yet ).

The dev login is not secure, a valid email will work with any string as a token.



### Project Details

A single page application using Angular 7 front end, Express server, Socket.io, and MongoDB database.  A single session cookie is stored on users machine.

#### Server Design

A RESTful API was built using Node and Express.  In addition to this API we have implemented a Socket.io interface which integrates closely with the frontend in supplying real time data to players in a game.


#### Client Design

The front end was built using the Angular CLI tools and conforms to Angulars expected design.  There is essentially one main module with a number of individual components mounted on specific routes.  Services are used as well.

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


## Team
  <ul>
    <li><a href="https://github.com/Lindayezou">Linda Zou (Zoubat) </a></li>
    <li><a href="https://github.com/aarti156">Arthi Palaniappan (Arthicuno)</a></li>
    <li><a href="http://chououtside.com/">Alex Chou (Choumander)</a></li>
    <li><a href="https://hiteshlala.com">Hitesh Lala (Hiteshmonlee)</a></li>
</ul>
  

## Acknowledgements
Thanks to the following for the artwork and sound:
<ul>
    <li><a href="http://sprites.pokecheck.org">Pokécheck</a></li>
    <li><a href="http://pokeapi.co">PokéAPI</a></li>
    <li><a href="http://www.pokestadium.com">Pokestadium</a></li>
    <li><a href="http://clipart-library.co">Clipart Library</a></li>
    <li><a href="https://www.flaticon.com">Flaticon</a></li>
    <li><a href="https://www.shutterstock.com">Shutterstock</a></li>
    <li><a href="https://roundicons.com">Roundicons</a></li>
</ul>
