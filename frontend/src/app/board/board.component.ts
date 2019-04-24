import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../pokemon-socket.service';
import { AuthService } from '../auth.service';
import { GameFactoryService } from '../game-factory.service';
import { GameDashboardService } from '../game-dashboard.service';
import { UserService } from '../user.service';
import { BoardFactoryService } from '../board-factory.service';

const debug = false;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {

  message = '';
  user = {
    email: '',
    name: '',
    gameId: -1
  };
  gameName = '';
  gameCreator = '';
  gameCreatorName = '';
  myGameCreator = false;
  users = [];
  playerOptions = [[], []];
  userPosition;
  continueGame = true;
  confirmExit = true;
  pauseGameMessage = '';
  showexitoptions = true;
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
  userInfoPanel = false;
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
    private gameDashboard: GameDashboardService,
    private userService: UserService,
    private boardService: BoardFactoryService
  ) {

  }

  ngOnInit() {
    if ( debug ) { console.log( '%cBoard onInit', 'color:green' ); }
    setTimeout(() => this.setUp(), 0);
  }

  setUp() {
    if (!this.auth.isAuth('board')) {
      this.router.navigate(['/signin']);
    }
    else {

      const user = this.auth.getCurrentUser();
      this.user = { ...this.user, ...user };

      if (this.user.gameId === -1) {
        this.router.navigate(['/home']);
        return;
      }

      this.initialize();

      this.socketEvents = [
        [ 'send redirect path to users', this.sendRedirectToUserCB ],
        [ 'player leaving game', this.playerLeavingGameCB ],
        [ 'winner announcement', this.winnerAnnouncmentCB ],
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
  }

  ngOnDestroy() {
    if ( debug ) { console.log( '%cBoard onDestroy', 'color:green' ); }
    this.pokeSocket.deRegister( this.socketEvents );
  }

  sendRedirectToUserCB = (action) => {
    this.redirect(action);
    const audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
  }

  playerLeavingGameCB = data => {
    // hide play options and make visible a button to move to home
    this.continueGame = false;
    this.pauseGameMessage = data.message;
    this.showexitoptions = false;
  }

  winnerAnnouncmentCB = data => {
    this.gameService.updateCurrentPage( this.user.gameId, 'winnerView' )
    .subscribe( (resp) => {
      this.router.navigate(['/winner'])
      .catch( console.error );
    });
  }

  sendPlayerRollToMoveCB = roll => {
    const audio = new Audio('../assets/sounds/dice.mp3');
    audio.play();
    this.roll = roll;
    this.rollDisplay = true;
  }

  sendPlayerToMoveCB = data => {
    this.initialize();
    const audioMove = new Audio('../assets/sounds/swoosh.mp3');
    audioMove.play();
  }

  sendActionDescriptionCB = description => {
    this.actionDescription = description;
    this.actionDisplay = true;
  }

  exitGame = () => {
    // emit a message to all in game that someone has left game
    const data = {
      gameId: this.user.gameId,
      user: { email: this.user.email, name: this.user.name },
      message: `${this.user.name} is leaving game!  Resume game from Lobby Page after everyone is back.`,
      continueGame: false
    };
    this.pokeSocket.emit('player wants to pause game', data);
  }

  toggleConfirm = () => {
    if ( debug ) { console.log( 'toggleConfirm() before', this.confirmExit ); }
    this.confirmExit = !this.confirmExit;
    if ( debug ) { console.log( 'toggleConfirm() after', this.confirmExit ); }
  }

  goHome = () => {
    this.auth.delGameId();
    this.router.navigate(['/home'])
    .catch(console.error);
  }

  rollDice = () => {
    this.roll = Math.ceil( Math.random() * 6 );
    const audio = new Audio('../assets/sounds/dice.mp3');
    audio.play();
    this.pokeSocket.emit( 'player rolled dice to move', {gameId: this.user.gameId, roll: this.roll});
    this.gameDashboard.getPlayerOptions( this.roll, this.userPosition, this.user.gameId, this.user.email)
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
      email: this.user.email,
      name: this.user.name
    };

    this.userService.movePlayer( newSpot.id, userObject, this.userPosition, this.user.gameId)
    .subscribe((position: any) => {
      this.pokeSocket.emit( 'a player moved', {gameId: this.user.gameId, allUsers: this.allPlayers});
      this.userPosition = position.id;
      this.playerPosition = this.userPosition - 1;
      this.checkAction(newSpot.action);

      if (newSpot.action === 'pokemon') {
        this.actionDescription = this.currentTurnPlayerName + ' is about to catch a wild Pokemon!';
        this.actionDisplay = true;
        this.playerOptions = [[], []];

        this.gameService.getAvailablePokemon(this.user.gameId, this.user.email);
      }

      this.pokeSocket.emit('update action description', {
        gameId: this.user.gameId,
        description: this.actionDescription
      });
    });
  }

  redirect = action => {
    switch (action) {
      case 'pokemon':
        this.router.navigate([ '/capture' ])
        .catch( console.error );
        break;
      case 'city':
        this.router.navigate([ '/city' ])
        .catch( console.error );
        break;
      case 'event':
        this.router.navigate([ '/event' ])
        .catch( console.error );
        break;
      case 'trainer':
        this.router.navigate([ '/trainer' ])
        .catch( console.error );
        break;
      case 'winner':
        this.router.navigate([ '/winner' ])
        .catch( console.error );
        break;
    }
  }

  redirectAllUsers = () => {
    const audioRedir = new Audio('../assets/sounds/pop.mp3');
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
    this.gameService.updateCurrentPage(this.user.gameId, currentPage )
    .subscribe(() => {
      this.pokeSocket.emit('redirect users to action', {gameId: this.user.gameId, action: this.action});
      this.redirect( this.action );
    });
  }

  
  confirmCurrentPage = () => {
    if ( debug ) { console.log( 'boardController confirmCurrentPage', this.user ); }
    this.gameService.getCurrentPage( this.user.gameId )
    .subscribe((currentPage) => {
      if ( debug ) { console.log( 'boardController confirmCurrentPage getCurrentPage currentPage:', currentPage ); }
      if (currentPage === 'boardView') {
        this.initialize();
      }
      else {
        switch (currentPage) {
          case 'starterView':
            this.router.navigate(['/starter' ])
            .catch( console.error );
            break;
          case 'cityView':
            this.router.navigate(['/city' ])
            .catch( console.error );
            break;
          case 'captureView':
            this.router.navigate(['/capture' ])
            .catch( console.error );
            break;
          case 'eventView':
            this.router.navigate(['/event' ])
            .catch( console.error );
            break;
          case 'trainerView':
            this.router.navigate(['/trainer' ])
            .catch( console.error );
            break;
          case 'winnerView':
            this.router.navigate(['/winner' ])
            .catch( console.error );
            break;
        }
      }
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

  togglePanel = () => {
    const audioPop = new Audio('../assets/sounds/pop.mp3');
    audioPop.play();
    this.userInfoPanel = !this.userInfoPanel;
  }

  initialize = () => {
    if ( debug ) { console.log( 'boardController initialize', this.user ); }
    this.boardService.boardInit(this.user.gameId, this.user.email)
    .subscribe((data: any) => {
      if ( debug ) { console.log( 'boardController initialize boardInit data', this.user.gameId, data ); }
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
        this.pokeSocket.emit('player won', { gameId: this.user.gameId, winner: this.winner});
      }

      this.playerSprite = data.user.sprite;
      this.playerParty = data.user.party;
     
      // confirmCurrentPage();
    });
  }
  

  printstate() {
    console.log('\nuser:', this.user);
    console.log('message:', this.message);
    console.log( 'gameName', this.gameName );
    console.log( 'gameCreator', this.gameCreator );
    console.log( 'gameCreatorName', this.gameCreatorName );
    console.log( 'myGameCreator', this.myGameCreator );
    console.log( 'users', this.users );
    console.log( 'playerOptions', this.playerOptions );
    console.log( 'userPosition', this.userPosition );
    console.log( 'continueGame', this.continueGame );
    console.log( 'confirmExit', this.confirmExit );
    console.log( 'pauseGameMessage', this.pauseGameMessage );
    console.log( 'showexitoptions', this.showexitoptions );
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
    console.log( 'userInfoPanel', this.userInfoPanel );
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
