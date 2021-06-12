import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleSection from '../components/ArticleSection';
import Trending from '../components/Trending';
import { MainArticles } from './styles/Home';

export default function Home({toggleTheme}) {
  return (
    <>
      <Header toggleTheme={toggleTheme}/>
      <MainArticles>
          <section class="left-content">
            <ArticleSection />
            <ArticleSection />
           </section>
          <section class="right-content">
            <Trending />
          </section>
      </MainArticles>
      <Footer />
    </>
  )
}
