import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameDashboardService {

  constructor(
    private http: HttpClient
  ) { 

  }

  getPlayerOptions( roll, userPosition, gameId, userId ) {
    return this.http.get( '/api/games/playerOptions', {
      params: {
        roll,
        gameId,
        userId,
        userPosition
      }
    });
  }
}
