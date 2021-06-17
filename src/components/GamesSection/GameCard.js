import { GameCardDisplay } from "./styles/GameCardDisplay";

export default function GameCard({game}) {
  const {GameName, GameThumbnail,NumberPlayers, Platform, Generation, Official, Developer} = game;
  return (
    <GameCardDisplay>
         <img className="game-cover" src={GameThumbnail} alt={`${GameName} cover art`}/>
         <h4 className="game-title">{GameName}</h4>
         <p className="players-number">{`${NumberPlayers} active Nuzlockers`}</p>
    </GameCardDisplay>
  )
}