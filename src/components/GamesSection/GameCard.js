import { GameCardDisplay } from "./styles/GameCardDisplay";

export default function GameCard({game}) {
  const {GameName, GameThumbnail,NumberPlayers, Developer, url } = game;
  return (
    <GameCardDisplay>
      <a href={`/games${url}`}>
        <img className="game-cover" src={GameThumbnail} alt={`${GameName} cover art`}/>
      </a>
      <a href={`/games${url}`}>
        <h4 className="game-title">{GameName}</h4>
      </a>
      <p className="players-number">{`${NumberPlayers} active Nuzlockers`}</p>
    </GameCardDisplay>
  )
}