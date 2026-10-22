import { FaFacebook, FaLinkedin, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import { SITE } from "../../config/site";

const NETWORKS = [
  { key: "facebook", label: "Facebook", icon: FaFacebook },
  { key: "linkedin", label: "LinkedIn", icon: FaLinkedin },
  { key: "twitter", label: "Twitter", icon: FaTwitter },
  { key: "google", label: "Google Reviews", icon: FaGoogle },
  { key: "instagram", label: "Instagram", icon: FaInstagram },
];

/** Plain white social icons. Networks with an empty URL in SITE.socials are hidden. */
export default function SocialLinks({ size = "md", className = "" }) {
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-[18px] w-[18px]";
  return (
    <ul className={`flex items-center gap-6 ${className}`}>
      {NETWORKS.filter((n) => SITE.socials[n.key]).map(({ key, label, icon: Icon }) => (
        <li key={key}>
          <a
            href={SITE.socials[key]}
            {...(SITE.socials[key].startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            aria-label={`${SITE.name} on ${label}`}
            className="block text-white transition duration-300 hover:text-secondary"
          >
            <Icon className={iconSize} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
