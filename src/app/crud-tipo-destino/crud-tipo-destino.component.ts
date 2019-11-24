import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../Services/agregar.service';
import { tipoDestino } from '../destino/destino';
import { TipoDestinoService } from '../Services/tipo-destino.service';

@Component({
  selector: 'app-crud-tipo-destino',
  templateUrl: './crud-tipo-destino.component.html',
  styleUrls: ['./crud-tipo-destino.component.scss']
})
export class CrudTipoDestinoComponent implements OnInit {
  tipoDestinos: tipoDestino[]=[];
  loading: boolean = false;
  constructor(public agregarService: AgregarService, private tipoDestinoService: TipoDestinoService) { }

  ngOnInit() {
    this.loading = false;
    this.tipoDestinoService.getOrders().subscribe(arr =>{
      arr.map(item=>{
        const dest:tipoDestino={
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.tipoDestinos.push(dest);
      });
      this.loading = false;
    });
  
  }

  deleteTipoDestino(docId:string){
    this.tipoDestinoService.deleteTipoDestino(docId);
  }

}
