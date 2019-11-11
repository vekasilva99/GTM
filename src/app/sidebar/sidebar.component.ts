import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../Services/side-nav.service';
import {ListaEstadosService} from '../Services/lista-estados.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public sideNavService: SideNavService, public listaEstadosService: ListaEstadosService) { }

  ngOnInit() {
  }

}
