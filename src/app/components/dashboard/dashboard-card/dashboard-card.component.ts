import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../../model/game";
import {GameNight} from "../../../model/game-night";

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input()
  cardTitle! : string;
  @Input()
  cardIconUrl! : string;

  @Input()
  gameNights : GameNight[] = [];
  @Input()
  games: Game[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
