import { ArticleDisplay } from "./styles/ArticleSection";

export default function ArticleSection() {
  return (
    <ArticleDisplay>
      <div class="title">
        <h3>New to Nuzlockes?</h3>
      </div>
      <div class="article-panel">
        <section class="article">
          <div>
          <img class="thumbnail" src="/articles/confused-charizard.gif" alt="confused-charizard-gif"/>
          </div>
          <span>
            {/* <img src="/light/pokeball.png" alt="nuzlocke-logo" width={16}/> */}
            <h4>What is a Nuzlocke?</h4>
          </span>
        </section>
        <section class="article">
          <div>
          <img class="thumbnail" src="/articles/champions43.gif" alt="confused-charizard-gif"/>
          </div>
          <span>
            {/* <img  src="/light/pokeball.png" alt="nuzlocke-logo" width={16}/> */}
            <h4>Start a new run!</h4>
          </span>
        </section>
        <section class="article">
          <div>
          <img class="thumbnail" src="/articles/starters43.gif" alt="confused-charizard-gif"/>
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