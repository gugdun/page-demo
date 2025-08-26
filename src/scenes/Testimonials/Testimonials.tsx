import { useRef, useLayoutEffect } from "preact/hooks";
import type { SceneProps } from "../../types";

import cloud from "../../assets/cloud-small.webp";

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
      <img class="cloud" src={cloud}></img>
      <div class="cards">
        <div id="quote1" class="card">
            <p class="quote">“Lunair made flying a pleasure. I never thought the road could be so easy!”</p>
            <p class="author">— Leah Schmid</p>
        </div>
        <div id="quote2" class="card">
            <p class="quote">“Excellent service and amazing comfort. Will fly again!”</p>
            <p class="author">— Riley Ayers</p>
        </div>
        <div id="quote3" class="card">
            <p class="quote">“I felt like I was traveling to the future. Thanks Lunair!”</p>
            <p class="author">— Ella Wilding</p>
        </div>
      </div>
    </section>
  );
}
