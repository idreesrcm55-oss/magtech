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
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
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

        <div>
          <h2 className={headingClass}>Get In Touch</h2>
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
        <Container className="py-8 text-center">
          <p>
            {SITE.copyright} &nbsp;|&nbsp; Powered by{" "}
            <a
              href={SITE.poweredBy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition hover:text-white"
            >
              {SITE.poweredBy.label}
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
