import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {

  //output para emitir valor a partir desse componente, estanciando o emissor de evento
  @Output() public emmitSearch:EventEmitter<string> = new EventEmitter();

  constructor(){
  }

  public search(value:string){
    this.emmitSearch.emit(value)
  } //emit para emitir o valor 
}
