import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {ciudad} from '../ciudad/ciudad';
@Injectable({
  providedIn: 'root'
})
export class CiudadService {
itemsCollection: AngularFirestoreCollection<ciudad>;
  items: ciudad[]=[];
  ciudadSeleccionada:ciudad;

  constructor(private db: AngularFirestore) { 
    const order=this.db.collection<ciudad>('ciudades').snapshotChanges();
    order.subscribe(ciudades => {
      ciudades.forEach(item =>{
        const ciudad: ciudad = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.items.push(ciudad);
      })
    })
  }

  addCiudad(mov){
    this.db.collection('ciudades').add(mov);
    
  }

  updateCiudad(mov:any , id:string){
    this.db.collection('ciudades').doc(id).update(mov);
  }
  getOrders(){
    return this.db.collection<ciudad>('ciudades').snapshotChanges();
  }

  deleteCiudad(docId: string){
    return this.db.collection('ciudades').doc(docId).delete();
  }

  getCiudadSeleccionada(id:string){
    return this.db.collection('ciudades').doc(id).snapshotChanges();
  }

  

  
}
