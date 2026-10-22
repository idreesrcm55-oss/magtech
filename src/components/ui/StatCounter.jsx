import useCountUp from "../../hooks/useCountUp";

/** Counts up from 0 to `value` the first time it scrolls into view. */
export default function StatCounter({ value, suffix = "", label, light = false, align = "center" }) {
  const [ref, count] = useCountUp(value);
  return (
    <div ref={ref} className={align === "left" ? "text-left" : "text-center"}>
      <p className={`font-heading text-4xl font-semibold md:text-5xl ${light ? "text-white" : "text-primary"}`}>
        {count}
        {suffix}
      </p>
      <p className={`mt-2 text-lg md:text-xl ${light ? "text-white/80" : "text-body"}`}>{label}</p>
    </div>
  );
}
