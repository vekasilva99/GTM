import { Injectable } from '@angular/core';
import {estado} from '../estados/estado';
import {ESTADOS} from '../estados/mock-estados';
import {Observable, of} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  itemsCollection: AngularFirestoreCollection<estado>;
  items: estado[]=[];
  estadoSeleccionado:estado;

  constructor(private db: AngularFirestore) { 
    const order=this.db.collection<estado>('estados').snapshotChanges();
    order.subscribe(estados => {
      estados.forEach(item =>{
        const estado: estado = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
        this.items.push(estado);
      })
    })

    console.log(this.items);
    
  }

  getEstados(): Observable<estado[]>{
    return of(ESTADOS);
  }

  getEstado(id:string): Observable<estado>{
    return of(ESTADOS.find(estado =>estado.id === id));
  }

  getEstado2(id:string){
    return this.db.collection('estados').doc(id).snapshotChanges();
  
  }

  getEstadoSeleccionado(id:string){
    this.estadoSeleccionado=this.items.find(estado =>estado.id === id);
  }

  addEstado(mov){
    this.db.collection('estados').add(mov);
    console.log("entre");
  }
  getOrders(){
    return this.db.collection<estado>('estados').snapshotChanges();
  }

  deleteEstado(docId: string){
    return this.db.collection('estados').doc(docId).delete();
  }
}
