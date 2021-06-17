import { GamesFilterDisplay } from './styles/GamesFilterDisplay';
import Switch from 'react-switch';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';


export default function GamesFilter() {
  const platforms = [ "Game Boy", "Game Boy Color", "Game Boy Advance", "Nintendo DS", "Nintendo 3DS", "Nintendo Switch"]
  const generations = [1,2,3,4,5,6,7,8];
  const { colors, title } = useContext(ThemeContext);

  const [officialReleases, setOfficialReleases] = useState(true); 

  return (
    <GamesFilterDisplay>
      <form>
          <select name="platforms">
            <option value="all">All Platforms</option>
            {platforms.map((current, index) => <option value={current} key={current + index}>{current}</option>)}
          </select>
          <select name="generations">
            <option value="all">All Generations</option>
            {generations.map((current, index) => <option value={current} key={current + index}>{`Generation ${current}`}</option>)}
          </select>
        <div>
          <Switch 
            onChange={() => setOfficialReleases(!officialReleases)}
            checked={officialReleases}
            height={20}
            width={45}
            handleDiameter={15}
            offColor={colors.text}
            onColor={colors.primary}
            offHandleColor={colors.secondary}
            onHandleColor={colors.secondary}
            aria-label={`Switch with ${title} visual style`}
          />
          <p>Show Unnoficial Releases</p>
        </div>
      </form>
      {/* <p>{`15 Results`}</p> */}
      <button>Request a game!</button>
    </GamesFilterDisplay>
  )
}