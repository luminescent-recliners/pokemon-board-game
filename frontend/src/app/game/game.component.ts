import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { GameStoreService } from '../game-store.service';
import { PokemonSocketService } from '../pokemon-socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  gameId = '';
  name = '';
  email = '';
  allUsers = [];
  showPlayerPanel = false;
  showExitGame = false;
  socketEvents = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private gameStore: GameStoreService,
    private socket: PokemonSocketService,
  ) { }

  ngOnInit() {
    if ( !this.auth.isAuth('game') ) {
      this.router.navigate([ '/signin' ]).catch( console.error );
      return;
    }

    this.auth.gameId.subscribe({ 
      next:  v => {
        this.gameId = v; 
        if ( !v ) { this.router.navigate([ '/home' ]).catch( console.error ); }
      } 
    });
    this.auth.email.subscribe({ next: ( v => this.email = v ) });
    this.auth.name.subscribe({ next: ( v => this.name = v ) });

    this.gameStore.allUsers.subscribe({ next: ( v => this.allUsers = v ) });
    this.gameStore.showPlayerPanel.subscribe({ next: v => this.showPlayerPanel = v });
    this.gameStore.showExitGameButton.subscribe({ next: v => this.showExitGame = v });

    this.gameStore.setupPlayers( this.gameId, this.email );

    this.socketEvents = [
      [ 'moveAllPlayersToSelectPokemon', this.moveAllPlayersToSelectPokemonCB ],
      [ 'moveAllPlayersToBoard', this.moveAllPlayersToBoardCB ],
    ];
    this.socketEvents.forEach( e => this.socket.register( e[0], e[1] ) );
  }

  ngOnDestroy() {
    this.socket.deRegister( this.socketEvents );
  }

  logout() {
    this.auth.logOut();
  }

  goHome() {
    const gameId = this.gameId;
    this.auth.delGameId();
    this.socket.emit( 'a user left lobby', { gameId, email: this.email } );
    this.router.navigate([ '/signin' ]).catch( console.error );
  }

  exitGame = () => {
    const data = {
      gameId: this.gameId,
      user: { email: this.email, name: this.name },
      message: `${this.name} is leaving game!  Resume game from Lobby Page after everyone is back.`,
      continueGame: false
    };
    this.socket.emit('player wants to pause game', data );
  }

  moveAllPlayersToSelectPokemonCB = () => {
    this.router.navigate([ `game/${this.gameId}/starter` ])
    .catch( console.error );
  }

  moveAllPlayersToBoardCB = () => {

    const audioRedir = new Audio('../../assets/sounds/pop.mp3');
    audioRedir.play();

    this.router.navigate([ `game/${this.gameId}/board` ])
    .catch( console.error );
  }


}
