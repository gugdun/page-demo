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
      const app = container.current;

      if (loader && app) {
        // Hide App before initialization
        gsap.set(app, { autoAlpha: 0 });

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          onComplete: () => loader.remove(),
        });

        tl.to(loader, { duration: 0.5, autoAlpha: 0 }) // Dissolve loader
          .to(app, { duration: 0.8, autoAlpha: 1 }, "-=0.3"); // Show App
      }
    },
    { scope: container }
  );

  return <div ref={container}>{children}</div>;
}
