import { Link } from "react-router-dom";
import { SITE } from "../../config/site";

/** White text logo — always placed on a dark background (header, drawer, footer). */
export default function Logo({ className = "" }) {
  const [brand, ...rest] = SITE.name.split(" ");
  return (
    <Link to="/" aria-label={SITE.name} className={`inline-flex shrink-0 items-center gap-2.5 text-white ${className}`}>
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-heading text-lg font-extrabold text-primary-dark md:h-11 md:w-11"
      >
        M
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl font-extrabold tracking-wide md:text-2xl">{brand}</span>
        <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 md:text-xs">
          {rest.join(" ")}
        </span>
      </span>
    </Link>
  );
}
