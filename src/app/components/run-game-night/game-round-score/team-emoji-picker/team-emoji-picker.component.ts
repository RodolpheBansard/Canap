import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameNight} from "../../../../model/game-night";
import {Observable} from "rxjs";
import {RoundScore} from "../../../../model/round-score";

@Component({
  selector: 'app-team-emoji-picker',
  templateUrl: './team-emoji-picker.component.html',
  styleUrls: ['./team-emoji-picker.component.scss']
})
export class TeamEmojiPickerComponent implements OnInit {

  @Input() gameNight! : GameNight;

  @Input() rankIndex : number = 0;

  @Input()
  currentScore : Observable<RoundScore> = new Observable<RoundScore>();

  @Output()
  pickEmojiEvent : EventEmitter<string> = new EventEmitter<string>();

  selectedEmoji! : string;

  isEmojiPickerVisible = false;

  constructor() { }

  ngOnInit(): void {

    this.currentScore.subscribe((data) => {
      this.selectedEmoji = data.ranking[this.rankIndex]
    })

  }

  toggleEmojiPicker(){
    this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
  }

  selectEmoji(emoji:string){
    this.selectedEmoji = emoji;
    this.toggleEmojiPicker();
    this.pickEmojiEvent.emit(emoji);
  }

  getEmojiList(): string[]{
    let emojis : string[] = [];
    this.gameNight.teams.forEach((team) => {
      emojis.push(team.emoji);
    })
    return emojis;
  }
}
