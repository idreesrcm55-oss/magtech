import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { WHY_CHOOSE_US } from "../../data/homeContent";
import { IMAGES } from "../../data/images";

/** Navy section: photo on the left, reasons with outlined circle icons on the right. Reused on About. */
export default function WhyChooseUs() {
  return (
    <section
      className="bg-primary-dark bg-no-repeat py-16 md:py-[100px]"
      style={{ backgroundImage: `url(${IMAGES.blobSmall})`, backgroundPosition: "bottom left", backgroundSize: "260px" }}
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-5">
        <Reveal>
          <img
            src={WHY_CHOOSE_US.image}
            alt={WHY_CHOOSE_US.imageAlt}
            loading="lazy"
            className="aspect-[58/50] w-full rounded-[10px] object-cover"
          />
        </Reveal>

        <div className="lg:pl-0">
          <SectionHeading eyebrow={WHY_CHOOSE_US.eyebrow} title={WHY_CHOOSE_US.title} align="left" light />
          <Reveal>
            <p className="mt-1 text-[17px] leading-relaxed text-white">{WHY_CHOOSE_US.text}</p>
          </Reveal>

          <ul className="mt-6 space-y-5">
            {WHY_CHOOSE_US.items.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.08} className="group flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition duration-300 group-hover:bg-white group-hover:text-primary-dark">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl text-white">{title}</h3>
                  <p className="text-[17px] leading-relaxed text-white">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
