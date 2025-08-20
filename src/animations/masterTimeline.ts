import gsap from "gsap";

export function createMasterTimeline(sections: gsap.core.Timeline[]) {
  const tl = gsap.timeline();
  sections.forEach((sectionTl) => tl.add(sectionTl));
  return tl;
}
