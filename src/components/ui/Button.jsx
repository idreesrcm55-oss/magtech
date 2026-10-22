import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-primary-dark text-white hover:bg-primary",
  light: "bg-white text-overlay hover:bg-overlay hover:text-white",
  white: "bg-white text-primary hover:bg-light",
  outline: "border border-dark text-dark hover:bg-dark hover:text-white",
  "outline-white": "border border-white text-white hover:bg-white hover:text-primary-dark",
};

const SIZES = {
  sm: "px-6 py-3 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-6 py-[18px] text-[15px]",
};

/**
 * Renders a router <Link> for internal paths ("/about"), an <a> for
 * external/tel/mailto links, or a <button> when no href is given.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  type = "button",
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.08em] transition duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const content = (
    <>
      {children}
      {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
    </>
  );

  if (!href) {
    return (
      <button type={type} className={classes} {...rest}>
        {content}
      </button>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...rest}
    >
      {content}
    </a>
  );
}
