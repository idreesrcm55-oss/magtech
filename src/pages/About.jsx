import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import IconBox from "../components/ui/IconBox";
import Reveal from "../components/ui/Reveal";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import StatsRow from "../components/sections/StatsRow";
import CTABanner from "../components/sections/CTABanner";
import { PAGES } from "../data/pages";

const page = PAGES.about;

export default function About() {
  return (
    <>
      <Seo title={page.title} description={page.seoDescription} />
      <PageHero title={page.title} image={page.image} />

      <section className="section">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={page.story.image}
              alt={page.story.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow={page.story.eyebrow} title={page.story.title} align="left" />
            <Reveal className="mt-6 space-y-4 leading-relaxed">
              {page.story.text.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <SectionHeading eyebrow={page.values.eyebrow} title={page.values.title} />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {page.values.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <IconBox icon={item.icon} title={item.title} text={item.text} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <StatsRow className="mt-16" />
          </Reveal>
        </Container>
      </section>

      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
