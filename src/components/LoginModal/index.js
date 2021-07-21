import { LoginDisplay } from "./styles/LoginDisplay"
import { useState, useEffect, useContext  } from "react"
import AppContext from "../../context/AppContext";

export default function LoginModal({ setLogin}) {
  const [ loginInfo , setLoginInfo ] = useState({
    username: '',
    password: '',
  });
  const {setLoggedIn} = useContext(AppContext)
  const [okLogin, setOkLogin] = useState(false)
  const {username, password} = loginInfo;
  
  useEffect(() => {
    const okUsername = username.length >= 5;
    const okPassword = password.length >= 8; 
    if ( okUsername && okPassword) {
      setOkLogin(true);
      return null
    }
    setOkLogin(false)
  } ,[loginInfo])

  const loginFunc = () => {
    setLoggedIn(true);
    setLogin(false);
  }

  return (
    <LoginDisplay>
      <div className="up">
        <h2>Log in</h2>
        <a onClick={() => setLogin(false)}><h2 className="close">+</h2></a>
      </div>
      <div className="middle">
        <div className="field">
          <label>
            <p>Username:</p>
            <input 
            placeholder="Username" 
            value={loginInfo.username} 
            type="text" 
            onChange={({target}) => setLoginInfo({...loginInfo, username: target.value})}/>
          </label>
          {username.length < 5 && username ? <p className="validation">• Couldn't find username</p> : null}
        </div>
        <div className="field">
          <label>
            <p>Password:</p>
            <input 
            placeholder="Password" 
            value={loginInfo.password} 
            type="password"
            onChange={({target}) => setLoginInfo({...loginInfo, password: target.value})}/>
          </label>
          {password.length < 8 && password? <p className="validation">• Wrong password</p> : null}
        </div>
      </div>
      <div className="low">
        <button 
          className="login-button" 
          type="button" 
          disabled={!okLogin} 
          onClick={loginFunc}
        >Log in</button>
        <button type="button">Forgot Password</button>
        <button type="button" onClick={() => setLogin(false)}>Cancel</button>
      </div>
    </LoginDisplay>
  )
}