import { HeaderNav } from './styles/Header';
import Switch from 'react-switch';
import {useContext, useState} from 'react';
import { ThemeContext } from 'styled-components';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';

export default function HeaderApp({toggleTheme}) {
  const { colors, title } = useContext(ThemeContext);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);


  return (
      <HeaderNav>
        {/* <nav> */}
          <div className="header-section">
            <a href="/">
              <img src={`/${title}/pokeball.png`} alt="pokeball" width={30}/>
            </a>
            <a href="/">
              <h3>JNI</h3>
            </a>
          </div>
          <a href="/games"><h3>Games</h3></a>
          {/* <h3>Streams</h3> */}
          {/* <h3>Hall of Fame</h3> */}
          <input type="text" placeholder="Search for your favorite game, nuzlocker, etc."/>
          <a onClick={() => setSignup(!signup)}>
            <h3>Sign up</h3>
          </a>
          <a onClick={() => setLogin(!login)}>
            <h3>Logn in</h3>
          </a>
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
        <div className={`modal-background ${signup}`}><SignUpModal setSignup={setSignup} signup={signup}/></div>
        <div className={`modal-background ${login}`}><LoginModal setLogin={setLogin} login={login}/></div>
      </HeaderNav>
  )
}
