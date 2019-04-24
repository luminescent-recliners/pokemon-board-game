import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BoardFactoryService } from '../board-factory.service';
import { GameFactoryService } from '../game-factory.service';
import { PokemonSocketService } from '../pokemon-socket.service';
import { AuthService } from '../auth.service';

const debug = true;

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit, OnDestroy {

  pathString = '';
  pathData = [];
  boardData;
  allPlayers;

  // dev
  user = {
    gameId: 2,
    name: 'a',
    email: 'aa@aa'
  };
  drawboard = false;

  constructor(
    private boardService: BoardFactoryService,
    private gameService: GameFactoryService,
    private socket: PokemonSocketService,
    private router: Router,
    private auth: AuthService
  ) { 

  }

  ngOnInit() {
    if ( this.drawboard ) { this.initialize(); }
    console.log( '%ctester on init()', 'color:purple' );
    this.socket.register( 'hello-world' , this.helloWorldCB );

  }

  ngOnDestroy() {
    console.log( '%ctester on destroy', 'color:purple' );
    this.socket.deRegister([ 'hello-world', this.helloWorldCB ]);
  }

  helloWorldCB = v => console.log(v);

  initialize = () => {
    if ( debug ) { console.log( 'tester initialize' ); }
    this.boardService.boardInit(this.user.gameId, this.user.email)
    .subscribe((data: any) => {
      if ( debug ) { console.log( 'boardController initialize boardInit data', this.user.gameId, data ); }
      
      // get board data from database
      // preprocessed to be an array 
      // calculate path data and path string
      // TODO: these never change so we should separate the logic
      this.boardData = this.boardService.createBoardArray(data.board);
      this.pathData = this.boardService.createPath(this.boardData);
      this.pathString = this.boardService.createPathString(this.pathData);

      /*
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
      */
    });
  }

  drawPokemon() {
    this.gameService.getAvailablePokemon( this.user.gameId, this.user.email )
    .subscribe( data => {
      console.log( 'drawPokemon()', data );
    });
  }

  printstate() {
    console.log( 'pathString', this.pathString );
    console.log( 'pathData', this.pathData );
    console.log( 'boardData', this.boardData );
  }

  register() {
    this.socket.register( 'hello-world' , this.helloWorldCB );
  }

  deregister() {
    this.socket.deRegister([ 'hello-world', this.helloWorldCB ] );
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }


  

}
