import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import {GameNight} from "../login/login.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  displayNameLetter?: string = '';

  constructor(
              public auth: AngularFireAuth,
              private router: Router) {

    this.auth.user.subscribe((user)=> {
      if(user){
        this.displayNameLetter = user.displayName?.charAt(0);
        this.router.navigateByUrl('dashboard');
      }
    })
  }
  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('login');
  }
}
