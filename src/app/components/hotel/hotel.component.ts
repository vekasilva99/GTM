import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/class/hotel/hotel';
import { HotelService } from 'src/app/Services/hotel/hotel.service';
import { ciudad } from 'src/app/ciudad/ciudad';
import { CiudadService } from 'src/app/Services/ciudad.service';
import { estado } from 'src/app/estados/estado';
import { EstadoService } from 'src/app/Services/estado.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})

export class HotelComponent implements OnInit {

  hotels: Hotel[] = [];
  loading = false;
  ciudades: ciudad[] = [];
  estados: estado[] = [];
  estadosFilter: estado[] = [];

  constructor(private hotelService: HotelService, private ciudadService: CiudadService, private estadoService: EstadoService) {
    // this.hotels = h.hotel;
  }

  filterPost = '';  // Utilizado para que funcione el filtro de busqueda por Nombre.
  filterPost2 = '';

  ngOnInit() {
    this.loading = false;
    this.estadoService.getOrders().subscribe(array => {
      array.map(item => {
        const estado: estado = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        this.estadosFilter.push(estado);
      });

    });
    this.hotelService.getOrders().subscribe(array => {
      array.map(item => {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        this.hotels.push(hotel);
        this.getCiudades(hotel.city);
        this.getEstados(hotel.state);
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
