import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    public firestore: AngularFirestore
  ) { }

  addUserData(userData) {
    return this.firestore.collection('user').add(userData);
  }

  getUserData(userId) {
    return this.firestore.collection('user').valueChanges();
  }
}
