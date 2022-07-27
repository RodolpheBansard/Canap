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
    this.gameNights$ = afs.collection<GameNight>('gameNights').valueChanges();
    this.games$ = afs.collection<Game>('games').valueChanges();
  }


  addGame(game:Game): Promise<any>{
    return this.afs.collection<Game>('games').add(game);
  }


}
