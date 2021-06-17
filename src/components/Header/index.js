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
            <a href="/">
              <img src={`/${title}/pokeball.png`} alt="pokeball" width={30}/>
            </a>
            <a href="/">
              <h3>JNI</h3>
            </a>
          </div>
          <a href="/games"><h3>Games</h3></a>
          <h3>Streams</h3>
          <h3>Hall of Fame</h3>
          <input type="text" placeholder="Search for your favorite game, nuzlocker, etc."/>
          <h3>Log in</h3>
          <h3>Sign up</h3>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
            offColor={colors.secondary}
            onColor={colors.secondary}
            offHandleColor={colors.contrast}
            onHandleColor={colors.contrast}
            uncheckedHandleIcon={<img src="/light/sun.png" width={12.5}/>}
            checkedHandleIcon={<img src="/dark/moon.png" width={12.5}/>}
            aria-label={`Switch with ${title} visual style`}
          />
          <img src="/country-icons/united-kingdom.png" alt="britain-flag" width={25}/>
        {/* </nav> */}
      </HeaderNav>
  )
}
