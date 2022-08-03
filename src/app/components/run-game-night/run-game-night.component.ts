import { Component, OnInit } from '@angular/core';
import {GameNightService} from "../../service/game-night.service";
import {Observable} from "rxjs";
import {GameNight} from "../../model/game-night";
import {DashboardService} from "../../service/dashboard.service";

export enum GameNightState{
  SUMMARY,
  ROUND,
  RESULTS
}

@Component({
  selector: 'app-run-game-night',
  templateUrl: './run-game-night.component.html',
  styleUrls: ['./run-game-night.component.scss']
})
export class RunGameNightComponent implements OnInit {

  currentState = GameNightState.SUMMARY;
  gameNight$: Observable<GameNight>

  constructor(public dashboardService : DashboardService,
              public gameNightService: GameNightService) {
    this.gameNight$ = dashboardService.getGameNight(gameNightService.gameNight$)


  }

  ngOnInit(): void {
  }

  launchGameNight(){
    this.currentState = GameNightState.ROUND
  }

  goToResults(){
    this.currentState = GameNightState.RESULTS;
  }

}
