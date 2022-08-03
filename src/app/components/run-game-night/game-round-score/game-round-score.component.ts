import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {GameNight} from "../../../model/game-night";



@Component({
  selector: 'app-game-round-score',
  templateUrl: './game-round-score.component.html',
  styleUrls: ['./game-round-score.component.scss']
})
export class GameRoundScoreComponent implements OnInit {

  @Input()
  gameNight$ = new Observable<GameNight>();

  gameNight! : GameNight;

  @Output()
  goToResultEvent : EventEmitter<any> = new EventEmitter<any>();

  gameIndex = 0;
  roundIndex = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.gameNight$.subscribe((data)=> {
      if(data){
        this.gameNight = data;
      }
    })
  }

  previousRound(){
    this.roundIndex--;
    this.gameIndex = this.getGameIndex()
  }

  nextRound(){
    console.log(this.gameNight)
    this.roundIndex++;
    this.gameIndex = this.getGameIndex()
  }

  getTotalRound():number{

    let result : number = 0;
    this.gameNight.games.forEach((game) => {
      result += game.numberOfRounds;
    })
    console.log(result)
    return result;
  }

  getGameIndex(): number{
    let index : number = 0;
    let result : number = 0;
    let totalRound : number = 0;
    for(let game of this.gameNight.games){
      totalRound += game.numberOfRounds;
      if(this.roundIndex<= totalRound){
        result = index;
        break;
      }
      index++;
    }
    return result;
  }

  GetGameRound(gameNight : GameNight){
    let result : number = 0;
    let totalRound : number = 0;
    for(let game of gameNight.games){
      if(this.roundIndex<= totalRound + game.numberOfRounds){
        result = this.roundIndex - totalRound;
        break;
      }
      totalRound += game.numberOfRounds;
    }
    return result;

  }


}
