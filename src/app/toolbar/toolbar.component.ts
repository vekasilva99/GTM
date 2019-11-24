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
  //   window.onscroll = function() {scrollFunction(); };

  //   function scrollFunction() {
  // if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
  //   document.getElementById('header').style.backgroundColor = 'white';
  //   document.getElementById('menubutton').style.border = '2px solid #002e64';
  //   document.getElementById('menbutton').style.border = '2px solid #002e64';
  //   document.getElementById('menubutton').style.color = '#002e64';
  //   document.getElementById('menbutton').style.color = '#002e64';
  //   document.getElementById('menubutton').style.textShadow = '0px 1px 0px #002e64';
  //   document.getElementById('menbutton').style.textShadow = '0px 1px 0px #002e64';
  // } else {
  //   document.getElementById('header').style.backgroundColor = 'transparent';
  //   document.getElementById('menubutton').style.border = '2px solid #ffffff';
  //   document.getElementById('menbutton').style.border = '2px solid #ffffff';
  //   document.getElementById('menubutton').style.color = '#ffffff';
  //   document.getElementById('menbutton').style.color = '#ffffff';
  //   document.getElementById('menubutton').style.textShadow = '0px 1px 0px #f5f5f5';
  //   document.getElementById('menbutton').style.textShadow = '0px 1px 0px #f5f5f5';
  // }
}

}
