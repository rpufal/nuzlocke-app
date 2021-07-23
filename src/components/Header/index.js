import { HeaderNav } from './styles/Header';
import Switch from 'react-switch';
import {useContext, useEffect, useState} from 'react';
import { ThemeContext } from 'styled-components';
import AppContext from '../../context/AppContext';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';

export default function HeaderApp({toggleTheme}) {
  const { colors, title } = useContext(ThemeContext);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const {setLoggedIn, loggedIn} = useContext(AppContext);
  console.log('loggedin context', loggedIn)
  // useEffect(()=> {},[loggedIn])
  const logoutFunc = () => {
    setLoggedIn(false)
    sessionStorage.setItem('loginState', false);
    console.log('logout func')
  }
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
          <a href="/newchallenge"><h3>New Challenge</h3></a>
          {/* <h3>Streams</h3> */}
          {/* <h3>Hall of Fame</h3> */}
          <input type="text" placeholder="Search for your favorite game, nuzlocker, etc."/>
          { !loggedIn
          ?
          <a onClick={() => setShowSignup(!showSignup)}>
            <h3>Sign up</h3>
          </a>
          :null
          }
          { !loggedIn
          ?
          <a onClick={() => setShowLogin(!showLogin)}>
            <h3>Log in</h3>
          </a>
          :
            null
          }
          { loggedIn 
          ? <a href="/user">
              <h3>My Profile</h3>
            </a>
          : null  
          }
          { loggedIn 
          ? <h3 onClick={logoutFunc}>Log out</h3>
          : null  
          }
          <Switch
            className="toggle" 
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
        <div className={`modal-background ${showSignup}`}><SignUpModal setShowSignup={setShowSignup} /></div>
        <div className={`modal-background ${showLogin}`}><LoginModal setShowLogin={setShowLogin}/></div>
      </HeaderNav>
  )
}
