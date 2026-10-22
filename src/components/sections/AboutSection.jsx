import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import CheckList from "../ui/CheckList";
import Reveal from "../ui/Reveal";
import { ABOUT } from "../../data/homeContent";

export default function AboutSection() {
  return (
    <section className="pb-16 pt-8 md:pb-24 md:pt-12">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[70px]">
        <Reveal className="lg:pl-12">
          <img
            src={ABOUT.image}
            alt={ABOUT.imageAlt}
            loading="lazy"
            className="aspect-[6/5] w-full rounded-[10px] object-cover shadow-md"
          />
        </Reveal>

        <div>
          <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} align="left" />
          <Reveal className="mt-6 space-y-4 text-[17px] leading-relaxed">
            {ABOUT.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          {(ABOUT.checklist || ABOUT.button) && (
            <Reveal>
              {ABOUT.checklist && <CheckList items={ABOUT.checklist} columns={2} className="mt-8" />}
              {ABOUT.button && (
                <Button href={ABOUT.button.href} icon={ArrowRight} className="mt-10">
                  {ABOUT.button.label}
                </Button>
              )}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
