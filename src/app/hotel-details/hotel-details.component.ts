import { Component, OnInit } from '@angular/core';
import { Hotel, Hab } from 'src/app/class/hotel/hotel';
import { HotelService } from 'src/app/Services/hotel/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { estado } from '../estados/estado';
import { ciudad } from '../ciudad/ciudad';
import { CiudadService } from '../Services/ciudad.service';
import { EstadoService } from '../Services/estado.service';
import { HabitacionService } from '../Services/habitacion.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  hotel: Hotel = null;
  estado: estado = null;
  ciudad: ciudad = null;
  habsFiltradas: Hab[] = [];

  constructor(private route: ActivatedRoute, private hotelService: HotelService, private location: Location, private ciudadService: CiudadService, private estadoService: EstadoService, private habService: HabitacionService) { }

  ngOnInit() {
    this.getHotel();
    this.getHabsFiltradas();




  }

  // getHotel(): void{
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.hotelService.getHotel2(id).subscribe(Hotel => this.hotel = Hotel);

  // }

  getHabsFiltradas(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.habService.getOrders().subscribe(array => {
      array.map(item => {
        const hab: Hab = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        if (id === hab.hotel) {
          this.habsFiltradas.push(hab);
        }
      });
    });
  }

  getHotel(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel2(id).subscribe(array => {

      const hotel: Hotel = {
        id: array.payload.id,
        name: array.payload.get('name'),
        imagen: array.payload.get('imagen'),
        stars: array.payload.get('stars'),
        state: array.payload.get('state'),
        length: array.payload.get('length'),
        latitude: array.payload.get('latitud'),
        address: array.payload.get('address'),
        city: array.payload.get('city'),
        fullDay: array.payload.get('fullDay'),
        destino: array.payload.get('destiny'),
        tipoDestino: array.payload.get('tipoDestiny'),
        services: array.payload.get('services'),
        fullDayPrice: array.payload.get('fullDayPrice'),
        hotelPictures: array.payload.get('hotelPictures'),

      }
      this.hotel = hotel;
      this.getEstados(hotel.state);
      this.getCiudades(hotel.city);
      this.getHabs(hotel.id);

    });

  }

  getHabs(id: string) {
    this.habService.getHab(id).subscribe(array => {
      const hab: Hab = {
        id: array.payload.id,
        nombre: array.payload.get('nombre'),
        imagen: array.payload.get('imagen'),
        nightCost: array.payload.get('nightCost'),
        tipoVista: array.payload.get('tipoVista'),
        maxPersonas: array.payload.get('maxPersonas'),
        habPictures:array.payload.get('habPictures'),
        comodidades: array.payload.get('comodidades'),
        numHab: array.payload.get('numHab'),
        hotel: array.payload.get('hotel'),
        disponibilidad: array.payload.get('disponibilidad'),
      }

      if(hab.hotel===id){
        this.habsFiltradas.push(hab);
      }

    })
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


      this.estado = estado;





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


      this.ciudad = ciudad;





    });

  }



}
