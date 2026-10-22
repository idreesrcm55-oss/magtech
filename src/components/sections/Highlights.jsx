import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { HIGHLIGHTS } from "../../data/homeContent";

/** White panel with rounded top corners that overlaps the bottom of the hero. */
export default function Highlights() {
  return (
    <section aria-label="Highlights" className="relative z-10 -mt-6 rounded-t-[20px] bg-white pb-12 pt-16 md:pb-20 md:pt-[90px]">
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div className="group h-full rounded-[5px] border-b-4 border-transparent px-2 pb-8 text-center transition duration-500 hover:border-primary">
                <span className="mx-auto flex h-[104px] w-[104px] items-center justify-center rounded-full border-[3px] border-primary text-primary transition duration-500 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-10 w-10" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl md:text-[30px] md:leading-tight">{title}</h3>
                <p className="mt-4 text-[17px] leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
