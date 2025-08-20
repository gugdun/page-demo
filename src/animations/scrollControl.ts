import gsap from "gsap";

export function connectScrollToTimeline(
  tl: gsap.core.Timeline,
  startTime: number = 0
) {
  let target = 0;
  let current = 0;
  const ease = 0.1;
  const duration = tl.duration() - startTime;
  const maxScroll = duration * 1000;

  // Mouse wheel
  window.addEventListener(
    "wheel",
    (e) => {
      target += e.deltaY;
      target = Math.max(0, Math.min(maxScroll, target));
    },
    { passive: true }
  );

  // Touch controls
  let touchStart = 0;
  window.addEventListener("touchstart", (e) => {
    touchStart = e.touches[0].clientY;
  });
  window.addEventListener(
    "touchmove",
    (e) => {
      const dy = touchStart - e.touches[0].clientY;
      target += dy * 10;
      target = Math.max(0, Math.min(maxScroll, target));
      touchStart = e.touches[0].clientY;
    },
    { passive: true }
  );

  // Smooth scroll animation
  gsap.ticker.add(() => {
    current += (target - current) * ease; // lerp
    const progress = current / maxScroll;
    tl.progress((startTime + progress * duration) / tl.duration());
  });
}
