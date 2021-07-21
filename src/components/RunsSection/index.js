import { useState, useEffect } from "react";
import CurrentRun from "../CurrentRun";
import CurrentRunHeader from "../CurrentRunHeader";
import RunsFilter from "../RunsFilter";
import { RunsSectionDisplay } from "./styles/RunsSectionDisplay";

const sortByAttempts = (runs, filterStatus) => {
  let sortedRuns = runs; 
  if (filterStatus === "least") {
    sortedRuns = sortedRuns.sort((firstItem, secondItem) => firstItem.Status.RunNumber - secondItem.Status.RunNumber)
  }
  if (filterStatus === "most") {
    sortedRuns = sortedRuns.sort((firstItem, secondItem) => secondItem.Status.RunNumber - firstItem.Status.RunNumber)
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



export default function RunsSection({runsList}) {
  const [filters, setFilters] = useState({
    attempts: "all",
    status: "all",
    country: "all",
    tags: "all",
  });
  const [runs, setRuns] = useState(runsList);
  useEffect(() => {
    const runsToFilter = runsList;
    const filteredRuns = handleFilters(runsToFilter, filters)
    setRuns(filteredRuns);
  },[filters])
  return (
      <RunsSectionDisplay>
        <RunsFilter filters={filters} setFilters={setFilters}/>
        <CurrentRunHeader />
        {runs.length > 0
        ? runs.map((current, index) => (
          <CurrentRun props={current} key={`${current['GameTitle']}+${index}`}/>
          ))
        : <h1>Couldn't find any runs</h1>
        }
      </RunsSectionDisplay>
  );
};