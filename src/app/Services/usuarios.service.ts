import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // itemsCollection: AngularFirestoreCollection<estado>;
  // items: estado[] = [];
  constructor(private db: AngularFirestore) { }

  addUsuario(mov) {
    return this.db.collection('submissions').add(mov);
  }
}
