import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink pb-20 pt-32">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(198,164,92,0.14),transparent_55%)]" aria-hidden="true" />
      <div className="shell relative">
        <p className="eyebrow text-gold">
          <span className="gold-rule" aria-hidden="true" />
          Error 404
        </p>
        <h1 className="mt-5 max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.03] text-white">
          This road does not go anywhere.
        </h1>
        <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/60">
          The page you are looking for may have moved or no longer exists. Let&apos;s get you back to
          the parts of the site that matter.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="btn-shine inline-flex items-center justify-center gap-2.5 rounded-[2px] px-6 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-ink"
          >
            Back to home
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 rounded-[2px] border border-white/25 px-6 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-gold/70"
          >
            Explore services
          </Link>
          <a
            href={siteConfig.phone.href}
            data-ga-event="click_to_call"
            data-ga-label="404 phone"
            className="inline-flex items-center gap-2 text-[0.86rem] font-medium text-white/70 transition-colors hover:text-gold sm:ml-3"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
            {siteConfig.phone.display}
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-[0.72rem] uppercase tracking-[0.14em] text-white/40">
          <Link href="/about" className="hover:text-gold">About</Link>
          <Link href="/pricing" className="hover:text-gold">Pricing</Link>
          <Link href="/faq" className="hover:text-gold">FAQ</Link>
          <Link href="/blog" className="hover:text-gold">Blog</Link>
          <Link href="/contact" className="hover:text-gold">Contact</Link>
        </div>
      </div>
    </section>
  );
}
