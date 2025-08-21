import gsap from "gsap";

export function createHeroAnimation(container: HTMLElement) {
  const tl = gsap.timeline();

  const title = container.querySelector(".title");
  const titleTl = gsap
    .timeline()
    .fromTo(title, { y: 200, opacity: 0 }, { y: 25, opacity: 1, duration: 1 })
    .to(title, { y: 0, duration: 1 })
    .to(title, { y: -100, opacity: 0, duration: 1, ease: "none" });

  const subtitle = container.querySelector(".subtitle");
  const subtitleTl = gsap
    .timeline()
    .fromTo(subtitle, { opacity: 0 }, { opacity: 0, duration: 1 })
    .to(subtitle, { opacity: 1, duration: 1 })
    .to(subtitle, { y: 100, opacity: 0, duration: 1 });

  const cloudCorner = container.querySelector(".cloud-corner");
  const cloudCornerTl = gsap
    .timeline()
    .fromTo(
      cloudCorner,
      { x: -200, y: 200, duration: 1 },
      { x: 0, y: 0, duration: 1 }
    )
    .to(cloudCorner, { x: -200, y: 200, opacity: 0, duration: 1 });

  const plane = container.querySelector(".plane");
  const planeTl = gsap
    .timeline()
    .fromTo(
      plane,
      { x: 960, y: 500, opacity: 0 },
      { x: 960, y: 500, opacity: 0, duration: 1.75, ease: "none" }
    )
    .to(plane, { x: 0, y: 0, opacity: 1, duration: 1, ease: "none" })
    .to(plane, { x: -960, y: -500, opacity: 0, duration: 1, ease: "none" });

  tl.add(titleTl, 0);
  tl.add(subtitleTl, 0);
  tl.add(cloudCornerTl, 0);
  tl.add(planeTl, 0);

  return tl;
}
