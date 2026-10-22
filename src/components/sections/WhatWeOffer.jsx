import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { WHAT_WE_OFFER } from "../../data/homeContent";

export default function WhatWeOffer() {
  return (
    <section className="pb-16 pt-10 md:pb-20 md:pt-12">
      <Container>
        <SectionHeading eyebrow={WHAT_WE_OFFER.eyebrow} title={WHAT_WE_OFFER.title} />

        <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_OFFER.items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1}>
              <div className="h-full rounded-[5px] border-b-4 border-transparent px-5 py-6 transition duration-300 hover:border-primary">
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-4 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Button href={WHAT_WE_OFFER.button.href} variant="outline" size="sm" className="!px-5 !py-2">
            {WHAT_WE_OFFER.button.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
