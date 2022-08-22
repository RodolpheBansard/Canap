import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-game-night-name',
  templateUrl: './game-night-name.component.html',
  styleUrls: ['./game-night-name.component.scss']
})
export class GameNightNameComponent implements OnInit {
  addGameNightNameForm: FormGroup;

  @Output()
  nameEmitter = new EventEmitter<string>();

  @Output()
  imageUrlEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.imageUrlEmitter.emit('url(../../../assets/images/create-gameNight.png)')
  }

  constructor(private fb: FormBuilder) {
    this.addGameNightNameForm = this.fb.group({
      name: ['', [Validators.required]]
    })
  }



  get name(){
    return this.addGameNightNameForm.get('name')
  }

  submit(){
    this.nameEmitter.emit(this.addGameNightNameForm.get('name')?.value);
  }
}
