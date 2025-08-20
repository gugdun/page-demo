import { useEffect, useRef } from "preact/hooks";
import { Hero } from "./scenes/Hero/Hero";
import { createHeroAnimation } from "./scenes/Hero/hero.anim";
import { createMasterTimeline } from "./animations/masterTimeline";
import { connectScrollToTimeline } from "./animations/scrollControl";

export function App() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const heroTl = createHeroAnimation(heroRef.current);
    const master = createMasterTimeline([heroTl]);

    master.tweenTo(1.0, {
      onComplete: () => connectScrollToTimeline(master, 1.0),
    });
  }, []);

  return (
    <>
      <Hero register={(el) => (heroRef.current = el)} />
    </>
  );
}
