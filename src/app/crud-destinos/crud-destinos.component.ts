import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../Services/agregar.service';
import {destino} from '../destino/destino';
import {DestinoService} from '../Services/destino.service';

@Component({
  selector: 'app-crud-destinos',
  templateUrl: './crud-destinos.component.html',
  styleUrls: ['./crud-destinos.component.scss']
})
export class CrudDestinosComponent implements OnInit {
  destinos: destino[]=[];
  loading: boolean = false;
  
  constructor(public agregarService: AgregarService, private destinoService: DestinoService) { }

  ngOnInit() {
    // this.destinos=this.destinoService.getOrders();
    this.loading = false;
    this.destinoService.getOrders().subscribe(array => {
      array.map(item => {
        const destino: destino = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.destinos.push(destino);

      });
      this.loading = false;
    });

    console.log(this.destinos);
    
  }

  
  deleteDestino(docId:string){
    this.destinoService.deleteDestino(docId);
  }
}
