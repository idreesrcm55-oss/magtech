import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, X, Mail, Phone } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { MAIN_NAV } from "../../data/navigation";
import { SITE } from "../../config/site";
import { isItemActive } from "./Dropdown";

const linkClass = (active) =>
  `block rounded-xl px-4 py-3 font-medium transition ${
    active ? "bg-primary/10 text-primary" : "text-dark hover:bg-light"
  }`;

/** Slide-in drawer for screens below `lg`. Sub-menus expand as accordions. */
export default function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(null);

  // Lock page scroll and allow Escape to close while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div className={`lg:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        className={`fixed inset-0 z-50 bg-dark/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white transition-transform duration-300 ${
          open ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
        {...(!open && { inert: "" })}
      >
        <div className="flex items-center justify-between bg-primary-dark px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-white transition hover:bg-white/10"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {MAIN_NAV.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={expanded === item.label}
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className={`flex w-full items-center justify-between ${linkClass(isItemActive(item, pathname))}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 transition ${expanded === item.label ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {expanded === item.label && (
                    <ul className="ml-4 mt-1 space-y-1 border-l-2 border-primary/15 pl-3">
                      {item.href && (
                        <li>
                          <Link to={item.href} className={linkClass(pathname === item.href)}>
                            All {item.label}
                          </Link>
                        </li>
                      )}
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavLink to={child.href} className={({ isActive }) => `text-sm ${linkClass(isActive)}`}>
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink to={item.href} end className={({ isActive }) => linkClass(isActive)}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="space-y-4 border-t border-dark/10 p-5">
          <a href={SITE.emailHref} className="flex items-center gap-3 text-sm text-body hover:text-primary">
            <Mail className="h-4 w-4 text-primary" aria-hidden="true" /> {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="flex items-center gap-3 text-sm text-body hover:text-primary">
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" /> {SITE.phone}
          </a>
          <Button href={SITE.cta.href} className="w-full">
            {SITE.cta.label}
          </Button>
        </div>
      </aside>
    </div>
  );
}
