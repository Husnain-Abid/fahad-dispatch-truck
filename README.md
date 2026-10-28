# Prime Nation Haul (PNH) — Website

A premium, animated marketing website for **Prime Nation Haul**, a US truck dispatching and carrier
support company. Built with **Next.js (App Router) and JavaScript only** (no TypeScript source
files), Tailwind CSS v4, Motion for React, GSAP, Lucide React, React Hook Form, Zod, and Resend.

- **Company:** Prime Nation Haul (PNH)
- **Phone:** 316 376 9718
- **Experience stated on site:** five years in the dispatching industry
- **Pricing:** contact for a custom quote (no prices are published)
- **Database:** none. Form submissions are delivered by email through Resend.

---

## 1. Local setup

```bash
npm install
cp .env.example .env.local   # fill in the values you have
npm run dev                  # http://localhost:3000
```

Production checks used for this build:

```bash
npx next typegen
npm exec tsc -- --noEmit
npm run build
npm run lint
node --test "tests/*.test.mjs"
```

> The project is JavaScript-first. `tsconfig.json` exists only for the Next.js toolchain’s route
> type generation (`allowJs: true`, `checkJs: false`). All application source is `.js` / `.jsx`.

## 2. Environment variables

| Variable | Visibility | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | server only | Resend API key used by the three route handlers. |
| `CONTACT_TO_EMAIL` | server only | Destination inbox for every form notification. |
| `CONTACT_FROM_EMAIL` | server only | Verified sender, e.g. `Prime Nation Haul <notifications@yourdomain.com>`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | public | Optional public email displayed in the header/footer/contact page. Leave blank until approved. |
| `NEXT_PUBLIC_SITE_URL` | public | Canonical URL (no trailing slash), used for metadata, sitemap, robots, JSON-LD. |
| `NEXT_PUBLIC_GA_ID` | public | Optional GA4 measurement ID (`G-XXXXXXXXXX`). Analytics is consent-gated. |

Never expose `RESEND_API_KEY` through a `NEXT_PUBLIC_*` variable. `.env.local` is not committed.

## 3. Forms and email delivery

Three forms post JSON to server Route Handlers:

- `POST /api/contact` — contact form (`/contact`)
- `POST /api/get-a-quote` — quote request (`/get-a-quote`)
- `POST /api/carrier-signup` — carrier onboarding inquiry (`/carrier-signup`)

Each handler:

1. Rejects non-JSON bodies, oversized payloads, and non-POST methods.
2. Applies an in-memory rate limit (5 submissions / 10 minutes / IP / form). **Production note:**
   serverless or multi-instance hosting needs a distributed limiter (Upstash Redis, Vercel KV, or a
   gateway rule); the in-memory counter is per instance only.
3. Checks a hidden honeypot field and rejects bot-style submissions.
4. Validates every field with a shared Zod schema (client and server use the same schema).
5. Normalizes the email, enforces length limits, and restricts select values to known options.
6. Builds a branded HTML email plus a plain-text fallback. All user values are HTML-escaped; the
   customer email is used only as a validated `Reply-To`, never as a sender.
7. Returns success **only after Resend confirms the send**. Provider errors return safe messages.

Additionally `/api/health` returns a JSON status (no database involved).

### Resend configuration

1. Create an account at [resend.com](https://resend.com) and an API key.
2. Add your domain under **Domains** and add the DNS records Resend provides (SPF, DKIM, and the
   recommended DMARC record). Wait for verification to show **Verified**.
3. Set `CONTACT_FROM_EMAIL` to an address on that verified domain.
4. Set `CONTACT_TO_EMAIL` to the company inbox.
5. Set `RESEND_API_KEY`, then redeploy/restart.
6. Send a test submission from each form and confirm the notification arrives. Until configuration
   is complete, the API returns HTTP 503 with a friendly message that points visitors to the phone
   number — it never reports a fake success.

Tested behavior without credentials: valid submissions return `503 not_configured`; invalid input
returns `422` with field errors; malformed JSON returns `400`; honeypot submissions return `422`.

## 4. Google Analytics 4

1. Create a GA4 property and copy the measurement ID.
2. Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in the deployment environment.
3. The analytics script is **only loaded after a visitor accepts** the on-page analytics banner.
   The choice is stored in `localStorage` (`pnh-analytics-consent`).
4. Tracked events: `quote_form_success`, `carrier_signup_success`, `contact_form_success`,
   `click_to_call`, `cta_click`. No names, emails, phone numbers, or free-text content are sent.
5. Verify in GA4 **Realtime** after granting consent, and confirm no events fire after declining.

## 5. Deployment (Vercel or any Next.js host)

1. Push the repository to your Git provider.
2. Import it into Vercel (framework preset: Next.js) or another Next.js-compatible host.
3. Add all environment variables from section 2 for Production (and Preview if desired).
4. Deploy, then confirm:
   - `/api/health` returns `{ "ok": true }`.
   - Each form reaches `CONTACT_TO_EMAIL`.
   - `/sitemap.xml` and `/robots.txt` reference the production domain.
   - `NEXT_PUBLIC_SITE_URL` matches the real domain so canonicals are correct.

## 6. SEO launch checklist

- [ ] `NEXT_PUBLIC_SITE_URL` set to the final canonical domain (https, no trailing slash).
- [ ] Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- [ ] Confirm metadata previews for `/`, `/services`, `/pricing`, `/contact`, `/get-a-quote`.
- [ ] Review draft blog posts and remove the “editorial draft” review notes once approved.
- [ ] Have legal counsel review `/privacy-policy` and `/terms-of-service` (both marked draft).
- [ ] Publish testimonials only after written customer approval (`src/data/testimonials.js`).
- [ ] Add an Open Graph image if desired (currently `/images/hero-interstate.png`).
- [ ] Verify one `<h1>` per page and descriptive image alt text (already implemented).
- [ ] Do **not** add LocalBusiness/address schema until a real, approved address exists.
- [ ] Confirm the public email (`NEXT_PUBLIC_CONTACT_EMAIL`) before launch.

## 7. Project structure

```
src/
  app/                 routes, metadata, sitemap/robots, API handlers, error/not-found/loading
    services/[slug]/   reusable service detail template (5 routes)
    blog/[slug]/       article routes backed by local content data
  components/
    animations/        Motion reveal + stagger primitives
    analytics/         consent banner + consent-gated GA
    forms/             LeadForm engine + contact/quote/carrier wrappers
    layout/            Header (dropdown + mobile drawer), Footer
    sections/          Hero (Motion + GSAP), homepage sections
    ui/                buttons, cards, accordion, page hero, breadcrumbs, logo, CTA
  data/                services, truck types, FAQs, blog posts, form options, testimonials
  lib/                 site config, navigation, fonts, validation, email, rate limiting, analytics
  db/schema.js         empty placeholder (no database in this project)
public/
  brand/               original PNH SVG logo assets (horizontal light/dark, mark)
  images/              locally generated photography (hero, fleet, dispatch, truck types, road)
tests/                 unit tests for rate limiting and email templating
```

## 8. Implemented functionality

- All required routes: `/`, `/about`, `/services`, `/services/[slug]`, `/pricing`,
  `/testimonials`, `/faq`, `/contact`, `/get-a-quote`, `/carrier-signup`, `/blog`, `/blog/[slug]`,
  `/privacy-policy`, `/terms-of-service`, plus `not-found`, `error`, and `loading` states.
- Responsive, accessible header with services dropdown, focus handling, Escape/click-outside close,
  mobile drawer with focus trap and body scroll lock.
- Hero entrance sequence with Motion; GSAP animated lane dashes (a second, non-conflicting target).
  All motion respects `prefers-reduced-motion`.
- Accessible FAQ accordion (`aria-expanded`, `aria-controls`, labelled regions, keyboard operable).
- Three functional, validated, honeypot-protected, rate-limited Resend forms with idle, validation,
  submitting, success, and recoverable error states plus duplicate-submit protection.
- SEO: unique per-page metadata, canonicals, Open Graph/Twitter, sitemap, robots, breadcrumbs,
  Organization + BreadcrumbList + FAQPage JSON-LD, semantic headings, descriptive alt text.
- Security headers (`nosniff`, frame options, referrer policy, permissions policy, HSTS).
- Original local imagery and original SVG brand assets; no remote image dependencies.

## 9. Missing credentials, approvals, and incomplete items

**Credentials / configuration (not provided in this environment):**

1. `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` — form delivery returns 503 until set.
2. Verified Resend sending domain.
3. `NEXT_PUBLIC_CONTACT_EMAIL` — no public email is published; the contact page explains this and
   routes visitors to the phone number and form.
4. `NEXT_PUBLIC_GA_ID` — analytics remains disabled until configured and consented.
5. `NEXT_PUBLIC_SITE_URL` — defaults to `https://www.primenationhaul.com`; confirm the real domain.

**Client approvals required:**

- **Testimonials:** none published. The page shows an honest empty state plus a labelled layout
  preview, never fabricated reviews. Approved entries go in `src/data/testimonials.js`.
- **Pricing:** no fees, percentages, discounts, or savings figures are stated. All pricing copy says
  “contact for a custom quote.”
- **Legal pages:** privacy policy and terms are drafts pending client/legal review; governing law,
  liability language, and retention periods must be supplied by counsel.
- **Blog:** three original educational drafts. Review flagged in each article and on the index.
- **Copy claims:** no founder story, founding date, team size, office address, certifications,
  awards, social profiles, revenue, load counts, or verified performance figures are invented.

**Production recommendation:** replace the in-memory rate limiter with a distributed store, and add
provider-side email monitoring/alerts for failed sends.
