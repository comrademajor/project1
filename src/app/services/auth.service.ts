import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
 
export class AuthenticationService {
userData: Observable<firebase.User|null>;
uid!: string;
authState : any = null;
constructor(private af: AngularFireAuth,private angularFireAuth: AngularFireAuth, private router : Router, private afs: AngularFirestore) { 
this.userData = angularFireAuth.authState;
}
 
/* Sign up */
SignUp(email: string, password: string) {
return this.angularFireAuth
.createUserWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully signed up!', res);
this.insertuserdata(email, res);
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}


insertuserdata(user, usercred){
    return this.afs.doc(`Users/${usercred.user.uid}`).set({
      email: user
      })
  }


/* Sign in */
SignIn(email: string, password: string) {
  return this.angularFireAuth
    .signInWithEmailAndPassword(email, password)
    .then((res: any) => {
      console.log('You are Successfully logged in!');
      return res;
    })
    .catch(err => {
      console.log('Something is wrong:', err.message);
    });
}
 
/* Sign out */
SignOut() {
this.angularFireAuth
.signOut();
}
 
getUserState() {
    return this.af.authState;
  }
  getprofile(useruid){
    return this.afs.collection("Users").doc(useruid).snapshotChanges();
  }
}
