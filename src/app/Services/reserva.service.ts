import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { reserva } from '../reservar/reserva';
import { JsonpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  itemsCollection: AngularFirestoreCollection<reserva>;
  items: reserva[]=[];
  constructor(private db: AngularFirestore) {
    const order=this.db.collection<reserva>('reservas').snapshotChanges();
    order.subscribe(reservas => {
      reservas.forEach(item =>{
        const reserva: reserva = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        this.items.push(reserva);
      })
    })
   }
   getReserva(id:string){
    return this.db.collection('reservas').doc(id).snapshotChanges();
  
  }
  updateReserva(mov:any , id:string){
   return this.db.collection('reservas').doc(id).update(mov);
  }

  addReserva(mov){
   return this.db.collection('reservas').add(mov);
  }

  getOrders(){
    return this.db.collection<reserva>('reservas').snapshotChanges();
  }

  deleteReserva(docId: string){
    return this.db.collection('reservas').doc(docId).delete();
  }

  addReservaLocal(item: reserva){
    let items: reserva[]=[];
    if(localStorage.getItem('items')===null){
      items.push(item);
      localStorage.setItem('items',JSON.stringify(items));
    }else{
      items=JSON.parse(localStorage.getItem('items'));
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    
    }
  }









}
