import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/class/hotel/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotel: Hotel[] = [
    { id: 1, name: 'Eurobuilding Hotel & Suites Caracas', stars: [1, 2, 3, 4, 5], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  hotelPictures: ['assets/Pictures/Eurobuilding-Caracas/General-1.jpg', 'assets/Pictures/Eurobuilding-Caracas/General-2.jpg',
  'assets/Pictures/Eurobuilding-Caracas/Business-1.jpg', 'assets/Pictures/Eurobuilding-Caracas/Business-2.jpg'],
  fullDay: true, fullDayPrice: 49, services: ['Restaurantes: Sol y Sombra, Hanami, Jardin Cristal', 'Bar', 'Parking', 'WiFi gratis',
  'Traslado aereopuerto', 'Piscina'], hab: []
},
  { id: 2, name: 'Hotel Continental Altamira', stars: [1, 2, 3, 4], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  hotelPictures: ['assets/Pictures/Continental-Altamira/General-1.jpg', 'assets/Pictures/Continental-Altamira/General-2.jpg',
  'assets/Pictures/Continental-Altamira/Business-1.jpg', 'assets/Pictures/Continental-Altamira/Business-2.jpg'],
  fullDay: false, fullDayPrice: 49, services: ['Restaurantes: Sol y Sombra, Hanami, Jardin Cristal', 'Bar', 'Parking', 'WiFi gratis',
  'Traslado aereopuerto', 'Piscina'], hab: []
},
  { id: 3, name: 'Gran Melia Caracas', stars: [1, 2, 3, 4, 5], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  hotelPictures: ['assets/Pictures/Gran-Melia/General-1.jpg', 'assets/Pictures/Gran-Melia/General-2.jpg',
  'assets/Pictures/Gran-Melia/Business-1.jpg', 'assets/Pictures/Gran-Melia/Business-2.jpg'],
  fullDay: true, fullDayPrice: 49, services: ['Restaurantes: Sol y Sombra, Hanami, Jardin Cristal', 'Bar', 'Parking', 'WiFi gratis',
  'Traslado aereopuerto', 'Piscina'], hab: []
},
  { id: 4, name: 'Hotel Alex Caracas', stars: [1, 2, 3, 4], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  hotelPictures: ['assets/Pictures/Alex/General-1.jpg', 'assets/Pictures/Alex/General-2.jpg',
  'assets/Pictures/Alex/Estandar-1.jpg', 'assets/Pictures/Alex/Estandar-2.jpg'],
  fullDay: true, fullDayPrice: 49, services: ['Restaurantes: Sol y Sombra, Hanami, Jardin Cristal', 'Bar', 'Parking', 'WiFi gratis',
  'Traslado aereopuerto', 'Piscina'], hab: []
},
  { id: 5, name: 'Hotel CCCT Caracas', stars: [1, 2, 3, 4, 5], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  hotelPictures: ['assets/Pictures/CCCT/General-1.jpg', 'assets/Pictures/CCCT/General-2.jpg',
  'assets/Pictures/CCCT/Suite-1.jpg', 'assets/Pictures/CCCT/Suite-2.jpg'],
  fullDay: true, fullDayPrice: 49, services: ['Restaurantes: Sol y Sombra, Hanami, Jardin Cristal', 'Bar', 'Parking', 'WiFi gratis',
  'Traslado aereopuerto', 'Piscina'], hab: []
}
  ];

  constructor() { }
}

