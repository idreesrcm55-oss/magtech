import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import IconBox from "../components/ui/IconBox";
import Reveal from "../components/ui/Reveal";
import CTABanner from "../components/sections/CTABanner";
import { PAGES } from "../data/pages";
import { SPECIALTIES } from "../data/specialties";

const page = PAGES.specialties;

export default function Specialties() {
  return (
    <>
      <Seo title={page.title} description={page.seoDescription} />
      <PageHero title={page.title} image={page.image} />

      <section className="section bg-light">
        <Container>
          <SectionHeading eyebrow={page.eyebrow} title={page.heading} subtitle={page.intro} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SPECIALTIES.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 0.05}>
                <IconBox icon={s.icon} title={s.name} text={s.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
