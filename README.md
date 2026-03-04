# Faugher National School Website

Modern Astro + Decap CMS rebuild focused on performance, accessibility, and low maintenance.

## Why this approach

This project uses **Option A: Astro + Decap CMS + Markdown content**.

Reasons this was chosen:

- Fast and low maintenance static output (excellent Lighthouse potential)
- News and Events are easy to edit by non-technical staff in `/admin`
- Content remains in simple Markdown files (portable, versioned, backup-friendly)
- Minimal dependencies and no heavy UI framework
- Netlify deployment is straightforward, with built-in form handling and HTTPS

## Tech stack

- Astro (static site generation)
- Decap CMS (admin editing interface)
- Markdown content collections for News, Events, and Site Alert
- Netlify Forms for contact form delivery

## Project structure

- `src/site.config.ts`: school name, contact details, navigation, quick links
- `src/content/news`: News posts (`.md`)
- `src/content/events`: Event entries (`.md`)
- `src/content/settings/alert.md`: toggleable site-wide alert banner
- `src/pages`: all pages/routes
- `public/admin/config.yml`: CMS configuration
- `public/downloads`: policy PDFs, calendar PDFs, booklists, forms

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## How staff update News and Events

Preferred method (CMS):

1. Open `/admin` on the live site.
2. Log in with CMS credentials.
3. Use **School News** or **School Events**.
4. Create or edit entries, then publish.

Direct Markdown method (optional):

- News: add/edit files in `src/content/news`
- Events: add/edit files in `src/content/events`

## How to deploy (Netlify)

1. Connect repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Enable Netlify Identity + Git Gateway for CMS login (for `/admin`).
5. Ensure HTTPS is active (Netlify does this by default).

Contact form:

- The form on `/contact-us` uses Netlify Forms (`data-netlify="true"`).
- Form submissions appear in Netlify dashboard under **Forms**.

## Where to change school contact details

Edit:

- `src/site.config.ts`

Update:

- Address
- Phone
- Email
- Tagline
- Quick links

## How to add PDFs/policies

1. Put PDF files in `public/downloads`.
2. Update links in `src/pages/parents-information.astro` if names change.
3. Optional event attachments can link to files in `/downloads/...`.

## SEO and accessibility included

- Semantic landmarks and skip link
- Focus-visible states
- Mobile-first responsive layouts
- Open Graph and Twitter meta tags
- Canonical URLs
- `robots.txt`
- Generated XML sitemap (`@astrojs/sitemap`)

## GDPR-friendly setup

- No analytics trackers included by default
- No third-party cookies required for standard browsing
- Cookie banner is not included because no non-essential cookies are set by default

## Notes

- Replace placeholder phone/email/address with real school details.
- Replace placeholder PDFs in `public/downloads` with real files.
- If you prefer WordPress-style login editing without Git workflow, a managed WordPress rebuild is a valid alternative, but this build prioritizes speed, security, and low maintenance.
