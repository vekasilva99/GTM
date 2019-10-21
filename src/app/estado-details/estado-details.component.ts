import { Component, OnInit , Input} from '@angular/core';
import {estado} from '../estados/estado';

@Component({
  selector: 'app-estado-details',
  templateUrl: './estado-details.component.html',
  styleUrls: ['./estado-details.component.scss']
})
export class EstadoDetailsComponent implements OnInit {
@Input() estado: estado;
  constructor() { }

  ngOnInit() {
  }

}
