import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DexVaultDisplay from '../../components/DexVaultDisplay';
import Trending from '../../components/Trending';
// import { DivBody } from '../../components/DivBody/styles/DivBody';
import { MainArticles } from '../../styles/pages/Home';


export default function NuzlockeExplained ({toggleTheme}) {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <MainArticles>
        <section class='left-content'>
          <DexVaultDisplay />
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