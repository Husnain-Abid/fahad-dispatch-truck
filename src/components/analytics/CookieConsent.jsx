"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_KEY } from "@/components/analytics/AnalyticsScripts";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        if (!window.localStorage.getItem(CONSENT_KEY)) setVisible(true);
      } catch {
        setVisible(false);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const choose = (value) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Storage may be unavailable; the site still works without analytics.
    }
    window.dispatchEvent(new Event("pnh-consent-change"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Analytics consent"
      className="fixed inset-x-3 bottom-3 z-[70] border border-white/15 bg-navy/98 p-5 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.7)] backdrop-blur sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-sm"
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
        Analytics preference
      </p>
      <p className="mt-2.5 text-[0.82rem] leading-relaxed text-white/70">
        We would like to use Google Analytics to understand how visitors use this site. No names,
        phone numbers, or email addresses are sent. See our{" "}
        <Link href="/privacy-policy" className="text-white underline decoration-gold/60 underline-offset-2 hover:text-gold">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2.5">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="btn-shine flex-1 rounded-[2px] px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink transition hover:brightness-105"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="flex-1 rounded-[2px] border border-white/25 px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:border-gold/60 hover:text-white"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
