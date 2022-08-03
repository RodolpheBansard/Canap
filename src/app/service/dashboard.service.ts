import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GameNight} from "../model/game-night";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Game} from "../model/game";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  gameNights$ : Observable<GameNight[]>
  games$ : Observable<Game[]>

  constructor(private afs : AngularFirestore) {
    this.gameNights$ = afs.collection<GameNight>('gameNights').valueChanges({ idField: 'documentId' });
    this.games$ = afs.collection<Game>('games').valueChanges({ idField: 'documentId' });
  }


  addGame(game:Game): Promise<any>{
    return this.afs.collection<Game>('games').add(game);
  }

  deleteGame(game: Game){
    this.afs.doc<Game>('games/'+game.documentId).delete();
  }
  deleteGameNight(gameNight: GameNight){
    this.afs.doc<Game>('gameNights/'+gameNight.documentId).delete();
  }
  runGameNight(gameNight: GameNight){
    console.log(gameNight);
  }
  editGame(game: Game){
    console.log(game);
  }
  editGameNight(gameNight: GameNight){
    console.log(gameNight);
  }


}
