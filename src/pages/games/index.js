import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MainArticles } from '../../styles/pages/Home';
import GamesSection  from '../../components/GamesSection';
import Trending from '../../components/Trending';

export default function Games({toggleTheme}) {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <MainArticles>
        <section class='left-content'>
          <GamesSection />
        </section>
        <section class='right-content'>
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
    </div>
    
  );
}