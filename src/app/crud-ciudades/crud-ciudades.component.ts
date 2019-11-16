import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../Services/agregar.service';
import {CiudadService} from '../Services/ciudad.service';
import {ciudad} from '../ciudad/ciudad';
import { EstadoService } from '../Services/estado.service';
import { estado } from '../estados/estado';


@Component({
  selector: 'app-crud-ciudades',
  templateUrl: './crud-ciudades.component.html',
  styleUrls: ['./crud-ciudades.component.scss']
})
export class CrudCiudadesComponent implements OnInit {
  ciudades: ciudad[];
 
  
  constructor(public agregarService: AgregarService,private ciudadService: CiudadService, private estadoService: EstadoService) { }

  ngOnInit() {
    this.ciudades=this.ciudadService.getOrders();
    
  }

  deleteCiudaad(docId:string){
    this.ciudadService.deleteCiudad(docId);
  }



}
