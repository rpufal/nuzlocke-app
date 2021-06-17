import { GamesFilterDisplay } from './styles/GamesFilterDisplay';
import Switch from 'react-switch';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';


export default function GamesFilter({filters, setFilters}) {
  const platforms = [ "Game Boy", "Game Boy Color", "Game Boy Advance", "Nintendo DS", "Nintendo 3DS", "Nintendo Switch"]
  const generations = [1,2,3,4,5,6,7,8];
  const { colors } = useContext(ThemeContext);
  console.log(filters)
  return (
    <GamesFilterDisplay>
      <form>
          <select name="platforms" onChange={({target})=> setFilters({...filters, platforms: target.value})}>
            <option value="all">All Platforms</option>
            {platforms.map((current, index) => <option value={current} key={current + index}>{current}</option>)}
          </select>
          <select name="generations" onChange={({target})=> setFilters({...filters, generations: target.value})}>
            <option value="all">All Generations</option>
            {generations.map((current, index) => <option value={current} key={current + index}>{`Generation ${current}`}</option>)}
          </select>
        <div>
          <Switch 
            onChange={()=> setFilters({...filters, unnoficial: !filters.unnoficial })}
            checked={filters["unnoficial"]}
            height={20}
            width={45}
            handleDiameter={15}
            offColor={colors.text}
            onColor={colors.primary}
            offHandleColor={colors.secondary}
            onHandleColor={colors.secondary}
            aria-label={`Unnoficial Releases Switch: ${filters["unnoficial"]}`}
          />
          <p>Show Unnoficial Releases</p>
        </div>
      </form>
      <button>Request a game!</button>
    </GamesFilterDisplay>
  )
}