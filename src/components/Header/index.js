import { HeaderNav } from './styles/Header';
import Switch from 'react-switch';
import {useContext} from 'react';
import { ThemeContext } from 'styled-components';
import { AppContext } from '../../context/AppContext';

export default function Home() {
  const { colors, title } = useContext(ThemeContext);
  const {toggleTheme} = useContext(AppContext);
  return (
      <HeaderNav>
        {/* <nav> */}
          <div>
            <img src="/pokeball.png" alt="pokeball" width={30}/>
            <h3>JNI</h3>
          </div>
          <h3>games</h3>
          <h3>streams</h3>
          <h3>hall of fame</h3>
          <input type="text" placeholder="Search for your favorite game, nuzlocker, etc."/>
          <h3>log in</h3>
          <h3>sign up</h3>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={15}
            offColor={colors.secondary}
            onColor={colors.text}
          />
          <img src="/united-kingdom.png" alt="britain-flag" width={25}/>
        {/* </nav> */}
      </HeaderNav>
  )
}
