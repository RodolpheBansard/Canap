import { Component, OnInit } from '@angular/core';
import {GameNightService} from "../../service/game-night.service";
import {BehaviorSubject, Observable} from "rxjs";
import {GameNight} from "../../model/game-night";
import {DashboardService} from "../../service/dashboard.service";
import {CurrentGameNight} from "../../model/current-game-night";
import {RoundScore} from "../../model/round-score";
import {TeamRank} from "../../model/team-rank";

export enum GameNightState{
  SUMMARY,
  ROUND,
  RESULTS
}

@Component({
  selector: 'app-run-game-night',
  templateUrl: './run-game-night.component.html',
  styleUrls: ['./run-game-night.component.scss']
})
export class RunGameNightComponent implements OnInit {

  currentState = GameNightState.SUMMARY;

  leaderBoard$! : BehaviorSubject<TeamRank[]>;

  gameNight!:GameNight;


  gameNight$: Observable<GameNight>

  constructor(public dashboardService : DashboardService,
              public gameNightService: GameNightService) {
    this.gameNight$ = dashboardService.getGameNight(gameNightService.gameNight$)
    this.gameNight$.subscribe((data)=> {
      this.gameNight = data;
    })





  }

  ngOnInit(): void {
  }

  launchGameNight(){
    this.currentState = GameNightState.ROUND
  }

  goToResults(scores : RoundScore[]){
    const leaderBoard : TeamRank[] = new Array(this.gameNight.numberOfTeam);
    this.gameNight.teams.forEach((team,index)=> {
      leaderBoard[index]= {
        team: team,
        score:0,
        rank:0
      };
    })
    scores.forEach((score,scoreIndex) => {
      score.ranking.forEach((emoji,emojiIndex) => {
        leaderBoard.forEach((teamRank,teamRankIndex) => {
          if(teamRank.team.emoji === emoji){
            // @ts-ignore
            teamRank.score += this.gameNight.games.find(element => element.game.name === score.game.name).pointRepartition[emojiIndex];
          }
        })
      })
    })

    leaderBoard.sort((a,b) => a.score - b.score)
    leaderBoard.forEach((teamRank,index) => {
      teamRank.rank = index+1;
    })
    this.leaderBoard$ = new BehaviorSubject<TeamRank[]>(leaderBoard);
    this.currentState = GameNightState.RESULTS;
  }

}
