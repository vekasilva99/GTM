import { Component, OnInit } from '@angular/core';
import {estado} from './estado';
import {ESTADOS} from './mock-estados';
import {EstadoService} from '../Services/estado.service';


@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  estados: estado[];
  selectedEstado:estado;

  constructor( private estadoService: EstadoService) { 

  
  }

  ngOnInit() {
    this.getEstados();
  }

  getEstados(){
  this.estadoService.getEstados().subscribe(estado => (this.estados=estado));
  }

  onSelect(estado: estado){
    this.selectedEstado=estado;
    console.log(this.selectedEstado);
  }

}
