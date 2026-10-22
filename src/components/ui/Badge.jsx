const VARIANTS = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/15 text-accent",
  light: "bg-white/10 text-white ring-1 ring-white/20",
};

export default function Badge({ icon: Icon, variant = "primary", className = "", children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${VARIANTS[variant]} ${className}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}
