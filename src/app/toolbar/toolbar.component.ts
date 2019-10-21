import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../Services/side-nav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public sideNavService: SideNavService) { 
  }

  ngOnInit() {
  }



}
