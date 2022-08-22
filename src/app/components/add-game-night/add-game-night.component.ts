import {Component, Input, OnInit} from '@angular/core';
import {GameNightService} from "../../service/game-night.service";
import {Team} from "../../model/team";
import {Observable} from "rxjs";
import {GameNight} from "../../model/game-night";
import {GameWithRounds} from "../../model/game-with-rounds";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-game-night',
  templateUrl: './add-game-night.component.html',
  styleUrls: ['./add-game-night.component.scss']
})
export class AddGameNightComponent implements OnInit {

  counter = 0;
  numberOfTeams : number = 1;
  numberOfGame : number = 1;
  numberOfPlayerByTeam: number = 1;

  imageUrl : string = '';

  gameNight$ = new Observable<GameNight>()

  constructor(public gameNightService : GameNightService,
              private afs: AngularFirestore,
              private router: Router) {
    this.gameNight$ = this.gameNightService.gameNight$;
  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.gameNightService.gameNight$.getValue());
    const gameNightCollection = this.afs.collection<GameNight>('gameNights');
    gameNightCollection.add(JSON.parse(JSON.stringify(this.gameNightService.gameNight$.getValue()))).then((data) => {
      console.log(data);
      this.router.navigateByUrl('dashboard');
    });
  }

  incrementCounter(){
    this.counter++;
  }
  updateCounter(number: number){
    console.log(number)
    this.counter = number;
    this.setImageUrl(this.imageUrl)
  }

  updateName(name: string){
    this.gameNightService.updateName(name);
    this.incrementCounter();
  }
  updatePlayerByTeam(number: number){
    this.gameNightService.updatePlayerByTeam(number);
    this.numberOfPlayerByTeam = number;
    this.incrementCounter();
  }
  updateNumberOfTeam(number: number){
    this.gameNightService.updateNumberOfTeam(number);
    this.numberOfTeams = number;
    this.incrementCounter();
  }
  updateNumberOfGame(number: number){
    this.gameNightService.updateNumberOfGame(number);
    this.numberOfGame = number;
    this.incrementCounter();
  }
  updateTeams(team: Team, index: number){
    this.gameNightService.updateTeams(team,index);
    this.incrementCounter();
  }

  updateGames(game: GameWithRounds, index: number){
    this.gameNightService.updateGames(game,index);
    this.incrementCounter();
  }

  setImageUrl(url:string){
    setTimeout(() => {
      console.log(url)
      this.imageUrl = url;
    })

  }

}
