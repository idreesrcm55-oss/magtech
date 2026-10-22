import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Container from "./Container";
import { IMAGES } from "../../data/images";

/**
 * Banner at the top of every inner page (the transparent header sits on top of it).
 * breadcrumb: [{ label, href }] — the last item is the current page (no href needed).
 */
export default function PageHero({ title, breadcrumb, image = IMAGES.pageHero }) {
  const crumbs = breadcrumb ?? [{ label: "Home", href: "/" }, { label: title }];
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-primary-dark/75" aria-hidden="true" />
      <Container className="pb-20 pt-40 md:pb-24 md:pt-48">
        <h1 className="max-w-3xl text-4xl leading-tight text-white md:text-[52px]">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/85">
            {crumbs.map((crumb, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.href && !last ? (
                    <Link to={crumb.href} className="transition hover:text-secondary">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current={last ? "page" : undefined} className={last ? "text-secondary" : ""}>
                      {crumb.label}
                    </span>
                  )}
                  {!last && <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </section>
  );
}
