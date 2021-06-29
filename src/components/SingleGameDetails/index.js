import { GameDetails } from "./styles/GameDetails"
import { CompiledRuns } from "../../../services/CompiledRuns";
import CurrentRun from "../CurrentRun";
import CurrentRunHeader from "../CurrentRunHeader";
import RunsFilter from "../RunsFilter";
import { useState, useEffect } from "react";

const sortByAttempts = (runs, filterStatus) => {
  let sortedRuns = runs; 
  if (filterStatus === "least") {
    sortedRuns = CompiledRuns["runs"].sort((firstItem, secondItem) => firstItem.Status.RunNumber - secondItem.Status.RunNumber)
  }
  if (filterStatus === "most") {
    sortedRuns = CompiledRuns["runs"].sort((firstItem, secondItem) => secondItem.Status.RunNumber - firstItem.Status.RunNumber)
  }
  if (filterStatus === "all") {
    sortedRuns = CompiledRuns["runs"];
  }
  return sortedRuns;
}
const handleFilters = (runs, filters) => {
  const runsSorted1 = sortByAttempts(runs, filters.attempts);
  const runsFiltered1 = runsSorted1.filter((run) => {
    if (filters["status"] !== "all") {
      return run["Status"]["Finished"] === filters["status"] || run["Status"]["Win"] === filters["status"];
    }
    return run;
  });

  const runsFiltered2 = runsFiltered1.filter((run) => {
    if (filters["country"] !== "all") {
      return run["Country"]["CountryName"] === filters["country"];
    }
    return run;
  });

  const runsFiltered3 = runsFiltered2.filter((run) => {
    if (filters["tags"] !== "all") {
      return run["Tags"].includes(filters["tags"]);
    }
    return run;
  })
  return runsFiltered3;
}

export default function SingleGameDetails () {
  const [filters, setFilters] = useState({
    attempts: "all",
    status: "all",
    country: "all",
    tags: "all",
  })
  const [runs, setRuns] = useState(CompiledRuns["runs"])
  useEffect(() => {
    const runsToFilter = CompiledRuns["runs"];
    const filteredRuns = handleFilters(runsToFilter, filters)
    setRuns(filteredRuns);
  },[filters])

  return (
    <GameDetails>
      <section className="sidebar">
        <div className="info-card">
          <h3>Pokemon SuperNova Sun</h3>
          <img src="/game-thumbnails/heartgold.png"/>
        </div>
        <div className="index">
          <h3>Leaderboard</h3>
          <h3>Statistics</h3>
          <h3>Guides</h3>
          <h3>Resources</h3>
        </div>
      </section>
      <section className="main-content">
        <h2>Leaderboard</h2>
        <RunsFilter filters={filters} setFilters={setFilters}/>
        <div className="run-table">
          <CurrentRunHeader />
          {runs.length > 0
          ? runs.map((current, index) => (
            <CurrentRun props={current} key={`${current['GameTitle']}+${index}`}/>
            ))
          : <h1>Didn't find any runs</h1>
          }
        </div>
      </section>
    </GameDetails>  
  )
}