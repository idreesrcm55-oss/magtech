/*
  NAVIGATION
  ---------------------------------------------------------------
  MAIN_NAV  → header menu. An item with `children` becomes a dropdown.
              `href` is optional on dropdown parents (omit it if the parent
              has no page of its own, like "For You").
  FOOTER_NAV → link groups shown in the footer.
  Services and "For You" sub-menus are generated from their data files.
*/
import { SERVICES } from "./services";
import { AUDIENCES } from "./audiences";

const audienceLink = (slug) => {
  const a = AUDIENCES.find((x) => x.slug === slug);
  return { label: a.title, href: `/for-you/${a.slug}` };
};

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  { label: "Specialties", href: "/specialties" },
  {
    label: "For You",
    children: AUDIENCES.map((a) => ({ label: a.title, href: `/for-you/${a.slug}` })),
  },
  {
    label: "About",
    href: "/about",
    children: [{ label: "FAQs", href: "/faqs" }],
  },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "For You",
    links: [
      audienceLink("physician-billing-services"),
      audienceLink("hospital-billing-services"),
      audienceLink("large-practice"),
      audienceLink("small-practice"),
    ],
  },
];
