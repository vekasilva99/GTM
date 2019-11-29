import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { itinerario } from '../reservar/reserva';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {
  itemsCollection: AngularFirestoreCollection<itinerario>;
  coleccioncorreo: AngularFirestoreCollection<itinerario>;
  items: itinerario[] = [];

  constructor(private db: AngularFirestore) {
    const order = this.db.collection<itinerario>('itinerarios').snapshotChanges();
    order.subscribe(itinerarios => {
      itinerarios.forEach(item => {
        const itinerario: itinerario = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        this.items.push(itinerario);
      });
    });
  }

  getItinerario(id: string) {
    return this.db.collection('itinerarios').doc(id).snapshotChanges();

  }
  updateItinerario(mov: any, id: string) {
    this.db.collection('itinerarios').doc(id).update(mov);
  }

  addItinerario(mov) {
   return this.db.collection('itinerarios').add(mov);
  }
  getOrders() {
    return this.db.collection<itinerario>('itinerarios').snapshotChanges();
  }

  deleteItinerario(docId: string) {
    return this.db.collection('itinerarios').doc(docId).delete();
  }
}
