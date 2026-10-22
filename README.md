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

### Contact info, company name, socials → `src/config/site.js`
Email, phone, address, social links, founding year, the main "Talk to An Expert" button, the copyright line and the "Powered by" credit are all set here. Set a social link to `""` to hide its icon. Set `showTopBar: true` to show a thin email/phone strip above the header. The header, footer, contact page, CTAs and forms all read from this file. Change a value once and every page updates.

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
Poppins (headings) and Open Sans (body) load from Google Fonts — the same fonts as the live site.

### Images → `src/data/images.js`
Every image is listed in this one file. The home page uses the live site's own photos, logo and hero video, stored in `public/images/`. Inner pages still use Unsplash placeholders. To swap any image, put the file in `public/images/` and change its path, e.g. `"/images/hero.jpg"`.

The hero background is `public/images/hero.mp4`, a 1.8 MB video converted from the live site's 92 MB GIF, with `hero-poster.jpg` as its first frame. Visitors who prefer reduced motion see only the still image.

### Page content
| What | File |
|---|---|
| Home page sections (hero, highlights, about, stats, CTA, …) | `src/data/homeContent.js` |
| Services: cards plus a page at `/services/<slug>` for each one | `src/data/services.js` |
| "For You" pages at `/for-you/<slug>` | `src/data/audiences.js` |
| Specialties grid | `src/data/specialties.js` |
| FAQs | `src/data/faqs.js` |
| Inner page titles, SEO text, About / Contact / Demo copy | `src/data/pages.js` |
| Contact and demo form fields | `src/data/forms.js` |
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
│   │            StatCounter, ProgressBar, PageHero, CheckList, Reveal, Seo, …
│   └── sections/ Hero, Highlights, AboutSection, WhatWeDo, BillingFeatures,
│                WhatWeOffer, WhyChooseUs, MissionSection, StatsRow, CTABanner, ContactForm
├── pages/       Home, About, Services, ServiceDetail, Specialties, AudiencePage,
│                FAQs, Contact, ScheduleDemo, NotFound
├── hooks/       useScrollTop.js
├── App.jsx      routes
└── main.jsx     entry point
```
