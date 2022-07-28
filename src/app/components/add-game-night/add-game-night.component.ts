import { Component, OnInit } from '@angular/core';
import {GameNightService} from "../../service/game-night.service";

@Component({
  selector: 'app-add-game-night',
  templateUrl: './add-game-night.component.html',
  styleUrls: ['./add-game-night.component.scss']
})
export class AddGameNightComponent implements OnInit {

  counter = 0;

  constructor(private gameNightService : GameNightService) { }

  ngOnInit(): void {
  }

  incrementCounter(){
    console.log('increment')
    this.counter++;
  }

  updateName(name: string){
    this.gameNightService.updateName(name);
    this.incrementCounter();
  }
  updatePlayerByTeam(number: number){
    this.gameNightService.updatePlayerByTeam(number);
    this.incrementCounter();
  }
  updateNumberOfTeam(number: number){
    this.gameNightService.updateNumberOfTeam(number);
    this.incrementCounter();
  }

}
