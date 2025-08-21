import { useEffect, useRef } from "preact/hooks";
import { createMasterTimeline } from "./animations/masterTimeline";
import { connectScrollToTimeline } from "./animations/scrollControl";

import { Hero } from "./scenes/Hero/Hero";
import { createHeroAnimation } from "./scenes/Hero/hero.anim";

import { About } from "./scenes/About/About";
import { createAboutAnimation } from "./scenes/About/about.anim";

import { Destinations } from "./scenes/Destinations/Destinations";
import { createDestinationsAnimation } from "./scenes/Destinations/destinations.anim";

export function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const destinationsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!heroRef.current || !aboutRef.current || !destinationsRef.current)
      return;

    const heroTl = createHeroAnimation(heroRef.current);
    const aboutTl = createAboutAnimation(aboutRef.current);
    const destinationsTl = createDestinationsAnimation(destinationsRef.current);

    const master = createMasterTimeline([
      { tl: heroTl },
      { tl: aboutTl, pos: "-=0.25" },
      { tl: destinationsTl },
    ]);

    master.tweenTo(1.0, {
      onComplete: () => connectScrollToTimeline(master, 1.0),
    });
  }, []);

  return (
    <>
      <Hero register={(el) => (heroRef.current = el)} />
      <About register={(el) => (aboutRef.current = el)} />
      <Destinations register={(el) => (destinationsRef.current = el)} />
    </>
  );
}
