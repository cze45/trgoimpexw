import { useEffect, useRef } from "react";

/**
 * Zelena linija koja na hover obiđe ivicu dugmeta i nestane.
 * Upotreba: roditelj (a / button) dobije atribut `data-trace`, unutra ide <TraceOutline />.
 * Stilovi su u src/styles.css (blok "button trace").
 */
export function TraceOutline() {
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const rect = rectRef.current;
    const host = rect?.ownerSVGElement?.parentElement as HTMLElement | null | undefined;
    if (!rect || !host) return;

    const measure = () => {
      const w = Math.max(0, host.offsetWidth - 2);
      const h = Math.max(0, host.offsetHeight - 2);
      rect.setAttribute("width", String(w));
      rect.setAttribute("height", String(h));
      const len = 2 * (w + h);
      host.style.setProperty("--tw-len", String(len));
      host.style.setProperty("--tw-seg", String(Math.round(len * 0.32)));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    return () => ro.disconnect();
  }, []);

  return (
    <svg data-trace-svg aria-hidden="true">
      <rect ref={rectRef} x={1} y={1} />
    </svg>
  );
}
