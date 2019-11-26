import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../Services/side-nav.service';
import {ListaEstadosService} from '../Services/lista-estados.service';
import { TipoDestinoService } from '../Services/tipo-destino.service';
import { DestinoService } from '../Services/destino.service';
import { tipoDestino } from '../destino/tipoDestino';
import { element } from 'protractor';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  tipoDestinos: tipoDestino[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(public sideNavService: SideNavService, public listaEstadosService: ListaEstadosService, public tipoDestinoService: TipoDestinoService, public destinoService: DestinoService) { }

  ngOnInit() {

  function closeNav() {
      document.getElementById('myNav').style.width = '0%';
    }

  function rotateArrow() {
  document.getElementById('arrow').style.transform = 'rotate(30deg)';

  function myFunction() {
    if (document.getElementById('navbar-destinos').style.display === 'none') {
      document.getElementById('navbar-destinos').style.display = 'block';
    } else {
      document.getElementById('navbar-destinos').style.display = 'none';
    }
  }
}

  this.tipoDestinoService.getOrders().subscribe(arr => {
      arr.map(item => {
        const dest: tipoDestino = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        this.tipoDestinos.push(dest);
      });
    });
  }

}
