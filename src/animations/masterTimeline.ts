import gsap from "gsap";
import type { Scene } from "../types";

export function createMasterTimeline(sections: Scene[]) {
  const tl = gsap.timeline();
  sections.forEach((section) => tl.add(section.tl, section.pos));
  return tl;
}
