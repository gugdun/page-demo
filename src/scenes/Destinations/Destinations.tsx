import { useRef, useLayoutEffect } from "preact/hooks";
import type { SceneProps } from "../../types";

import paris from "../../assets/paris.webp";
import newYork from "../../assets/newyork.webp";
import tokyo from "../../assets/tokyo.webp";

import "./destinations.scss";

export function Destinations({ register }: SceneProps) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) {
      register(container.current);
    }
  }, []);

  return (
    <section ref={container} class="destinations">
      <h1 class="title">Discover the World with Lunair</h1>
      <div class="cards">
        <div id="card1" class="card">
          <h2 class="title">Paris</h2>
          <p class="description">The city of lights awaits you</p>
          <img class="picture" src={paris}></img>
        </div>
        <div id="card2" class="card">
          <h2 class="title">New York</h2>
          <p class="description">Never sleep above the clouds</p>
          <img class="picture" src={newYork}></img>
        </div>
        <div id="card3" class="card">
          <h2 class="title">Tokyo</h2>
          <p class="description">Fly into the future</p>
          <img class="picture" src={tokyo}></img>
        </div>
      </div>
    </section>
  );
}
