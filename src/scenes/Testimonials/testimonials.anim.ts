import gsap from "gsap";

export function createTestimonialsAnimation(container: HTMLElement) {
  const tl = gsap.timeline();

  const title = container.querySelector(".title");
  const titleTl = gsap
    .timeline()
    .fromTo(title, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    .to(title, { y: -200, opacity: 0, duration: 1 });

  tl.add(titleTl, 0);

  return tl;
}
