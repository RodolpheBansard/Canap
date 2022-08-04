import {Game} from "./game";

export  interface RoundScore{
  game: Game;
  round: number;
  ranking : string[];
}
