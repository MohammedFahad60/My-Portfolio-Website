import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLSpanElement>(null);
  const ring = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      if (dot.current) dot.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const toggle = (event: Event) => {
      const target = event.target as HTMLElement;
      ring.current?.classList.toggle("cursor-active", Boolean(target.closest("a, button, .tilt-card")));
    };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", toggle);
    return () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerover", toggle); };
  }, []);

  return <><span ref={dot} className="cursor-dot" aria-hidden="true" /><span ref={ring} className="cursor-ring" aria-hidden="true" /></>;
}
