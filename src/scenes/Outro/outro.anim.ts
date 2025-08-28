import gsap from "gsap";

export function createOutroAnimation(container: HTMLElement) {
  const tl = gsap.timeline();

  const title = container.querySelector(".title");
  const titleTl = gsap
    .timeline()
    .fromTo(title, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

  const subtitle = container.querySelector(".subtitle");
  const subtitleTl = gsap
    .timeline()
    .fromTo(
      subtitle,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

  const button = container.querySelector(".book-btn");
  const buttonTl = gsap
    .timeline()
    .fromTo(button, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

  tl.add(titleTl, 0).add(subtitleTl, 0).add(buttonTl, 0);

  return tl;
}
