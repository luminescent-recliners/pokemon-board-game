import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthService } from '../auth.service';
import { PokemonSocketService } from '../pokemon-socket.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  message = '';
  result = false;
  email = '';
  phase: 'sendCode' | 'loggedIn' | 'verifyCode' | 'error' = 'sendCode';
  code = '';

  constructor(
    private auth: AuthService,
    private socket: PokemonSocketService,
    private router: Router
  ) { 
  }

  ngOnInit() {
     // TODO: do this without a timeout basically giving it time for auth to get data and component to update
    setTimeout( () => this.checkAuth(), 0);
  }


  checkAuth() {
    if ( this.auth.isAuth('signin') ) {
      this.phase = 'loggedIn';
      this.router.navigate([ '/home' ]);
    }
  }

  sendCode() {
    this.auth.sendCode( this.email )
    .subscribe( ( res: any ) => {
      this.message = res.message;
      this.result = res.result;
      if ( res.result ) {
        this.phase = 'verifyCode';
      }
    });
  }

  verifyCode = () => {
    this.auth.verifyCode( this.email, this.code )
    .then(( res: any ) => {
      this.message = res.message;
      this.result = res.result;
      if ( this.result ) {
        this.phase = 'loggedIn';
        this.router.navigate([ '/home' ])
        .catch( console.error );
      }
    });
  }

  printstate() {
    console.log( '\nisAuth()', this.auth.isAuth( 'siginin printstate' ) );
    console.log( 'getCurrentUser()', this.auth.getCurrentUser() );
    console.log( 'isLoggedIn', this.auth.isLoggedIn );
    console.log( 'phase', this.phase );
    console.log( 'email', this.email );
  }
}
