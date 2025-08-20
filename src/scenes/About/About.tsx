import { useRef, useLayoutEffect } from "preact/hooks";
import "./about.scss";

export function About({ register }: { register: (el: HTMLElement) => void }) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) {
      register(container.current);
    }
  }, []);

  return (
    <section ref={container} class="about">
      <h1 class="title">
        <p>Inspired by the Sky.</p>
        <p>Powered by Innovation.</p>
      </h1>
      <h3 class="subtitle">
        Lunair is more than an airline. We create new standards of speed,
        comfort and freedom of flight.
      </h3>
    </section>
  );
}
