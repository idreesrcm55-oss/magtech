import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { SITE } from "./src/config/site.js";

// Fills %SITE_NAME% / %SITE_DESCRIPTION% in index.html from src/config/site.js,
// so the default browser-tab title and search description follow the site settings.
const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const siteHtml = () => ({
  name: "site-html",
  transformIndexHtml: (html) =>
    html.replaceAll("%SITE_NAME%", escapeHtml(SITE.name)).replaceAll("%SITE_DESCRIPTION%", escapeHtml(SITE.description)),
});

export default defineConfig({
  plugins: [react(), siteHtml()],
});
