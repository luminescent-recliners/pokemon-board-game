import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemon( start, count, search ) {
    return this.http.get( `api/pokemon?start=${start}&count=${count}&search=${search}` );
  }


}
