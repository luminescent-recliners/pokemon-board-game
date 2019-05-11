import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  user = {
    email: '',
    name: '',
    gameId: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private gameStore: GameStoreService,
    private socket: PokemonSocketService,
  ) { }

  ngOnInit() {
    if ( !this.auth.isAuth('home') ) {
      this.router.navigate([ '/signin' ]).catch( console.error );
      return;
    }
    const cu = this.auth.getCurrentUser();
    this.user = cu;
    
    console.log( 'Game Component', this.user );
    // console.log( this.route.snapshot.paramMap );
    // console.log( window.history.state );

    this.auth.gameId.subscribe({ next: ( v => this.gameId = v ) });
    this.auth.email.subscribe({ next: ( v => this.email = v ) });
    this.auth.name.subscribe({ next: ( v => this.name = v ) });
    this.gameStore.allUsers.subscribe({ next: ( v => this.allUsers = v ) });
    this.gameStore.showPlayerPanel.subscribe({ next: v => this.showPlayerPanel = v });
    this.gameStore.showExitGameButton.subscribe({ next: v => this.showExitGame = v });

    this.gameStore.setupPlayers( this.gameId, this.email );
  }

  ngOnDestroy() {
  }

  logout() {
    this.auth.logOut();
  }

  goHome() {
    this.auth.delGameId();
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

}
