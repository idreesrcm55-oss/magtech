import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { HERO } from "../../data/homeContent";

/** Full-screen hero with a looping background video under a navy overlay. */
export default function Hero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" },
  });

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-primary-dark md:min-h-screen">
      {reduceMotion ? (
        <img src={HERO.poster} alt={HERO.imageAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      ) : (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src={HERO.video}
          poster={HERO.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-label={HERO.imageAlt}
        />
      )}
      <div className="absolute inset-0 -z-10 bg-primary-dark/60" aria-hidden="true" />

      <Container className="pb-32 pt-36 md:pb-40">
        <div className="max-w-[720px]">
          <motion.p {...fadeUp(0)} className="font-heading text-base font-bold text-white">
            {HERO.eyebrow}
          </motion.p>
          <motion.h1
            {...fadeUp(0.15)}
            className="mt-4 text-4xl leading-[1.25] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.2]"
          >
            {HERO.title}
          </motion.h1>
          <motion.p {...fadeUp(0.3)} className="mt-6 text-[17px] leading-relaxed text-white">
            {HERO.text}
          </motion.p>
          <motion.div {...fadeUp(0.45)} className="mt-11 flex flex-wrap gap-4">
            {HERO.buttons.map((btn) => (
              <Button key={btn.label} href={btn.href} variant={btn.variant} icon={btn.icon} size="lg">
                {btn.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
