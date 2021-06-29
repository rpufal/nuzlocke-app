import { LatestSection } from "./styles/LatestRuns";
import RunsSection from "../RunsSection";

export default function LatestRuns() {
  return (
    <LatestSection>
      <div class="title">
        <h3>Latest Runs</h3>
      </div>
      <RunsSection />
    </LatestSection>
  );
};