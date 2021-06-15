import { TrendingDisplay } from "./styles/Trending"

export default function Trending({articleImage, articleTitle}) {
  return (
    <TrendingDisplay>
      <h3>Trending Topic</h3>
      <div>
        <img src={articleImage} alt={articleTitle} />
        <p>{articleTitle}</p>
      </div>
    </TrendingDisplay>
  )
}