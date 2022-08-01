import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameNightService} from "../../../service/game-night.service";

@Component({
  selector: 'app-game-night-save',
  templateUrl: './game-night-save.component.html',
  styleUrls: ['./game-night-save.component.scss']
})
export class GameNightSaveComponent {

  @Output()
  saveEmitter = new EventEmitter<number>();

  save(){
    this.saveEmitter.emit();
  }




}
