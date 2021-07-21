import { LatestSection } from "./styles/LatestRuns";
import RunsSection from "../RunsSection";
import {CompiledRuns} from '../../../services/CompiledRuns';


export default function LatestRuns() {
  return (
    <LatestSection>
      <div className="title">
        <h3>Latest Runs</h3>
      </div>
      <RunsSection  runsList={CompiledRuns['runs']} />
    </LatestSection>
  );
};