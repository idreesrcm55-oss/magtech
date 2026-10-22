/*
  IMAGES
  ---------------------------------------------------------------
  Every image used on the site lives here.
  - Local files are in /public/images and referenced as "/images/<file>".
  - Remote images use Unsplash URLs:
    https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=1200&q=80
  Replace any value to swap an image site-wide.
*/
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  // Brand

  // Home page (from the live site)
  heroVideo: "/images/hero.mp4",
  heroPoster: "/images/hero-poster.jpg",
  about: "/images/about-building.jpg",
  whatWeDoBg: "/images/medical-team.jpg",
  billingFeatures: "/images/doctor-desk.jpg",
  whyChooseUs: "/images/medical-team.jpg",
  mission: "/images/mission.jpg",

  // Decorative shapes
  blob: "/images/pattern-memphis.png",
  blobSmall: "/images/pattern-memphis-small.png",
  cardDecor: "/images/card-decor.png",

  // Inner pages
  pageHero: unsplash("1519494026892-80bbd2d6fd0d", 1600),
  aboutStory: unsplash("1576091160399-112ba8d25d1d"),
  contact: unsplash("1586773860418-d37222d8fce3", 1600),
  demo: unsplash("1551288049-bebda4e38f71", 1600),
  specialties: unsplash("1505751172876-fa1923c5c528", 1600),

  // Services
  medicalBilling: unsplash("1554224155-6726b3ff858f"),
  marketing: unsplash("1460925895917-afdab827c52f"),
  coding: unsplash("1551288049-bebda4e38f71"),
  credentialing: unsplash("1559839734-2b71ea197ec2"),
  rcm: unsplash("1460925895917-afdab827c52f"),
  denial: unsplash("1554224155-6726b3ff858f"),
  ehr: unsplash("1576091160399-112ba8d25d1d"),
  accountsReceivable: unsplash("1551288049-bebda4e38f71"),

  // "For You" audiences
  outsource: unsplash("1551190822-a9333d879b1f"),
  smallPractice: unsplash("1612349317150-e413f6a5b16d"),
  largePractice: unsplash("1519494026892-80bbd2d6fd0d"),
  hospital: unsplash("1586773860418-d37222d8fce3"),
  physician: unsplash("1559839734-2b71ea197ec2"),
};
