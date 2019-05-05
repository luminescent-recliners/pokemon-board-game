import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.css']
})
export class PlayerPanelComponent implements OnInit {

  pokemonPartyBoxSize;
  spriteSize;
  pokemonPartySize;
  pokemon = {
    blue: [],
    red: [],
    green: [],
    pink: [],
    all: []
  };
  
  sizeofcircle;

  trySize = 20;

  infoPokemon;

  @Input() micropanel = false;
  micropanelbacground;
  barGraphWidth = {
    pink: this.santizer.bypassSecurityTrustStyle('width:0px;'),
    green: this.santizer.bypassSecurityTrustStyle('width:0px;'),
    blue: this.santizer.bypassSecurityTrustStyle('width:0px;'),
    red: this.santizer.bypassSecurityTrustStyle('width:0px;')
  };

  @Input() user;
  
  @Input() minipanel = false;

  @Input() debug = false;

  @Input() circlepanelwin = false;

  @Input() circlepanelother = false;

  constructor(
    private santizer: DomSanitizer
  ) { 
  }

  ngOnInit() {
    this.setup();
  }

  setup( s? ) {
    this.sizeofcircle = this.getSize();
    this.pokemonPartyBoxSize = s || this.getSize();
    this.spriteSize = this.pokemonPartyBoxSize * 4;
    this.pokemonPartySize = Math.round( this.pokemonPartyBoxSize * 0.6 );
    this.pokemon = {
      blue: [],
      red: [],
      green: [],
      pink: [],
      all: []
    };
    const numpokemons = this.user.party.length;
    const angle = 360 / numpokemons;
    this.user.party.forEach( (p: any, i: number ) => {
      p.style = this.santizer.bypassSecurityTrustStyle(`
        width:${this.pokemonPartyBoxSize}px; 
        height:${this.pokemonPartyBoxSize}px; 
        border-radius:50%;
        position:relative;
      `);
      p.imgstyle = this.santizer.bypassSecurityTrustStyle(`
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left:-${this.pokemonPartySize / 2}px;
        margin-top:-${this.pokemonPartySize / 2}px;
      `);

      if ( this.circlepanelwin ) {
        p.relpos = this.santizer.bypassSecurityTrustStyle(`
          top:${Math.sin( angle * i * Math.PI / 180) * 120}px;
          left:${ Math.cos( angle * i * Math.PI / 180) * 120}px;
          transform-origin: ${-Math.cos( angle * i * Math.PI / 180) * 120}px ${-Math.sin( angle * i * Math.PI / 180) * 120}px;
        `);
      }
      if ( this.circlepanelother ) {
        p.relpos = this.santizer.bypassSecurityTrustStyle(`
          top:${Math.sin( angle * i * Math.PI / 180) * 60}px;
          left:${ Math.cos( angle * i * Math.PI / 180) * 60}px;
          transform-origin: ${-Math.cos( angle * i * Math.PI / 180) * 60}px ${-Math.sin( angle * i * Math.PI / 180) * 60}px;
        `);
      }

      if ( p.color === 'starter' ) {
        this.pokemon.all.push( p );
      }
      else {
        this.pokemon[ p.color ].push( p );
      }
    });
    this.pokemon.all = this.pokemon.all.concat( 
      this.pokemon.pink.concat( 
        this.pokemon.green.concat( 
          this.pokemon.blue.concat( this.pokemon.red ) 
        ) 
      ) 
    );
    this.micropanelbacground = this.addBackground();
  }

  getSize() {
    const l = this.user.party.length;
    if ( l <= 9 ) { return 30; }
    else if ( l <= 15 ) { return 23; }
    else if ( l <= 20 ) { return 22; }
    else if ( l <= 30 ) { return 17; }
    else if ( l <= 42 ) { return 15; }
    else if ( l <= 56 ) { return 13; }
    else { return 10; }
  }

  resize() {
    this.setup( this.trySize );
  }

  removeone() {
    this.user.party.shift();
    this.setup();
  }

  addBackground() {
    const win = {
      pink: 4,
      green: 3,
      blue: 2,
      red: 2
    };
    const data = {
      pink: { count: this.pokemon.pink.length, total: win.pink },
      green: { count: this.pokemon.green.length, total: win.green },
      blue: { count: this.pokemon.blue.length, total: win.blue },
      red: { count: this.pokemon.red.length, total: win.red },
    };

    const backgroundColor = 'silver';
    const dims = { width: 88 };
    const colorWidth = ( dims.width / 4);

    let pinkColor = ( ( data.pink.count / data.pink.total ) * colorWidth ) / dims.width * 100;
    pinkColor = pinkColor <= 25 ? pinkColor : 25;
    let greenColor = ( ( data.green.count / data.green.total ) * colorWidth ) / dims.width * 100;
    greenColor = greenColor <= 25 ? greenColor : 25;
    let blueColor = ( ( data.blue.count / data.blue.total ) * colorWidth ) / dims.width * 100;
    blueColor = blueColor <= 25 ? blueColor : 25;
    let redColor = ( ( data.red.count / data.red.total ) * colorWidth ) / dims.width * 100;
    redColor = redColor <= 25 ? redColor : 25;
    
    this.barGraphWidth.pink = this.santizer.bypassSecurityTrustStyle( `width:${data.pink.count / data.pink.total * 80}px;` );
    this.barGraphWidth.green = this.santizer.bypassSecurityTrustStyle(`width:${data.green.count / data.green.total * 80}px;`);
    this.barGraphWidth.blue = this.santizer.bypassSecurityTrustStyle(`width:${data.blue.count / data.blue.total * 80}px;`);
    this.barGraphWidth.red = this.santizer.bypassSecurityTrustStyle( `width:${data.red.count / data.red.total * 80}px;` );

    const backgroundString = `linear-gradient( to right, 
      rgba(255,192,203,1) ${pinkColor}%, ${backgroundColor} ${pinkColor}% ${25}%,
      rgba(0,128,0,1) ${25}% ${25 + greenColor}%, ${backgroundColor} ${25 + greenColor}% ${50}%,
      rgba(0,0,255,1) ${50}% ${50 + blueColor}%, ${backgroundColor} ${50 + blueColor}% ${75}%,
      rgba(255,0,0,1) ${75}% ${75 + redColor}%, ${backgroundColor} ${75 + redColor}% ${100}% 
      )`;

    return this.santizer.bypassSecurityTrustStyle( `background:${ backgroundString };`);
  }

  printstate( v ) {
    if ( v ) { console.log( 'from', v ); }
    console.log( 'user', this.user );
    if ( this.user ) { console.log( 'user.sprite', this.user.sprite ); }
    console.log( 'minipanel', this.minipanel );
    console.log( 'pokemon', this.pokemon );
  }

  showInfo( p ) {
    this.infoPokemon = p;
  }
  

}

/* some cool effects we can investigate later
transform-origin: ${Math.cos( angle * i * Math.PI / 180) * 100}px ${Math.sin( angle * i * Math.PI / 180) * 100}px;
transform-origin: ${Math.sin( angle * i * Math.PI / 180) * 150}px ${Math.cos( angle * i * Math.PI / 180) * 150}px;
*/
