// Client-safe analytics helper. Events are only sent when a Google Analytics
// measurement ID is configured AND the visitor has granted analytics consent.
// Never pass names, phone numbers, email addresses, or free-text form content.
export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  if (typeof window.gtag !== "function") return;

  try {
    window.gtag("event", name, params);
  } catch {
    // Analytics must never interrupt the user journey.
  }
}

export const analyticsEvents = {
  quoteSuccess: "quote_form_success",
  carrierSuccess: "carrier_signup_success",
  contactSuccess: "contact_form_success",
  clickToCall: "click_to_call",
  ctaClick: "cta_click",
};
