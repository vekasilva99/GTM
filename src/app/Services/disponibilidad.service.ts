import { Injectable } from '@angular/core';
import { Hab, Mes, disp } from 'src/app/class/hotel/hotel';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {

  itemsCollection: AngularFirestoreCollection<Hab>;
  items: disp[] = [];

  disponibilidadEnero: number[] = [];
  disponibilidadFebrero: number[] = [];
  disponibilidadMarzo: number[] = [];
  disponibilidadAbril: number[] = [];
  disponibilidadMayo: number[] = [];
  disponibilidadJunio: number[] = [];
  disponibilidadAgo: number[] = [];
  disponibilidadSept: number[] = [];
  disponibilidadOct: number[] = [];
  disponibilidadNov: number[] = [];
  disponibilidadDic: number[] = [];
  disponibilidadJul: number[] = [];

  disp: Mes[] = [];
  disp2: disp = new disp();

  constructor(private db: AngularFirestore) {
    const order = this.db.collection<disp>('disponibilidades').snapshotChanges();
    // tslint:disable-next-line: no-shadowed-variable
    order.subscribe(disp => {
      disp.forEach(item => {
        const dis: disp = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        this.items.push(dis);
      });
    });



  }

  disponibilidad1(numHabs: number): void {
    for (let i = 0; i < 12; i++) {
      if (i === 0) {
        for (let j = 0; j < 31; j++) {
          this.disponibilidadEnero[j] = numHabs;
        }
        this.disp2.enero = this.disponibilidadEnero;

      }
      if (i === 2) {
        for (let j = 0; j < 31; j++) {
          this.disponibilidadMarzo[j] = numHabs;
        }
        this.disp2.marzo = this.disponibilidadMarzo;

      }
      if (i === 4) {
        for (let j = 0; j < 31; j++) {
          this.disponibilidadMayo[j] = numHabs;
        }
        this.disp2.mayo = this.disponibilidadMayo;

      }
      if (i === 6) {
        for (let j = 0; j < 31; j++) {
          this.disponibilidadJul[j] = numHabs;
        }
        this.disp2.julio = this.disponibilidadJul;

      }
      if (i === 7) {
        for (let j = 0; j < 31; j++) {
          this.disponibilidadAgo[j] = numHabs;
        }
        this.disp2.agosto = this.disponibilidadAgo;

      }
      if (i === 9) {
        for (let j = 0; j < 31; j++) {
          this.disponibilidadOct[j] = numHabs;
        }
        this.disp2.octubre = this.disponibilidadOct;

      }
      if (i === 11) {
        for (let j = 0; j < 31; j++) {
          this.disponibilidadDic[j] = numHabs;
        }
        this.disp2.diciembre = this.disponibilidadDic;

      }


      if (i === 1) {
        for (let j = 0; j < 28; j++) {
          this.disponibilidadFebrero[j] = numHabs;
        }
        this.disp2.febrero = this.disponibilidadFebrero;

      }



      if (i === 3) {
        for (let j = 0; j < 30; j++) {
          this.disponibilidadAbril[j] = numHabs;
        }
        this.disp2.abril = this.disponibilidadAbril;

      }
      if (i === 5) {
        for (let j = 0; j < 30; j++) {
          this.disponibilidadJunio[j] = numHabs;
        }
        this.disp2.junio = this.disponibilidadJunio;

      }
      if (i === 8) {
        for (let j = 0; j < 30; j++) {
          this.disponibilidadSept[j] = numHabs;
        }
        this.disp2.septiembre = this.disponibilidadSept;

      }
      if (i === 10) {
        for (let j = 0; j < 30; j++) {
          this.disponibilidadNov[j] = numHabs;
        }
        this.disp2.noviembre = this.disponibilidadNov;

      }
    }
  }


  reservar(mes: number, dia: number, cant: number, numHab: number): boolean {
    for (let i = 0; i < cant; i++) {
      if (mes === 0) {
        if (dia > this.disp2.enero.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.enero[dia - 1] - numHab >= 0) {
            this.disp2.enero[dia - 1] = this.disp2.enero[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 1) {
        if (dia > this.disp2.febrero.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.febrero[dia - 1] - numHab >= 0) {
            this.disp2.febrero[dia - 1] = this.disp2.febrero[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 2) {
        if (dia > this.disp2.marzo.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.marzo[dia - 1] - numHab >= 0) {
            this.disp2.marzo[dia - 1] = this.disp2.marzo[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 3) {
        if (dia > this.disp2.abril.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.abril[dia - 1] - numHab >= 0) {
            this.disp2.abril[dia - 1] = this.disp2.abril[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 4) {
        if (dia > this.disp2.mayo.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.mayo[dia - 1] - numHab >= 0) {
            this.disp2.mayo[dia - 1] = this.disp2.mayo[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 5) {
        if (dia > this.disp2.junio.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.junio[dia - 1] - numHab >= 0) {
            this.disp2.junio[dia - 1] = this.disp2.junio[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 6) {
        if (dia > this.disp2.julio.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.julio[dia - 1] - numHab >= 0) {
            this.disp2.julio[dia - 1] = this.disp2.julio[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 7) {
        if (dia > this.disp2.agosto.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.agosto[dia - 1] - numHab >= 0) {
            this.disp2.agosto[dia - 1] = this.disp2.agosto[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 8) {
        if (dia > this.disp2.septiembre.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.septiembre[dia - 1] - numHab >= 0) {
            this.disp2.septiembre[dia - 1] = this.disp2.septiembre[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 9) {
        if (dia > this.disp2.octubre.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.octubre[dia - 1] - numHab >= 0) {
            this.disp2.octubre[dia - 1] = this.disp2.octubre[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 10) {
        if (dia > this.disp2.noviembre.length) {
          dia = 1;
          mes = mes + 1;
        } else {
          if (this.disp2.noviembre[dia - 1] - numHab >= 0) {
            this.disp2.noviembre[dia - 1] = this.disp2.noviembre[dia - 1] - numHab;
            dia = dia + 1;
          } else {
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
      if (mes === 11) {
        if (dia > this.disp2.diciembre.length) {
          dia = 1;
          mes = 0;
        } else {
          if (this.disp2.diciembre[dia - 1] - numHab >= 0) {
            this.disp2.diciembre[dia - 1] = this.disp2.diciembre[dia - 1] - numHab;
            console.log(this.disp2.diciembre[dia - 1]);
            console.log(numHab);
            dia = dia + 1;
          } else {
            console.log('ENTRE');
            this.noSePudoReservar(mes, dia, cant, numHab, i);
            return false;
          }
        }
      }
    }


    return true;

  }

  noSePudoReservar(mes: number, dia: number, cant: number, numHab: number, valor: number): void {

    for (let i = valor; valor > 0; i--) {
      if (mes === 0) {
        if (dia < 1) {
          mes = 11;
          dia = 31;
        } else {
          this.disp2.enero[dia - 1] = this.disp2.enero[dia - 1] + numHab;
          dia = dia - 1;
        }
      }
      if (mes === 1) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 31;
        } else {
          this.disp2.febrero[dia - 1] = this.disp2.febrero[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 2) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 30;
        } else {
          this.disp2.marzo[dia - 1] = this.disp2.marzo[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 3) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 31;
        } else {
          this.disp2.abril[dia - 1] = this.disp2.abril[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 4) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 30;
        } else {
          this.disp2.mayo[dia - 1] = this.disp2.mayo[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 5) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 31;
        } else {
          this.disp2.junio[dia - 1] = this.disp2.junio[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 6) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 30;
        } else {
          this.disp2.julio[dia - 1] = this.disp2.julio[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 7) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 31;
        } else {
          this.disp2.agosto[dia - 1] = this.disp2.agosto[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 8) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 31;
        } else {
          this.disp2.septiembre[dia - 1] = this.disp2.septiembre[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 9) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 30;
        } else {
          this.disp2.octubre[dia - 1] = this.disp2.octubre[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 10) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 31;
        } else {
          this.disp2.noviembre[dia - 1] = this.disp2.noviembre[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
      if (mes === 11) {
        if (dia < 1) {
          mes = mes - 1;
          dia = 30;
        } else {
          this.disp2.diciembre[dia - 1] = this.disp2.diciembre[dia - 1] - numHab;
          dia = dia - 1;
        }
      }
    }

  }

  getDisponibilidad(id: string) {
    return this.db.collection('disponibilidades').doc(id).snapshotChanges();

  }

  addDisponibilidad(mov) {
    return this.db.collection('disponibilidades').add(mov);
  }
  getOrders() {
    return this.db.collection<disp>('disponibilidades').snapshotChanges();
  }

  updateDisponibilidad(mov: any, id: string) {
    this.db.collection('disponibilidades').doc(id).update(mov);
  }
}
