import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/class/hotel/hotel';
import { Hab, Mes } from 'src/app/class/hotel/hotel';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private db: AngularFirestore) {


    const order = this.db.collection<Hab>('habitaciones').snapshotChanges();
    order.subscribe(habitaciones => {
      habitaciones.forEach(item => {
        const hab: Hab = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        this.items.push(hab);
      });
    });

  }

  itemsCollection: AngularFirestoreCollection<Hab>;
  items: Hab[] = [];
  filterHabs: Hab[] = [];
  mes28: Mes = new Mes();
  mes30: Mes = new Mes();
  mes31: Mes = new Mes();
  disponibilidad31: number[] = [];
  disponibilidad28: number[] = [];
  disponibilidad30: number[] = [];
  disp: Mes[] = [];


  


  getHab(id: string) {
    return this.db.collection('habitaciones').doc(id).snapshotChanges();

  }

    getHabsHotel(id: string) {
      return (this.filterHabs = this.items.filter(habs => habs.hotel === id));
    }

    addHab(mov) {
      this.db.collection('habitaciones').add(mov);
    }
    getOrders() {
      return this.db.collection<Hab>('habitaciones').snapshotChanges();
    }

    deleteHab(docId: string) {
      return this.db.collection('habitaciones').doc(docId).delete();
    }

    updateHab(mov: any, id: string) {
      this.db.collection('habitaciones').doc(id).update(mov);
    }
  }
