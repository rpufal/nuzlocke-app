import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleSection from '../components/ArticleSection';
import Trending from '../components/Trending';
import LatestRuns from '../components/LatestRuns';
import { MainArticles } from './styles/Home';

export default function Home({toggleTheme}) {
  return (
    <>
      <Header toggleTheme={toggleTheme}/>
      <MainArticles>
          <section class="left-content">
            <ArticleSection />
            <LatestRuns />
           </section>
          <section class="right-content">
            <Trending />
          </section>
      </MainArticles>
      <Footer />
    </>
  )
}
