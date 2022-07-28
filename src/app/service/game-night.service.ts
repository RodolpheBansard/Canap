import { Injectable } from '@angular/core';
import {GameNight} from "../model/game-night";

@Injectable({
  providedIn: 'root'
})
export class GameNightService {

  gameNight : GameNight = new GameNight();

  constructor() {
    console.log(this.gameNight)
  }

  updateName(name: string){
    this.gameNight.name = name;
    console.log(this.gameNight)
  }

  updatePlayerByTeam(number: number){
    this.gameNight.playerByTeam = number;
    console.log(this.gameNight)
  }

  updateNumberOfTeam(number: number){
    this.gameNight.numberOfTeam = number;
    console.log(this.gameNight)
  }
}
