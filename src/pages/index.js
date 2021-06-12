import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleSection from '../components/ArticleSection';

export default function Home({toggleTheme}) {
  return (
    <main>
      <Header toggleTheme={toggleTheme}/>
      <section>
        <section>
          <ArticleSection />
        </section>
        <section>

        </section>
      </section>
      <Footer />
    </main>
  )
}
