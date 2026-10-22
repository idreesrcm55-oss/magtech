import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// Header links are white (the header sits on dark hero images / navy when scrolled)
export const navLinkClass = (active) =>
  `px-3 py-2 text-base transition duration-300 xl:px-4 ${
    active ? "text-secondary" : "text-white hover:text-secondary"
  }`;

/** True when the current path belongs to this nav item or any of its children. */
export const isItemActive = (item, pathname) =>
  (item.href && item.href !== "/" && pathname.startsWith(item.href)) ||
  (item.children ?? []).some((c) => pathname.startsWith(c.href));

/**
 * Desktop dropdown menu. Opens on hover, and on click/Enter of the chevron
 * button for keyboard users. Escape or tabbing away closes it.
 */
export default function Dropdown({ item }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const ref = useRef(null);
  const toggleRef = useRef(null);
  const menuId = useId();
  const active = isItemActive(item, pathname);

  useEffect(() => setOpen(false), [pathname]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && open) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  };

  const handleBlur = (e) => {
    if (!ref.current?.contains(e.relatedTarget)) setOpen(false);
  };

  const chevron = (
    <ChevronDown className={`h-4 w-4 transition duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
  );

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      {item.href ? (
        <div className="flex items-center">
          <Link to={item.href} className={`${navLinkClass(active)} !pr-1`}>
            {item.label}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={`${item.label} submenu`}
            onClick={() => setOpen((o) => !o)}
            className={`rounded-full p-1 ${active ? "text-secondary" : "text-white hover:text-secondary"}`}
          >
            {chevron}
          </button>
        </div>
      ) : (
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((o) => !o)}
          className={`flex items-center gap-1 ${navLinkClass(active)}`}
        >
          {item.label}
          {chevron}
        </button>
      )}

      <div
        id={menuId}
        className={`absolute left-0 top-full z-50 pt-3 transition duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
        }`}
      >
        <ul className="w-72 rounded-[10px] bg-white py-2 shadow-xl ring-1 ring-dark/5">
          {item.children.map((child) => (
            <li key={child.href}>
              <NavLink
                to={child.href}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-[15px] transition duration-200 ${
                    isActive ? "bg-light text-primary" : "text-dark hover:bg-light hover:text-primary"
                  }`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
