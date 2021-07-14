import {useState} from "react";
import { GameDetails } from "./styles/GameDetails"
import RunsSection from "../RunsSection";


export default function SingleGameDetails () {
  const [mainContent, setMainContent] = useState({
    leaderboard: true,
    statistics: false,
    guides: false,
    resources: false
  });
  return (
    <GameDetails>
      <section className="sidebar">
        <div className="info-card">
          <h3>Pokemon SuperNova Sun</h3>
          <img src="/game-thumbnails/heartgold.png"/>
        </div>
        <div className="index">
          <a className="index-link" href="/newchallenge"><h3>New Challenge</h3></a>
          <a className="index-link" onClick={() => setMainContent({leaderboard: true, statistics: false, guides: false, resources: false})}>
            <h3>Leaderboard</h3>
          </a>
          <a className="index-link" onClick={() => setMainContent({leaderboard: false, statistics: true, guides: false, resources: false})}>
            <h3>Statistics</h3>
          </a>
          <a className="index-link" onClick={() => setMainContent({leaderboard: false, statistics: true, guides: false, resources: false})}>
            <h3>Guides</h3>
          </a>
          <a className="index-link" onClick={() => setMainContent({leaderboard: false, statistics: true, guides: false, resources: false})}>
            <h3>Resources</h3>
          </a>
        </div>
      </section>
      <section className="main-content">
        { mainContent.leaderboard 
          ? <div><h2>Leaderboard</h2><RunsSection /></div>
          : null
        }
        {
          mainContent.statistics
          ? <div>
              <h2>Not available yet</h2>
              <h4>This section is currently under construction</h4>
            </div>
          : null
        }
      </section>
    </GameDetails>  
  )
}