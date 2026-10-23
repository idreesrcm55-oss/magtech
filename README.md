# MAGTECH RCM Solutions — Website

A static, multi-page React website for MAGTECH RCM Solutions, a US medical billing and Revenue Cycle Management company.

**Stack:** React 18 · Vite · React Router v6 · Tailwind CSS v3 · lucide-react · framer-motion · react-helmet-async

---

## Getting started

Requires Node.js 18 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

> **Deploying:** the site uses client-side routing. Configure your host to serve `index.html` for every path. On Netlify, add a `_redirects` file with `/* /index.html 200`; on Vercel, use a rewrite to `/index.html`.

---

## How to update the site

You can change most of the site's content without editing any component markup. Each data file has a comment at the top that explains its fields.

### Company name, contact info, socials → `src/config/site.js`
The company name, short name, email, phone and address are each typed **once**, in the `EDIT HERE` block at the top of this file. Everything else is built from them: call and email links, the WhatsApp Help Desk link, the contact-page map, the copyright line, the logo, the browser-tab title (`index.html`) and every mention of the company name in the page text.

The rest of `SITE` holds the tagline, description, social links, founding year, the main "Talk to An Expert" button, footer labels and the "Powered by" credit. Set a social link to `""` to hide its icon. Set `showTopBar: true` to show a thin email/phone strip above the header.

> **Writing page text:** never type the company name, phone or email into a data file. Use a template string, for example `` `Outsource your billing to ${SITE.name}` ``, and import `SITE` from `../config/site` at the top of the file. That way a name change in `site.js` updates every page.

### Colors → `src/index.css`
Colors are CSS variables in `:root`, written as space-separated RGB values:

```css
--color-primary: 29 39 108;   /* #1D276C */
```

Changing a value re-themes the whole site. The variables map to Tailwind classes in `tailwind.config.js`, so components use `bg-primary`, `text-secondary`, `bg-light` and so on. Never use hex values or default Tailwind colors in components.

| Token | Used for |
|---|---|
| `primary` / `primary-dark` | Buttons, icons, borders / header (scrolled), footer, dark sections |
| `secondary` | Light periwinkle accent, used on dark backgrounds (active nav link, hovers) |
| `accent` / `gold` | Success states / "Powered by" link |
| `overlay` | Black photo overlays |
| `dark` / `body` | Headings / paragraph text |
| `light` | Alternating section backgrounds |
| `danger` | Form validation errors |

### Fonts → `index.html` + `tailwind.config.js`
Poppins (headings) and Open Sans (body) load from Google Fonts — set in `tailwind.config.js`.

### Images → `src/data/images.js`
Every image is listed in this one file. The home page photos and hero video are stored in `public/images/`; the logo is text built from `SITE.name` in `src/components/ui/Logo.jsx`. Inner pages still use Unsplash placeholders. To swap any image, put the file in `public/images/` and change its path, e.g. `"/images/hero.jpg"`.

The hero background is `public/images/hero.mp4`, a 1.8 MB video converted from a 92 MB GIF, with `hero-poster.jpg` as its first frame. Visitors who prefer reduced motion see only the still image.

### Page content
| What | File |
|---|---|
| Home page sections (hero, highlights, about, why choose us, mission, CTA, …) | `src/data/homeContent.js` |
| Services: cards plus a page at `/services/<slug>` for each one | `src/data/services.js` |
| "For You" pages at `/for-you/<slug>` | `src/data/audiences.js` |
| Specialties grid | `src/data/specialties.js` |
| FAQs | `src/data/faqs.js` |
| Inner page titles, SEO text, About / Contact / Demo copy | `src/data/pages.js` |
| Contact and demo form fields, validation and success messages | `src/data/forms.js` |
| Header menu and footer links | `src/data/navigation.js` |

**Add a service:** copy an object in `services.js` and give it a new unique `slug`. Its page, card and menu entry appear automatically. "For You" pages in `audiences.js` work the same way.

**Icons:** choose any icon at <https://lucide.dev>, import it by name at the top of the data file (`import { HeartPulse } from "lucide-react"`), then set `icon: HeartPulse`.

### Forms
The site has no backend. When someone submits a valid form, a success message appears, plus a link that opens their email app with the details already filled in, addressed to `SITE.email`. To collect submissions automatically, connect `handleSubmit` in `src/components/sections/ContactForm.jsx` to a service such as Formspree, Netlify Forms or your own API.

---

## Project structure

```
src/
├── config/      site.js (global settings), theme.js (JS color helpers)
├── data/        all content: navigation, services, home, pages, forms, images…
├── components/
│   ├── layout/  TopBar, Header, Dropdown, MobileMenu, Footer, Layout
│   ├── ui/      Button, Container, SectionHeading, Card, IconBox, Badge, Accordion,
│   │            ProgressBar, PageHero, CheckList, Reveal, Seo, WhatsAppButton, …
│   └── sections/ Hero, Highlights, AboutSection, WhatWeDo, BillingFeatures,
│                WhatWeOffer, WhyChooseUs, MissionSection, CTABanner, ContactForm
├── pages/       Home, About, Services, ServiceDetail, Specialties, AudiencePage,
│                FAQs, Contact, ScheduleDemo, NotFound
├── hooks/       useScrollTop.js
├── App.jsx      routes
└── main.jsx     entry point
```
