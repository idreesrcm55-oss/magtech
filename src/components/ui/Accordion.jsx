import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

/** items: [{ title, content }]. Only one panel open at a time. */
export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const open = openIndex === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={item.title}
            className={`rounded-2xl bg-white ring-1 transition duration-300 ${
              open ? "shadow-lg ring-primary/20" : "ring-dark/10"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left font-heading text-base font-semibold text-dark md:text-lg"
              >
                {item.title}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                    open ? "rotate-180 bg-primary text-white" : "bg-primary/10 text-primary"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
