import {Team} from "./team";
import {TeamRank} from "./team-rank";
import {GameWithRounds} from "./game-with-rounds";

export interface GameNight{
  name:string;
  teams: Team[];
  games: GameWithRounds[];
  leaderBoard: TeamRank[];
}
