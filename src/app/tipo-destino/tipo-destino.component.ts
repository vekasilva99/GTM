import { Component, OnInit } from '@angular/core';
import {estado} from '../estados/estado';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {TipoDestinoService} from '../Services/tipo-destino.service';
import { tipoDestino, destino } from '../destino/destino';
import { DestinoService } from '../Services/destino.service';
import { EstadoService } from '../Services/estado.service';
import { CiudadService } from '../Services/ciudad.service';
import { ciudad } from '../ciudad/ciudad';

@Component({
  selector: 'app-tipo-destino',
  templateUrl: './tipo-destino.component.html',
  styleUrls: ['./tipo-destino.component.scss']
})
export class TipoDestinoComponent implements OnInit {
  tipoDestino: tipoDestino =null;
  destinosFiltrados:destino[]=[];
  estados: estado[]=[];
  ciudades: ciudad[]=[];
  destinos: destino[]=[];

  constructor(private route:ActivatedRoute , private tipoDestinoService: TipoDestinoService , private location:Location, public destinoService: DestinoService,  private estadoService: EstadoService,  private ciudadService: CiudadService ) { }

  ngOnInit() {
    this.getTipoDestino();
    
    this.destinosFiltrados=this.destinoService.filterDestinos;
    this.getEstados();
    this.getCiudades();
    
   
  
    
  }

  getTipoDestino(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.tipoDestinoService.getTipoDestino(id).subscribe(x=>{
      
      const dest: tipoDestino = {
        id: x.payload.id,
        nombre: x.payload.get('nombre')
      }

      this.tipoDestino=dest;
    });
    
    this.destinoService.getDestinos().subscribe(arr=>{
      arr.map(x=>{
        const dest:destino={
          id:x.payload.doc.id,
          ...x.payload.doc.data()
        }

        this.destinos.push(dest);
      });
    });

    console.log('Dest ',this.destinos);
    
    

  }

 

  getEstados(): void{
    for(let i of this.destinos){
      this.estadoService.getEstadoSeleccionado(i.estadoId);
      this.estados.push(this.estadoService.estadoSeleccionado);

    };

  }

  getCiudades(): void{
    for(let j of this.destinos){
      this.ciudadService.getCiudadSeleccionada(j.ciudad);
      this.ciudades.push(this.ciudadService.ciudadSeleccionada);

    };

  }

}
