import { LatestSection } from "./styles/LatestRuns";

export default function LatestRuns() {
  return (
    <LatestSection>
      <div class="title">
        <h3>Latest Runs</h3>
      </div>
      <div class="panel">
        <div class="current-run">
          <img class="game-cover" src="/light/pokeball.png" alt="game cover"/>
          <h4>Pokemon Emerald</h4>
          <img class="country-icon" src="/united-kingdom.png" alt="country flag"/>
          <h4 class="userName">rpufal</h4>
          <h4 class="run-status">Finished</h4>
        </div>
        <div class="current-run">
          <img class="game-cover" src="/light/pokeball.png" alt="game cover"/>
          <h4>Pokemon Emerald</h4>
          <img class="country-icon" src="/united-kingdom.png" alt="country flag"/>
          <h4 class="userName">rpufal</h4>
          <h4 class="run-status">Finished</h4>
        </div>
      </div>
    </LatestSection>
  );
};