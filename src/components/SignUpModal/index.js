import { SignUpDisplay } from "./styles/SignUpDisplay"
import { useState  } from "react"

export default function SignUpModal() {
  const [ signupInfo , setSignupInfo ] = useState({
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
          value={signupInfo.username} 
          type="text" 
          onChange={({target}) => setSignupInfo({...signupInfo, username: target.value})}/>
        </label>
        <label>
          <p>E-mail:</p>
          <input 
          placeholder="E-mail" 
          value={signupInfo.email} 
          type="text" 
          onChange={({target}) => setSignupInfo({...signupInfo, email: target.value})}/>
        </label>
        <label>
          <p>Password:</p>
          <input 
          placeholder="Password" 
          value={signupInfo.password} 
          type="password"
          onChange={({target}) => setSignupInfo({...signupInfo, password: target.value})}/>
        </label>
        <label>
          <p>Confirm Password:</p>
          <input 
          placeholder="Confirm Password" 
          value={signupInfo.confirmPassword} 
          type="password"
          onChange={({target}) => setSignupInfo({...signupInfo, confirmPassword: target.value})}/>
        </label>
      </div>
      <div className="low">
        <button className="signup-button" type="button">Sign up</button>
        <button type="button">Cancel</button>
      </div>
    </SignUpDisplay>
  )
}