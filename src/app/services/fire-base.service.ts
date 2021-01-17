import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getUsers(){
    return this.firestore.collection('users').snapshotChanges();
  }
  addUser(payload: User) {
    return this.firestore.collection('users').add(payload);
  }

  updateUser(userId: string, payload: User) {
    return this.firestore.doc('user/' + userId).update(payload);
  }

  deleteUser(userId: string) {
    return this.firestore.doc('user/' + userId).delete();
  }
}

export interface User{
  id?: string;
  nom: string;
  email: string;
}
