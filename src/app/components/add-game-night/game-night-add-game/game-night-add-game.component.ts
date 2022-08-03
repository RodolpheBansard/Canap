import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameWithRounds} from "../../../model/game-with-rounds";
import {DashboardService} from "../../../service/dashboard.service";
import {Game} from "../../../model/game";
import { from } from 'rxjs';

@Component({
  selector: 'app-game-night-add-game',
  templateUrl: './game-night-add-game.component.html',
  styleUrls: ['./game-night-add-game.component.scss']
})
export class GameNightAddGameComponent implements OnInit {
  addGameForm: FormGroup;

  @Output()
  gameEmitter : EventEmitter<GameWithRounds> = new EventEmitter<GameWithRounds>();

  @Input()
  numberOfTeam! : number

  games: Game[] = [];
  selectedGame! : Game;
  isSelectorActive = false;

  isLoading= true;

  constructor(private fb: FormBuilder,
              private dashboardService: DashboardService) {
    this.addGameForm = this.fb.group({
      numberOfRounds: ['', [Validators.required]],
    });

    dashboardService.games$.subscribe((games) => {
      if(games){
        this.games = games;
      }
    });
    setTimeout(()=> {
      for(let i=0 ; i<this.numberOfTeam; i++){
        this.addGameForm.addControl('Points'+i,this.fb.control('', Validators.required));
      }
      this.isLoading=false;
    },200)

  }

  ngOnInit(): void {
  }

  toggleSelector(){
    this.isSelectorActive = !this.isSelectorActive;
  }

  selectGame(game: Game){
    this.selectedGame = game;
  }

  submit(){
    const pointRepartition : number[] = [];
    for(let i=0 ; i<this.numberOfTeam; i++){
      pointRepartition.push(this.addGameForm.get('Points'+i)?.value);
    }

    const game = {
      game:this.selectedGame,
      numberOfRounds: this.addGameForm.get('numberOfRounds')?.value,
      pointRepartition: pointRepartition
    }
    this.gameEmitter.emit(game);
  }

  get numberOfRounds(){
    return this.addGameForm.get('numberOfRounds')
  }
  get Points0(){
    return this.addGameForm.get('Points0')
  }
  get Points1(){
    return this.addGameForm.get('Points1')
  }
  get Points2(){
    return this.addGameForm.get('Points2')
  }
  get Points3(){
    return this.addGameForm.get('Points3')
  }
  get Points4(){
    return this.addGameForm.get('Points4')
  }
  get Points5(){
    return this.addGameForm.get('Points5')
  }
}
