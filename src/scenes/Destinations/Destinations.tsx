import { useRef, useLayoutEffect } from "preact/hooks";
import type { SceneProps } from "../../types";

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
    </section>
  );
}
