import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../../pokemon-socket.service';
import { AuthService } from '../../auth.service';
import { GameFactoryService } from '../../game-factory.service';

@Component({
  selector: 'app-capture-pokemon',
  templateUrl: './capture-pokemon.component.html',
  styleUrls: ['./capture-pokemon.component.css']
})
export class CapturePokemonComponent implements OnInit, OnDestroy {

  rollmydice = 1;

  rollvalue;
  result;
  diceRolled = false;
  pokemon;
  message = 'ready';
  currentTurnPlayerName = '';
  currentTurnPlayerId = '';
  email = '';
  name = '';
  gameId =  '';
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
      this.gameService.getAvailablePokemon(this.gameId, this.currentTurnPlayerId)
      .subscribe((pokemon: any ) => {
        this.pokemon = pokemon;
        this.message = 'ready';
      });
    });

    this.socketEvents = [
      [ 'send response for capture page', this.sendResponseForCapturePageCB ],
    ];
    this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
  }

  ngOnDestroy() {
    this.pokeSocket.deRegister( this.socketEvents );
  }

  sendResponseForCapturePageCB = (data: any) => {
    this.result = data.result.message;
    this.rollvalue = data.roll;
    this.diceRolled = true;
    const audioDice = new Audio('../../assets/sounds/dice.mp3');
    audioDice.play();
    if (this.result === 'Sorry!! Pokemon Got Away' ) {
      const audioDiceLost = new Audio('../../assets/sounds/bloop.mp3');
      audioDiceLost.play();
    } 
    else {
      const audioDiceCaught = new Audio('../../assets/sounds/caught.mp3');
      audioDiceCaught.play();
    }
  }

  startroll = () => {
    this.rollmydice += 1;
  }

  processRoll =  ( rollnum ) => {
    this.gameService.catchPokemon(this.gameId, this.email, this.rollvalue, this.pokemon.color, this.pokemon)
    .subscribe( (resp: any) => {
      this.result = resp.message;
      if (this.result === 'Sorry!! Pokemon Got Away' ) {
        const audioDiceFail = new Audio('../../assets/sounds/bloop.mp3');
        audioDiceFail.play();
      } 
      else {
        const audioDiceCaught = new Audio('../../assets/sounds/caught.mp3');
        audioDiceCaught.play();
      }
      this.pokeSocket.emit('roll die for capture', {gameId: this.gameId, result: this.result, roll: this.rollvalue});
    });
    this.message = '';
    this.diceRolled = true;
  }

  updateTurn = () => {
    const audioRedir = new Audio('../../assets/sounds/pop.mp3');
    audioRedir.play();
    this.gameService.updateTurn(this.gameId, 'boardView')
    .subscribe( (resp) =>  {
      // gets redirected by socket emit.
    });
  }

  dicerollresult = ( num ) => {
    this.rollvalue = num;
    this.processRoll( num );
  }

  printstate() {
    console.log( 'rollvalue:', this.rollvalue );
    console.log( 'result:', this.result );
    console.log( 'diceRolled:', this.diceRolled );
    console.log( 'pokemon:', this.pokemon );
    console.log( 'message:', this.message );
    console.log( 'currentTurnPlayerName:', this.currentTurnPlayerName );
    console.log( 'currentTurnPlayerId:', this.currentTurnPlayerId );
    console.log( 'user:', this.name, this.email, this.gameId );
  }

}
