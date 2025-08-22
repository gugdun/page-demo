import gsap from "gsap";

export function createTestimonialsAnimation(container: HTMLElement) {
  const tl = gsap.timeline();

  const title = container.querySelector(".title");
  const titleTl = gsap
    .timeline()
    .fromTo(title, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    .to(title, { y: 0, opacity: 1, duration: 3 });

  const quote1 = container.querySelector("#quote1");
  const quote1Tl = gsap
    .timeline()
    .fromTo(quote1, { y: 200, opacity: 0 }, { y: 200, opacity: 0, duration: 1 })
    .to(quote1, { y: 0, opacity: 1, duration: 1 });

  const quote2 = container.querySelector("#quote2");
  const quote2Tl = gsap
    .timeline()
    .fromTo(quote2, { y: 200, opacity: 0 }, { y: 200, opacity: 0, duration: 2 })
    .to(quote2, { y: 0, opacity: 1, duration: 1 });

  const quote3 = container.querySelector("#quote3");
  const quote3Tl = gsap
    .timeline()
    .fromTo(quote3, { y: 200, opacity: 0 }, { y: 200, opacity: 0, duration: 3 })
    .to(quote3, { y: 0, opacity: 1, duration: 1 });

  tl.add(titleTl, 0).add(quote1Tl, 0).add(quote2Tl, 0).add(quote3Tl, 0);

  return tl;
}
