import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
              public auth: AngularFireAuth,
              private router: Router) {

    this.auth.user.subscribe((data)=> {
      if(data){
        console.log(data)
        this.router.navigateByUrl('dashboard');
      }
    })
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
