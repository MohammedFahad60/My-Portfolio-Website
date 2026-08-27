import { type ReactNode, useRef } from "react";

export default function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const card = useRef<HTMLDivElement>(null);
  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !card.current) return;
    const bounds = card.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.current.style.setProperty("--rotate-x", `${y * -4}deg`);
    card.current.style.setProperty("--rotate-y", `${x * 4}deg`);
    card.current.style.setProperty("--spot-x", `${x * 100 + 50}%`);
    card.current.style.setProperty("--spot-y", `${y * 100 + 50}%`);
  };
  const reset = () => {
    card.current?.style.setProperty("--rotate-x", "0deg");
    card.current?.style.setProperty("--rotate-y", "0deg");
  };
  return <div ref={card} className={`tilt-card ${className}`} onPointerMove={move} onPointerLeave={reset}>{children}</div>;
}
