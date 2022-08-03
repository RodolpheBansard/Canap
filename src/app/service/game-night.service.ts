import { Injectable } from '@angular/core';
import {GameNight} from "../model/game-night";
import {Team} from "../model/team";
import {Game} from "../model/game";
import {GameWithRounds} from "../model/game-with-rounds";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameNightService {

  gameNight : GameNight = new GameNight('',[],[],[],1,1,1);
  gameNight$ : BehaviorSubject<GameNight> = new BehaviorSubject<GameNight>(this.gameNight);

  constructor() {
  }

  selectGameNight(gameNight: GameNight){
    this.gameNight$.next(gameNight);
  }



  updateName(name: string){
    this.gameNight.name = name;
    this.gameNight$.next(this.gameNight);
  }

  updatePlayerByTeam(number: number){
    this.gameNight.playerByTeam = number;
    this.gameNight$.next(this.gameNight);
  }

  updateNumberOfTeam(number: number){
    this.gameNight.numberOfTeam = number;
    if(this.gameNight.teams?.length === 0){
      this.gameNight.teams = new Array<Team>(number);
    }else{
      const currentArray = this.gameNight.teams;
      this.gameNight.teams = new Array<Team>(number)
      currentArray?.forEach((team) => {
        this.gameNight.teams?.push(team);
      })
    }
    this.gameNight$.next(this.gameNight);
  }
  updateNumberOfGame(number: number){
    this.gameNight.numberOfGame = number;
    if(this.gameNight.games?.length === 0){
      this.gameNight.games = new Array<GameWithRounds>(number);
    }else{
      const currentArray = this.gameNight.games;
      this.gameNight.games = new Array<GameWithRounds>(number)
      currentArray?.forEach((game) => {
        this.gameNight.games?.push(game);
      })
    }
    this.gameNight$.next(this.gameNight);
  }
  updateTeams(team: Team, index:number){
    if(this.gameNight.teams){
      this.gameNight.teams[index] = team;
    }
    this.gameNight$.next(this.gameNight);
  }

  updateGames(game: GameWithRounds, index:number){
    if(this.gameNight.games){
      this.gameNight.games[index] = game;
    }
    this.gameNight$.next(this.gameNight);
  }
}
