import { Component, OnInit } from '@angular/core';
import { AgregarService } from '../Services/agregar.service';
import { Hotel, Hab } from '../class/hotel/hotel';
import { HotelService } from '../Services/hotel/hotel.service';
import { HabitacionService } from '../Services/habitacion.service';
import { DisponibilidadService } from '../Services/disponibilidad.service';

@Component({
  selector: 'app-crud-habitacion',
  templateUrl: './crud-habitacion.component.html',
  styleUrls: ['./crud-habitacion.component.scss']
})
export class CrudHabitacionComponent implements OnInit {
  habs: Hab[] = [];
  hoteles: Hotel[] = [];
  loading = false;
  // tslint:disable-next-line: max-line-length
  constructor(public agregarService: AgregarService, private hotelService: HotelService, private habService: HabitacionService, private disService: DisponibilidadService) { }

  ngOnInit() {
    this.loading = false;
    this.habService.getOrders().subscribe(array => {
      array.map(item => {
        const hab: Hab = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        this.habs.push(hab);
        this.getHoteles(hab.hotel);
      });
      this.loading = false;
    });
  }

  getHoteles(id: string): void {
    this.hotelService.getHotel2(id).subscribe(array => {
      const hotel: Hotel = {
        id: array.payload.id,
        name: array.payload.get('name'),
        imagen: array.payload.get('imagen'),
        stars: array.payload.get('stars'),
        latitude: array.payload.get('latitude'),
        length: array.payload.get('length'),
        address: array.payload.get('address'),
        state: array.payload.get('state'),
        city: array.payload.get('city'),
        hotelPictures: array.payload.get('hotelPictures'),
        fullDay: array.payload.get('fullDay'),
        fullDayPrice: array.payload.get('fullDayPrice'),
        destino: array.payload.get('destino'),
        services: array.payload.get('services'),
        tipoDestino: array.payload.get('tipoDestino'),
      };
      this.hoteles.push(hotel);
    });
  }
}
