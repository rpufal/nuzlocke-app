import { CurrentRunDiv } from "./styles/CurrentRun";

export default function CurrentRun ({props}) {
  const {GameTitle, GameThumbnail, Username, Country,
  Status, Tags} = props
  return (
    <CurrentRunDiv>
      <div className="cell">
        <a href={`/games/heartgold`}>
          <img class="game-cover" src={GameThumbnail} alt={`${GameTitle} cover art`}/>
        </a>
      </div>
      <div className="cell">
        <a href={`/games/heartgold`}>
          <h4 className="game-title">{GameTitle}</h4>
        </a>
      </div>
      <div className="cell">
        <img className="country-icon" src={Country['CountryIcon']} alt={`${Country['CountryName']} flag`}/>
      </div>
      <div className="cell">
      <h4 className="userName">{Username}</h4>
      </div>
      <div className="cell">
        { Status['Finished'] === 'finished'? <h4 className={`run-status ${Status.Win}`}>Finished</h4> : <h4 className="run-status ongoing">Ongoing</h4>}
      </div>
      <div className="cell">
        <h4 className="run-number">{Status.RunNumber}</h4>
      </div>
      <div className="cell">
        <div className="tags">
          {Tags.map((tag, index)=> <p key={index}>{tag}</p>)}
        </div>
      </div>
    </CurrentRunDiv>
  );
}