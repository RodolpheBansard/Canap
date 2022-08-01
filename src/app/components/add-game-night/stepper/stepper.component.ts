import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input()
  numberOfTeams : number = 1;

  @Input()
  numberOfGame : number = 1;

  @Input()
  numberOfPlayerByTeam: number = 1;

  @Output()
  stepEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
