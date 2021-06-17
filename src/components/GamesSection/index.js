import { GamesDisplay } from "./styles/GamesDisplay"
import {GamesList} from "../../../services/GamesList";
import GameCard from "./GameCard";
import GamesFilter from "../GamesFilter";

export default function GamesSection() {
  return(
    <GamesDisplay>
      <div class="title">
        <h3>Games</h3>
      </div>
      <GamesFilter />
      <div class="panel">
        {GamesList["Games"].map((game,index)=> <GameCard game={game} key={index}/>)}
      </div>
    </GamesDisplay>  
  )
}