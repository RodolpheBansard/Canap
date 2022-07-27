import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import {DashboardService} from "../../service/dashboard.service";
import {Game} from "../../model/game";
import {GameNight} from "../../model/game-night";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  displayNameLetter?: string = '';

  games: Game[] = [];
  gameNights: GameNight[] = [];

  constructor(
              public auth: AngularFireAuth,
              private router: Router,
              public dashboardService : DashboardService) {

    this.auth.user.subscribe((user)=> {
      if(user){
        this.displayNameLetter = user.displayName?.charAt(0);
        this.router.navigateByUrl('dashboard');
      }
    })

    dashboardService.games$.subscribe((games) => {
      if(games){
        this.games = games;
      }
    })
    dashboardService.gameNights$.subscribe((gameNights) => {
      if(gameNights){
        this.gameNights = gameNights;
      }
    })
  }
  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('login');
  }
}
