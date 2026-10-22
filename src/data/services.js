/*
  SERVICES
  ---------------------------------------------------------------
  Each object below becomes a card on /services and its own page at
  /services/<slug>. To add a service, copy an object and give it a unique slug.
  The header "Services" dropdown is built from this list automatically.

  Fields:
    slug      URL part (lowercase, hyphens)
    title     Service name
    icon      Any icon from https://lucide.dev (import it at the top)
    image     Key from data/images.js
    excerpt   Short text for cards
    intro     Paragraphs shown at the top of the detail page
    features  Bullet list of what's included
    benefits  { title, text } cards
    process   Ordered { title, text } steps
*/
import {
  Receipt,
  Megaphone,
  FileCode2,
  BadgeCheck,
  BarChart3,
  ShieldAlert,
  MonitorSmartphone,
  Wallet,
} from "lucide-react";
import { IMAGES } from "./images";

export const SERVICES = [
  {
    slug: "medical-billing",
    title: "Medical Billing",
    icon: Receipt,
    image: IMAGES.medicalBilling,
    excerpt:
      "End-to-end billing from claim submission to payment posting, with real-time reporting and proactive denial management.",
    intro: [
      "Our medical billing service takes the entire claims process off your plate. From charge entry and scrubbing to submission, follow-up and payment posting, our specialists make sure every claim is clean, compliant and paid as quickly as possible.",
      "With transparent real-time reporting you always know where your revenue stands — without spending your day on hold with payers.",
    ],
    features: [
      "Charge entry and claim scrubbing",
      "Electronic claim submission to all major payers",
      "Payment posting and reconciliation",
      "Patient statements and billing support",
      "Real-time reporting dashboards",
      "Denial tracking and appeals",
    ],
    benefits: [
      { title: "Faster Payments", text: "Clean claims on first submission shorten your reimbursement cycle." },
      { title: "Fewer Errors", text: "Multi-step claim scrubbing catches mistakes before payers do." },
      { title: "Full Visibility", text: "Clear monthly reports on collections, AR and denials." },
    ],
    process: [
      { title: "Practice Assessment", text: "We review your current billing workflow, payer mix and AR." },
      { title: "Onboarding", text: "We connect to your EHR/PM system and set up secure access." },
      { title: "Claim Management", text: "Daily charge entry, scrubbing, submission and follow-up." },
      { title: "Reporting", text: "Ongoing performance reports and regular strategy reviews." },
    ],
  },
  {
    slug: "marketing-virtual-assistant",
    title: "Marketing & Virtual Assistant",
    icon: Megaphone,
    image: IMAGES.marketing,
    excerpt:
      "Grow your patient base and free your front desk with healthcare marketing and HIPAA-trained virtual assistants.",
    intro: [
      "Attract new patients and keep existing ones engaged with digital marketing built for healthcare practices — while our HIPAA-trained virtual assistants handle scheduling, reminders, insurance verification and administrative tasks.",
      "You get more time for patient care, and your practice gets a steady stream of new appointments.",
    ],
    features: [
      "Local SEO and Google Business Profile management",
      "Website and social media management",
      "Online reputation and review management",
      "Appointment scheduling and reminders",
      "Insurance eligibility verification",
      "Inbound call and inbox management",
    ],
    benefits: [
      { title: "More Patients", text: "Targeted local marketing that brings patients through the door." },
      { title: "Lower Overhead", text: "Virtual staff at a fraction of the cost of in-house hires." },
      { title: "Better Experience", text: "Fast responses and fewer missed calls for your patients." },
    ],
    process: [
      { title: "Discovery", text: "We learn your goals, specialty and ideal patients." },
      { title: "Strategy", text: "A tailored marketing and staffing plan for your practice." },
      { title: "Execution", text: "Campaigns go live and assistants join your workflow." },
      { title: "Optimization", text: "Monthly reporting and continuous improvement." },
    ],
  },
  {
    slug: "medical-coding-services",
    title: "Medical Coding Services",
    icon: FileCode2,
    image: IMAGES.coding,
    excerpt:
      "Accurate ICD-10, CPT and HCPCS coding by certified coders to keep you compliant and reduce denials.",
    intro: [
      "Coding errors are one of the biggest causes of claim denials and lost revenue. Our certified coders translate your clinical documentation into accurate ICD-10, CPT and HCPCS codes, ensuring you are paid fully for the care you deliver.",
      "We stay current with payer rules and coding updates so you don't have to.",
    ],
    features: [
      "ICD-10-CM, CPT and HCPCS Level II coding",
      "Certified (AAPC/AHIMA) coding professionals",
      "Specialty-specific coding expertise",
      "Coding audits and documentation feedback",
      "Modifier and bundling compliance",
      "Quick turnaround times",
    ],
    benefits: [
      { title: "Compliance", text: "Reduce audit risk with accurate, well-documented coding." },
      { title: "Fewer Denials", text: "Correct codes the first time mean fewer rejected claims." },
      { title: "Maximized Revenue", text: "Capture every billable service you provide." },
    ],
    process: [
      { title: "Documentation Review", text: "Coders review encounter notes and charts." },
      { title: "Code Assignment", text: "Accurate diagnosis and procedure codes are assigned." },
      { title: "Quality Check", text: "A second-level review verifies accuracy." },
      { title: "Feedback", text: "We share insights to improve future documentation." },
    ],
  },
  {
    slug: "provider-credentialing-services",
    title: "Provider Credentialing Services",
    icon: BadgeCheck,
    image: IMAGES.credentialing,
    excerpt:
      "We manage the full credentialing lifecycle — from initial applications to re-credentialing — so you can start billing sooner.",
    intro: [
      "Credentialing delays mean lost revenue. Our team handles the complete credentialing and enrollment lifecycle with commercial payers, Medicare and Medicaid — from initial applications and CAQH maintenance to re-credentialing.",
      "We track every application and follow up relentlessly, so your providers can start seeing patients and getting paid sooner.",
    ],
    features: [
      "Insurance payer enrollment",
      "CAQH profile setup and maintenance",
      "Medicare and Medicaid enrollment",
      "Hospital privileges applications",
      "Re-credentialing and expiration tracking",
      "Contract negotiation support",
    ],
    benefits: [
      { title: "Faster Enrollment", text: "Organized, complete applications get approved sooner." },
      { title: "No Missed Deadlines", text: "Automated tracking of every expiration date." },
      { title: "Less Paperwork", text: "We handle the forms, follow-ups and payer calls." },
    ],
    process: [
      { title: "Information Gathering", text: "We collect provider documents and details." },
      { title: "Application Submission", text: "Applications are completed and submitted to payers." },
      { title: "Follow-Up", text: "Regular payer follow-ups until approval." },
      { title: "Maintenance", text: "Ongoing re-credentialing and profile updates." },
    ],
  },
  {
    slug: "revenue-cycle-management-rcm",
    title: "Revenue Cycle Management (RCM)",
    icon: BarChart3,
    image: IMAGES.rcm,
    excerpt:
      "Complete RCM from eligibility verification to collections — reducing AR days and improving cash flow.",
    intro: [
      "Our revenue cycle management service optimizes every step of your financial workflow — patient registration, eligibility verification, coding, billing, payment posting, denial management and collections.",
      "Backed by analytics and experienced specialists, we help you reduce AR days, increase collections and build predictable cash flow.",
    ],
    features: [
      "Patient eligibility and benefits verification",
      "Prior authorization management",
      "Charge capture and coding",
      "Claims submission and follow-up",
      "Payment posting and reconciliation",
      "KPI analytics and financial reporting",
    ],
    benefits: [
      { title: "Lower AR Days", text: "Proactive follow-up keeps your receivables moving." },
      { title: "Higher Collections", text: "Optimized workflows capture more of what you've earned." },
      { title: "Actionable Insights", text: "Analytics that highlight trends and opportunities." },
    ],
    process: [
      { title: "RCM Audit", text: "We analyze your revenue cycle to find leaks." },
      { title: "Workflow Design", text: "A tailored, optimized RCM workflow is put in place." },
      { title: "Execution", text: "Our team manages your revenue cycle day to day." },
      { title: "Continuous Improvement", text: "Regular KPI reviews and process refinement." },
    ],
  },
  {
    slug: "denial-management-services",
    title: "Denial Management Services",
    icon: ShieldAlert,
    image: IMAGES.denial,
    excerpt:
      "Identify, appeal and prevent claim denials with root-cause analysis and persistent follow-up.",
    intro: [
      "Every denied claim is money left on the table. Our denial management specialists identify why claims are denied, correct and resubmit them, and file appeals where needed.",
      "More importantly, we analyze denial patterns and fix the root causes so the same denials don't happen again.",
    ],
    features: [
      "Denial identification and categorization",
      "Root-cause analysis",
      "Claim correction and resubmission",
      "Appeals preparation and filing",
      "Payer trend monitoring",
      "Prevention strategies and staff feedback",
    ],
    benefits: [
      { title: "Recovered Revenue", text: "Win back payments you thought were lost." },
      { title: "Lower Denial Rate", text: "Fix root causes to prevent repeat denials." },
      { title: "Clear Reporting", text: "Know exactly why claims are denied and what's being done." },
    ],
    process: [
      { title: "Identify", text: "Denied and underpaid claims are flagged daily." },
      { title: "Analyze", text: "Each denial is categorized by root cause." },
      { title: "Resolve", text: "Claims are corrected, resubmitted or appealed." },
      { title: "Prevent", text: "Workflow fixes stop the same denials recurring." },
    ],
  },
  {
    slug: "electronic-health-records",
    title: "Electronic Health Records",
    icon: MonitorSmartphone,
    image: IMAGES.ehr,
    excerpt:
      "Cloud-based EHR solutions for scheduling, documentation, telemedicine and integrated billing.",
    intro: [
      "Our cloud-based EHR solutions bring clinical documentation, scheduling, telemedicine, e-prescribing and billing together in one secure platform.",
      "We also support practices already using popular EHR systems with setup, optimization and integration services.",
    ],
    features: [
      "Cloud-based, accessible anywhere",
      "Customizable clinical templates",
      "Integrated scheduling and billing",
      "Telemedicine and patient portal",
      "E-prescribing and lab integration",
      "HIPAA-compliant data security",
    ],
    benefits: [
      { title: "Efficiency", text: "Less time on documentation, more time with patients." },
      { title: "Integration", text: "Clinical and financial data in one connected system." },
      { title: "Security", text: "Encrypted, HIPAA-compliant data storage." },
    ],
    process: [
      { title: "Needs Analysis", text: "We understand your clinical workflows." },
      { title: "Configuration", text: "Templates and settings tailored to your specialty." },
      { title: "Data Migration", text: "Secure transfer of existing patient records." },
      { title: "Training & Support", text: "Staff training and ongoing technical support." },
    ],
  },
  {
    slug: "accounts-receivable-management",
    title: "Accounts Receivable Management",
    icon: Wallet,
    image: IMAGES.accountsReceivable,
    excerpt:
      "Recover aging receivables and keep AR healthy with dedicated follow-up and payer communication.",
    intro: [
      "Aging receivables quietly drain your practice's revenue. Our AR management team works through outstanding claims — old and new — with systematic follow-up, payer communication and patient balance management.",
      "The result: lower AR days, a healthier cash flow and fewer write-offs.",
    ],
    features: [
      "AR aging analysis",
      "Insurance follow-up by phone and portal",
      "Underpayment identification",
      "Old AR cleanup projects",
      "Patient balance follow-up",
      "Detailed AR reporting",
    ],
    benefits: [
      { title: "Improved Cash Flow", text: "Turn outstanding claims into collected revenue." },
      { title: "Fewer Write-Offs", text: "Persistent follow-up before timely filing limits." },
      { title: "Healthy AR", text: "Keep receivables under 30–40 days." },
    ],
    process: [
      { title: "AR Analysis", text: "We review aging buckets and prioritize high-value claims." },
      { title: "Follow-Up", text: "Dedicated callers work every outstanding claim." },
      { title: "Resolution", text: "Corrections, appeals and resubmissions as needed." },
      { title: "Reporting", text: "Weekly AR status updates and trend reports." },
    ],
  },
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
