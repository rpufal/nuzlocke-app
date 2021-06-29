import { ArticleDisplay } from "./styles/ArticleSection";

export default function ArticleSection() {
  return (
    <ArticleDisplay>
      <div className="title">
        <h3>New to Nuzlockes?</h3>
      </div>
      <div className="article-panel">
        <section className="article">
          <div>
          <a href="/dexvault/what-is-nuzlocke/">
            <img className="thumbnail" src="/articles/confused-charizard.gif" alt="confused-charizard-gif"/>
          </a>
          </div>
          <span>
            {/* <img src="/light/pokeball.png" alt="nuzlocke-logo" width={16}/> */}
            <a href="/dexvault/what-is-nuzlocke/">
              <h4>What is a Nuzlocke?</h4>
            </a>
          </span>
        </section>
        <section className="article">
          <div>
          <img className="thumbnail" src="/articles/champions43.gif" alt="confused-charizard-gif"/>
          </div>
          <span>
            {/* <img  src="/light/pokeball.png" alt="nuzlocke-logo" width={16}/> */}
            <h4>Start a new run!</h4>
          </span>
        </section>
        <section className="article">
          <div>
          <img className="thumbnail" src="/articles/starters43.gif" alt="confused-charizard-gif"/>
          </div>
          <span>
            {/* <img src="/light/pokeball.png" alt="nuzlocke-logo" width={16}/> */}
            <h4>Check out some stories</h4>
          </span>
        </section>
      </div>
    </ArticleDisplay>
  );
};