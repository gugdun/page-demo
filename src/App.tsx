import { useEffect, useRef } from "preact/hooks";
import { Hero } from "./scenes/Hero/Hero";
import { About } from "./scenes/About/About";
import { createHeroAnimation } from "./scenes/Hero/hero.anim";
import { createAboutAnimation } from "./scenes/About/about.anim";
import { createMasterTimeline } from "./animations/masterTimeline";
import { connectScrollToTimeline } from "./animations/scrollControl";

export function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    if (!aboutRef.current) return;

    const heroTl = createHeroAnimation(heroRef.current);
    const aboutTl = createAboutAnimation(aboutRef.current);
    const master = createMasterTimeline([
      { tl: heroTl },
      { tl: aboutTl, pos: "-=0.25" },
    ]);

    master.tweenTo(1.0, {
      onComplete: () => connectScrollToTimeline(master, 1.0),
    });
  }, []);

  return (
    <>
      <Hero register={(el) => (heroRef.current = el)} />
      <About register={(el) => (aboutRef.current = el)} />
    </>
  );
}
