import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {GameNight} from "../model/game-night";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Game} from "../model/game";
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DashboardService{
  gameNights$! : Observable<GameNight[]>
  games$! : Observable<Game[]>

  selectedGameNightId : BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private afs : AngularFirestore,
              private authService: AuthService) {

    this.authService.getUserId().subscribe((userId) => {
      if(userId){
        this.gameNights$ = afs.collection<GameNight>('gameNights', ref => ref.where('userId','==',userId)).valueChanges({ idField: 'documentId' });
        this.games$ = afs.collection<Game>('games', ref => ref.where('userId','==',userId)).valueChanges({ idField: 'documentId' });
      }
    })

  }


  getGameNight(gameNight: BehaviorSubject<GameNight>): Observable<GameNight>{
    // @ts-ignore
    return this.afs.doc<GameNight>('gameNights/'+this.selectedGameNightId.getValue()).valueChanges({ idField: 'documentId' });
  }


  addGame(game:Game): Observable<any>{

    // @ts-ignore
    return this.authService.getUserId().pipe(map((userId) => {
      game.userId = userId;
      return this.afs.collection<Game>('games').add(game);
    }))
  }

  deleteGame(game: Game){
    this.afs.doc<Game>('games/'+game.documentId).delete();
  }
  deleteGameNight(gameNight: GameNight){
    this.afs.doc<Game>('gameNights/'+gameNight.documentId).delete();
  }



}
