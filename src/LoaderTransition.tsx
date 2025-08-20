import { useRef } from "preact/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export function LoaderTransition({
  children,
}: {
  children: preact.ComponentChildren;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const loader = document.getElementById("loader-container");
      const stars1 = document.getElementById("stars");
      const stars2 = document.getElementById("stars2");
      const stars3 = document.getElementById("stars3");
      const app = container.current;

      if (loader && app) {
        // Hide App and stars before initialization
        gsap.set(app, { autoAlpha: 0 });
        gsap.set(stars1, { autoAlpha: 0 });
        gsap.set(stars2, { autoAlpha: 0 });
        gsap.set(stars3, { autoAlpha: 0 });

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          onComplete: () => loader.remove(),
        });

        const shownVars = { duration: 0.8, autoAlpha: 1 };
        tl.to(loader, { duration: 0.5, autoAlpha: 0 }) // Dissolve loader
          .to(stars1, shownVars, "-=0.3") // Show stars
          .to(stars2, shownVars, "<")
          .to(stars3, shownVars, "<")
          .to(app, shownVars, "<"); // Show App
      }
    },
    { scope: container }
  );

  return <div ref={container}>{children}</div>;
}
