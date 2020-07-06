import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../../pokemon-socket.service';
import { AuthService } from '../../auth.service';
import { GameFactoryService } from '../../game-factory.service';
import { UserService } from '../../user.service';
import { BoardFactoryService } from '../../board-factory.service';
import { GameStoreService } from '../../game-store.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {

  message = '';
  email = '';
  name = '';
  gameId =  '';
  gameName = '';
  gameCreator = '';
  gameCreatorName = '';
  myGameCreator = false;
  users = [];
  playerOptions = [[], []];
  userPosition;
  continueGame = true;
  pauseGameMessage = '';
  roll = 0;
  rollDisplay = false;
  actionDisplay = false;
  actionDescription = '';
  action: 'pokemon' | 'event' | 'city' | 'trainer' = 'pokemon';
  dx = 0;
  dy = 0;
  allPlayersBoard = [];
  allPlayersBoard2 = [];
  winner =  null;
  currentTurnPlayerName;
  allPlayers;
  playerPosition;
  boardData;
  pathData;
  pathString = '';
  currentTurnEmail;
  currentTurnSprite;
  userParty;
  playerSprite;
  playerParty;

  socketEvents = [];

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private router: Router,
    private gameService: GameFactoryService,
    private userService: UserService,
    private boardService: BoardFactoryService,
    private gameStore: GameStoreService,
  ) {

  }

  ngOnInit() {
    this.email = this.auth.email.getValue();
    this.name = this.auth.name.getValue();
    this.gameId = this.auth.gameId.getValue();

    this.initialize();

    this.socketEvents = [
      [ 'player leaving game', this.playerLeavingGameCB ],
      [ 'send player roll to move', this.sendPlayerRollToMoveCB ],
      [ 'send player to move', this.sendPlayerToMoveCB ],
      [ 'send action description', this.sendActionDescriptionCB ]
    ];
    this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );


    // section used for placement of players on board --------->>>>>>
    // TODO: At some point this should go in its own component.
    const distFromSpot = 28;
    const distFromSpot2 = 37;    // for small spot dist 28, dx -22, dy - 22
    this.dx = -22;           // for large spot dist 37, dx -22, dy - 22
    this.dy = -22;
    this.allPlayersBoard = [
      [0, distFromSpot], [distFromSpot * 0.866, distFromSpot / 2], [distFromSpot * 0.866, - distFromSpot / 2],
      [0, - distFromSpot], [- distFromSpot * 0.866, - distFromSpot / 2], [- distFromSpot * 0.866, distFromSpot / 2]
    ];

    this.allPlayersBoard2 = [
      [0, distFromSpot2], [distFromSpot2 * 0.866, distFromSpot2 / 2], [distFromSpot2 * 0.866, - distFromSpot2 / 2],
      [0, - distFromSpot2], [- distFromSpot2 * 0.866, - distFromSpot2 / 2], [- distFromSpot2 * 0.866, distFromSpot2 / 2]
    ];
    // till here ---------------------------------------------<<<<<<<

  }

  ngOnDestroy() {
    this.pokeSocket.deRegister( this.socketEvents );
  }

  playerLeavingGameCB = data => {
    // hide play options and make visible a button to move to home
    this.continueGame = false;
    this.pauseGameMessage = data.message;
    this.gameStore.showExitGame( false );
  }

  sendPlayerRollToMoveCB = roll => {
    const audio = new Audio('../../assets/sounds/dice.mp3');
    audio.play();
    this.roll = roll;
    this.rollDisplay = true;
  }

  sendPlayerToMoveCB = data => {
    this.initialize();
    const audioMove = new Audio('../../assets/sounds/swoosh.mp3');
    audioMove.play();
  }

  sendActionDescriptionCB = description => {
    this.actionDescription = description;
    this.actionDisplay = true;
  }

  rollDice = () => {
    this.roll = Math.ceil( Math.random() * 6 );
    const audio = new Audio('../../assets/sounds/dice.mp3');
    audio.play();
    this.pokeSocket.emit( 'player rolled dice to move', {gameId: this.gameId, roll: this.roll});
    this.gameService.getPlayerOptions( this.roll, this.userPosition, this.gameId, this.email)
    .subscribe(( options: any ) => {
      this.playerOptions[0] = options.forwardOptions;
      this.playerOptions[1] = options.backwardOptions;
    });
  }

  resetOptions = () => {
    this.actionDisplay = true;
    this.playerOptions = [[], []];
  }

  checkAction = typeOfAction => {
    switch ( typeOfAction ) {
      case 'pokemon':
        this.action = 'pokemon';
        this.actionDescription = this.currentTurnPlayerName + ' is about to catch a wild Pokemon!';
        this.resetOptions();
        break;
      case 'city':
        this.action = 'city';
        this.actionDescription = this.currentTurnPlayerName + ' has arrived in a city. Rest up!';
        this.resetOptions();
        break;
      case 'event':
        this.action = 'event';
        this.actionDescription = this.currentTurnPlayerName + ' landed on an event card!';
        this.resetOptions();
        break;
      case 'trainer':
        this.action = 'trainer';
        this.actionDescription = this.currentTurnPlayerName + ' has locked eyes on a trainer!';
        this.resetOptions();
        break;
    }
  }

  movePlayer = (newSpot, userId) => {
    const userObject = {
      email: this.email,
      name: this.name
    };

    this.userService.movePlayer( newSpot.id, userObject, this.userPosition, this.gameId)
    .subscribe((position: any) => {
      this.pokeSocket.emit( 'a player moved', {gameId: this.gameId, allUsers: this.allPlayers});
      this.userPosition = position.id;
      this.playerPosition = this.userPosition - 1;
      this.checkAction(newSpot.action);

      if (newSpot.action === 'pokemon') {
        this.actionDescription = this.currentTurnPlayerName + ' is about to catch a wild Pokemon!';
        this.actionDisplay = true;
        this.playerOptions = [[], []];

        this.gameService.getAvailablePokemon(this.gameId, this.email);
      }

      this.pokeSocket.emit('update action description', {
        gameId: this.gameId,
        description: this.actionDescription
      });
    });
  }

  redirect = action => {
    switch (action) {
      case 'pokemon':
        this.router.navigate([ `game/${this.gameId}/capture` ])
        .catch( console.error );
        break;
      case 'city':
        this.router.navigate([ `game/${this.gameId}/city` ])
        .catch( console.error );
        break;
      case 'event':
        this.router.navigate([ `game/${this.gameId}/event` ])
        .catch( console.error );
        break;
      case 'trainer':
        this.router.navigate([ `game/${this.gameId}/trainer` ])
        .catch( console.error );
        break;
      case 'winner':
        this.router.navigate([ `game/${this.gameId}/winner` ])
        .catch( console.error );
        break;
    }
  }

  redirectAllUsers = () => {
    const audioRedir = new Audio('../../assets/sounds/pop.mp3');
    audioRedir.play();
    switch (this.action) {
      case 'pokemon':
        this.updateCurrentPage('captureView');
        break;
      case 'city':
        this.updateCurrentPage('cityView');
        break;
      case 'event':
        this.updateCurrentPage('eventView');
        break;
      case 'trainer':
        this.updateCurrentPage('trainerView');
        break;
    }
  }

  updateCurrentPage = currentPage => {
    this.gameService.updateCurrentPage(this.gameId, currentPage )
    .subscribe(() => {
      this.pokeSocket.emit('redirect users to action', {gameId: this.gameId, action: this.action});
      this.redirect( this.action );
    });
  }

  sortPokemon = pokemonArray => {
    const pokemonByColor = {
      starter: [],
      pink: [],
      green: [],
      blue: [],
      red: [],
      gold: []
    };

    for ( const pokemon of pokemonArray ) {
      pokemonByColor[pokemon.color].push(pokemon);
    }

    return pokemonByColor;
  }

  initialize = () => {
    this.boardService.boardInit(this.gameId, this.email)
    .subscribe((data: any) => {
      
      this.gameStore.setAllUsers( data.allUsers );
      this.gameStore.setShowPlayerPanel( true );
      this.gameStore.showExitGame( true );

      // get board data from database
      // preprocessed to be an array 
      // calculate path data and path string
      this.boardData = this.boardService.createBoardArray(data.board);
      this.pathData = this.boardService.createPath(this.boardData);
      this.pathString = this.boardService.createPathString(this.pathData);

      this.currentTurnPlayerName = data.currentTurn.name;
      this.currentTurnEmail = data.currentTurn.email;
      for ( const thisuser of data.allUsers ) {
        if ( data.currentTurn.email === thisuser.email) {
          this.currentTurnSprite = thisuser.sprite;
        }
      }
      this.userPosition = data.user.positionOnBoard;
      this.playerPosition = this.userPosition - 1;
      
      this.userParty = this.sortPokemon(data.user.party);

      this.allPlayers = data.allUsers;
      this.winner = data.winner;
      if (this.winner !== null) {
        this.router.navigate([`game/${this.gameId}/winner`]);
      }

      this.playerSprite = data.user.sprite;
      this.playerParty = data.user.party;
    });
  }
  

  printstate() {
    console.log('\nuser:', this.name, this.email, this.gameId );
    console.log('message:', this.message);
    console.log( 'gameName', this.gameName );
    console.log( 'gameCreator', this.gameCreator );
    console.log( 'gameCreatorName', this.gameCreatorName );
    console.log( 'myGameCreator', this.myGameCreator );
    console.log( 'users', this.users );
    console.log( 'playerOptions', this.playerOptions );
    console.log( 'userPosition', this.userPosition );
    console.log( 'continueGame', this.continueGame );
    console.log( 'pauseGameMessage', this.pauseGameMessage );
    console.log( 'roll', this.roll );
    console.log( 'rollDisplay', this.rollDisplay );
    console.log( 'actionDisplay', this.actionDisplay );
    console.log( 'actionDescription', this.actionDescription );
    console.log( 'action', this.action );
    console.log( 'dx', this.dx );
    console.log( 'dy', this.dy );
    console.log( 'allPlayersBoard', this.allPlayersBoard );
    console.log( 'allPlayersBoard2', this.allPlayersBoard2 );
    console.log( 'winner', this.winner );
    console.log( 'currentTurnPlayerName', this.currentTurnPlayerName );
    console.log( 'allPlayers', this.allPlayers );
    console.log( 'playerPosition', this.playerPosition );
    console.log( 'boardData', this.boardData );
    console.log( 'pathData', this.pathData );
    console.log( 'pathString', this.pathString );
    console.log( 'currentTurnEmail', this.currentTurnEmail );
    console.log( 'currentTurnSprite', this.currentTurnSprite );
    console.log( 'userParty', this.userParty );
    console.log( 'playerSprite', this.playerSprite );
    console.log( 'playerParty', this.playerParty );

  }
  
}
