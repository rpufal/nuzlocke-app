import { GameDetails } from "./styles/GameDetails"
import RunsSection from "../RunsSection";


export default function SingleGameDetails () {

  return (
    <GameDetails>
      <section className="sidebar">
        <div className="info-card">
          <h3>Pokemon SuperNova Sun</h3>
          <img src="/game-thumbnails/heartgold.png"/>
        </div>
        <div className="index">
          <h3>Leaderboard</h3>
          <h3>Statistics</h3>
          <h3>Guides</h3>
          <h3>Resources</h3>
        </div>
      </section>
      <section className="main-content">
        <h2>Leaderboard</h2>
        <RunsSection />
      </section>
    </GameDetails>  
  )
}