import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import * as firebase from 'firebase/compat';

@Component({
  selector: 'app-my-compte',
  templateUrl: './my-compte.page.html',
  styleUrls: ['./my-compte.page.scss'],
})
export class MyComptePage implements OnInit {

  user = null;

  constructor(public fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user : null;
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // login() {
  //   this.fireAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  // }

  // logout() {
  //   this.fireAuth.signOut();
  // }

}
