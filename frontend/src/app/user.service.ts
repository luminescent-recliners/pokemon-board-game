import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const debug = false;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { 
    
  }

  playerInit( gameId, userId, pokemon, sprite ) {
    return this.http.put('api/games/addpokemon', {
      gameId,
      userId,
      pokemon,
      sprite
    });
  }

  addGame( gameName, gameCreator, playerName ) {
    return this.http.post( 'api/game', {
      gameName,
      email: gameCreator,
      name: playerName
    });
  }
  
  getGames() {
    return this.http.get( 'api/games/getGames' );
  }
  
  movePlayer( nextPosition, user, currentPosition, gameId ) {
    return this.http.put( 'api/games/user/movePlayer', {
      nextPosition,
      currentPosition,
      user,
      gameId
    });
  }
  
  getUsers( gameId ) {
    return this.http.get( 'api/games/getusers', {
      params: {
        gameId
      }
    });
  }
  
}
