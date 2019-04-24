import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../pokemon-socket.service';
import { AuthService } from '../auth.service';
import { GameFactoryService } from '../game-factory.service';

const debug = false;

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit, OnDestroy {

  currentTurnPlayerName = '';
  currentTurnPlayerId = '';
  gifDescrip = '';
  gifURL = '';
  user = {
    email: '',
    name: '',
    gameId: -1
  };
  socketEvents = [];

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private router: Router,
    private gameService: GameFactoryService,
  ) { 

  }

  ngOnInit() {
    if ( debug ) { console.log( '%cCityComponent ngOnInit()', 'color:green'); }
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
        [ 'redirect back to board', this.redirectBackToBoardCB ],
      ];
      this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
      
    }
  }
  ngOnDestroy() {
    if ( debug ) { console.log( '%cCityComponent ngOnDestroy()', 'color:green'); }
    this.pokeSocket.deRegister( this.socketEvents );
  }

  redirectBackToBoardCB = () => {
    const audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
    this.router.navigate(['/board']).catch( console.error ) ;
  }

  initialize = () => {
    this.gameService.getGameTurn(this.user.gameId)
    .subscribe( (resp: any) => {
      this.currentTurnPlayerName = resp.name;
      this.currentTurnPlayerId = resp.email;
      this.getGif();
    });
  }

  getGif = () => {
    this.gameService.getCityGif()
    .subscribe( (resp: any) => {
      if ( debug ) { console.log( 'getGif() getCityGif()', resp ); }
      this.gifDescrip = resp.descriptions;
      this.gifURL = resp.cityURL;
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
