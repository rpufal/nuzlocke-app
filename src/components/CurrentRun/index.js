import { CurrentRunDiv } from "./styles/CurrentRun";

export default function CurrentRun ({props}) {
  const {GameTitle, GameThumbnail, Username, Country,
  Status, Tags} = props
  return (
    <CurrentRunDiv>
      <div class="cell">
        <a href={`/games/heartgold`}>
          <img class="game-cover" src={GameThumbnail} alt={`${GameTitle} cover art`}/>
        </a>
      </div>
      <div class="cell">
        <a href={`/games/heartgold`}>
          <h4 class="game-title">{GameTitle}</h4>
        </a>
      </div>
      <div class="cell">
        <img class="country-icon" src={Country['CountryIcon']} alt={`${Country['CountryName']} flag`}/>
      </div>
      <div class="cell">
      <h4 class="userName">{Username}</h4>
      </div>
      <div class="cell">
        { Status['Finished'] === 'finished'? <h4 class={`run-status ${Status.Win}`}>Finished</h4> : <h4 class="run-status ongoing">Ongoing</h4>}
      </div>
      <div class="cell">
        <h4 class="run-number">{Status.RunNumber}</h4>
      </div>
      <div class="cell">
        <div class="tags">
          {Tags.map((tag, index)=> <p key={index}>{tag}</p>)}
        </div>
      </div>
    </CurrentRunDiv>
  );
}