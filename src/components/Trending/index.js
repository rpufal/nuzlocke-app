import { TrendingDisplay } from "./styles/Trending"

export default function Trending() {
  return (
    <TrendingDisplay>
      <h3>Trending Topic</h3>
      <div>
        <img src="/articles/graph_sinergy_cropped.png" alt="pokemon sinergy graph" />
        <p>What's the sinergy between some competitive Pokemon</p>
      </div>
    </TrendingDisplay>
  )
}