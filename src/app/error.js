"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function GlobalError({ error, reset }) {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink pb-20 pt-32">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="shell relative">
        <p className="eyebrow text-gold">
          <span className="gold-rule" aria-hidden="true" />
          Unexpected error
        </p>
        <h1 className="mt-5 max-w-2xl text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] text-white">
          Something went wrong on our end.
        </h1>
        <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/60">
          The page could not be loaded right now. Try again, or contact our team directly and we will
          help with whatever you need.
        </p>
        {error?.digest ? (
          <p className="mt-3 text-[0.7rem] uppercase tracking-[0.14em] text-white/30">
            Reference: {error.digest}
          </p>
        ) : null}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => reset()}
            className="btn-shine inline-flex items-center justify-center gap-2.5 rounded-[2px] px-6 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-ink"
          >
            <RotateCcw aria-hidden="true" className="h-4 w-4" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 rounded-[2px] border border-white/25 px-6 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-gold/70"
          >
            Back to home
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <a
            href={siteConfig.phone.href}
            data-ga-event="click_to_call"
            data-ga-label="Error page phone"
            className="inline-flex items-center gap-2 text-[0.86rem] font-medium text-white/70 transition-colors hover:text-gold sm:ml-3"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
            {siteConfig.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
