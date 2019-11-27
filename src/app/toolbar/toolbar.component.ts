import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../Services/side-nav.service';
import {ListaEstadosService} from '../Services/lista-estados.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public sideNavService: SideNavService, public listaEstadosService: ListaEstadosService) {
  }


  ngOnInit() {

    // tslint:disable-next-line: only-arrow-functions
    window.onscroll = function() {scrollFunction(); };

    function scrollFunction() {
      if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.getElementById('menu-bar').style.display = 'none';
        document.getElementById('menu-bar-nav').style.display = 'flex';
      } else {
        document.getElementById('menu-bar').style.display = 'flex';
        document.getElementById('menu-bar-nav').style.display = 'none';
      }
    }
  }
}
