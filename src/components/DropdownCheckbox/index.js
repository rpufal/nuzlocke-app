import {DropdownDisplay} from './styles/DropdownDisplay';
import Select from 'react-select';
import { useState } from 'react';

export default function DropdownCheckbox() {
  const [selected, setSelected] = useState([]);
  const handleChange = (e) => {
    setSelected(Array.isArray(e)? e.map(x=>x.label): [])
  }
  const regions = [{label: 'Kanto', value: 'kanto'}, {label: 'Johto', value:'johto'}, 
  {label: 'Hoenn', value: 'hoenn'}, {label: 'Sinnoh', value: 'sinnoh'}, {label: 'Unova', value: 'Unova'}];
  return (
    <Select isMulti options={regions} onChange={handleChange}/>
  )
};