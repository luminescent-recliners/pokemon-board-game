import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../../pokemon-socket.service';
import { AuthService } from '../../auth.service';
import { GameFactoryService } from '../../game-factory.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {

  currentTurnPlayerName = '';
  currentTurnPlayerId = '';
  gifDescrip = '';
  gifURL = '';
  email = '';
  name = '';
  gameId = '';
  socketEvents = [];

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private router: Router,
    private gameService: GameFactoryService,
  ) { 

  }

  ngOnInit() {
    this.email = this.auth.email.getValue();
    this.name = this.auth.name.getValue();
    this.gameId = this.auth.gameId.getValue();

    this.gameService.getGameTurn( this.gameId )
    .subscribe( (resp: any) => {
      this.currentTurnPlayerName = resp.name;
      this.currentTurnPlayerId = resp.email;
      this.getGif();
    });

    this.socketEvents = [];
    this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
  }

  ngOnDestroy() {
    this.pokeSocket.deRegister( this.socketEvents );
  }

  getGif = () => {
    this.gameService.getEventGif()
    .subscribe( (resp: any) => {
      this.gifDescrip = resp.descriptions;
      this.gifURL = resp.eventURL;
    });
  }

  updateTurn = () => {
    const audioRedir = new Audio('../../assets/sounds/pop.mp3');
    audioRedir.play();
    this.gameService.updateTurn(this.gameId, 'boardView')
    .subscribe( (resp) => {
     // redirect from socket
    });
  }

  printstate() {
    console.log( 'currentTurnPlayerName:', this.currentTurnPlayerName );
    console.log( 'currentTurnPlayerId:', this.currentTurnPlayerId );
    console.log( 'gifDescrip:', this.gifDescrip );
    console.log( 'gifURL:', this.gifURL );
    console.log( 'user:', this.name, this.email, this.gameId );
  }

}
