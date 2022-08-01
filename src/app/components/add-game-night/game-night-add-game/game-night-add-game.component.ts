import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameWithRounds} from "../../../model/game-with-rounds";
import {DashboardService} from "../../../service/dashboard.service";
import {Game} from "../../../model/game";

@Component({
  selector: 'app-game-night-add-game',
  templateUrl: './game-night-add-game.component.html',
  styleUrls: ['./game-night-add-game.component.scss']
})
export class GameNightAddGameComponent implements OnInit {
  addGameForm: FormGroup;

  @Output()
  gameEmitter : EventEmitter<GameWithRounds> = new EventEmitter<GameWithRounds>();

  games: Game[] = [];
  selectedGame! : Game;
  isSelectorActive = false;

  constructor(private fb: FormBuilder,
              private dashboardService: DashboardService) {
    this.addGameForm = this.fb.group({
      numberOfRounds: ['', [Validators.required]],
      first: ['', [Validators.required]],
      second: ['', [Validators.required]],
      third: ['', [Validators.required]],
      fourth: ['', [Validators.required]],
    });

    dashboardService.games$.subscribe((games) => {
      if(games){
        this.games = games;
      }
    });
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
    const game = {
      game:this.selectedGame,
      numberOfRounds: this.addGameForm.get('numberOfRounds')?.value,
      pointRepartition:[1,2,3]
    }
    this.gameEmitter.emit(game);
  }

  get numberOfRounds(){
    return this.addGameForm.get('numberOfRounds')
  }
  get first(){
    return this.addGameForm.get('first')
  }
  get second(){
    return this.addGameForm.get('second')
  }
  get third(){
    return this.addGameForm.get('third')
  }
  get fourth(){
    return this.addGameForm.get('fourth')
  }
}
