import { Link } from "react-router-dom";
import { SITE } from "../../config/site";
import { IMAGES } from "../../data/images";

/** White logo image — always placed on a dark background (header, drawer, footer). */
export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`inline-flex shrink-0 ${className}`}>
      <img src={IMAGES.logoWhite} alt={SITE.name} width="200" height="50" className="h-10 w-auto md:h-12" />
    </Link>
  );
}
