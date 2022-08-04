import {RoundScore} from "./round-score";
import {TeamRank} from "./team-rank";

export interface CurrentGameNight{
  documentId:string,
  scores: RoundScore[];
}
