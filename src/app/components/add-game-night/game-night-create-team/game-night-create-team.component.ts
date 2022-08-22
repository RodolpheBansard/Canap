import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Team} from "../../../model/team";

@Component({
  selector: 'app-game-night-create-team',
  templateUrl: './game-night-create-team.component.html',
  styleUrls: ['./game-night-create-team.component.scss']
})
export class GameNightCreateTeamComponent  implements OnInit{
  addGameNightNameForm: FormGroup;

  emojiSelected! : string;

  @Output()
  teamEmitter = new EventEmitter<Team>();

  @Output()
  imageUrlEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.imageUrlEmitter.emit('url(../../../assets/images/team.png)')
  }

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

  submit(){
    this.teamEmitter.emit({
      name:this.addGameNightNameForm.get('name')?.value,
      emoji:this.emojiSelected
    });
  }
}
