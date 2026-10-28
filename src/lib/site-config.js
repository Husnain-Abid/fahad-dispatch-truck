export const siteConfig = {
  name: "Prime Nation Haul",
  shortName: "PNH",
  tagline: "Smarter Dispatching. Stronger Hauling.",
  description:
    "Prime Nation Haul provides truck dispatching and carrier support for owner-operators, small fleets, and large fleets across the United States. Five years of dispatching experience.",
  phone: {
    display: "316 376 9718",
    href: "tel:+13163769718",
    e164: "+13163769718",
  },
  experienceYears: 5,
  market: "United States",
  // Only the explicitly public address is rendered on the site. The internal
  // destination inbox (CONTACT_TO_EMAIL) stays server-side and is never shown.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  emailConfigured: Boolean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
};

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.primenationhaul.com"
).replace(/\/$/, "");
