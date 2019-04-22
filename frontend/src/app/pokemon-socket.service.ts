import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

const debug = false;

@Injectable({
  providedIn: 'root'
})
export class PokemonSocketService {
  
  private socket;

  private listeners = {};

  private url = 'http://localhost:3000'; // TODO configure this dynamically

  constructor() {
    this.socket = io( this.url );
  }

  register( event, cb ) {
    if ( this.listeners[ event ] !== cb ) {
      this.socket.on( event, cb );
      this.listeners[ event ] = cb;
    }
    if ( debug ) { this.log(); }
  }

  get isConnected() {
    return this.socket.connected;
  }

  disconnect() {
    if ( this.socket.connected ) {
      this.socket.disconnect();
    }
  }

  emit( event, data ) {
    this.socket.emit( event, data );
  }

  log() {
    const keys = Object.keys( this.listeners );
    console.log( this.listeners );
    console.log( 'Keys', keys.length, keys );
  }


  

}
