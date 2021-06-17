import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MainArticles } from '../../styles/pages/Home';
import GamesSection  from '../../components/GamesSection';

export default function Games({toggleTheme}) {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <MainArticles>
        <section class='left-content'>
          <GamesSection />
        </section>
        <section class='right-content'>
        </section>
      </MainArticles>
      <Footer />
    </div>
    
  );
}