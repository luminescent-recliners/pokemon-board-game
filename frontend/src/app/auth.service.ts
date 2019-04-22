import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { map, withLatestFrom, switchMap, concatMap } from 'rxjs/operators';
import { from, observable, Observable, concat, of } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PokemonSocketService } from './pokemon-socket.service';

const debug = false;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    email: '',
    name: '',
    gameId: -1
  };

  isLoggedIn = false;

  constructor( 
    private cookieService: CookieService,
    // private location: Location,
    private http: HttpClient,
    private socket: PokemonSocketService,
    private router: Router
  ) { 
    if ( this.getSession() && !this.user.email ) {
      this.getUserInfo()
      .subscribe( (d: any) => {
        this.setUserInfo(d);
        if ( !d.result ) {
          this.cookieService.delete( 'pokemon.session' );
        }
        return d;
      });
    }
  }
  
  setUserInfo( d ) {
    if ( debug ) { console.log( 'setuserinfo() before', this.user, 'incoming:', d ); }
    this.user.email = d.email;
    this.user.name = d.name;
    this.isLoggedIn = d.result;
    if ( debug ) { console.log( 'setuserinfo() after', this.user ); }
  }

  reset() {
    this.user.email = '';
    this.user.name = '';
    this.user.gameId = -1;
    this.isLoggedIn = false;
  }

  getSession() {
    return this.cookieService.get( 'pokemon.session' );
  }

  isAuth( a: string ) {
    if ( debug ) { console.log( 'isAuth() from', a, this.isLoggedIn); }
    return this.isLoggedIn;
  }


  sendCode( email: string ) {
    return this.http.post( 'api/login', { email } ); // add .pipe( CatchError(  our error handler ) );

  }

  // Could not figure out how to subscribe to two observables sequentially!!
  // so converted to promise for now.
  verifyCode( email, code ) {
    if ( debug ) { console.log( 'auth.service verifyCode()', email, code ); }
    let verify;
    return this.handleVerifyCode( email, code ).toPromise()
    .then( v => {
      if ( debug ) { console.log( 'verifyCode() handleVerifyCode()', v); }
      verify = v;
      return this.getUserInfo().toPromise();
    })
    .then( user => {
      if ( debug ) { console.log( 'verifyCode() getUserINfo()', user ); }
      this.setUserInfo( user );
      return verify;
    });
  }

  getUserInfo() {
    if ( debug ) {  console.log( 'getUserInfo()', Date.now() ); }
    return this.http.get( 'api/user' );
  }

  handleVerifyCode( email, code ) {
    if ( debug ) { console.log( 'handleVerifyCode()', Date.now(), email, code ); }
    return this.http.post( 'api/login/verify', {
      email,
      code
    });
  }

  getCurrentUser() {
    if ( debug ) { console.log( 'authFactory getCurrentUser', this.user ); }
    if ( this.isLoggedIn ) { 
      return this.user;
    }
    else {
      this.router.navigate([ '/signin'] );
    }
  }

  logOut() {
    this.reset();
    this.cookieService.delete( 'pokemon.session' );
    this.router.navigate([ '/signin'] );
    this.socket.disconnect();
  }

  getGameId() {
    return this.user.gameId;
  }

  setGameId( id ) {
    this.user.gameId = id;
  }

  delGameId() {
    this.user.gameId = -1;
  }

}
