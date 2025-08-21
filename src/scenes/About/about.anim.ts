import gsap from "gsap";

export function createAboutAnimation(container: HTMLElement) {
  const tl = gsap.timeline();

  const title = container.querySelector(".title");
  const titleTl = gsap
    .timeline()
    .fromTo(title, { opacity: 0 }, { opacity: 1, duration: 1 })
    .to(title, { y: -200, opacity: 0, duration: 1 });

  const subtitle = container.querySelector(".subtitle");
  const subtitleTl = gsap
    .timeline()
    .fromTo(subtitle, { opacity: 0 }, { opacity: 1, duration: 1 })
    .to(subtitle, { y: -200, opacity: 0, duration: 1 });

  tl.add(titleTl, 0);
  tl.add(subtitleTl, 0);

  return tl;
}
