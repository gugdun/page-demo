import { useRef, useLayoutEffect } from "preact/hooks";
import type { SceneProps } from "../../types";

import cloud from "../../assets/cloud-small.webp";

import "./about.scss";

export function About({ register }: SceneProps) {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (container.current) {
      register(container.current);
    }
  }, []);

  return (
    <section ref={container} class="about">
      <img class="cloud" src={cloud} alt="Cloud"></img>
      <h1 class="title">
        <p>Inspired by the Sky.</p>
        <p>Powered by Innovation.</p>
      </h1>
      <h2 class="subtitle">
        Lunair is more than an airline. We create new standards of speed,
        comfort and freedom of flight.
      </h2>
    </section>
  );
}
