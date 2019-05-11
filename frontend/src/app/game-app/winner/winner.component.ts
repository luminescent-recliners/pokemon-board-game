import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthService } from '../../auth.service';
import { BoardFactoryService } from '../../board-factory.service';
import { GameStoreService } from '../../game-store.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  user = {
    email: '',
    name: '',
    gameId: ''
  };
  users = [];
  winner;

  constructor(
    private auth: AuthService,
    private router: Router,
    private boardService: BoardFactoryService,
    private gameStore: GameStoreService,

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

      if (this.user.gameId === '') {
        this.router.navigate(['/home']);
        return;
      }
      else {
        this.initialize();
      }

    }
  }

  checkWinner = (pokemonCount) => {
    if (  pokemonCount.pink >= 4 && pokemonCount.green >= 3 &&
          pokemonCount.blue >= 2 && pokemonCount.red >= 2) {
      return true;
    } 
    else {
      return false;
    }
  }

  initialize = () => {
    this.boardService.boardInit(this.user.gameId, this.user.email)
    .subscribe( (resp: any) => {
      console.log( 'response', resp );
      this.users = resp.allUsers;
      this.winner = resp.allUsers.find( v => v.email === resp.winner.email );
    });
  }

  goHome = () => {
    this.router.navigate(['/home']).catch( console.error ) ;
  }

  printstate() {
    console.log( 'users', this.users );
    console.log( 'winner', this.winner );
    console.log( 'user', this.user );
  }

}
