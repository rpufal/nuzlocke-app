import { RunsFilterDisplay  } from "./styled/RunsFilter";

export default function RunsFilter ({filters,setFilters}) {
  const countries = ["Brazil", "France", "Spain", "Argentina"];
  const tags = ["No Items", "No Overleveling", "Set Mode", "Basic"];
  return (
    <RunsFilterDisplay>
      <select name="sort-attempts" onChange={({target})=> setFilters({...filters, attempts: target.value})}>
        <option value="all">Sort by Attempts</option>
        <option value="most">Most Attempts</option>
        <option value="least">Least Attempts</option>
      </select>
      <select name="filter-countries" onChange={({target})=> setFilters({...filters, country: target.value})}>
        <option value="all">Filter by Country</option>
        {countries.map((country, index)=><option value={country} key={`${country}-${index}`}>{country}</option>)}
      </select>
      <select name="filter-status" onChange={({target})=> setFilters({...filters, status: target.value})}>
        <option value="all">Filter by Run Status</option>
        <option value="finished">Finished runs</option>
        <option value="won">Succesful runs</option>
        <option value="lost">Failed runs</option>
        <option value="ongoing">Ongoing runs</option>
      </select>
      <select name="filter-tags" onChange={({target})=> setFilters({...filters, tags: target.value})}>
        <option value="all">Filter by Tag</option>
        {tags.map((tag, index)=><option value={tag} key={`${tag}-${index}`}>{tag}</option>)}
      </select>
    </RunsFilterDisplay>
  )
}
