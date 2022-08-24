import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import {DashboardService} from "../../service/dashboard.service";
import {Game} from "../../model/game";
import {GameNight} from "../../model/game-night";
import {GameNightService} from "../../service/game-night.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  games$: Observable<Game[]> = new Observable<Game[]>();
  gameNights$: Observable<GameNight[]> = new Observable<GameNight[]>();

  constructor(
              private router: Router,
              public dashboardService : DashboardService,
              public gameNightService: GameNightService
  ) {


  }

  addGameNight(){
    this.router.navigateByUrl('add-game-night')
  }
  addGame(){
    this.router.navigateByUrl('add-game')
  }

  deleteGame(game: Game){
    this.dashboardService.deleteGame(game)
  }
  deleteGameNight(gameNight: GameNight){
    this.dashboardService.deleteGameNight(gameNight)
  }
  runGameNight(gameNight: GameNight){
    if(gameNight.documentId){
      this.dashboardService.selectedGameNightId.next(gameNight.documentId);
    }
    this.router.navigateByUrl('run-game-night');
    this.gameNightService.selectGameNight(gameNight)
  }
  editGame(game: Game){
  }
  editGameNight(gameNight: GameNight){
  }
}
