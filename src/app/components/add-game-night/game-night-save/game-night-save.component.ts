import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-game-night-save',
  templateUrl: './game-night-save.component.html',
  styleUrls: ['./game-night-save.component.scss']
})
export class GameNightSaveComponent {


  @Output()
  nextStepEmitter = new EventEmitter<any>();

}
