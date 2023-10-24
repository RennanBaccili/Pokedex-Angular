import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http:HttpClient) {}

  //olhar documentação do tap


  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe( //usamos http get, com a url da poke api
      tap( res => res ), //ela primeiro retorna um obj
      tap( res => { // a partir da url do obj, pegamos outro valor
        res.results.map( (resPokemons: any) => { //res.results é a parte do objeto que ta os pokemons
          //utilizo o map para pegar todo array de results e criar outro
          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        })
      })
    )
  }

  public apiGetPokemon( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    )
  }

}
