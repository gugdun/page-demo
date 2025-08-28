import { useRef, useLayoutEffect } from "preact/hooks";
import type { SceneProps } from "../../types";

import "./outro.scss";

export function Outro({ register }: SceneProps) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) {
      register(container.current);
    }
  }, []);

  return (
    <section ref={container} class="outro">
      <h1 class="title">Ready for your next journey?</h1>
      <h2 class="subtitle">
        <p>Discover new horizons with Lunair.</p>
        <p>Your future starts in the sky.</p>
      </h2>
      <button class="book-btn">Book now 🌙</button>
    </section>
  );
}
