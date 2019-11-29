import { Component, OnInit } from '@angular/core';
import { estado } from '../estados/estado';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TipoDestinoService } from '../Services/tipo-destino.service';
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

  tipoDestino: tipoDestino = null;
  destinosFiltrados: destino[] = [];
  estados: estado[] = [];
  ciudades: ciudad[] = [];
  destinos: destino[] = [];
  estadosfil: estado[] = [];

 

  constructor(private route: ActivatedRoute, private tipoDestinoService: TipoDestinoService, private location: Location, public destinoService: DestinoService, private estadoService: EstadoService, private ciudadService: CiudadService) { }

  ngOnInit() {
    this.getTipoDestino();
    // this.destinosFiltrados = this.destinoService.getDestinosFiltrados(this.tipoDestino.id);
    this.getDestinosFiltrados();
    this.getEstados();
    this.getCiudades();
    
    
 

    



  }

  getDestinosFiltrados(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.destinoService.getDestinosFiltrados(id);
    this.destinosFiltrados = this.destinoService.filterDestinos;
  }

  getTipoDestino(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tipoDestinoService.getTipoDestino(id).subscribe(x => {

      const dest: tipoDestino = {
        id: x.payload.id,
        nombre: x.payload.get('nombre'),
        imagen: x.payload.get('imagen'),
        info: x.payload.get('info'),
        
      }

      this.tipoDestino = dest;
    });

    this.destinoService.getDestinos().subscribe(arr => {
      arr.map(x => {
        const dest: destino = {
          id: x.payload.doc.id,
          ...x.payload.doc.data()
        }

        this.destinos.push(dest);
      });
    });

    



  }

 

  getEstados(): void{
    
    for(let i=0; i<this.destinosFiltrados.length; i++){
      const id=this.destinosFiltrados[i].estadoId;
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
        
        this.estados[i]=estado;
       
  
        

  
      });

      
    }


  }

  getCiudades(): void{
    
    for(let i=0; i<this.destinosFiltrados.length; i++){
      const id=this.destinosFiltrados[i].ciudad;
      this.ciudadService.getCiudadSeleccionada(id).subscribe(array =>{
      
        const ciudad: ciudad ={
          id: array.payload.id,
          nombre: array.payload.get('nombre'),
          estadoId: array.payload.get('estadoId'),
          imagen: array.payload.get('imagen'),
        }
        
        this.ciudades[i]=ciudad;
       
  
        

  
      });

      
    }


  }


}
