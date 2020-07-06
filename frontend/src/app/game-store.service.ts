import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { BoardFactoryService } from './board-factory.service';

@Injectable({
  providedIn: 'root'
})
export class GameStoreService {

  allUsers = new BehaviorSubject( [] );
  showPlayerPanel = new BehaviorSubject( false );
  showExitGameButton = new BehaviorSubject( false );

  constructor(
    private http: HttpClient,
    private boardService: BoardFactoryService,
  ) { 

  }

  setupPlayers( gameId, useremail ) {
    this.boardService.boardInit( gameId, useremail)
    .subscribe((data: any) => {
      this.setAllUsers( data.allUsers || [] );
      if ( data.winner ) { 
        this.setShowPlayerPanel( false ); 
      }
      else {
        this.setShowPlayerPanel( data.gameStarted || false );
      }
    });
  }

  setAllUsers( newAllUsers ) {
    this.allUsers.next( newAllUsers );
  }

  setShowPlayerPanel( show: boolean ) {
    this.showPlayerPanel.next( show );
  }

  showExitGame( ingame: boolean ) {
    this.showExitGameButton.next( ingame );
  }

}
