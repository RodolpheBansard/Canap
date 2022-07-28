import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {

  @Output()
  clickEmitter = new EventEmitter<any>();

  @Input()
  buttonText: string = '';

  @Input()
  buttonIcon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
