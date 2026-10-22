/*
  GLOBAL SITE SETTINGS
  ---------------------------------------------------------------
  Company name, contact details, social links and the main call-to-action.
  Every component reads contact info from here — update a value once and
  it changes everywhere (header, footer, contact page, CTAs, forms).
*/
export const SITE = {
  name: "MAGTECH RCM Solutions",
  tagline: "Streamlined Medical Billing Solutions",
  description:
    "MAGTECH RCM Solutions is a cutting-edge healthcare technology company that empowers organizations to streamline operations and deliver superior patient care.",
  email: "info@billingsystematics.com",
  phone: "+1 (737) 310-1617",
  phoneHref: "tel:+17373101617",
  emailHref: "mailto:info@billingsystematics.com",
  address: {
    line1: "5900 Balcones Drive #25636",
    line2: "Austin, TX, 78731, USA",
  },
  // Google Maps embed for the contact page (search query of the address above)
  mapEmbedUrl:
    "https://www.google.com/maps?q=5900+Balcones+Drive+Austin+TX+78731&output=embed",
  foundedYear: 2014,
  // Set a URL to show the icon in the footer; leave "" to hide it.
  socials: {
    facebook: "https://www.facebook.com/share/195BhTbqWk/",
    linkedin: "https://www.linkedin.com/company/billing-systematics/",
    twitter: "#",
    google: "#", // Google Reviews link
    instagram: "#",
  },
  cta: { label: "Talk to An Expert", href: "/schedule-a-demo" },
  copyright: `Copyright © ${new Date().getFullYear()} MAGTECH RCM Solutions`,
  poweredBy: { label: "FiNASAL", href: "https://finasaltech.com" },
  showTopBar: false, // thin email/phone strip above the header
};
