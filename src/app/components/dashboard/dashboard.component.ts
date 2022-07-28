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
              private router: Router,
              public dashboardService : DashboardService
  ) {

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

  addGameNight(){
    this.router.navigateByUrl('add-game-night')
  }

  addGame(){
    this.router.navigateByUrl('add-game')
  }
}
