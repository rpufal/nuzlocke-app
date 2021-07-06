import { SignUpDisplay } from "./styles/SignUpDisplay"
import { useState  } from "react"

export default function SignUpModal() {
  const [ loginInfo , setLoginInfo ] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <SignUpDisplay>
      <div className="up">
        <h2>Sign up</h2>
        <h2 className="close">+</h2>
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
          <p>E-mail:</p>
          <input 
          placeholder="E-mail" 
          value={loginInfo.email} 
          type="text" 
          onChange={({target}) => setLoginInfo({...loginInfo, email: target.value})}/>
        </label>
        <label>
          <p>Password:</p>
          <input 
          placeholder="Password" 
          value={loginInfo.password} 
          type="password"
          onChange={({target}) => setLoginInfo({...loginInfo, password: target.value})}/>
        </label>
        <label>
          <p>Confirm Password:</p>
          <input 
          placeholder="Confirm Password" 
          value={loginInfo.confirmPassword} 
          type="password"
          onChange={({target}) => setLoginInfo({...loginInfo, confirmPassword: target.value})}/>
        </label>
      </div>
      <div className="low">
        <button className="signup-button" type="button">Sign up</button>
        <button type="button">Cancel</button>
      </div>
    </SignUpDisplay>
  )
}