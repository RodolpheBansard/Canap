import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  gameNights : GameNight[] | null = [];
  @Input()
  games: Game[] | null = [];

  @Output()
  onAddEvent : EventEmitter<any> = new EventEmitter<any>();

  @Output()
  deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  editEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  runEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  viewEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

}
