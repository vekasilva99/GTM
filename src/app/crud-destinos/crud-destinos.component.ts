import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../Services/agregar.service';
import { destino, tipoDestino } from '../destino/destino';
import { DestinoService } from '../Services/destino.service';
import { estado } from '../estados/estado'
import { ciudad } from '../ciudad/ciudad';
import { EstadoService } from '../Services/estado.service';
import { CiudadService } from '../Services/ciudad.service';
import { TipoDestinoService } from '../Services/tipo-destino.service';

@Component({
  selector: 'app-crud-destinos',
  templateUrl: './crud-destinos.component.html',
  styleUrls: ['./crud-destinos.component.scss']
})
export class CrudDestinosComponent implements OnInit {
  destinos: destino[] = [];
  loading: boolean = false;
  tipoDestinos: tipoDestino[] = [];
  estados: estado[] = [];
  ciudades: ciudad[] = [];

  constructor(public agregarService: AgregarService, private destinoService: DestinoService, private estadoService: EstadoService, private ciudadService: CiudadService, private tipoDestinoService: TipoDestinoService) { }

  ngOnInit() {
    // this.destinos=this.destinoService.getOrders();
    this.loading = false;
    this.destinoService.getOrders().subscribe(array => {
      array.map(item => {
        const destino: destino = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.destinos.push(destino);
        this.getEstados(destino.estadoId);
        this.getCiudades(destino.ciudad);
        this.getTipoDeDestino(destino.tipoDestinoId);
      });
      this.loading = false;
    });
    console.log(this.estados);
  }


  deleteDestino(docId: string) {
    this.destinoService.deleteDestino(docId);
  }

  getEstados(id: string): void {

    this.estadoService.getEstado2(id).subscribe(array => {

      const estado: estado = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        img: array.payload.get('img'),
        gastronomia: array.payload.get('gastronomia'),
        cultura: array.payload.get('cultura'),
        inicio: array.payload.get('inicio'),
      }
      this.estados.push(estado);
    });
  }

  getCiudades(id: string): void {

    this.ciudadService.getCiudadSeleccionada(id).subscribe(array => {

      const ciudad: ciudad = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        estadoId: array.payload.get('estadoId'),
      }
      this.ciudades.push(ciudad);
    });

  }

  getTipoDeDestino(id: string): void {

    this.tipoDestinoService.getTipoDestino(id).subscribe(array => {

      const tipoDestino: tipoDestino = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('ímagen'),
        info: array.payload.get('info'),
      }
      this.tipoDestinos.push(tipoDestino);
    });
  }
}
