import { RunHeader } from "./styles/CurrentRunHeader"

export default function CurrentRunHeader () {
  return (
  <RunHeader>
      <div class="cell">
        <h4 class="userName">Game Cover</h4>
      </div>
      <div class="cell">
        <h4 class="userName">Title</h4>
      </div>
      <div class="cell">
        <h4 class="userName">Country</h4>
      </div>
      <div class="cell">
      <h4 class="userName">Username</h4>
      </div>
      <div class="cell">
        <h4 class="userName">Run Status</h4>
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