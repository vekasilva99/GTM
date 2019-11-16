import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {destino} from '../destino/destino';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  itemsCollection: AngularFirestoreCollection<destino>;
  items: destino[]=[];
  filterDestinos: destino[]=[];

  constructor(private db: AngularFirestore) { 
    const order=this.db.collection<destino>('destinos').snapshotChanges();
    order.subscribe(destinos => {
      destinos.forEach(item =>{
        const destino: destino = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.items.push(destino);
      })
    })

    console.log(this.items);
  }

  getDestinosFiltrados(id:string){
    return (this.filterDestinos=this.items.filter(destino =>destino.tipoDestinoId ===id));
    console.log(this.filterDestinos);
  }

  getDestinos(){
    return this.db.collection<destino>('destinos').snapshotChanges();
  }

  addDestino(mov){
    this.db.collection('destinos').add(mov);
    
  }
  getOrders(){
    return this.db.collection<destino>('destinos').snapshotChanges();
  }

  getDestino(id:string): Observable<destino>{
    console.log(id);
    return of(this.items.find(destino =>destino.id === id));
  
  }

  // getDestinoTipo(id:string): Observable<destino>{
    
  //   return (this.items=this.items.filter(destino =>destino.tipoDestinoId ===id));
  
  // }




  deleteDestino(docId: string){
    return this.db.collection('destinos').doc(docId).delete();
  }
}
