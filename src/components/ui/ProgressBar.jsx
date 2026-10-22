import { useRef } from "react";
import { useInView } from "framer-motion";

/** Horizontal bar that fills to `value`% when scrolled into view. */
export default function ProgressBar({ label, value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between font-heading font-semibold text-dark">
        <span>{label}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div
        className="h-3 overflow-hidden rounded-full bg-primary/10"
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-[width] duration-[1500ms] ease-out motion-reduce:transition-none"
          style={{ width: inView ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}
