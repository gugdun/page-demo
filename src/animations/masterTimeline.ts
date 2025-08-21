import gsap from "gsap";

import type { Section } from "../types/section";

export function createMasterTimeline(sections: Section[]) {
  const tl = gsap.timeline();
  sections.forEach((section) => tl.add(section.tl, section.pos));
  return tl;
}
