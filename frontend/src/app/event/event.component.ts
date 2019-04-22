import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../pokemon-socket.service';
import { AuthService } from '../auth.service';
import { GameFactoryService } from '../game-factory.service';

const debug = false;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  currentTurnPlayerName = '';
  currentTurnPlayerId = '';
  gifDescrip = '';
  gifURL = '';
  user = {
    email: '',
    name: '',
    gameId: -1
  };

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private router: Router,
    private gameService: GameFactoryService,
  ) { 

  }

  ngOnInit() {
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

      this.pokeSocket.register( 'redirect back to board', () => {
        const audioRedir = new Audio('../assets/sounds/pop.mp3');
        audioRedir.play();
        this.router.navigate(['/board']).catch( console.error ) ;
      });
      
      
    }
  }

  getGif = () => {
    this.gameService.getEventGif()
    .subscribe( (resp: any) => {
      if ( debug ) { console.log( 'getGif() getEventGif()', resp ); }
      this.gifDescrip = resp.descriptions;
      this.gifURL = resp.eventURL;
    });
  }

  initialize = () => {
    this.gameService.getGameTurn(this.user.gameId)
    .subscribe( (resp: any) => {
      this.currentTurnPlayerName = resp.name;
      this.currentTurnPlayerId = resp.email;
      this.getGif();
    });
  }

  updateTurn = () => {
    const audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
    this.gameService.updateTurn(this.user.gameId, 'boardView')
    .subscribe( (resp) => {
      this.pokeSocket.emit('emit users back to board', {gameId: this.user.gameId});
      this.router.navigate(['/board']).catch( console.error ) ;
    });
  }

  printstate() {
    console.log( 'currentTurnPlayerName:', this.currentTurnPlayerName );
    console.log( 'currentTurnPlayerId:', this.currentTurnPlayerId );
    console.log( 'gifDescrip:', this.gifDescrip );
    console.log( 'gifURL:', this.gifURL );
    console.log( 'user:', this.user );

  }

}
