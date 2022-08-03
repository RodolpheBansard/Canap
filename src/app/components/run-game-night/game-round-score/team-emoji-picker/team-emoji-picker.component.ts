import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-emoji-picker',
  templateUrl: './team-emoji-picker.component.html',
  styleUrls: ['./team-emoji-picker.component.scss']
})
export class TeamEmojiPickerComponent implements OnInit {

  isEmojiPickerVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEmojiPicker(){
    this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
  }
}
