import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  as: Tag = "h2",
  className = "",
}) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <p className={`mb-3 font-heading text-base font-bold ${light ? "text-white" : "text-dark"}`}>{eyebrow}</p>
      )}
      <Tag className={`text-3xl leading-tight md:text-[42px] md:leading-[1.25] ${light ? "text-white" : "text-dark"}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed md:text-[17px] ${light ? "text-white" : "text-body"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
