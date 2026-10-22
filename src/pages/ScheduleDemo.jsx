import { Mail, Phone } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import CheckList from "../components/ui/CheckList";
import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/sections/ContactForm";
import { PAGES } from "../data/pages";
import { DEMO_FORM } from "../data/forms";
import { SITE } from "../config/site";

const page = PAGES.demo;

const CONTACTS = [
  { icon: Phone, label: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: SITE.email, href: SITE.emailHref },
];

export default function ScheduleDemo() {
  return (
    <>
      <Seo title={page.title} description={page.seoDescription} />
      <PageHero title={page.title} image={page.image} />

      <section className="section bg-light">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={page.eyebrow} title={page.heading} subtitle={page.intro} align="left" />
            <Reveal>
              <CheckList items={page.perks} className="mt-8" />
              <ul className="mt-10 space-y-4">
                {CONTACTS.map(({ icon: Icon, label, href }) => (
                  <li key={href}>
                    <a href={href} className="group flex items-center gap-4 font-semibold text-dark hover:text-primary">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white transition group-hover:bg-secondary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="break-all">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal>
            <ContactForm form={DEMO_FORM} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
