import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../Services/agregar.service';

@Component({
  selector: 'app-crud-hoteles',
  templateUrl: './crud-hoteles.component.html',
  styleUrls: ['./crud-hoteles.component.scss']
})
export class CrudHotelesComponent implements OnInit {

  constructor(public agregarService: AgregarService) { }

  ngOnInit() {
  }

}
