import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from '../pokemon-socket.service';
import { AuthService } from '../auth.service';
import { GameFactoryService } from '../game-factory.service';

const debug = false;


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  currentTurnPlayerName = '';
  currentTurnPlayerId = '';
  gifDescrip = '';
  gifURL = '';
  user = {
    email: '',
    name: '',
    gameId: -1
  };
  currentTrainer;
  otherTrainers;

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

  updateTurn = () => {
    const audioRedir = new Audio('../assets/sounds/pop.mp3');
    audioRedir.play();
    this.gameService.updateTurn(this.user.gameId, 'boardView')
    .subscribe( (resp) => {
      this.pokeSocket.emit('emit users back to board', {gameId: this.user.gameId});
      this.router.navigate(['/board']).catch( console.error ) ;
    });
  }

  initialize = () => {
    this.gameService.getGameTurn(this.user.gameId)
    .subscribe( (resp: any) => {
      if ( debug ) { console.log( 'initialize() getGameTurn()', resp ); }
      this.currentTurnPlayerName = resp.name;
      this.currentTurnPlayerId = resp.email;
      this.gameService.trainerInit(this.user.gameId, this.currentTurnPlayerId)
      .subscribe( (resp2: any) => {
        if ( debug ) { console.log( 'initialize() trainerInit()', resp2 ); }
        this.currentTrainer = resp2.currentTrainer;
        this.otherTrainers = resp2.otherTrainers;
      });
    });
  }

}
