import { LoginDisplay } from "./styles/LoginDisplay"
import { useState  } from "react"

export default function LoginModal({login, setLogin}) {
  const [ loginInfo , setLoginInfo ] = useState({
    username: '',
    password: '',
  });
  return (
    <LoginDisplay>
      <div className="up">
        <h2>Log in</h2>
        <a onClick={() => setLogin(false)}><h2 className="close">+</h2></a>
      </div>
      <div className="middle">
        <label>
          <p>Username:</p>
          <input 
          placeholder="Username" 
          value={loginInfo.username} 
          type="text" 
          onChange={({target}) => setLoginInfo({...loginInfo, username: target.value})}/>
        </label>
        <label>
          <p>Password:</p>
          <input 
          placeholder="Password" 
          value={loginInfo.password} 
          type="password"
          onChange={({target}) => setLoginInfo({...loginInfo, password: target.value})}/>
        </label>
      </div>
      <div className="low">
        <button className="login-button" type="button">Log in</button>
        <button type="button">Forgot Password</button>
        <button type="button" onClick={() => setLogin(false)}>Cancel</button>
      </div>
    </LoginDisplay>
  )
}