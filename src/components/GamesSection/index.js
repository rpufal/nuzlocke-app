import { GamesDisplay } from "./styles/GamesDisplay"
import {GamesList} from "../../../services/GamesList";
import GameCard from "./GameCard";
import GamesFilter from "../GamesFilter";
import { useEffect, useState } from "react";

export default function GamesSection() {
  const [filters, setFilters] = useState({
    unnoficial: true,
    platforms: "all",
    generations: "all"
  })
  const [games, setGames] = useState(GamesList['Games']);

  useEffect(() => {
    const gamesFiltered1 = GamesList["Games"].filter((game) => {
      if (filters["platforms"] !== "all") {
        return game["Platform"] === filters["platforms"]
      }
      return game;
    });
    const gamesFiltered2 = gamesFiltered1.filter((game) => {
      if (filters["generations"] !== "all") {
        return game["Generation"] === filters["generations"]
      }
      return game;
    });
    const gamesFiltered3 = gamesFiltered2.filter((game) => {
      if (filters["unnoficial"]) {
        return game
      }
      return game["Official"] == !filters["unnoficial"]
    });
    setGames(gamesFiltered3);
    console.log(gamesFiltered3);
  },[filters]);

  return(
    <GamesDisplay>
      <div class="title">
        <h3>Games</h3>
      </div>
      <GamesFilter filters={filters} setFilters={setFilters}/>
      <div class="panel">
        {games.map((game,index)=> <GameCard game={game} key={index}/>)}
      </div>
    </GamesDisplay>  
  )
}