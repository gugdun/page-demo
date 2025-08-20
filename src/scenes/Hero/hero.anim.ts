import gsap from "gsap";

export function createHeroAnimation(container: HTMLElement) {
  const tl = gsap.timeline({ paused: false });

  tl.addLabel("in")
    .from(container.querySelector(".title"), {
      y: 200,
      opacity: 0,
      duration: 1,
    })
    .from(
      container.querySelector(".cloud-corner"),
      { x: -200, y: 200, opacity: 0, duration: 1 },
      "<"
    )

    .addLabel("normal")
    .to(container.querySelector(".title"), { y: 0, duration: 0 }, "<")
    .to(
      container.querySelector(".cloud-corner"),
      { x: 0, y: 0, duration: 0 },
      "<"
    )

    .addLabel("out")
    .to(container, { opacity: 0, duration: 1 })
    .to(container.querySelector(".title"), { y: -100, duration: 1 }, "<")
    .to(
      container.querySelector(".cloud-corner"),
      { x: -200, y: 200, duration: 1 },
      "<"
    );

  return tl;
}
