import { Component, OnInit, OnChanges } from '@angular/core';

import { GeneralService } from '../general.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  search = '';
  total = 0;
  page = 0;
  pokemons = [];
  pages = 0;
  count = 9;

  constructor(
    private general: GeneralService
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    const start = this.page * this.count;
    this.general.getPokemon( start, this.count, this.search )
    .subscribe( ( v: any ) => {
      this.pokemons = v.pokemon || [];
      this.total = v.total;
      this.pages = Math.ceil( this.total / this.count );
    });
  }

  searchInput() {
    this.page = 0;
    this.getPokemon();
  }

  back() {
    if ( this.page > 0 ) {
      this.page = this.page - 1;
      this.getPokemon();
    }
  }

  forward() {
    if ( ( this.page + 1 ) < this.pages ) {
      this.page = this.page + 1;
      this.getPokemon();
    }
  }

  printstate() {
    console.log( 'search', this.search );
    console.log( 'total', this.total );
    console.log( 'page', this.page );
    console.log( 'pages', this.pages );
  }


}
