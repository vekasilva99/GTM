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


  disponibilidad1(numHabs: number): void {
    for (let i = 0; i < 12; i++) {

      if (i === 0 || i === 2 || i === 4 || i === 6 || i === 7 || i === 9 || i === 11) {
        for (let j = 0; j < 31; j++) {
          this.disponibilidad31[j] = 1;
        }
        this.mes31.disponibilidad = this.disponibilidad31;
        this.disp[i] = this.mes31;
      }

      if (i === 1) {
        for (let j = 0; j < 28; j++) {
          this.disponibilidad28[j] = numHabs;
        }

        this.mes28.disponibilidad = this.disponibilidad28;
        this.disp[i] = this.mes28;
      }

      if (i === 3 || i === 5 || i === 8 || i === 10) {
        for (let j = 0; j < 30; j++) {
          this.disponibilidad30[j] = numHabs;
        }
        this.mes30.disponibilidad = this.disponibilidad30;
        this.disp[i] = this.mes30;
      }

    }

  }


  reservar(mes: number, dia: number, cant: number, numHab: number): boolean {
    for (let i = 0; i <= cant; i++) {
      if (dia > this.disp[mes].disponibilidad.length) {
        dia = 1;
        if (mes === 11) {
          mes = 0;
        } else {
          mes = mes + 1;
        }
      } else {
        if (this.disp[mes].disponibilidad[dia - 1] - numHab >= 0) {
          this.disp[mes].disponibilidad[dia - 1] = this.disp[mes].disponibilidad[dia - 1] - numHab;
          dia = dia + 1;
        } else {
          console.log(i);
          for (let j = i; j > 0; j--) {
            console.log(dia);
            if (dia < 1) {
              mes = mes - 1;
              dia = this.disp[mes].disponibilidad.length;
              if (mes === 0) {
                mes = 11;
              } else {
                this.disp[mes].disponibilidad[dia - 1] = this.disp[mes].disponibilidad[dia - 1] + numHab;
                dia = dia - 1;
              }
            } else {
                this.disp[mes].disponibilidad[dia - 1] = this.disp[mes].disponibilidad[dia - 1] + numHab;
                dia = dia - 1;
            }
          }
          console.log(this.disp);
          return false;
        }
      }
      
     
    }
    console.log(this.disp);
    return true;
  }




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
