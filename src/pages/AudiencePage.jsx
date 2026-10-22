import { useParams } from "react-router-dom";
import { ArrowRight, AlertCircle } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import IconBox from "../components/ui/IconBox";
import Button from "../components/ui/Button";
import CheckList from "../components/ui/CheckList";
import Reveal from "../components/ui/Reveal";
import CTABanner from "../components/sections/CTABanner";
import NotFound from "./NotFound";
import { getAudienceBySlug } from "../data/audiences";
import { PAGES } from "../data/pages";
import { SITE } from "../config/site";

const labels = PAGES.audience;

/** One template for every /for-you/:slug page, driven by data/audiences.js. */
export default function AudiencePage() {
  const { slug } = useParams();
  const audience = getAudienceBySlug(slug);
  if (!audience) return <NotFound />;

  return (
    <>
      <Seo title={audience.title} description={audience.seoDescription} />
      <PageHero
        title={audience.title}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "For You" }, { label: audience.title }]}
      />

      <section className="section">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={audience.image}
              alt={audience.title}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow={audience.eyebrow} title={audience.heading} align="left" />
            <Reveal className="mt-6 space-y-4 leading-relaxed">
              {audience.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <Reveal className="mt-8 rounded-2xl bg-light p-6">
              <h2 className="mb-4 text-lg font-semibold">{labels.challengesTitle}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {audience.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-dark">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <SectionHeading title={labels.benefitsTitle} />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audience.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <IconBox icon={b.icon} title={b.title} text={b.text} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 flex flex-col items-start justify-between gap-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-dark/5 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="mb-5 text-2xl font-bold">{labels.checklistTitle}</h2>
              <CheckList items={audience.checklist} columns={2} />
            </div>
            <Button href={SITE.cta.href} icon={ArrowRight} className="shrink-0">
              {SITE.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
