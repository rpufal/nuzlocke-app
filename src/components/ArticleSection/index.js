import { Article } from "./styles/Article";

export default function ArticleSection() {
  return (
    <section>
      <h2>New to Nuzlockes?</h2>
      <div>
        <Article>
          <img src="/articles/confused-charizard.gif" alt="confused-charizard-gif"/>
          <span>
            <img src="/light/pokeball.png" alt="nuzlocke-logo"/>
            <h4>What is a Nuzlocke?</h4>
          </span>
        </Article>
      </div>
    </section>
  );
};