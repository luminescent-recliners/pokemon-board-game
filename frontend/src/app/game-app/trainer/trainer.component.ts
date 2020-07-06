import { Component, OnInit, OnDestroy } from '@angular/core';

import { PokemonSocketService } from '../../pokemon-socket.service';
import { AuthService } from '../../auth.service';
import { GameFactoryService } from '../../game-factory.service';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit, OnDestroy {

  currentTurnPlayerName = '';
  currentTurnPlayerId = '';
  email = '';
  name = '';
  gameId = '';
  currentTrainer;
  otherTrainers;
  socketEvents = [];

  constructor(
    private pokeSocket: PokemonSocketService,
    private auth: AuthService,
    private gameService: GameFactoryService,
  ) { 

  }

  ngOnInit() {
    this.email = this.auth.email.getValue();
    this.name = this.auth.name.getValue();
    this.gameId = this.auth.gameId.getValue();

    this.gameService.getGameTurn(this.gameId)
    .subscribe( (resp: any) => {
      this.currentTurnPlayerName = resp.name;
      this.currentTurnPlayerId = resp.email;
      this.gameService.trainerInit(this.gameId, this.currentTurnPlayerId)
      .subscribe( (resp2: any) => {
        this.currentTrainer = resp2.currentTrainer;
        this.otherTrainers = resp2.otherTrainers;
      });
    });

    // right now there arent any but when we build this out there might be...
    this.socketEvents = [];
    this.socketEvents.forEach( e => this.pokeSocket.register( e[0], e[1] ) );
  }

  ngOnDestroy() {
    this.pokeSocket.deRegister( this.socketEvents );
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
    console.log( 'user:', this.name, this.email, this.gameId );
    console.log( 'currentTrainer:', this.currentTrainer );
    console.log( 'otherTrainers:', this.otherTrainers );
  }

}
