import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import IconBox from "../components/ui/IconBox";
import Reveal from "../components/ui/Reveal";
import CTABanner from "../components/sections/CTABanner";
import { PAGES } from "../data/pages";
import { SERVICES } from "../data/services";

const page = PAGES.services;

export default function Services() {
  return (
    <>
      <Seo title={page.title} description={page.seoDescription} />
      <PageHero title={page.title} image={page.image} />

      <section className="section bg-light">
        <Container>
          <SectionHeading eyebrow={page.eyebrow} title={page.heading} subtitle={page.intro} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 0.06}>
                <IconBox
                  icon={service.icon}
                  title={service.title}
                  text={service.excerpt}
                  href={`/services/${service.slug}`}
                  linkLabel="Read More"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
