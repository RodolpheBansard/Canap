import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TeamRank} from "../../../model/team-rank";

@Component({
  selector: 'app-game-night-total-score',
  templateUrl: './game-night-total-score.component.html',
  styleUrls: ['./game-night-total-score.component.scss']
})
export class GameNightTotalScoreComponent implements OnInit {

  @Input()
  leaderBoard$! : Observable<TeamRank[]>

  constructor() { }

  ngOnInit(): void {
  }

}
