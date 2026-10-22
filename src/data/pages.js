/*
  INNER PAGE CONTENT
  ---------------------------------------------------------------
  Page titles, browser-tab titles (seoTitle), meta descriptions, hero
  images and any page-specific copy for the inner pages.
*/
import { Target, Eye, HeartHandshake, MapPin, Mail, Phone } from "lucide-react";
import { IMAGES } from "./images";
import { SITE } from "../config/site";

export const PAGES = {
  home: {
    seoTitle: `${SITE.name} | ${SITE.tagline}`,
    seoDescription:
      "Medical billing, coding, credentialing and revenue cycle management for US healthcare practices. HIPAA-compliant. Trusted since 2014.",
  },

  about: {
    title: "About Us",
    seoDescription: `Learn about ${SITE.name}, a healthcare technology and medical billing company helping providers since ${SITE.foundedYear}.`,
    image: IMAGES.pageHero,
    story: {
      eyebrow: "Our Story",
      title: "Built to Make Medical Billing Simple",
      text: [
        `${SITE.name} was founded in ${SITE.foundedYear} with a simple goal: to help healthcare providers get paid accurately and on time, without drowning in paperwork.`,
        "What started as a small team of billing specialists has grown into a full-service healthcare technology company offering medical billing, coding, credentialing, revenue cycle management and practice-growth services to providers across the United States.",
        "Today we combine certified experts with cloud-based technology and analytics to give practices of every size the financial clarity they need to thrive.",
      ],
      image: IMAGES.aboutStory,
      imageAlt: "Doctor using a tablet to review billing analytics",
    },
    values: {
      eyebrow: "What Drives Us",
      title: "Mission, Vision & Values",
      items: [
        {
          icon: Target,
          title: "Our Mission",
          text: "To remove financial friction from healthcare so providers can focus on delivering exceptional patient care.",
        },
        {
          icon: Eye,
          title: "Our Vision",
          text: "To be the most trusted technology-driven billing partner for healthcare organizations across the US.",
        },
        {
          icon: HeartHandshake,
          title: "Our Values",
          text: "Integrity, transparency, accuracy and genuine partnership in everything we do.",
        },
      ],
    },
  },

  services: {
    title: "Our Services",
    seoDescription:
      "Medical billing, coding, credentialing, RCM, denial management, EHR, AR management and virtual assistant services.",
    image: IMAGES.pageHero,
    eyebrow: "What We Offer",
    heading: "Complete Medical Billing & RCM Services",
    intro: "Everything your practice needs to get paid faster — delivered by certified experts using secure, modern technology.",
  },

  serviceDetail: {
    featuresTitle: "What's Included",
    benefitsTitle: "Key Benefits",
    processTitle: "Our Process",
    sidebarTitle: "All Services",
    contactTitle: "Need Help?",
    contactText: "Talk to a billing expert today for a free consultation.",
  },

  specialties: {
    title: "Specialties",
    seoDescription: "Specialty-specific medical billing and coding for over 30 medical specialties.",
    image: IMAGES.specialties,
    eyebrow: "Specialties We Serve",
    heading: "Specialty-Focused Billing Expertise",
    intro: "Every specialty has unique codes, payer rules and workflows. Our billers are trained in the specialties they serve.",
  },

  audience: {
    challengesTitle: "Challenges We Solve",
    benefitsTitle: "How We Help",
    checklistTitle: "What's Included",
  },

  faqs: {
    title: "Frequently Asked Questions",
    seoDescription: "Answers to common questions about outsourcing medical billing, pricing, HIPAA compliance and onboarding.",
    image: IMAGES.pageHero,
    eyebrow: "FAQs",
    heading: "Got Questions? We've Got Answers",
    intro: "Can't find what you're looking for? Reach out to our team any time.",
  },

  contact: {
    title: "Contact Us",
    seoDescription: `Contact ${SITE.name}. Call ${SITE.phone} or email ${SITE.email}.`,
    image: IMAGES.contact,
    eyebrow: "Get In Touch",
    heading: "We'd Love to Hear From You",
    intro: "Send us a message and a billing expert will get back to you within one business day.",
    cards: [
      { icon: MapPin, title: "Our Address", lines: [SITE.address.line1, SITE.address.line2] },
      { icon: Mail, title: "Email Us", lines: [SITE.email], href: SITE.emailHref },
      { icon: Phone, title: "Call Us", lines: [SITE.phone], href: SITE.phoneHref },
    ],
    mapTitle: `Map showing ${SITE.name} office location`,
  },

  demo: {
    title: "Schedule a Demo",
    seoDescription: "Book a free consultation with a medical billing expert.",
    image: IMAGES.demo,
    eyebrow: "Free Consultation",
    heading: "Book a Free Consultation",
    intro: "Tell us about your practice and we'll schedule a no-obligation call to review your billing performance.",
    perks: [
      "Free revenue cycle analysis",
      "Custom pricing proposal",
      "No long-term contracts required",
      "Response within one business day",
    ],
  },

  notFound: {
    title: "Page Not Found",
    code: "404",
    text: "Sorry, the page you're looking for doesn't exist or has been moved.",
    button: { label: "Back to Home", href: "/" },
  },
};
