import { Mail, Phone, MapPin } from "lucide-react";
import Container from "../ui/Container";
import SocialLinks from "../ui/SocialLinks";
import { SITE } from "../../config/site";

export default function TopBar() {
  return (
    <div className="hidden bg-primary-dark text-sm text-white/85 md:block">
      <Container className="flex h-11 items-center justify-between">
        <ul className="flex items-center gap-6">
          <li>
            <a href={SITE.emailHref} className="flex items-center gap-2 transition hover:text-secondary">
              <Mail className="h-4 w-4 text-secondary" aria-hidden="true" />
              {SITE.email}
            </a>
          </li>
          <li>
            <a href={SITE.phoneHref} className="flex items-center gap-2 transition hover:text-secondary">
              <Phone className="h-4 w-4 text-secondary" aria-hidden="true" />
              {SITE.phone}
            </a>
          </li>
          <li className="hidden items-center gap-2 lg:flex">
            <MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />
            {SITE.address.line2}
          </li>
        </ul>
        <SocialLinks size="sm" />
      </Container>
    </div>
  );
}
