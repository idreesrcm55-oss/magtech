import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import useCountUp from "../../hooks/useCountUp";
import { MISSION } from "../../data/homeContent";

export default function MissionSection() {
  const [counterRef, count] = useCountUp(MISSION.counter.value, 2000);

  return (
    <section className="py-16 md:py-[90px]">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-5">
        <Reveal>
          <img
            src={MISSION.image}
            alt={MISSION.imageAlt}
            loading="lazy"
            className="aspect-[58/50] w-full rounded-[10px] object-cover"
          />
        </Reveal>

        <Reveal>
          <h2 className="text-3xl leading-tight md:text-[32px]">{MISSION.title}</h2>
          <p className="mt-1 font-heading text-base font-bold text-overlay">{MISSION.subtitle}</p>
          <p className="mt-6 text-[17px] leading-relaxed text-overlay/90">{MISSION.text}</p>

          <div ref={counterRef} className="mt-5">
            <p className="font-heading text-5xl font-semibold text-primary">
              {count}
              {MISSION.counter.suffix}
            </p>
            <p className="mt-1 text-xl">{MISSION.counter.label}</p>
          </div>

          <p className="mt-10 font-semibold text-overlay">{MISSION.callout}</p>
        </Reveal>
      </Container>
    </section>
  );
}
