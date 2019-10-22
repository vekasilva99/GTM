import { Component, OnInit , Input} from '@angular/core';
import {estado} from '../estados/estado';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {EstadoService} from '../Services/estado.service';

@Component({
  selector: 'app-estado-details',
  templateUrl: './estado-details.component.html',
  styleUrls: ['./estado-details.component.scss']
})
export class EstadoDetailsComponent implements OnInit {
 estado: estado;
  constructor(private route:ActivatedRoute , private estadoService: EstadoService , private location:Location) { }

  ngOnInit() {
    this.getEstado();
  }

  getEstado(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.estadoService.getEstado(id).subscribe(estado => this.estado = estado);
  }

}
