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

  users = [];
  winner;
  email = '';
  name = '';
  gameId = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private boardService: BoardFactoryService,
    private gameStore: GameStoreService,

  ) { 

  }

  ngOnInit() {
    this.email = this.auth.email.getValue();
    this.name = this.auth.name.getValue();
    this.gameId = this.auth.gameId.getValue();

    this.boardService.boardInit( this.gameId, this.email )
    .subscribe( (resp: any) => {
      this.users = resp.allUsers;
      this.winner = resp.allUsers.find( v => v.email === resp.winner.email );
      this.gameStore.setShowPlayerPanel( false );
      this.gameStore.showExitGame( false );
    });

  }

  printstate() {
    console.log( 'users', this.users );
    console.log( 'winner', this.winner );
    console.log( 'user', this.name, this.email, this.gameId );
  }

}
