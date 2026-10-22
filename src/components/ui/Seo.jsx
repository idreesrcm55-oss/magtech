import { Helmet } from "react-helmet-async";
import { SITE } from "../../config/site";

/** Sets the browser-tab title and meta description for a page. */
export default function Seo({ title, description }) {
  const fullTitle = title?.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
}
