import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-game-night-add-game',
  templateUrl: './game-night-add-game.component.html',
  styleUrls: ['./game-night-add-game.component.scss']
})
export class GameNightAddGameComponent implements OnInit {
  addGameNightNameForm: FormGroup;

  @Output()
  nextStepEmitter = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.addGameNightNameForm = this.fb.group({
      name: ['', [Validators.required]],
      game: ['', [Validators.required]],
      first: ['', [Validators.required]],
      second: ['', [Validators.required]],
      third: ['', [Validators.required]],
      fourth: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  get name(){
    return this.addGameNightNameForm.get('name')
  }
}
