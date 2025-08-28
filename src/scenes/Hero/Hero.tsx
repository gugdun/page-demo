import { useRef, useLayoutEffect } from "preact/hooks";
import type { SceneProps } from "../../types";

import cloudCorner from "../../assets/cloud-corner.webp";
import plane from "../../assets/plane.webp";

import "./hero.scss";

export function Hero({ register }: SceneProps) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) {
      register(container.current);
    }
  }, []);

  return (
    <section ref={container} class="hero">
      <h1 class="title">Lunair</h1>
      <h2 class="subtitle">
        “With Lunair, every flight is a step into the future.”
      </h2>
      <img class="cloud-corner" src={cloudCorner} alt="Cloud" />
      <img class="plane" src={plane} alt="Plane" />
    </section>
  );
}
