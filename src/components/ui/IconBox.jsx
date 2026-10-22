import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Card from "./Card";

/** Icon tile used inside IconBox and elsewhere. Turns solid on parent `group` hover. */
export function IconTile({ icon: Icon, size = "md" }) {
  const box = size === "sm" ? "h-12 w-12 rounded-xl" : "h-14 w-14 rounded-2xl";
  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white ${box}`}
    >
      <Icon className="h-6 w-6" aria-hidden="true" />
    </span>
  );
}

/**
 * Icon + title + text, optionally with a link.
 * layout: "stack" (icon above text) | "row" (icon beside text)
 * bare:   true renders without the card background/shadow
 */
export default function IconBox({
  icon,
  title,
  text,
  href,
  linkLabel = "Learn More",
  layout = "stack",
  bare = false,
  headingLevel: Heading = "h3",
  className = "",
}) {
  const body = (
    <>
      <IconTile icon={icon} size={bare ? "sm" : "md"} />
      <div className={layout === "row" ? "" : "mt-5"}>
        <Heading className="text-lg font-semibold">{title}</Heading>
        <p className="mt-2 leading-relaxed">{text}</p>
        {href && (
          <Link
            to={href}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5 hover:text-secondary"
          >
            {linkLabel}
            <span className="sr-only">: {title}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </>
  );

  const layoutClass = layout === "row" ? "flex items-start gap-5" : "";

  if (bare) return <div className={`group ${layoutClass} ${className}`}>{body}</div>;
  return <Card className={`group h-full ${layoutClass} ${className}`}>{body}</Card>;
}
