import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-game-night-create-team',
  templateUrl: './game-night-create-team.component.html',
  styleUrls: ['./game-night-create-team.component.scss']
})
export class GameNightCreateTeamComponent {
  addGameNightNameForm: FormGroup;

  emojiSelected! : any;

  @Output()
  nextStepEmitter = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.addGameNightNameForm = this.fb.group({
      name: ['', [Validators.required]]
    })
  }

  get name(){
    return this.addGameNightNameForm.get('name')
  }

  toggled: boolean = false;

  handleSelection(event: any) {
    this.emojiSelected = event.char;
    this.toggled = false
  }
}
