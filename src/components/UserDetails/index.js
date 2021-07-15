import {useState} from "react";
import { UserDisplay } from "./styles/UserDisplay"
import RunsSection from "../RunsSection";

export default function UserDetails () {
  const [mainContent, setMainContent] = useState({
    myRuns: true,
    statistics: false,
    info: false,
  });
  return (
    <UserDisplay>
      <section className="sidebar">
        <div className="info-card">
          <h3>My Profile</h3>
          <div className="profile-info">
            <img src="/game-thumbnails/heartgold.png"/>
            <div>
              <span className="username-span">
                <p className="username">Rpufal</p>
                <p className="pronoun">(He/Him)</p>
              </span>
              <span className="country-span">
                <p className="country">Brazil</p>
                {/* <img 
                  src="/country-icons/brazil.png" 
                  alt="country-flag" 
                /> */}
              </span>
            </div>
          </div>
        </div>
        <div className="index">
          <a className="index-link" href="/newchallenge"><h3>New Challenge</h3></a>
          <a className="index-link" onClick={() => setMainContent({myRuns: true, statistics: false, info: false})}>
            <h3>My Runs</h3>
          </a>
          <a className="index-link" onClick={() => setMainContent({myRuns: false, statistics: true, info: false})}>
            <h3>Statistics</h3>
          </a>
          <a className="index-link" onClick={() => setMainContent({myRuns: false, statistics: false, info: true})}>
            <h3>Info</h3>
          </a>
        </div>
      </section>
      <section className="main-content">
        { mainContent.myRuns 
          ? <div><h2>My Runs</h2><RunsSection /></div>
          : null
        }
        {
          mainContent.statistics
          ? <div>
              <h2>Not available yet</h2>
              <h4>This section is currently under construction</h4>
            </div>
          : null
        }
      </section>
    </UserDisplay>  
  )
}