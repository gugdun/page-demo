import { useRef, useLayoutEffect } from "preact/hooks";
import cloudCorner from "../../assets/cloud-corner.webp";
import plane from "../../assets/plane.webp";
import "./hero.scss";

export function Hero({ register }: { register: (el: HTMLElement) => void }) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) {
      register(container.current);
    }
  }, []);

  return (
    <section ref={container} class="hero">
      <h1 class="title">Lunair</h1>
      <h3 class="subtitle">
        “With Lunair, every flight is a step into the future.”
      </h3>
      <img class="cloud-corner" src={cloudCorner} />
      <img class="plane" src={plane} />
    </section>
  );
}
