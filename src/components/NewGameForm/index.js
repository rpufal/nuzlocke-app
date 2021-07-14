import { NewGameDisplay  } from "./styles/NewGameDisplay";
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';


export default function NewGameForm() {
  const [form, setForm] = useState({
    game: '',
    rules: {
      noOverleveling: false,
      setMode: false,
      noItems: false,
      hardcore: false,
    },
    cantFind: false,
    types: 'all',
    regions: 'all',
    extraRule: '',
  });
  const [showUnnofficial, setShowUnnoficial] = useState(true);
  const { colors } = useContext(ThemeContext);

  const games = [{value: 'None', official:''},{value:'Pokémon Red', official: true}, 
  {value:'Pokémon Blue', official: true}, {value: 'Pokémon SacredGold', official: false},
  {value:'Pokémon Volt White', official: false}];

  const [gamesList, setGamesList] = useState(games);

  const types = ['Water', 'Fire', 'Grass', 'Normal', 'Fairy', 'Steel', 'Rock', 'Ground', 'Poison',
  'Bug', 'Dragon', 'Electric', 'Psychic', 'Dark', 'Ghost', 'Ice', 'Flying','Fighting'];
  const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar'];
  
  useEffect(() => {
    if (!showUnnofficial) {
      setGamesList(gamesList.filter((current) =>  current.official === true));
      return null;
    }
    setGamesList(games);
    return null;
  }, [showUnnofficial])
  
  
  return (
    <NewGameDisplay>
      <div className="title">
        <h2>New Challenge</h2>
      </div>
        <form className="panel">
          <div className="search-game">
            <label>
              Choose a game for your nuzlocke: 
              <input 
                type="search" 
                list="games" 
                placeholder="e.g. Pokémon Red"
                onChange={({target})=> setForm({...form, game: target.value})}/>
            </label>
            <datalist id="games">
              {gamesList.map((current, index) => <option value={current.value} key={current.value+index}/>)}
            </datalist>
            <div className="showUnnofficial">
              <Switch 
                onChange={()=> setShowUnnoficial(!showUnnofficial)}
                checked={showUnnofficial}
                height={20}
                width={45}
                handleDiameter={15}
                offColor={colors.text}
                onColor={colors.primary}
                offHandleColor={colors.secondary}
                onHandleColor={colors.secondary}
                // aria-label={`Unnoficial Releases Switch: ${filters["unnoficial"]}`}
              />
              <p>Show Unnoficial Releases</p>
            </div>
        </div>
          <div className="cantFind">
            <label htmlFor="cantFind">
              <p>Can't find your game?</p>
              <input 
              type="checkbox" 
              id="cantFind" 
              name="cantFind" 
              value={form.cantFind}
              onChange={()=> setForm({...form, cantFind: !form.cantFind})}
              />
            </label>
            {form.cantFind
            ? <input 
            type="text" 
            placeholder="type it here!" 
            onChange={({target}) => setForm({...form, cantFind: target.value})}/>
            : null}
          </div>
          <div className="rules-div">
            <label htmlFor="noOverleveling">
              <p>No Overleveling</p>
              <input 
              type="checkbox" 
              id="noOverleveling" 
              name="noOverleveling" 
              checked={form.rules.noOverleveling} 
              onChange={() => setForm({...form, rules : {...form.rules, noOverleveling: !form.rules.noOverleveling }})}/>
            </label>
            <label htmlFor="setMode">
              <p>Set Mode</p>
              <input 
              type="checkbox" 
              id="setMode" 
              name="setMode" 
              checked={form.rules.setMode}
              onChange={() => setForm({...form, rules : {...form.rules, setMode: !form.rules.setMode }})}/>
            </label>
            <label htmlFor="noItems">
              <p>No Items</p>
              <input 
              type="checkbox" 
              id="noItems" 
              name="noItems" 
              checked={form.rules.noItems} 
              onChange={() => setForm({...form, rules : {...form.rules, noItems: !form.rules.noItems }})}/>
            </label>
            <label htmlFor="hardcore">
              <p>Hardcore Rules</p>
              <input 
              type="checkbox" 
              id="hardcore" 
              name="hardcore" 
              checked={form.rules.hardcore} 
              onChange={() => setForm({...form, rules : {...form.rules, hardcore: !form.rules.hardcore, noItems: !form.rules.hardcore, setMode: !form.rules.hardcore, noOverleveling: !form.rules.hardcore }})}/>
            </label>
          </div>
          <h4>Optional Rules</h4>
          <div className="optional-rules">
            <select name="types" onChange={({target})=> setForm({...form, types: target.value})}>
              <option value="all">Types Enabled</option>
              {types.map((current, index) => <option value={current} key={current + index}>{`${current}`}</option>)}
            </select>
            <select name="regions" onChange={({target})=> setForm({...form, regions: target.value})}>
              <option value="all">Regions Enabled</option>
              {regions.map((current, index) => <option value={current} key={current + index}>{current}</option>)}
            </select>
            <label>
              Got something different in your mind?
              <input 
              placeholder="e.g. Only blue pokemon" 
              name="extraRule" 
              type="text" 
              onChange={({target}) =>  setForm({...form, extraRule: target.value})}
              />
            </label>
          </div>
          <button type="button">
            Submit Challenge
          </button>
        </form>
    </NewGameDisplay>
  )
}