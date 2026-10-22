import { NavLink, useParams } from "react-router-dom";
import { ChevronRight, Mail, Phone, ArrowRight } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CheckList from "../components/ui/CheckList";
import Reveal from "../components/ui/Reveal";
import CTABanner from "../components/sections/CTABanner";
import NotFound from "./NotFound";
import { SERVICES, getServiceBySlug } from "../data/services";
import { PAGES } from "../data/pages";
import { SITE } from "../config/site";

const labels = PAGES.serviceDetail;

function Sidebar() {
  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      <Card hover={false} className="!p-6">
        <h2 className="mb-4 text-lg font-semibold">{labels.sidebarTitle}</h2>
        <ul className="space-y-1.5">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <NavLink
                to={`/services/${s.slug}`}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? "bg-primary text-white" : "bg-light text-dark hover:bg-primary/10 hover:text-primary"
                  }`
                }
              >
                {s.title}
                <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </NavLink>
            </li>
          ))}
        </ul>
      </Card>

      <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-xl">
        <h2 className="text-xl font-semibold text-white">{labels.contactTitle}</h2>
        <p className="mt-2 text-white/80">{labels.contactText}</p>
        <ul className="mt-6 space-y-3">
          <li>
            <a href={SITE.phoneHref} className="flex items-center gap-3 font-semibold hover:text-secondary">
              <Phone className="h-5 w-5 text-secondary" aria-hidden="true" /> {SITE.phone}
            </a>
          </li>
          <li>
            <a href={SITE.emailHref} className="flex items-center gap-3 break-all hover:text-secondary">
              <Mail className="h-5 w-5 shrink-0 text-secondary" aria-hidden="true" /> {SITE.email}
            </a>
          </li>
        </ul>
        <Button href={SITE.cta.href} variant="white" icon={ArrowRight} className="mt-6 w-full">
          {SITE.cta.label}
        </Button>
      </div>
    </aside>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  if (!service) return <NotFound />;

  const Icon = service.icon;

  return (
    <>
      <Seo title={service.title} description={service.excerpt} />
      <PageHero
        title={service.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <article className="min-w-0">
            <Reveal>
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="mt-10 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>
              <div className="mt-6 space-y-4 text-lg leading-relaxed">
                {service.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12 rounded-2xl bg-light p-8">
              <h2 className="mb-6 text-2xl font-bold">{labels.featuresTitle}</h2>
              <CheckList items={service.features} columns={2} />
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="mb-6 text-2xl font-bold">{labels.benefitsTitle}</h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {service.benefits.map((b) => (
                  <Card key={b.title} className="!p-6">
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 leading-relaxed">{b.text}</p>
                  </Card>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="mb-8 text-2xl font-bold">{labels.processTitle}</h2>
              <ol className="relative space-y-8 border-l-2 border-primary/15 pl-8">
                {service.process.map((step, i) => (
                  <li key={step.title} className="relative">
                    <span className="absolute -left-[3.3rem] flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading font-bold text-white ring-4 ring-white">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 leading-relaxed">{step.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </article>

          <Sidebar />
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
