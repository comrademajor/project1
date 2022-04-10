import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Policy } from '../policy.model';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(public fireservices : AngularFirestore) { }
  setWithMerge(Record, id){
    return this.fireservices.collection('policies').doc(id).set(Record, {merge: true});

  }

  create_Data(Record)
  {
    return this.fireservices.collection('policies').add(Record);
  }

  get_Data() 
  {
    return this.fireservices.collection('policies').snapshotChanges();
  }

  get_docById(id)
  {
    return this.fireservices.collection('policies').doc(id).snapshotChanges();
  }

  update_Data(Record)
  {
    return this.fireservices.collection('policies').doc('custom').update(Record);
  }

  set_Data(Record,uid)
  {
    return this.fireservices.collection('policies').doc(uid).set(Record);
  }

  read_Data_From_Document(rate)
  {
    return this.fireservices.doc(rate).snapshotChanges();
  }

  read_Data_From_Collection(rate)
  {
    return this.fireservices.collection(rate).snapshotChanges();
  }

}
