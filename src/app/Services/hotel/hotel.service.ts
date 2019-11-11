import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/class/hotel/hotel';
import {Hab} from 'src/app/class/hotel/hotel';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotel: Hotel[] = [
    {
      id: 1, name: 'Eurobuilding Hotel & Suites Caracas', stars: [1, 2, 3, 4, 5], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
      address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
      hotelPictures: ['https://q-cf.bstatic.com/images/hotel/max1280x900/221/2212834.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/221/2212790.jpg',
        'https://q-cf.bstatic.com/images/hotel/max1280x900/463/46397689.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/463/46397679.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/463/46397680.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/463/46397677.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/463/46397676.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/144/14418866.jpg', 'https://pbs.twimg.com/media/DWKv8W0X4AA5Mno.jpg','https://r-cf.bstatic.com/images/hotel/max1280x900/221/2212807.jpg', 'https://q-cf.bstatic.com/images/hotel/max1280x900/237/2375336.jpg'],
      fullDay: true, fullDayPrice: 49, services: [{servicio: "Wifi", value: true}, {servicio:"Restaurante", value: true}, {servicio:"Piscina", value:true}, {servicio:"Parking", value:true}, {servicio:"Bar",value:true}, {servicio:"Traslado", value:true}], hab: [
          {i:0, nombre: 'Standard', nightCost: 90, tipoVista: 'Vista a la montana y a la ciudad', maxPersonas: 2, habPictures: ['https://www.hoteleuro.com/images/repositorio/imagen_52bc2d031b839.jpg'], comodidades: ['27m2', 'Caja Fuerte', 'Telefono', 'Aire Acondicionado', 'Canales por Cable', 'Servicio de despertador', 'Reloj Despertador', 'Habitaciones comunicadas disponibles', 'TV de Pantalla Plana', 'Insonorizacion'], numHab:5 },
          { i:1, nombre: 'Deluxe', nightCost: 100, tipoVista: 'Vista a la montana y a la ciudad', maxPersonas: 2, habPictures: ['https://www.hoteleuro.com/images/repositorio/imagen_52bc2ff006575.jpg'], comodidades: ['27m2', 'Caja Fuerte', 'Telefono', 'Aire Acondicionado', 'Canales por Cable', 'Servicio de despertador', 'Reloj Despertador', 'Habitaciones comunicadas disponibles', 'TV de Pantalla Plana', 'Insonorizacion'],numHab:5 }
          , { i:2,nombre: 'Business Class', nightCost: 140, tipoVista: 'Vista a la montana y a la ciudad', maxPersonas: 2, habPictures: ['https://www.hoteleuro.com/images/repositorio/imagen_52bc3037e708b.jpg'], comodidades: ['32m2', 'Caja Fuerte', 'Telefono', 'Aire Acondicionado', 'Canales por Cable', 'Servicio de despertador', 'Reloj Despertador', 'Habitaciones comunicadas disponibles', 'TV de Pantalla Plana', 'Insonorizacion', 'Minibar', 'Sofa', 'Acceso al salon executive'], numHab:5 },
          {i:3, nombre: 'First Class', nightCost: 180, tipoVista: 'Vista a la montana y a la ciudad', maxPersonas: 2, habPictures: ['https://www.hoteleuro.com/images/repositorio/imagen_532f02f7952fc.jpg'], comodidades: ['54m2', 'Caja Fuerte', 'Telefono', 'Aire Acondicionado', 'Canales por Cable', 'Servicio de despertador', 'Reloj Despertador', 'Habitaciones comunicadas disponibles', 'TV de Pantalla Plana', 'Insonorizacion', 'Reproductor de DVD', 'Reproductor de CD', 'Zona de Estar', 'Acceso al salon executive', 'Sofa'], numHab:5 },
        ]
    },
    {
      id: 2, name: 'Hotel Continental Altamira', stars: [1, 2, 3, 4], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
      address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
      hotelPictures: ['assets/Pictures/Continental-Altamira/General-1.jpg', 'assets/Pictures/Continental-Altamira/General-2.jpg',
        'assets/Pictures/Continental-Altamira/Business-1.jpg', 'assets/Pictures/Continental-Altamira/Business-2.jpg'],
      fullDay: false, fullDayPrice: 49, services: [{servicio: "Wifi", value: true}, {servicio:"Restaurante", value: true}, {servicio:"Piscina", value:true}, {servicio:"Parking", value:true}, {servicio:"Bar",value:true}, {servicio:"Traslado", value:true}], hab: []
    },
    {
      id: 3, name: 'Gran Melia Caracas', stars: [1, 2, 3, 4, 5], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
      address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
      hotelPictures: ['assets/Pictures/Gran-Melia/General-1.jpg', 'assets/Pictures/Gran-Melia/General-2.jpg',
        'assets/Pictures/Gran-Melia/Business-1.jpg', 'assets/Pictures/Gran-Melia/Business-2.jpg'],
      fullDay: true, fullDayPrice: 49, services: [{servicio: "Wifi", value: true}, {servicio:"Restaurante", value: true}, {servicio:"Piscina", value:true}, {servicio:"Parking", value:true}, {servicio:"Bar",value:true}, {servicio:"Traslado", value:true}], hab: []
    },
    {
      id: 4, name: 'Hotel Alex Caracas', stars: [1, 2, 3, 4], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
      address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
      hotelPictures: ['assets/Pictures/Alex/General-1.jpg', 'assets/Pictures/Alex/General-2.jpg',
        'assets/Pictures/Alex/Estandar-1.jpg', 'assets/Pictures/Alex/Estandar-2.jpg'],
      fullDay: true, fullDayPrice: 49, services: [{servicio: "Wifi", value: true}, {servicio:"Restaurante", value: true}, {servicio:"Piscina", value:true}, {servicio:"Parking", value:true}, {servicio:"Bar",value:true}, {servicio:"Traslado", value:true}], hab: []
    },
    {
      id: 5, name: 'Hotel CCCT Caracas', stars: [1, 2, 3, 4, 5], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
      address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
      hotelPictures: ['assets/Pictures/CCCT/General-1.jpg', 'assets/Pictures/CCCT/General-2.jpg',
        'assets/Pictures/CCCT/Suite-1.jpg', 'assets/Pictures/CCCT/Suite-2.jpg'],
      fullDay: true, fullDayPrice: 49, services: [{servicio: "Wifi", value: true}, {servicio:"Restaurante", value: true}, {servicio:"Piscina", value:true}, {servicio:"Parking", value:true}, {servicio:"Bar",value:true}, {servicio:"Traslado", value:true}], hab: []
    }
  ];

  constructor() { }

  getHotel(id: number): Observable<Hotel>{
    return of(this.hotel.find( Hotel => Hotel.id === id));
  }
 

}

