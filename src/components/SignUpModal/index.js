import { SignUpDisplay } from "./styles/SignUpDisplay"
import { useState, useEffect  } from "react"

export default function SignUpModal({setSignup}) {
  const [ signupInfo , setSignupInfo ] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [okSignup, setOkSignup] = useState(false);

  useEffect(() => {
    const okUsername = username.length >= 5;
    const okPassword = password.length >= 8;
    const okConfirmPassword = confirmPassword.length >= 8;
    const okEmail = email.length >= 12;
    if ( okUsername && okPassword && okEmail && okConfirmPassword) {
      setOkSignup(true);
      return null
    }
    setOkSignup(false)
  } ,[signupInfo])

  const {username, email, password, confirmPassword} = signupInfo;
  return (
    <SignUpDisplay>
      <div className="up">
        <h2>Sign up</h2>
        <a onClick={() => setSignup(false)}><h2 className="close">+</h2></a>
      </div>
      <div className="middle">
        <div className="field">
          <label>
            <p>Username:</p>
            <input 
            placeholder="Username" 
            value={signupInfo.username} 
            type="text" 
            onChange={({target}) => setSignupInfo({...signupInfo, username: target.value})}/>
          </label>
          { username && username.length >= 5? null : <p className="validation">• Must be at least 5 characters long</p> }
        </div>
        <div className="field">
          <label>
            <p>E-mail:</p>
            <input 
            placeholder="E-mail" 
            value={signupInfo.email} 
            type="text" 
            onChange={({target}) => setSignupInfo({...signupInfo, email: target.value})}/>
          </label>
          {email && email.length > 12 ? null : <p className="validation">• Type your best e-mail</p>  }
        </div>
        <div className="field">
          <label>
            <p>Password:</p>
            <input 
            placeholder="Password" 
            value={signupInfo.password} 
            type="password"
            onChange={({target}) => setSignupInfo({...signupInfo, password: target.value})}/>
          </label>
          {password && password.length >= 8 ? null : <p className="validation">• Must be at least 8 characters long</p> }
        </div>
        <div className="field">
          <label>
            <p>Confirm Password:</p>
            <input 
            placeholder="Confirm Password" 
            value={signupInfo.confirmPassword} 
            type="password"
            onChange={({target}) => setSignupInfo({...signupInfo, confirmPassword: target.value})}/>
          </label>
          {confirmPassword && confirmPassword.length >= 8 ? null : <p className="validation">• Confirm your password</p> }
        </div>
      </div>
      <div className="low">
        <button className="signup-button" type="button" disabled={!okSignup} onClick={()=> console.log('sign up')}>Sign up</button>
        <button type="button" onClick={() => setSignup(false)}>Cancel</button>
      </div>
    </SignUpDisplay>
  )
}