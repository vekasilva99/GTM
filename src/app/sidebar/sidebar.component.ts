import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../Services/side-nav.service';
import {ListaEstadosService} from '../Services/lista-estados.service';
import { TipoDestinoService } from '../Services/tipo-destino.service';
import { DestinoService } from '../Services/destino.service';
import { tipoDestino } from '../destino/tipoDestino';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  tipoDestinos: tipoDestino[];
  constructor(public sideNavService: SideNavService, public listaEstadosService: ListaEstadosService, public tipoDestinoService: TipoDestinoService, public destinoService: DestinoService) { }

  ngOnInit() {
    this.tipoDestinoService.getOrders().subscribe(arr =>{
      arr.map(item=>{
        const dest:tipoDestino={
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        }

        this.tipoDestinos.push(dest);
      });
    });
  }

}
