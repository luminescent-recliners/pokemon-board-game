import { Component, OnInit } from '@angular/core';

import { GeneralService } from '../general.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons = [];
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit() {
    this.general.getPokemon()
    .subscribe(( v: any ) => {
      this.pokemons = v.pokemon || [];
    });
  }


}
