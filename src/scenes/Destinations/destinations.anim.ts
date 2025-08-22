import gsap from "gsap";

export function createDestinationsAnimation(container: HTMLElement) {
  const tl = gsap.timeline();

  const title = container.querySelector(".title");
  const titleTl = gsap
    .timeline()
    .fromTo(title, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

  const card1 = container.querySelector("#card1");
  const card1Tl = gsap
    .timeline()
    .fromTo(card1, { y: 200, opacity: 0 }, { y: 200, opacity: 0, duration: 1 })
    .to(card1, { y: 0, opacity: 1, duration: 1 });

  const card2 = container.querySelector("#card2");
  const card2Tl = gsap
    .timeline()
    .fromTo(card2, { y: 200, opacity: 0 }, { y: 200, opacity: 0, duration: 2 })
    .to(card2, { y: 0, opacity: 1, duration: 1 });

  const card3 = container.querySelector("#card3");
  const card3Tl = gsap
    .timeline()
    .fromTo(card3, { y: 200, opacity: 0 }, { y: 200, opacity: 0, duration: 3 })
    .to(card3, { y: 0, opacity: 1, duration: 1 });

  tl.add(titleTl, 0).add(card1Tl, 0).add(card2Tl, 0).add(card3Tl, 0);

  return tl;
}
