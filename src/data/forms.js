/*
  FORMS
  ---------------------------------------------------------------
  Field definitions for the Contact and Schedule-a-Demo forms.
  type: text | email | tel | number | date | select | textarea
  half: true → field takes half width on desktop
  Forms are static (no backend): a success message is shown and the visitor
  can also send the details by email (mailto) using SITE.email.
*/
import { SPECIALTIES } from "./specialties";

// Validation and success-toast text shared by every form
export const FORM_MESSAGES = {
  required: (label) => `${label} is required.`,
  invalidEmail: "Please enter a valid email address.",
  invalidPhone: "Please enter a valid phone number.",
  emailFallback: "Prefer email? Send these details to", // followed by SITE.email
};

export const CONTACT_FORM = {
  title: "Send Us a Message",
  submitLabel: "Send Message",
  successMessage: "Thank you! Your message has been received. We'll get back to you within one business day.",
  mailSubject: "Website contact form",
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true, half: true },
    { name: "email", label: "Email", type: "email", required: true, half: true },
    { name: "phone", label: "Phone", type: "tel", half: true },
    { name: "practice", label: "Practice Name", type: "text", half: true },
    { name: "message", label: "Message", type: "textarea", required: true },
  ],
};

export const DEMO_FORM = {
  title: "Tell Us About Your Practice",
  submitLabel: "Book My Free Consultation",
  successMessage: "Thank you! Your consultation request has been received. Our team will contact you shortly to confirm a time.",
  mailSubject: "Free consultation request",
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true, half: true },
    { name: "email", label: "Email", type: "email", required: true, half: true },
    { name: "phone", label: "Phone", type: "tel", required: true, half: true },
    { name: "practice", label: "Practice Name", type: "text", required: true, half: true },
    {
      name: "specialty",
      label: "Specialty",
      type: "select",
      required: true,
      half: true,
      options: [...SPECIALTIES.map((s) => s.name), "Other"],
    },
    { name: "providers", label: "Number of Providers", type: "number", min: 1, half: true },
    { name: "date", label: "Preferred Date", type: "date", half: true },
    { name: "message", label: "Message", type: "textarea" },
  ],
};
