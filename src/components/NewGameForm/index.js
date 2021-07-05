import { NewGameDisplay  } from "./styles/NewGameDisplay";
import { useState } from 'react';
import { rules } from "eslint-config-prettier";

export default function NewGameForm() {
  const [form, setForm] = useState({
    game: '',
    rules: {
      noOverleveling: false,
      setMode: false,
      noItems: false,
      hardcore: false,
    },
    types: 'all',
    regions: 'all',
  })
  const games = ['Pokémon Red', 'Pokémon Blue', 'Pokémon Yellow', 'Pokémon Green'];
  const types = ['Fighting', 'Water', 'Fire', 'Grass'];
  const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh'];
  return (
    <NewGameDisplay>
      <div className="title">
        <h3>New Challenge</h3>
      </div>
        <form className="panel">
          <select name="games" onChange={({target})=> setForm({...form, game: target.value})}>
            <option value="">Choose a game</option>
            {games.map((current, index) => <option value={current} key={current + index}>{current}</option>)}
          </select>
          <div className="rules-div">
            <label htmlFor="noOverleveling">
              <p>No Overleveling</p>
              <input 
              type="checkbox" 
              id="noOverleveling" 
              name="noOverleveling" 
              value={form.rules.noOverleveling} 
              onChange={() => setForm({...form, rules : {...form.rules, noOverleveling: !form.rules.noOverleveling }})}/>
            </label>
            <label htmlFor="setMode">
              <p>Set Mode</p>
              <input 
              type="checkbox" 
              id="setMode" 
              name="setMode" 
              value={form.rules.setMode} 
              onChange={() => setForm({...form, rules : {...form.rules, setMode: !form.rules.setMode }})}/>
            </label>
            <label htmlFor="noItems">
              <p>No Items</p>
              <input 
              type="checkbox" 
              id="noItems" 
              name="noItems" 
              value={form.rules.noItems} 
              onChange={() => setForm({...form, rules : {...form.rules, noItems: !form.rules.noItems }})}/>
            </label>
            <label htmlFor="hardcore">
              <p>Hardcore Rules</p>
              <input 
              type="checkbox" 
              id="hardcore" 
              name="hardcore" 
              value={form.rules.hardcore} 
              onChange={() => setForm({...form, rules : {...form.rules, hardcore: !form.rules.hardcore, noItems: !form.rules.hardcore, setMode: !form.rules.hardcore, noOverleveling: !form.rules.hardcore }})}/>
            </label>
          </div>
          <h4>Optional Rules</h4>
          <div className="optional-rules">
            <select name="types" onChange={({target})=> setForm({...form, types: target.value})}>
              <option value="all">Types Enabled</option>
              {types.map((current, index) => <option value={current} key={current + index}>{current}</option>)}
            </select>
            <select name="regions" onChange={({target})=> setForm({...form, regions: target.value})}>
              <option value="all">Regions Enabled</option>
              {regions.map((current, index) => <option value={current} key={current + index}>{current}</option>)}
            </select>
          </div>
          <button type="button">
            Submit Challenge
          </button>
        </form>
    </NewGameDisplay>
  )
}