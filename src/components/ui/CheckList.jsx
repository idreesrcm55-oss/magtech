import { CheckCircle2 } from "lucide-react";

export default function CheckList({ items, columns = 1, light = false, className = "" }) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""} ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2
            className={`mt-0.5 h-5 w-5 shrink-0 ${light ? "text-secondary" : "text-primary"}`}
            aria-hidden="true"
          />
          <span className={`font-medium ${light ? "text-white/90" : "text-dark"}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
