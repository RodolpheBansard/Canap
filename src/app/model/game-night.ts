import {Team} from "./team";
import {TeamRank} from "./team-rank";
import {GameWithRounds} from "./game-with-rounds";

export class GameNight{

  constructor(public name:string,
              public teams:Team[],
              public games:GameWithRounds[],
              public leaderBoard:TeamRank[],
              public playerByTeam: number,
              public numberOfTeam: number,
              public numberOfGame: number,
              public documentId?:string,
              ) {
  }


}
