import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/class/hotel/hotel';
import { Hab } from 'src/app/class/hotel/hotel';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  // hotel: Hotel[] = [
  //   {
  //     id: "a", name: 'Eurobuilding Hotel & Suites Caracas', imagen:'hola',stars: [1, 2, 3, 4, 5], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  //     address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  //     hotelPictures: ['https://q-cf.bstatic.com/images/hotel/max1280x900/221/2212834.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/221/2212790.jpg',
  //       'https://q-cf.bstatic.com/images/hotel/max1280x900/463/46397689.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/463/46397679.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/463/46397680.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/463/46397677.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/463/46397676.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/144/14418866.jpg', 'https://pbs.twimg.com/media/DWKv8W0X4AA5Mno.jpg', 'https://r-cf.bstatic.com/images/hotel/max1280x900/221/2212807.jpg', 'https://q-cf.bstatic.com/images/hotel/max1280x900/237/2375336.jpg'],
  //     fullDay: true, fullDayPrice: 49, destino: " ", services: ["Wifi", "Restaurante", "Piscina" , "Parking" , "Bar",  "Traslado"], hab: [
  //       { id: "0", nombre: 'Standard', nightCost: 90, tipoVista: 'Vista a la montana y a la ciudad', maxPersonas: 2, habPictures: ['https://www.hoteleuro.com/images/repositorio/imagen_52bc2d031b839.jpg', 'https://q-cf.bstatic.com/xdata/images/hotel/max1024x768/2212824.jpg?k=79a0d77399985165a1a92f685c7d8eaf7641cce827e4b8467fe4f27aee27d78b&o='], comodidades: ['27', 'Caja Fuerte', 'Telefono', 'Aire Acondicionado', 'Canales por Cable', 'Servicio de despertador', 'Reloj Despertador', 'Habitaciones comunicadas disponibles', 'TV de Pantalla Plana', 'Insonorizacion'], numHab: 5 },
  //       { id: "1", nombre: 'Deluxe', nightCost: 100, tipoVista: 'Vista a la montana y a la ciudad', maxPersonas: 2, habPictures: ['https://www.hoteleuro.com/images/repositorio/imagen_52bc2ff006575.jpg', 'https://q-cf.bstatic.com/xdata/images/hotel/max1024x768/2392796.jpg?k=e30a55a7fc5a6fc8e30ee12dc2c44bd3d285b83556ea3e9390cc088c54e7b227&o='], comodidades: ['27', 'Caja Fuerte', 'Telefono', 'Aire Acondicionado', 'Canales por Cable', 'Servicio de despertador', 'Reloj Despertador', 'Habitaciones comunicadas disponibles', 'TV de Pantalla Plana', 'Insonorizacion'], numHab: 5 }
  //       , { id: "2", nombre: 'Business Class', nightCost: 140, tipoVista: 'Vista a la montana y a la ciudad', maxPersonas: 2, habPictures: ['https://www.hoteleuro.com/images/repositorio/imagen_52bc3037e708b.jpg', 'https://r-cf.bstatic.com/xdata/images/hotel/max1024x768/197701715.jpg?k=7f1bb10637410920f2118cb7503a4346a87a71611bde690aa2ff83239f5d7fc2&o='], comodidades: ['32', 'Caja Fuerte', 'Telefono', 'Aire Acondicionado', 'Canales por Cable', 'Servicio de despertador', 'Reloj Despertador', 'Habitaciones comunicadas disponibles', 'TV de Pantalla Plana', 'Insonorizacion', 'Minibar', 'Sofa', 'Acceso al salon executive'], numHab: 5 },
  //       { id: "3", nombre: 'First Class', nightCost: 180, tipoVista: 'Vista a la montana y a la ciudad', maxPersonas: 2, habPictures: ['https://www.hoteleuro.com/images/repositorio/imagen_532f02f7952fc.jpg', 'https://media-cdn.tripadvisor.com/media/photo-s/0b/7e/ea/3c/first-class.jpg'], comodidades: ['54', 'Caja Fuerte', 'Telefono', 'Aire Acondicionado', 'Canales por Cable', 'Servicio de despertador', 'Reloj Despertador', 'Habitaciones comunicadas disponibles', 'TV de Pantalla Plana', 'Insonorizacion', 'Reproductor de DVD', 'Reproductor de CD', 'Zona de Estar', 'Acceso al salon executive', 'Sofa'], numHab: 5 },
  //     ]
  //   },
  //   {
  //     id: "b", name: 'Hotel Continental Altamira', imagen:'hola',stars: [1, 2, 3, 4], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  //     address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  //     hotelPictures: ['assets/Pictures/Continental-Altamira/General-1.jpg', 'assets/Pictures/Continental-Altamira/General-2.jpg',
  //       'assets/Pictures/Continental-Altamira/Business-1.jpg', 'assets/Pictures/Continental-Altamira/Business-2.jpg'],
  //     fullDay: false, fullDayPrice: 49, destino: " ", services: ["Wifi", "Restaurante", "Piscina" , "Parking" , "Bar",  "Traslado"], hab: []
  //   },
  //   {
  //     id: "c", name: 'Gran Melia Caracas',imagen:'hola', stars: [1, 2, 3, 4, 5], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  //     address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  //     hotelPictures: ['assets/Pictures/Gran-Melia/General-1.jpg', 'assets/Pictures/Gran-Melia/General-2.jpg',
  //       'assets/Pictures/Gran-Melia/Business-1.jpg', 'assets/Pictures/Gran-Melia/Business-2.jpg'],
  //     fullDay: true, fullDayPrice: 49, destino: " ", services: ["Wifi", "Restaurante", "Piscina" , "Parking" , "Bar",  "Traslado"], hab: []
  //   },
  //   {
  //     id: "d", name: 'Hotel Alex Caracas', imagen:'hola',stars: [1, 2, 3, 4], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  //     address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  //     hotelPictures: ['assets/Pictures/Alex/General-1.jpg', 'assets/Pictures/Alex/General-2.jpg',
  //       'assets/Pictures/Alex/Estandar-1.jpg', 'assets/Pictures/Alex/Estandar-2.jpg'],
  //     fullDay: true, fullDayPrice: 49, destino: " ", services: ["Wifi", "Restaurante", "Piscina" , "Parking" , "Bar",  "Traslado"], hab: []
  //   },
  //   {
  //     id: "e", name: 'Hotel CCCT Caracas',imagen:'hola', stars: [1, 2, 3, 4, 5], latitude: 'O66°51\'1.73"', length: 'N10°28\'58.04"',
  //     address: 'Final Calle La Guairita, 1060 Caracas, Venezuela.', state: 'Miranda', city: 'Caracas',
  //     hotelPictures: ['assets/Pictures/CCCT/General-1.jpg', 'assets/Pictures/CCCT/General-2.jpg',
  //       'assets/Pictures/CCCT/Suite-1.jpg', 'assets/Pictures/CCCT/Suite-2.jpg'],
  //     fullDay: true, fullDayPrice: 49, destino: " ", services: ["Wifi", "Restaurante", "Piscina" , "Parking" , "Bar",  "Traslado"], hab: []
  //   }
  // ];

  itemsCollection: AngularFirestoreCollection<Hotel>;
  items: Hotel[] = [];

  constructor(private db: AngularFirestore) {
    const order = this.db.collection<Hotel>('hoteles').snapshotChanges();
    order.subscribe(hoteles => {
      hoteles.forEach(item => {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.items.push(hotel);
      })
    })
  }


  // getHotel(id: string): Observable<Hotel> {
  //   return of(this.hotel.find(Hotel => Hotel.id === id));
  // }

  getHotel2(id:string){
    return this.db.collection('hoteles').doc(id).snapshotChanges();
  
  }

  addHotel(mov) {
    this.db.collection('hoteles').add(mov);
    console.log("entre");
  }
  getOrders(){
    return this.db.collection<Hotel>('hoteles').snapshotChanges();
  }

  deleteHotel(docId: string) {
    return this.db.collection('hoteles').doc(docId).delete();
  }
  
  updateHotel(mov:any , id:string){
    this.db.collection('hoteles').doc(id).update(mov);
  }
}

