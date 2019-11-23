import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../Services/agregar.service';
import { estado } from '../estados/estado';
import { EstadoService } from '../Services/estado.service';
import { ModificarService } from '../Services/modificar.service';

@Component({
  selector: 'app-crud-estados',
  templateUrl: './crud-estados.component.html',
  styleUrls: ['./crud-estados.component.scss']
})
export class CrudEstadosComponent implements OnInit {
  estados: estado[]=[];
  loading: boolean = false;
  constructor(public agregarService: AgregarService, private estadoService: EstadoService, public modificarService:ModificarService) { }

  ngOnInit() {
    this.loading = false;
    this.estadoService.getOrders().subscribe(array => {
      array.map(item => {
        const estado: estado = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.estados.push(estado);

      });
      this.loading = false;
    });


  }

  deleteEstado(docId: string) {
    this.estadoService.deleteEstado(docId);
  }


}
