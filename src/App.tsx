import { useEffect, useRef, useState } from "preact/hooks";
import { createMasterTimeline, connectScrollToTimeline } from "./animations";
import { ScrollBar } from "./components/ScrollBar";
import { Hero, createHeroAnimation } from "./scenes/Hero";
import { About, createAboutAnimation } from "./scenes/About";
import {
  Destinations,
  createDestinationsAnimation,
} from "./scenes/Destinations";
import {
  Testimonials,
  createTestimonialsAnimation,
} from "./scenes/Testimonials";
import { Outro, createOutroAnimation } from "./scenes/Outro";

export function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const destinationsRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const outroRef = useRef<HTMLElement | null>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    if (
      !heroRef.current ||
      !aboutRef.current ||
      !destinationsRef.current ||
      !testimonialsRef.current ||
      !outroRef.current
    ) {
      return;
    }

    const heroTl = createHeroAnimation(heroRef.current);
    const aboutTl = createAboutAnimation(aboutRef.current);
    const destinationsTl = createDestinationsAnimation(destinationsRef.current);
    const testimonialsTl = createTestimonialsAnimation(testimonialsRef.current);
    const outroTl = createOutroAnimation(outroRef.current);

    const master = createMasterTimeline([
      { tl: heroTl },
      { tl: aboutTl, pos: "-=0.5" },
      { tl: destinationsTl, pos: "-=0.25" },
      { tl: testimonialsTl, pos: "-=0.25" },
      { tl: outroTl, pos: "-=0.25" },
    ]);

    const introEnd = 1.0;
    master.tweenTo(introEnd, {
      onComplete: () => connectScrollToTimeline(master, introEnd),
    });

    const scrollableDuration = master.duration() - introEnd;
    master.eventCallback("onUpdate", () => {
      const progressTime = master.progress() * master.duration();
      setTimelineProgress((progressTime - introEnd) / scrollableDuration);
    });
  }, []);

  return (
    <>
      <Hero register={(el) => (heroRef.current = el)} />
      <About register={(el) => (aboutRef.current = el)} />
      <Destinations register={(el) => (destinationsRef.current = el)} />
      <Testimonials register={(el) => (testimonialsRef.current = el)} />
      <Outro register={(el) => (outroRef.current = el)} />
      <ScrollBar progress={timelineProgress} />
    </>
  );
}
