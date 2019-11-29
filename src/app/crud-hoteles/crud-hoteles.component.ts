import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../Services/agregar.service';
import { Hotel } from '../class/hotel/hotel';
import { HotelService } from '../Services/hotel/hotel.service';
import { EstadoService } from '../Services/estado.service';
import { CiudadService } from '../Services/ciudad.service';
import { DestinoService } from '../Services/destino.service';
import { estado } from '../estados/estado';
import { ciudad } from '../ciudad/ciudad';

@Component({
  selector: 'app-crud-hoteles',
  templateUrl: './crud-hoteles.component.html',
  styleUrls: ['./crud-hoteles.component.scss']
})
export class CrudHotelesComponent implements OnInit {
  hoteles: Hotel[] = [];
  loading = false;
  estados: estado[] = [];
  ciudades: ciudad[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(public agregarService: AgregarService, private hotelService: HotelService, private estadoService: EstadoService, private ciudadService: CiudadService, private destinoService: DestinoService) {

  }

  ngOnInit() {
    this.loading = false;
    this.hotelService.getOrders().subscribe(array => {
      array.map(item => {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        this.hoteles.push(hotel);
        this.getEstados(hotel.state);
        this.getCiudades(hotel.city);
      });
      this.loading = false;
    });
  }

  getEstados(id: string): void {

    this.estadoService.getEstado2(id).subscribe(array => {
      // tslint:disable-next-line: no-shadowed-variable
      const estado: estado = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        img: array.payload.get('img'),
        gastronomia: array.payload.get('gastronomia'),
        cultura: array.payload.get('cultura'),
        inicio: array.payload.get('inicio'),
      };
      this.estados.push(estado);
    });
  }

  getCiudades(id: string): void {

    this.ciudadService.getCiudadSeleccionada(id).subscribe(array => {
      // tslint:disable-next-line: no-shadowed-variable
      const ciudad: ciudad = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        estadoId: array.payload.get('estadoId'),
      };
      this.ciudades.push(ciudad);
    });
  }

}
