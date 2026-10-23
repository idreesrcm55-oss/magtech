import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Mail, Phone } from "lucide-react";
import Button from "../ui/Button";
import { MAIN_NAV } from "../../data/navigation";
import { SITE } from "../../config/site";
import { isItemActive } from "./Dropdown";

const rowClass = (active) =>
  `flex w-full items-center justify-between px-5 py-3.5 text-[15px] font-medium transition ${
    active ? "text-primary" : "text-dark hover:bg-light"
  }`;

const subLinkClass = (active) =>
  `block py-3 pl-9 pr-5 text-sm transition ${active ? "text-primary" : "text-body hover:bg-light"}`;

/**
 * Full-width dropdown menu for screens below `lg`. Rendered inside the header
 * and opens directly beneath it; the whole list scrolls when the screen is
 * short. Sub-menus expand as accordions.
 */
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

  if (!open) return null;

  return (
    <>
      {/* Dim the page behind the menu; tapping it closes the menu. Portalled so
          the header's backdrop-blur can't trap this fixed layer. */}
      {createPortal(<div className="fixed inset-0 z-30 bg-dark/40 lg:hidden" onClick={onClose} />, document.body)}

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-100px)] overflow-y-auto border-t border-dark/10 bg-white shadow-xl lg:hidden"
      >
        <ul className="divide-y divide-dark/10">
          {MAIN_NAV.map((item) =>
            item.children ? (
              <li key={item.label}>
                <button
                  type="button"
                  aria-expanded={expanded === item.label}
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  className={rowClass(isItemActive(item, pathname))}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-5 w-5 transition ${expanded === item.label ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {expanded === item.label && (
                  <ul className="divide-y divide-dark/5 border-t border-dark/10 bg-light/60">
                    {item.href && (
                      <li>
                        <Link to={item.href} className={subLinkClass(pathname === item.href)}>
                          All {item.label}
                        </Link>
                      </li>
                    )}
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavLink to={child.href} className={({ isActive }) => subLinkClass(isActive)}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <NavLink to={item.href} end className={({ isActive }) => rowClass(isActive)}>
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <div className="space-y-4 border-t border-dark/10 px-5 py-5">
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
      </nav>
    </>
  );
}
