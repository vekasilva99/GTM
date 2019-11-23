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
  ciudades: ciudad[]=[];
 
  
  constructor(public agregarService: AgregarService,private ciudadService: CiudadService, private estadoService: EstadoService) { }

  ngOnInit() {
    this.ciudadService.getOrders().subscribe(array=>{
      array.map(item => {
        const ciudad:ciudad={
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.ciudades.push(ciudad);
      });
    });
    
  }

  deleteCiudaad(docId:string){
    this.ciudadService.deleteCiudad(docId);
  }



}
