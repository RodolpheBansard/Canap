import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameWithRounds} from "../../../model/game-with-rounds";
import {Observable} from "rxjs";
import {GameNight} from "../../../model/game-night";

@Component({
  selector: 'app-game-night-summary',
  templateUrl: './game-night-summary.component.html',
  styleUrls: ['./game-night-summary.component.scss']
})
export class GameNightSummaryComponent implements OnInit {

  @Output()
  nextStepEmitter : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  gameNight$ : Observable<GameNight> = new Observable<GameNight>()

  constructor() { }

  ngOnInit(): void {
  }

}
