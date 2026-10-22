import Seo from "../components/ui/Seo";
import Hero from "../components/sections/Hero";
import Highlights from "../components/sections/Highlights";
import AboutSection from "../components/sections/AboutSection";
import WhatWeDo from "../components/sections/WhatWeDo";
import BillingFeatures from "../components/sections/BillingFeatures";
import WhatWeOffer from "../components/sections/WhatWeOffer";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import MissionSection from "../components/sections/MissionSection";
import { PAGES } from "../data/pages";

export default function Home() {
  return (
    <>
      <Seo title={PAGES.home.seoTitle} description={PAGES.home.seoDescription} />
      <Hero />
      <Highlights />
      <AboutSection />
      <WhatWeDo />
      <BillingFeatures />
      <WhatWeOffer />
      <WhyChooseUs />
      <MissionSection />
    </>
  );
}
