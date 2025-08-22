import { useEffect, useRef, useState } from "preact/hooks";
import { useWindowSize } from "../../hooks";

import "./scrollBar.scss";

interface ScrollBarProps {
  progress: number;
}

export function ScrollBar({ progress }: ScrollBarProps) {
  const scrollbar = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const [timeoutId, setTimeoutId] = useState(-1);

  useEffect(() => {
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(
        () => (scrollbar.current!.className = "scrollBar hidden"),
        1000
      )
    );
    if (!scrollbar.current || progress < 0.001) return;
    scrollbar.current.className = "scrollBar";
    const style = getComputedStyle(scrollbar.current);
    const marginBottom = Number(style.marginBottom.replace("px", ""));
    const marginTop = Number(style.marginTop.replace("px", ""));
    const height = Number(style.height.replace("px", ""));
    const offset = Math.round(
      (windowSize.height - marginTop - marginBottom - height) * progress
    );
    scrollbar.current.style.transform = `translateY(${offset}px)`;
  }, [progress, windowSize]);

  return <div ref={scrollbar} class="scrollBar hidden"></div>;
}
