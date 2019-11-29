import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {destino, tipoDestino} from '../destino/destino';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoDestinoService {
  itemsCollection: AngularFirestoreCollection<tipoDestino>;
  items: tipoDestino[]=[];

  constructor(private db: AngularFirestore) { 
    const order=this.db.collection<tipoDestino>('tipoDestino').snapshotChanges();
    order.subscribe(tipoDestino => {
      tipoDestino.forEach(item =>{
        const tipoDestino: tipoDestino = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.items.push(tipoDestino);
      })
    })
  }

  addTipoDestino(mov){
    this.db.collection('tipoDestino').add(mov);
    
  }
  getOrders(){
    return this.db.collection<tipoDestino>('tipoDestino').snapshotChanges();
  }

  deleteTipoDestino(docId: string){
    return this.db.collection('tipoDestino').doc(docId).delete();
  }

  getTipoDestino(id:string){
    return this.db.collection('tipoDestino').doc(id).snapshotChanges();
    
  }

  getTipoDestino2(id:string){
    return this.db.collection('tipoDestino').doc(id).snapshotChanges();
  
  }

  updateTipoDestino(mov:any , id:string){
    this.db.collection('tipoDestino').doc(id).update(mov);
  }
}


