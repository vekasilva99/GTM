import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SideNavService } from '../Services/side-nav.service';

@Component({
  selector: 'app-toolbar-admin',
  templateUrl: './toolbar-admin.component.html',
  styleUrls: ['./toolbar-admin.component.scss']
})
export class ToolbarAdminComponent implements OnInit {

//AuthService para que funcione el botón de Logout, SideNavService para que funcione el side bar.
  constructor(private  authService: AuthService, public sideNavService: SideNavService) {} 

  ngOnInit() {}

}
