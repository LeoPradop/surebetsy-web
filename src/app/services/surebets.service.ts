import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SurebetsService {

  constructor(
    public firestore: AngularFirestore
  ) { }

  getSurebets() {
    return this.firestore.collection('bets').valueChanges();
  }
}
