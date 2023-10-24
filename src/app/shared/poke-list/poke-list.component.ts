import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  //logica de busca de pokemon
  public getAllPokemons:any;
  private setAllPokemons:any;
  // get e set

  public apiError:boolean = false;

  //instanciar a pokeApi Service
  constructor(private pokeApiService:PokeApiService) { 
  }

  // A partir do service
  ngOnInit():void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res=>{ //ambos vão receber os valores do array
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error=>{
        this.apiError = true;
    })
  }

  // getSearch ele recebe o value do output
  public getSearch(value:string){
    const filter = this.setAllPokemons.filter((res:any)=>{ // um vai setar o valor, ou vai segurar o valor
            //res.nome(nome do pokemon). indexof(varificar se as primeiras letras do pokemon é igual o valor digitado)
      return !res.name.indexOf(value.toLocaleLowerCase());
    })
  this.getAllPokemons=filter;
  }
}
