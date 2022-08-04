import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {GameNight} from "../../../model/game-night";
import {RoundScore} from "../../../model/round-score";
import {CurrentGameNight} from "../../../model/current-game-night";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {distinctUntilChanged, map} from "rxjs/operators";



@Component({
  selector: 'app-game-round-score',
  templateUrl: './game-round-score.component.html',
  styleUrls: ['./game-round-score.component.scss']
})
export class GameRoundScoreComponent implements OnInit {

  @Input()
  gameNight$ = new Observable<GameNight>();

  currentScore! : BehaviorSubject<RoundScore>
  currentGameNight$! : Observable<CurrentGameNight>;

  scores: RoundScore[] = [];

  gameNight! : GameNight;


  @Output()
  goToResultEvent : EventEmitter<RoundScore[]> = new EventEmitter<RoundScore[]>();

  gameIndex = 0;
  roundIndex = 1;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit(): void {
    this.gameNight$.subscribe((data)=> {
      if(data) {
        this.gameNight = data;

        this.initScores();
      }
    })

    // @ts-ignore
    this.currentGameNight$ = this.afs.doc<CurrentGameNight>('currentGameNight/1').valueChanges().subscribe((data) => {
      if(data){
        this.scores = data.scores;
        this.currentScore.next(this.scores[this.roundIndex-1]);
      }
    })

  }

  emitScore(roundScore : RoundScore){
    this.currentScore.next(roundScore);
    this.afs.doc('currentGameNight/1').set({scores:JSON.parse(JSON.stringify(this.scores))});
  }

  initScores(){
    this.scores = []
    let gameIndex = 0;
    let roundIndex = 1;
    for(let i=0; i<this.getTotalRound(); i++){
      this.scores.push({
        game: this.gameNight.games[gameIndex].game,
        round: roundIndex,
        ranking: new Array(this.gameNight.numberOfTeam)
      })
      if(roundIndex === this.gameNight.games[0].numberOfRounds){
        roundIndex = 1;
        gameIndex++;
      }
      else{
        roundIndex++;
      }
    }
    this.currentScore = new BehaviorSubject<RoundScore>(this.scores[0])
  }

  setRank(emoji:string,rankIndex: number){
    this.scores[this.roundIndex-1].ranking[rankIndex] = emoji;
    this.emitScore(this.scores[this.roundIndex-1])
  }

  previousRound(){
    this.roundIndex--;
    this.gameIndex = this.getGameIndex()
    this.emitScore(this.scores[this.roundIndex-1]);
  }

  nextRound(){
    this.roundIndex++;
    this.gameIndex = this.getGameIndex()
    this.emitScore(this.scores[this.roundIndex-1]);
  }

  getTotalRound():number{
    let result : number = 0;
    this.gameNight.games.forEach((game) => {
      result += game.numberOfRounds;
    })
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
