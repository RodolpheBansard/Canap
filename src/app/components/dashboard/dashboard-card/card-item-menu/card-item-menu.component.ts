import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-item-menu',
  templateUrl: './card-item-menu.component.html',
  styleUrls: ['./card-item-menu.component.scss']
})
export class CardItemMenuComponent implements OnInit {

  @Output()
  deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  editEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  runEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  viewEvent: EventEmitter<any> = new EventEmitter<any>();

  isHover = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter() {
    this.isHover = true;
  }

  onMouseLeave() {
    this.isHover = false;
  }
}
