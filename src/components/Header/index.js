import { HeaderNav } from './styles/Header';
import Switch from 'react-switch';
import {useContext} from 'react';
import { ThemeContext } from 'styled-components';

export default function HeaderApp({toggleTheme}) {
  const { colors, title } = useContext(ThemeContext);


  return (
      <HeaderNav>
        {/* <nav> */}
          <div>
            <img src={`/${title}/pokeball.png`} alt="pokeball" width={30}/>
            <h3>JNI</h3>
          </div>
          <h3>Games</h3>
          <h3>Streams</h3>
          <h3>Hall of fame</h3>
          <input type="text" placeholder="Search for your favorite game, nuzlocker, etc."/>
          <h3>Log in</h3>
          <h3>Sign up</h3>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={35}
            handleDiameter={20}
            offColor={colors.secondary}
            onColor={colors.secondary}
            offHandleColor={colors.contrast}
            onHandleColor={colors.contrast}
          />
          <img src="/country-icons/united-kingdom.png" alt="britain-flag" width={25}/>
        {/* </nav> */}
      </HeaderNav>
  )
}
