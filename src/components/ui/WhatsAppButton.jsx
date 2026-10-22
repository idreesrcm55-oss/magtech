import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../../config/site";

/** Floating green WhatsApp "Help Desk" pill, fixed to the bottom-right on every page. */
export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp`}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5a] hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
      <span className="text-lg">{SITE.whatsapp.label}</span>
    </a>
  );
}
