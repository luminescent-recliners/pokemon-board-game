# Games

  - This table stores each game and is updated on every player interaction

  ```javascript
  {
    gameId: Number,
    name: 'A name for the game',
    gameCreator: {},
    gameStarted: {
      type: Boolean,
      default: false
    },
    users: [],
    availablePokemon: {},
    availableSprites: [ 1, 2, 4, 5, 6 ],
    availableItemCards: [],
    gameBoard: {},
    gameTurn: {},
    gameCounter: Number,
    currentPage: String,
  }
  ```
  - gameId: at this point we are assigning an id based on how many games in the table.  Will have to change this at some point in the future
  - gameCreator: only creator of game is permitted to begin game
<<<<<<< HEAD

  ```javascript  
=======
```javascript  
>>>>>>> Adds Description Of Data Tables
        { 
          playerName : "Henry",
          facebookId : "Facebook123H" 
        }
<<<<<<< HEAD
  ```
  - users: an array of user objects each representing a player in the game

=======
```
  - users: an array of user objects each representing a player in the game
>>>>>>> Adds Description Of Data Tables
  ```javascript
    [ 
        { 
          facebookId : "Facebook123H", 
          playerName : "Henry", 
          playerIndex : 0, 
          badges : [ ], 
          party : [ 
           { 
              name : "Pikachu", 
              description : "This POKMON ... after waking up.", 
              pokemonId : 25, 
              imageURL : "http://pokeapi.co/media/img/25.png ", 
              color : "starter", 
              gifURL : "http://sprites.pokecheck.org/i/025.gif", 
              diceImg : [ ], 
              capture : [ ], 
              alive : true, 
              visible : false 
            } 
          ],
          box : [ ],
          itemCards : [ ],
          positionOnBoard : 1, 
          citiesVisited : [ 0 ], 
          lastCity : 0, 
          pokemonCount : {
            pink : 0,
            green : 0, 
            blue : 0, 
            red : 0 
          }, 
          sprite : "http://sprites.pokecheck.org/t/123.gif" 
<<<<<<< HEAD
        },
        ...
        ... 
      ], 
  ```
  - availablePokemon: contains all the pokemon available for capture at any point in the game

=======
        } 
      ], 
  ```
  - availablePokemon: contains all the pokemon available for capture at any point in the game
>>>>>>> Adds Description Of Data Tables
  ```javascript
    { 
      starter : [ 7, 52, 1, 4, 25, 35 ], 
      gold : [ 145, 150, 144, 146 ], 
      green : [ 70, 82, 75, ... 132, 17, 133 ], 
      blue : [ 12, 20, 26, ... 138, 140 ], 
      pink : [ 84, 21, 32, ... 63, 43, 50 ], 
      red : [ 142, 65, 59, ... 3, 68, 143 ] 
    },
  ```
<<<<<<< HEAD

  - availableSprites: a list of sprites which players select to represent themselves on board during the game
  - availableItemCards: will have item cards when implemented
  - gameTurn:

=======
  - availableSprites: a list of sprites which players select to represent themselves on board during the game
  - availableItemCards: will have item cards when implemented
  - gameTurn:
>>>>>>> Adds Description Of Data Tables
  ```javascript
      { 
        playerName : "Henry", 
        facebookId : "Facebook123H"
      }
  ```
<<<<<<< HEAD

  - gameCounter: a number that increments each time a turn is complete.  It is used to determine the next players turn
  - currentPage: a string to describe which page view all players need to be on at any point in the gameCounter
  - gameBoard: an object with 73 objects within, each being a spot on the board

=======
  - gameCounter: a number that increments each time a turn is complete.  It is used to determine the next players turn
  - currentPage: a string to describe which page view all players need to be on at any point in the gameCounter
  - gameBoard: an object with 73 objects within, each being a spot on the board
>>>>>>> Adds Description Of Data Tables
  ```javascript
    { 
      1 : { 
        gymLeader : false,
        users : [ ],
        pokemon : null,
        colorOfSpot : "pink",
        typeOfSpot : "pokemon",
        id : 1 
      },
      ... 
      ...
      73 : { 
        gymLeader : "Blaine/Rapidash",
        pokemon : null,
        users : [ ],
        colorOfSpot : "red",
        typeOfSpot : "city",i
        d : 73
      } 
    } 
  ```
