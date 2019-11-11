import { Component, OnInit } from '@angular/core';
import {estado} from '../../app/estados/estado';
import {ESTADOS} from  '../../app/estados/mock-estados';
import {EstadoService} from '../Services/estado.service';
import {ListaEstadosService} from '../Services/lista-estados.service';


@Component({
  selector: 'app-lista-estados',
  templateUrl: './lista-estados.component.html',
  styleUrls: ['./lista-estados.component.scss']
})
export class ListaEstadosComponent implements OnInit {

  estados: estado[];
  
  constructor(private estadoService: EstadoService, public listaEstadosService: ListaEstadosService) { }

  ngOnInit() {
    this.getEstados();
  }

  getEstados(){
    this.estadoService.getEstados().subscribe(estado => (this.estados=estado));
    }

}
