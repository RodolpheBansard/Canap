import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-game-night-number-input',
  templateUrl: './game-night-number-input.component.html',
  styleUrls: ['./game-night-number-input.component.scss']
})
export class GameNightNumberInputComponent  {

  numberInputs : number[] = [1,2,3,4,5,6];
  selectedNumber = 0;

  @Input()
  title: string = '';

  @Output()
  numberEmitter = new EventEmitter<number>();


  selectNumber(number: number){
    this.selectedNumber = number;
  }

  submit(){
    this.numberEmitter.emit(this.selectedNumber);
  }
}