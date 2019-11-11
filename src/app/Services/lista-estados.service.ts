import { Injectable } from '@angular/core';
import {ListaEstadosComponent} from '../lista-estados/lista-estados.component';

@Injectable({
  providedIn: 'root'
})
export class ListaEstadosService {
  hideLista: boolean = true;

  constructor() { }

  toggleLista(): void{
    this.hideLista= !this.hideLista;
  }
}
