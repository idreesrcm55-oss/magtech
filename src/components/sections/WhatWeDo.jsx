import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { WHAT_WE_DO } from "../../data/homeContent";

// Each card shows a different corner of the decorative line art
const DECOR_POSITIONS = ["center center", "bottom left", "top left", "top right"];

/** Dark photo section with 2×2 white service cards. */
export default function WhatWeDo() {
  return (
    <section className="relative isolate overflow-hidden bg-overlay py-16 md:py-[90px]">
      <img src={WHAT_WE_DO.background} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-overlay/80" aria-hidden="true" />

      <Container>
        <SectionHeading eyebrow={WHAT_WE_DO.eyebrow} title={WHAT_WE_DO.title} subtitle={WHAT_WE_DO.text} light />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-[1180px]">
          {WHAT_WE_DO.items.map(({ icon: Icon, title, text, href }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.1}>
              <Link
                to={href}
                className="block h-full rounded-[20px] border-4 border-transparent bg-white bg-no-repeat px-6 py-10 transition duration-300 hover:border-primary md:px-9"
                style={{
                  backgroundImage: `url(${WHAT_WE_DO.cardDecor})`,
                  backgroundPosition: DECOR_POSITIONS[i % DECOR_POSITIONS.length],
                  backgroundSize: "cover",
                }}
              >
                <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-xl md:text-[21px]">{title}</h3>
                <p className="mt-4 text-[17px] leading-relaxed">{text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
