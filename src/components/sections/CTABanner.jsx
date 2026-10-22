import { ArrowRightCircle, Phone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { CTA } from "../../data/homeContent";
import { SITE } from "../../config/site";
import { IMAGES } from "../../data/images";

/** Navy call-to-action panel shown at the end of inner pages. */
export default function CTABanner() {
  return (
    <section className="section">
      <Container>
        <Reveal
          className="overflow-hidden rounded-[20px] bg-primary-dark bg-no-repeat px-6 py-14 text-center md:px-16 md:py-20"
          style={{ backgroundImage: `url(${IMAGES.blobSmall})`, backgroundPosition: "right -60px top -60px", backgroundSize: "280px" }}
        >
          <h2 className="text-3xl text-white md:text-[42px] md:leading-tight">{CTA.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] text-white/90">{CTA.text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={SITE.cta.href} variant="light" size="lg" icon={ArrowRightCircle}>
              {SITE.cta.label}
            </Button>
            <Button href={SITE.phoneHref} variant="outline-white" size="lg" icon={Phone}>
              {SITE.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
