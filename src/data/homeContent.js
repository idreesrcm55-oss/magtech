/*
  HOME PAGE CONTENT
  ---------------------------------------------------------------
  All text on the home page, section by section, in display order.
  Edit text freely. Icons are Lucide components (https://lucide.dev) —
  import any new icon at the top before using it.
  Phone/email/CTA links come from config/site.js — don't type them here.
  Optional fields (e.g. ABOUT.checklist, ABOUT.button) only render when present.
*/
import {
  HandCoins,
  TrendingUp,
  PieChart,
  Code,
  Receipt,
  IdCard,
  HandHeart,
  Clock,
  Calculator,
  UserRound,
  ListChecks,
  CreditCard,
  Newspaper,
  Stethoscope,
  Gem,
  ShieldCheck,
  ArrowRightCircle,
} from "lucide-react";
import { SITE } from "../config/site";
import { IMAGES } from "./images";

export const HERO = {
  eyebrow: "Streamlined Medical Billing Solutions",
  title: "Your Partner in Efficient Billing",
  text: "Experience the power of streamlined medical billing. Our expert team is dedicated to optimize your revenue cycle, reducing errors, and improving your practice overall efficiency.",
  video: IMAGES.heroVideo,
  poster: IMAGES.heroPoster,
  imageAlt: "Team of smiling doctors in white coats standing in a hospital corridor",
  buttons: [{ label: "Book a free consultation", href: "/schedule-a-demo", variant: "light", icon: ArrowRightCircle }],
};

export const HIGHLIGHTS = [
  {
    icon: HandCoins,
    title: "Optimized RCM",
    text: "MAGTECH RCM Solutions streamlines your revenue cycle, boosts cash flow, and enhances patient satisfaction.",
  },
  {
    icon: TrendingUp,
    title: "Increased Revenue",
    text: "MAGTECH RCM Solutions ensures accurate claim submission, maximizing reimbursements and driving long-term growth.",
  },
  {
    icon: PieChart,
    title: "Fast Claim Processing",
    text: "MAGTECH RCM Solutions optimizes doctors' cash flow by identifying billing issues and providing electronic claim processing solutions for faster payments.",
  },
];

export const ABOUT = {
  eyebrow: "About Us",
  title: "Analytics That Accelerate Revenue",
  text: [
    "MAGTECH RCM Solutions is a leading provider of cloud-based healthcare technology solutions, designed to help growing organizations optimize their operations and deliver exceptional patient care.",
  ],
  image: IMAGES.about,
  imageAlt: "MAGTECH RCM Solutions office building",
};

export const WHAT_WE_DO = {
  eyebrow: "What We Do",
  title: "Streamlining Healthcare Billing, Maximizing Revenue",
  text: "MAGTECH RCM Solutions provides expert medical billing and revenue cycle management services to a wide range of healthcare providers. We partner with practices of all sizes, from solo practitioners to large healthcare systems, to optimize operations and drive financial success.",
  background: IMAGES.whatWeDoBg,
  cardDecor: IMAGES.cardDecor,
  items: [
    {
      icon: Code,
      title: "Medical Coding Services",
      text: "At MAGTECH RCM Solutions, we transform complex clinical documentation into precise ICD-10, CPT, and HCPCS codes. Our certified coders ensure compliance, reduce denials, and optimize your revenue cycle. Let us handle the code — you focus on patient care.",
      href: "/services/medical-coding-services",
    },
    {
      icon: Receipt,
      title: "Medical Billing Services",
      text: "From claim submission to payment posting and denial management, MAGTECH RCM Solutions streamlines your billing operations. We maximize reimbursements, minimize delays, and provide real-time reporting — all with a personalized touch that fits your practice’s unique needs.",
      href: "/services/medical-billing",
    },
    {
      icon: IdCard,
      title: "Credentialing Services",
      text: "Get your providers enrolled with insurance networks quickly and correctly. MAGTECH RCM Solutions manages the entire credentialing lifecycle — from application to re-credentialing — so you can start seeing patients and getting paid without delay.",
      href: "/services/provider-credentialing-services",
    },
    {
      icon: HandHeart,
      title: "HealthCare RCM Services",
      text: "We don’t just bill — we manage your entire revenue cycle. From front-end eligibility verification to back-end collections, MAGTECH RCM Solutions ensures every dollar is captured. Our data-driven approach boosts cash flow, reduces AR days, and enhances financial health.",
      href: "/services/revenue-cycle-management-rcm",
    },
  ],
};

export const BILLING_FEATURES = {
  title: "Healthcare Billing Services",
  subtitle: "Accelerate Reimbursements, Boost Your Bottom Line.",
  image: IMAGES.billingFeatures,
  imageAlt: "Doctor writing notes at his desk",
  items: [
    { title: "Confidential Data Security", text: "Robust Security Safeguards Your Patient Data" },
    { title: "Increase Revenue", text: "Maximize Reimbursements, Avoid Unfair Deductions" },
    { title: "Instant Claim Submission", text: "Streamlined Electronic Billing" },
    { title: "Claim Follow-Up & Resolution", text: "Successful Appeals, Increased Revenue" },
    { title: "Revenue Cycle & Denial Management", text: "Optimized RCM, Faster Payments, Reduced Claim Denials" },
    { title: "Medical Billing & Coding Services", text: "Accurate Coding, Compliant Billing, Improved Cash Flow" },
  ],
};

export const WHAT_WE_OFFER = {
  eyebrow: "What We Offer",
  title: "Empowering Healthcare Teams with Cutting-Edge Technology",
  items: [
    { icon: Clock, title: "Practice Scheduling", text: "24/7 online appointment booking" },
    { icon: Calculator, title: "Practice Billing", text: "Full control of your medical billing" },
    { icon: UserRound, title: "Patient Medical Profile", text: "Access to complete medical history of patient" },
    { icon: ListChecks, title: "Task Management", text: "Fully integrated with EMR" },
    { icon: CreditCard, title: "Inventory Management", text: "Powerful and easy clinical documentation tool" },
    { icon: Newspaper, title: "Clinical Documentation", text: "Telemedicine, schedule appointments, access to medical records" },
  ],
  button: { label: "View Services", href: "/services" },
};

export const WHY_CHOOSE_US = {
  eyebrow: "Why Choose Us",
  title: "Your trusted medical billing partner",
  text: `MAGTECH RCM Solutions is a trusted medical billing partner, offering reliable and efficient solutions to streamline your revenue cycle and maximize your practice’s financial performance.`,
  image: IMAGES.whyChooseUs,
  imageAlt: "Doctors and nurses reviewing information on a tablet",
  items: [
    {
      icon: Stethoscope,
      title: "Experience",
      text: "Our team of experienced professionals helps healthcare providers streamline their revenue cycles and optimize their financial performance.",
    },
    {
      icon: Gem,
      title: "Prestigious",
      text: "Our commitment to quality, reliability, and innovation has earned us a reputation as a trusted partner for healthcare providers of all sizes.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      text: "Our dedicated team of experts is always ready to answer your questions, resolve your problems, and provide timely assistance.",
    },
    {
      icon: ShieldCheck,
      title: "HIPAA-Compliant Healthcare Billing",
      text: "Secure, compliant billing processes that safeguard patient data and meet all HIPAA regulatory standards.",
    },
  ],
};

export const MISSION = {
  title: "Your Vision and Our Mission",
  subtitle: "Tech-Driven Medical Billing Solutions",
  text: "As the leading provider of innovative medical billing solutions, MAGTECH RCM Solutions is dedicated to helping healthcare providers achieve their goals. Our cutting-edge technology combined with our deep industry expertise ensures that your practice is equipped to thrive in today’s competitive landscape.",
  image: IMAGES.mission,
  imageAlt: "Nurse reviewing a care plan with a smiling senior patient",
  counter: { label: "Happiness Score", value: 97, suffix: "%" },
  callout: "HIPAA-compliant medical billing services for data safety.",
};

// Animated counters used on the About page.
export const STATS = [
  { value: 24, suffix: "/7", label: "Support Available" },
  { value: 2, suffix: "M+", label: "Claims Processed" },
  { value: 97, suffix: "%", label: "Happiness Score" },
  { value: 30, suffix: "+", label: "Specialties Served" },
];

export const CTA = {
  title: "Ready to Maximize Your Revenue?",
  text: "Let our billing experts find the revenue you're missing. Get a free practice analysis today.",
};
