import { GamesDisplay } from "./styles/GamesDisplay"
import {GamesList} from "../../../services/GamesList";
import GameCard from "./GameCard";
import GamesFilter from "../GamesFilter";
import { useState } from "react";

export default function GamesSection() {
  const [filters, setFilters] = useState({
    unnoficial: true,
    platforms: "all",
    generations: "all"
  })
  return(
    <GamesDisplay>
      <div class="title">
        <h3>Games</h3>
      </div>
      <GamesFilter filters={filters} setFilters={setFilters}/>
      <div class="panel">
        {GamesList["Games"].map((game,index)=> <GameCard game={game} key={index}/>)}
      </div>
    </GamesDisplay>  
  )
}