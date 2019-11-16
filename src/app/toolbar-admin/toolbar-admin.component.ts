import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../Services/side-nav.service';

@Component({
  selector: 'app-toolbar-admin',
  templateUrl: './toolbar-admin.component.html',
  styleUrls: ['./toolbar-admin.component.scss']
})
export class ToolbarAdminComponent implements OnInit {

  constructor(public sideNavService: SideNavService) { }

  ngOnInit() {
  }

}
