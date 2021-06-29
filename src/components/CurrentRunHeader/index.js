import { RunHeader } from "./styles/CurrentRunHeader"

export default function CurrentRunHeader () {
  return (
  <RunHeader>
      <div className="cell">
        <h4 className="userName">Game Cover</h4>
      </div>
      <div className="cell">
        <h4 className="userName">Title</h4>
      </div>
      <div className="cell">
        <h4 className="userName">Country</h4>
      </div>
      <div className="cell">
      <h4 className="userName">Username</h4>
      </div>
      <div className="cell">
        <h4 className="userName">Run Status</h4>
      </div>
      <div class="cell">
        <h4 class="run-number">Run Attempts</h4>
      </div>
      <div class="cell">
        <h4 class="userName">Tags</h4>
      </div>
    </RunHeader>
  )
}