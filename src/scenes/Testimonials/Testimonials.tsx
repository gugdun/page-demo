import { useRef, useLayoutEffect } from "preact/hooks";
import type { SceneProps } from "../../types";

import "./testimonials.scss";

export function Testimonials({ register }: SceneProps) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) {
      register(container.current);
    }
  }, []);

  return (
    <section ref={container} class="testimonials">
      <h1 class="title">What our passengers say</h1>
    </section>
  );
}
