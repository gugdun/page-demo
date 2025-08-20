import { useRef, useLayoutEffect } from "preact/hooks";
import cloudCorner from "../../assets/cloud-corner.webp";
import "./hero.scss";

export function Hero({ register }: { register: (el: HTMLElement) => void }) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) {
      register(container.current);
    }
  }, []);

  return (
    <section ref={container} class="scene hero">
      <h1 class="title">Lunair</h1>
      <img class="cloud-corner" src={cloudCorner} />
    </section>
  );
}
