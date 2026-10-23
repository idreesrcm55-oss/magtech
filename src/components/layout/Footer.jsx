import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import SocialLinks from "../ui/SocialLinks";
import { FOOTER_NAV } from "../../data/navigation";
import { SITE } from "../../config/site";

const CONTACT_ITEMS = [
  { icon: MapPin, lines: [SITE.address.line1, SITE.address.line2] },
  { icon: Mail, lines: [SITE.email], href: SITE.emailHref },
  { icon: Phone, lines: [SITE.phone], href: SITE.phoneHref },
];

const headingClass = "mb-6 text-[22px] text-white";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-4 lg:py-20">
        <div className="col-span-2 sm:col-span-1">
          <Logo />
          <p className="mt-6 max-w-[240px] leading-relaxed">{SITE.description}</p>
          <SocialLinks className="mt-8" />
        </div>

        {FOOTER_NAV.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className={headingClass}>{group.title}</h2>
            <ul className="space-y-1">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition hover:text-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="col-span-2 sm:col-span-1">
          <h2 className={headingClass}>{SITE.footer.contactTitle}</h2>
          <ul className="space-y-6">
            {CONTACT_ITEMS.map(({ icon: Icon, lines, href }) => {
              const text = lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ));
              return (
                <li key={lines[0]} className="flex items-start gap-4">
                  <Icon className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  {href ? (
                    <a href={href} className="break-all transition hover:text-secondary">
                      {text}
                    </a>
                  ) : (
                    <address className="not-italic">{text}</address>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        {/* Extra bottom padding below lg keeps the floating WhatsApp button off the copyright line */}
        <Container className="pb-24 pt-8 text-center lg:pb-8">
          <p>
            {SITE.copyright} &nbsp;|&nbsp; {SITE.poweredBy.prefix}{" "}
            <Link to={SITE.poweredBy.href} className="text-gold transition hover:text-white">
              {SITE.poweredBy.label}
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
