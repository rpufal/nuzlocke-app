import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleSection from '../components/ArticleSection';
import Trending from '../components/Trending';
import LatestRuns from '../components/LatestRuns';
import { MainArticles } from '../styles/pages/Home';


export default function Home({toggleTheme}) {
  return (
    <>
      <Header toggleTheme={toggleTheme}/>
      <MainArticles>
          <section className="left-content">
            <ArticleSection />
            <LatestRuns />
           </section>
          <section className="right-content">
            <Trending 
            articleImage={"/articles/graph_sinergy_cropped.png"}
            articleTitle={"What's the sinergy between some competitive Pokémon"}
            />
            <Trending
            articleImage={"/articles/types_hexagram_cropped.png"}
            articleTitle={"Find out the most desirable properties for winning Pokémon"}
            />
          </section>
      </MainArticles>
      <Footer />
    </>
  )
}
