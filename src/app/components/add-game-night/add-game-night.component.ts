import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-game-night',
  templateUrl: './add-game-night.component.html',
  styleUrls: ['./add-game-night.component.scss']
})
export class AddGameNightComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter(){
    console.log('increment')
    this.counter++;
  }
}
