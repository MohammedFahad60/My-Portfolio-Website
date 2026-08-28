import { useRef, useState } from "react";

export default function ProjectVisual({
  title,
  slug,
  image,
  live,
}: {
  title: string;
  slug: string;
  image?: string;
  live?: string;
}) {
  const [isLoading, setIsLoading] = useState(Boolean(live));
  const visual = useRef<HTMLDivElement>(null);
  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !visual.current) return;
    const box = visual.current.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    visual.current.style.setProperty("--visual-x", `${x * 10}px`);
    visual.current.style.setProperty("--visual-y", `${y * 10}px`);
  };
  const reset = () => {
    visual.current?.style.setProperty("--visual-x", "0px");
    visual.current?.style.setProperty("--visual-y", "0px");
  };
  return (
    <div
      ref={visual}
      className={`project-visual project-visual-${slug}`}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span>{slug.replaceAll("-", " / ").toUpperCase()}</span>
      </div>
      <div className="visual-content">
        {live ? (
          <>
            {isLoading && <div className="visual-loading">LOADING LIVE PREVIEW...</div>}
            <iframe
              src={live}
              title={`${title} live preview`}
              onLoad={() => setIsLoading(false)}
            />
            <a
              className="visual-live-button"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              OPEN LIVE ↗
            </a>
          </>
        ) : image ? (
          <img src={image} alt={`${title} project preview`} loading="lazy" />
        ) : (
          <div className="visual-placeholder">
            <b>{title}</b>
            <span>PROJECT SYSTEM / PREVIEW</span>
          </div>
        )}
      </div>
    </div>
  );
}
