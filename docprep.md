# Pokemon Board Game

## Technologies:
  Angular
  Express server
  MongoDB
  Sockets.io
  Facebook Oauth
  Mongoose
  Q 
  Mocha
  Chai
  ???

## Team Roles:
  Product Owner: Alex Chou
  Scrum Master: Hitesh Lala
  Developer Team: Linda Zhou, Arthi Palaniappan

## Division of Labour:
  We would like to have each of us work on every part of the app
  Equal division of labour on frontend, backend, database.
  Thinking of working in pairs and other pair will review code before
  merging

## Learning Goals:
  We all want to learn all aspects of the stack but some of us want to
  focus on specific areas
  Alex, Hitesh - facebook auth, socket.io, databases
  Linda - css, html, frontend
  Arthi - databases

## Git workflow:
 1. Fork a copy from organization
 2. Clone a local copy from your personal repo
 3. Git pull --rebase 'remote master'
 4. Make a new branch for each feature you work on
 5. Git pull --rebase 'remote master' 'new branch'
 6. Git push 'your personal repo' 'branch'
 7. From your github account make a pull request to organization repo

## Stretched Goals:
  Make front end look REALLY goood
  Evolving pokemon
  Facebook invite friends
  Add branching paths to game
  Increase number of players per game
  Facebook updates on game status
  Music to our game
  In game alias
  Additional/more complicated event/item cards
  User game stats
  Wating list in the games html page 
  Chat box between player

## Data:
  board state saved as an object
  each user is an object with {position,gymLeaderDefeated,lastCity, bank, party, cards}
  an array for each group of pokemon containing the ids for pokemon

## Tech Stack:
   ### Angular:
    Mainly because of the 2 way data bind
    Creating a single page game - don’t have to reload entire page
    Wanted to spend more time on game logic instead of learning a new tech

  ### Express Server:
    No call back hell/pyramid of doom
  
  ### MongoDB:
    Use Mongoose to connect and Q to promisify
    Need to store objects and arrays
    Record Size Limit: 16MB
    

## Data Objects:

### Pokemon: 
  -- This table is generated once and never changes
  -- Stores all the individual pokemon data

  {
    name: 'Venusaur',
    description: 'It is able to ... it is more powerful in the summertime.',
    pokemonId: '3',
    imageURL: 'http://pokeapi.co/media/img/3.png ',
    alive: true,
    visible: false,
    color: 'red',
    capture: [ 5 ],
    gifURL: 'http://sprites.pokecheck.org/i/003.gif',
    diceImg: [ 'https://www.wpclipart.com/recreation/games/dice/die_face_5.png' ] 
  }
  -- alive: will be used when battles are implemented
  -- visible: is used to display pokemon on board during game play
  -- capture: is the dice roll required to capture the pokemon
  -- diceImg: is a dice image with the capture value 

### Users:
  {
    facebookId: "Facebook123H",
    playerName: "Henry",
    gamesParticipating: [1],
    numGameWon: 3
  }
  -- gamesParticipating: is a an array of the gameId's that the player is in

'
### GymLeader:
  -- This table is generated once and never changes
  -- Stores all the individual gym leader data
  -- This table will be used when battles are implemented
  {
    name: 'Brock/Onyx',
    city: 'Pewter City',
    attackStrength: 4,
    attackBonus: {
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 2,
      '5': 3,
      '6': 1
    },
    imageURL: "string with url to an image"
  }

### ItemCards:
  -- This table is generated once and never changes
  -- Stores all the individual item card data
  -- This table will be used when item card events are implemented
  -- Player will get one when dice roll lands player on city
  -- 12 kinds of cards with uneven distribution
  {
    itemsId: Number,
    name: String,
    type: String,
    description: String,
    function: {},
  }
  -- function: will contain a function to run upon item card selection, still have to figure this one out 
  
### EventCards:
  -- This table is generated once and never changes
  -- Stores all the individual event card data
  -- This table will be used when event card events are implemented
  -- Player will get one when dice roll lands player on event spot
  -- 8 kinds of cards with uneven distribution
  {
    eventsId: Number,
    name: String,
    type: String,
    description: String,
    function: {},
  }
  -- function: will contain a function to run upon event card selection, still have to figure this one out 

### Games:
  -- This table stores each game and is updated on every user interaction
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
  -- gameId: at this point we are assigning an id based on how many games in the table.  Will have to change this at some point in the future
  -- gameCreator: only creator of game is permitted to begin game
        { 
          playerName : "Henry",
          facebookId : "Facebook123H" 
        }
  -- users: an array of user objects each representing a player in the game
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
        } 
      ], 
  -- availablePokemon: contains all the pokemon available for capture at any point in the game
    { 
      starter : [ 7, 52, 1, 4, 25, 35 ], 
      gold : [ 145, 150, 144, 146 ], 
      green : [ 70, 82, 75, ... 132, 17, 133 ], 
      blue : [ 12, 20, 26, ... 138, 140 ], 
      pink : [ 84, 21, 32, ... 63, 43, 50 ], 
      red : [ 142, 65, 59, ... 3, 68, 143 ] 
    },
  -- availableSprites: a list of sprites which players select to represent themselves on board during the game
  -- availableItemCards: will have item cards when implemented
  -- gameTurn:
      { 
        playerName : "Henry", 
        facebookId : "Facebook123H"
      }
  -- gameCounter: a number that increments each time a turn is complete.  It is used to determine the next players turn
  -- currentPage: a string to describe which page view all players need to be on at any point in the gameCounter
  -- gameBoard: an object with 73 objects within, each being a spot on the board
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

## Game Play:
  Roll the dice
  Check the number of positions in both direction and offer player options:
    If other players on spot, can battle or trade - not implemented yet
    If spot is city, can exchange pokemon in box, battle gym leader or heal - not implemented yet
    If spot is event pick an event card and do what it says - not impelemented yet
    If spot has a pokemon then try to catch pokemon

## Client Side Data Storage:
  Store Facebook Id, player name and curent game in local Storage
  FacebookId and Name is stored in cookie
  
