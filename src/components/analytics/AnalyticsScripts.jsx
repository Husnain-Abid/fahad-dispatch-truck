"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "pnh-analytics-consent";

export const trackEvent = (name, params = {}) => {
  if (typeof window === "undefined" || !GA_ID) return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
};

export default function AnalyticsScripts() {
  const [enabled, setEnabled] = useState(false);

  const sync = useCallback(() => {
    try {
      setEnabled(window.localStorage.getItem(CONSENT_KEY) === "granted");
    } catch {
      setEnabled(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(sync, 0);
    window.addEventListener("pnh-consent-change", sync);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pnh-consent-change", sync);
    };
  }, [sync]);

  useEffect(() => {
    if (!enabled) return undefined;

    const onClick = (event) => {
      const target = event.target instanceof Element ? event.target.closest("[data-ga-event]") : null;
      if (!target) return;
      const name = target.getAttribute("data-ga-event");
      const label = target.getAttribute("data-ga-label") || undefined;
      if (name) trackEvent(name, label ? { label } : {});
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [enabled]);

  if (!GA_ID || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="pnh-ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}

export { CONSENT_KEY };
