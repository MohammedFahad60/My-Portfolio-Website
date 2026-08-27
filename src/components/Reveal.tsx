import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    if (element.current) observer.observe(element.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={element} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}
