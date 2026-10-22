import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { BILLING_FEATURES } from "../../data/homeContent";
import { IMAGES } from "../../data/images";

/** Photo on the left, heading and a 2-column grid of outlined boxes on the right. */
export default function BillingFeatures() {
  return (
    <section
      className="bg-no-repeat py-16 md:py-[120px]"
      style={{ backgroundImage: `url(${IMAGES.blob})`, backgroundPosition: "top right" }}
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[70px]">
        <Reveal>
          <img
            src={BILLING_FEATURES.image}
            alt={BILLING_FEATURES.imageAlt}
            loading="lazy"
            className="aspect-[53/50] w-full rounded-[10px] object-cover shadow-md"
          />
        </Reveal>

        <div>
          <SectionHeading title={BILLING_FEATURES.title} subtitle={BILLING_FEATURES.subtitle} align="left" />
          <div className="mt-12 grid max-w-[520px] gap-5 sm:grid-cols-2">
            {BILLING_FEATURES.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-[15px] border-[3px] border-body bg-white px-3 pb-4 pt-3 transition duration-300 hover:border-primary hover:shadow-lg">
                  <h3 className="text-xl leading-tight">{item.title}</h3>
                  <p className="mt-4 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
