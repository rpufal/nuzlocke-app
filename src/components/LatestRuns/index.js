import { LatestSection } from "./styles/LatestRuns";
import CurrentRun from "./CurrentRun";
import {CompiledRuns} from '../../../services/CompiledRuns';

export default function LatestRuns() {
  return (
    <LatestSection>
      <div class="title">
        <h3>Latest Runs</h3>
      </div>
      <div class="panel">
        {CompiledRuns['runs'].map((current, index) => (
        <CurrentRun props={current} key={`${current['GameTitle']}+${index}`}/>
        ))}
      </div>
    </LatestSection>
  );
};