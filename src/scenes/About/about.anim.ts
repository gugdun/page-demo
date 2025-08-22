import gsap from "gsap";

export function createAboutAnimation(container: HTMLElement) {
  const tl = gsap.timeline();

  const title = container.querySelector(".title");
  const titleTl = gsap
    .timeline()
    .fromTo(title, { opacity: 0 }, { opacity: 1, duration: 1 })
    .to(title, { y: -100, opacity: 0, duration: 1 });

  const subtitle = container.querySelector(".subtitle");
  const subtitleTl = gsap
    .timeline()
    .fromTo(subtitle, { opacity: 0 }, { opacity: 1, duration: 1 })
    .to(subtitle, { y: -100, opacity: 0, duration: 1 });

  const cloud = container.querySelector(".cloud");
  const cloudTl = gsap
    .timeline()
    .fromTo(cloud, { y: 400, opacity: 0 }, { y: 0, opacity: 0.15, duration: 1, ease: "none" })
    .to(cloud, { y: -400, opacity: 0, duration: 1, ease: "none" });

  tl.add(titleTl, 0)
    .add(subtitleTl, 0)
    .add(cloudTl, 0);

  return tl;
}
