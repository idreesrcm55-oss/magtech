import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

/** Success toast fixed to the bottom-right. Auto-dismisses after `duration` ms. */
export default function Toast({ message, onClose, duration = 7000, children }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-[60] flex max-w-sm items-start gap-3 rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-accent/30 sm:bottom-6 sm:right-6"
    >
      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
      <div className="text-sm leading-relaxed">
        <p className="font-medium text-dark">{message}</p>
        {children}
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="rounded-full p-1 text-body transition hover:bg-light hover:text-dark"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
