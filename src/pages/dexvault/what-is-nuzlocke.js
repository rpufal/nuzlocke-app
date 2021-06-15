import Header from '../../components/Header';
import DexVaultDisplay from '../../components/DexVaultDisplay';
import { MainArticles } from '../../styles/pages/Home';


export default function NuzlockeExplained () {
  return (
    <div>
      <Header />
      <MainArticles>
        <section class='left-content'>
          <DexVaultDisplay />
        </section>
        <section class='right-content'>
          <h1>teste direita</h1>
        </section>
      </MainArticles>
    </div>
    
  );
}