import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import Reveal from "../components/ui/Reveal";
import CTABanner from "../components/sections/CTABanner";
import { PAGES } from "../data/pages";
import { FAQS } from "../data/faqs";

const page = PAGES.faqs;
const items = FAQS.map((f) => ({ title: f.question, content: f.answer }));

export default function FAQs() {
  return (
    <>
      <Seo title={page.title} description={page.seoDescription} />
      <PageHero
        title={page.title}
        image={page.image}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "FAQs" }]}
      />

      <section className="section bg-light">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow={page.eyebrow} title={page.heading} subtitle={page.intro} />
          <Reveal className="mt-12">
            <Accordion items={items} />
          </Reveal>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
