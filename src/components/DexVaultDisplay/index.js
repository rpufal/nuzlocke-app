import { useState } from "react";
import {DexVaultArticle} from "./styles/DexVaultDisplay";

export default function DexVaultDisplay() {
  const [showMore, setShowMore] = useState({
    started: 0,
    stories: 0,
  });
  return (
    <DexVaultArticle>
      <section class="content-index">
        <div>
          <h1>Welcome</h1>
          <span className={showMore.started? "clicked" : ""}
              onClick={() => setShowMore({...showMore, started: !showMore.started})}>
            <h1>Getting Started</h1>
            <h2>+</h2>
          </span>
          <ul className={ showMore.started? "visible" : "hidden"}>
            <li>What is a Nuzlocke?</li>
            <li>Rules</li>
            <li>Where to start?</li>
          </ul>
          <span 
            className={showMore.stories? "clicked" : ""}
            onClick={() => setShowMore({...showMore, stories: !showMore.stories})}>
            <h1>Famous Stories</h1>
            <h2>+</h2>
          </span>
          <ul className={ showMore.stories ? "visible" : "hidden"}>
            <li>Pokemon Ruby: Hard mode</li>
            <li>Pokémon Challenges and Emerald Kaizo</li>
            <li>Jaiden Animation's Saga</li>
          </ul>
        </div>
      </section>
      <section class="main-content">
        <div>
          <h2>What is a Nuzlocke?</h2>
          <p>Speedrunning is when an individual attempts to beat part or all of a video game as quickly as possible. This can include individual levels, specific objectives, or unique limitations as decided by the community or player.

  Speedrun.com is a toolset for building communities around speedrunning games. Game moderators can create leaderboards, post resources, and verify submissions by runners. Communities are able to come together to decide on specific rulesets for different categories that runners can then submit their runs to.

  Speedrun.com also aims to highlight all facets of the speedrunning community. From marathons raising millions of dollars for charity to competitions and races to those who help route and find the game-changing glitches, the speedrunning ecosystem is robust and every contribution matters. Learn more about Speedrun.com on the About page.

  Speedrun.com also aims to highlight all facets of the speedrunning community. From marathons raising millions of dollars for charity to competitions and races to those who help route and find the game-changing glitches, the speedrunning ecosystem is robust and every contribution matters. Learn more about Speedrun.com on the About page.

  Speedrun.com also aims to highlight all facets of the speedrunning community. From marathons raising millions of dollars for charity to competitions and races to those who help route and find the game-changing glitches, the speedrunning ecosystem is robust and every contribution matters. Learn more about Speedrun.com on the About page.
          </p>
          <h3 className="other-article">Next article</h3>
          <h3 className="other-article">Previous article</h3>
      </div>
      </section>
    </DexVaultArticle>
  );
}