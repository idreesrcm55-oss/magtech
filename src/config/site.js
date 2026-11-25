/*
  GLOBAL SITE SETTINGS
  ---------------------------------------------------------------
  Company name, contact details, social links and the main call-to-action.
  Every component reads from here — update a value once and it changes
  everywhere (header, footer, logo, contact page, CTAs, forms, page text,
  browser-tab title and the WhatsApp button).

  Edit the values in the "EDIT HERE" block. Everything below it (call links,
  WhatsApp link, map, copyright…) is built from those values automatically.
*/

// ── EDIT HERE ─────────────────────────────────────────────────────
const NAME = "MAGTECH RCM Solutions"; // full company name, used in all page text
const SHORT_NAME = "MAGTECH"; // logo badge letter + "Powered by" credit
const EMAIL = "magtechrcm@gmail.com";
const PHONE = "+1 (737) 310-1617"; // shown exactly as typed; links use its digits
const ADDRESS = {
  line1: "5900 Balcones Drive #32568",
  line2: "Austin, TX 78731, USA",
};
// ──────────────────────────────────────────────────────────────────

const PHONE_DIGITS = PHONE.replace(/\D/g, "");

export const SITE = {
  name: NAME,
  shortName: SHORT_NAME,
  tagline: "Streamlined Medical Billing Solutions",
  description: `${NAME} is a cutting-edge healthcare technology company that empowers organizations to streamline operations and deliver superior patient care.`,
  email: EMAIL,
  emailHref: `mailto:${EMAIL}`,
  phone: PHONE,
  phoneHref: `tel:+${PHONE_DIGITS}`,
  address: ADDRESS,
  // Google Maps embed for the contact page (built from the address above)
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(`${ADDRESS.line1}, ${ADDRESS.line2}`)}&output=embed`,
  foundedYear: 2026,
  // Set a URL to show the icon in the footer; leave "" to hide it.
 socials: {
  facebook: "https://www.facebook.com/share/1CdDryiT7X/",
  linkedin: "https://www.linkedin.com/company/magtech-rcm-solutions/",
  twitter: "",
  google: "",
  instagram: "",
},
  cta: { label: "Talk to An Expert", href: "/schedule-a-demo" },
  footer: { contactTitle: "Get In Touch" },
  copyright: `Copyright © ${new Date().getFullYear()} ${NAME}`,
  poweredBy: { prefix: "Powered by", label: SHORT_NAME, href: "/" },
  // Floating chat button; opens WhatsApp with the phone number above
  whatsapp: { label: "Help Desk", href: `https://wa.me/${PHONE_DIGITS}` },
  showTopBar: false, // thin email/phone strip above the header
};
