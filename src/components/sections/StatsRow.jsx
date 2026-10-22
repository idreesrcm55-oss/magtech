import StatCounter from "../ui/StatCounter";
import { STATS } from "../../data/homeContent";

/** Row of animated counters. Pass `light` when placed on a dark background. */
export default function StatsRow({ light = false, className = "" }) {
  return (
    <div
      className={`grid grid-cols-2 gap-8 rounded-2xl p-8 md:grid-cols-4 md:p-10 ${
        light ? "bg-white/5 ring-1 ring-white/10" : "bg-white shadow-xl shadow-dark/5 ring-1 ring-dark/5"
      } ${className}`}
    >
      {STATS.map((stat) => (
        <StatCounter key={stat.label} {...stat} light={light} />
      ))}
    </div>
  );
}
