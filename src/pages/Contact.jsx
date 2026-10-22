import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { IconTile } from "../components/ui/IconBox";
import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/sections/ContactForm";
import { PAGES } from "../data/pages";
import { CONTACT_FORM } from "../data/forms";
import { SITE } from "../config/site";

const page = PAGES.contact;

export default function Contact() {
  return (
    <>
      <Seo title={page.title} description={page.seoDescription} />
      <PageHero title={page.title} image={page.image} />

      <section className="section">
        <Container>
          <SectionHeading eyebrow={page.eyebrow} title={page.heading} subtitle={page.intro} />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {page.cards.map((card, i) => {
              const lines = card.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ));
              return (
                <Reveal key={card.title} delay={i * 0.08}>
                  <Card className="group flex h-full items-start gap-5">
                    <IconTile icon={card.icon} />
                    <div>
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      {card.href ? (
                        <a href={card.href} className="mt-1 block break-all transition hover:text-primary">
                          {lines}
                        </a>
                      ) : (
                        <address className="mt-1 not-italic">{lines}</address>
                      )}
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <ContactForm form={CONTACT_FORM} />
            </Reveal>
            <Reveal className="min-h-[360px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-dark/5">
              <iframe
                title={page.mapTitle}
                src={SITE.mapEmbedUrl}
                className="h-full min-h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
