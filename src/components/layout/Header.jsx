import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Dropdown, { navLinkClass } from "./Dropdown";
import MobileMenu from "./MobileMenu";
import { MAIN_NAV } from "../../data/navigation";
import { SITE } from "../../config/site";

/**
 * Transparent header floating over each page's dark hero; turns solid navy
 * once the page is scrolled.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes
  useEffect(closeMobile, [pathname, closeMobile]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-primary-dark/95 shadow-lg shadow-overlay/10 backdrop-blur" : "bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "h-20" : "h-24 md:h-[100px]"
        }`}
      >
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {MAIN_NAV.map((item) =>
              item.children ? (
                <Dropdown key={item.label} item={item} />
              ) : (
                <li key={item.label}>
                  <NavLink to={item.href} end className={({ isActive }) => navLinkClass(isActive)}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={SITE.cta.href} className="hidden sm:inline-flex">
            {SITE.cta.label}
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={`flex h-11 w-11 items-center justify-center text-white transition lg:hidden ${
              mobileOpen ? "rounded-md bg-primary-dark ring-1 ring-white/20" : "rounded-full hover:bg-white/10"
            }`}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </header>
  );
}
