/*
  "FOR YOU" PAGES
  ---------------------------------------------------------------
  Each object becomes a page at /for-you/<slug> and an item in the
  header "For You" dropdown. Copy an object to add a new audience page.

  Fields:
    slug, title, image, seoDescription
    eyebrow, heading, intro (paragraphs)
    challenges  Problems this audience faces (bullet list)
    benefits    { icon, title, text } cards
    checklist   What's included (bullet list)
*/
import {
  Clock,
  TrendingUp,
  ShieldCheck,
  Users,
  LineChart,
  Building2,
  Layers,
  Headphones,
  HeartPulse,
  Wallet,
  Gauge,
  Stethoscope,
} from "lucide-react";
import { IMAGES } from "./images";

export const AUDIENCES = [
  {
    slug: "outsource-medical-billing",
    title: "Outsource Medical Billing",
    image: IMAGES.outsource,
    seoDescription:
      "Outsource your medical billing to MAGTECH RCM Solutions and get faster payments, fewer denials and lower costs.",
    eyebrow: "Outsourcing Made Simple",
    heading: "Outsource Your Medical Billing with Confidence",
    intro: [
      "In-house billing is expensive, time-consuming and hard to scale. Outsourcing to MAGTECH RCM Solutions gives you a full team of billing, coding and AR specialists for less than the cost of a single in-house hire.",
      "We integrate with your existing systems and start improving your collections from the first month.",
    ],
    challenges: [
      "High staff turnover and training costs",
      "Growing AR and unresolved denials",
      "Constantly changing payer rules",
      "No time to follow up on every claim",
    ],
    benefits: [
      { icon: Wallet, title: "Lower Costs", text: "No salaries, benefits or software licences for in-house billing staff." },
      { icon: TrendingUp, title: "Higher Collections", text: "Expert follow-up and denial management boost revenue." },
      { icon: Clock, title: "More Time", text: "Focus on patients while we handle the paperwork." },
    ],
    checklist: [
      "Dedicated account manager",
      "Works with your current EHR / PM system",
      "Transparent monthly reporting",
      "HIPAA-compliant processes",
    ],
  },
  {
    slug: "small-practice",
    title: "Small Practice",
    image: IMAGES.smallPractice,
    seoDescription:
      "Affordable, full-service medical billing for small and solo practices.",
    eyebrow: "Built for Small Practices",
    heading: "Big-Practice Billing Power for Small Practices",
    intro: [
      "Small and solo practices often have one person juggling front desk, billing and everything in between. We give you a complete billing department without the overhead.",
      "Our flexible pricing scales with your practice, so you only pay for what you need.",
    ],
    challenges: [
      "Limited staff wearing many hats",
      "Cash flow gaps from delayed payments",
      "Difficulty keeping up with coding changes",
      "Missed charges and unbilled visits",
    ],
    benefits: [
      { icon: Wallet, title: "Affordable Pricing", text: "Percentage-based pricing with no hidden fees." },
      { icon: Headphones, title: "Personal Support", text: "A dedicated contact who knows your practice." },
      { icon: Gauge, title: "Fast Onboarding", text: "Up and running in as little as two weeks." },
    ],
    checklist: [
      "Claim submission and follow-up",
      "Eligibility verification",
      "Patient statements",
      "Credentialing support",
    ],
  },
  {
    slug: "large-practice",
    title: "Large Practice",
    image: IMAGES.largePractice,
    seoDescription:
      "Scalable revenue cycle management for multi-provider and multi-location practices.",
    eyebrow: "Scalable RCM",
    heading: "Revenue Cycle Management That Scales With You",
    intro: [
      "Multi-provider, multi-location practices need billing that scales without losing accuracy. Our team handles high claim volumes across specialties with standardized workflows and detailed analytics.",
      "We provide location- and provider-level reporting so leadership can make data-driven decisions.",
    ],
    challenges: [
      "High claim volumes across locations",
      "Inconsistent billing processes",
      "Complex payer contracts",
      "Limited visibility into performance",
    ],
    benefits: [
      { icon: Layers, title: "Standardized Workflows", text: "Consistent processes across every location." },
      { icon: LineChart, title: "Advanced Analytics", text: "Provider- and location-level KPIs." },
      { icon: Users, title: "Dedicated Team", text: "A scalable team that grows with you." },
    ],
    checklist: [
      "Multi-specialty coding",
      "Payer contract analysis",
      "Custom KPI dashboards",
      "Credentialing for new providers",
    ],
  },
  {
    slug: "hospital-billing-services",
    title: "Hospital Billing Services",
    image: IMAGES.hospital,
    seoDescription:
      "Hospital billing and institutional claims management (UB-04) for hospitals and health systems.",
    eyebrow: "Institutional Billing",
    heading: "Hospital Billing Services for Complex Revenue Cycles",
    intro: [
      "Hospital and facility billing involves complex institutional claims, DRGs and payer requirements. Our specialists manage UB-04 claims, charge capture and AR follow-up to maximize reimbursement.",
      "We act as an extension of your patient financial services team, reducing backlog and improving cash flow.",
    ],
    challenges: [
      "Complex institutional (UB-04) claims",
      "Large AR backlogs",
      "Charge capture leakage",
      "Strict regulatory compliance",
    ],
    benefits: [
      { icon: Building2, title: "Facility Expertise", text: "Experienced with inpatient and outpatient billing." },
      { icon: ShieldCheck, title: "Compliance First", text: "Processes aligned with HIPAA and CMS rules." },
      { icon: TrendingUp, title: "Backlog Reduction", text: "Dedicated teams to clear aged AR quickly." },
    ],
    checklist: [
      "UB-04 claim processing",
      "Charge capture review",
      "Denial and appeals management",
      "AR cleanup projects",
    ],
  },
  {
    slug: "physician-billing-services",
    title: "Physician Billing Services",
    image: IMAGES.physician,
    seoDescription:
      "Professional (CMS-1500) billing services for physicians and physician groups.",
    eyebrow: "Professional Billing",
    heading: "Physician Billing Services That Get You Paid",
    intro: [
      "Physicians should spend their time with patients, not chasing payments. We manage professional billing (CMS-1500) end to end — coding, submission, follow-up and payment posting.",
      "Our specialty-trained billers understand the nuances of your field and the payers you work with.",
    ],
    challenges: [
      "Time lost to administrative work",
      "Undercoded or missed services",
      "Slow payer reimbursements",
      "Rising denial rates",
    ],
    benefits: [
      { icon: Stethoscope, title: "Specialty Expertise", text: "Billers trained in your specialty's codes and rules." },
      { icon: HeartPulse, title: "More Patient Time", text: "We take on the administrative burden." },
      { icon: TrendingUp, title: "Better Reimbursement", text: "Accurate coding captures every service." },
    ],
    checklist: [
      "Professional claim submission",
      "Coding review and audits",
      "Payment posting",
      "Monthly performance reports",
    ],
  },
];

export const getAudienceBySlug = (slug) => AUDIENCES.find((a) => a.slug === slug);
