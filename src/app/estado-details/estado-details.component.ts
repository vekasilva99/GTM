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
 estado: estado=null;
 estados: estado[];
  constructor(private route:ActivatedRoute , private estadoService: EstadoService , private location:Location) { }

  ngOnInit() {
    // this.getEstado();
    this.getEstado2();
   
  }

  getEstado(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.estadoService.getEstado(id).subscribe(estado => {
      this.estado = estado;
    });
    
  }

  getEstado2(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.estadoService.getEstado2(id).subscribe(array =>{
      
      const estado: estado ={
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        img: array.payload.get('img'),
        gastronomia: array.payload.get('gastronomia'),
        cultura: array.payload.get('cultura'),
        inicio: array.payload.get('inicio'),
      }

      this.estado=estado;

    });
    
  }


}
