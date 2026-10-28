import Link from "next/link";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { serviceDetails } from "@/data/services";
import { currentYear } from "@/lib/utils";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  const year = currentYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr] lg:gap-10 lg:py-20">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.88rem] leading-relaxed text-white/55">
              Truck dispatching and carrier support for owner-operators, small fleets, and large
              fleets across the United States. Five years of dispatching experience, with clear
              communication at every step.
            </p>
            <div className="mt-7 space-y-3">
              <a
                href={siteConfig.phone.href}
                data-ga-event="click_to_call"
                data-ga-label="Footer phone"
                className="flex items-center gap-3 text-[0.95rem] font-medium text-white transition-colors hover:text-gold"
              >
                <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
                {siteConfig.phone.display}
              </a>
              {siteConfig.emailConfigured ? (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-[0.9rem] text-white/65 transition-colors hover:text-gold"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 text-gold" />
                  {siteConfig.email}
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="flex items-center gap-3 text-[0.9rem] text-white/65 transition-colors hover:text-gold"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 text-gold" />
                  Send a message through our contact form
                </Link>
              )}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {footerNav.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.88rem] text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {serviceDetails.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[0.88rem] text-white/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Start a conversation
            </h2>
            <p className="mt-5 text-[0.88rem] leading-relaxed text-white/55">
              Tell us about your trucks, your lanes, and the support you need. We will walk you
              through the options and confirm pricing for your operation.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href="/get-a-quote"
                data-ga-event="cta_click"
                data-ga-label="Footer quote"
                className="group flex items-center justify-between border border-white/15 px-4 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-gold/60 hover:text-gold"
              >
                Get a Quote
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/carrier-signup"
                className="group flex items-center justify-between border border-white/15 px-4 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-gold/60 hover:text-gold"
              >
                Carrier Signup
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-7">
          <p className="max-w-4xl text-[0.72rem] leading-relaxed text-white/35">
            Prime Nation Haul provides dispatching and documentation assistance services. We are not
            a law firm, insurance provider, insurance agency, factoring company, permit authority, or
            government agency. Assistance with compliance, insurance, factoring, and permits is
            administrative only; related decisions remain with you and the licensed providers or
            authorities you work with.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.75rem] tracking-[0.06em] text-white/40">
              © {year} Prime Nation Haul. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.75rem] text-white/45 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-[0.75rem] text-white/45 transition-colors hover:text-gold"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
