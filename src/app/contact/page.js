import Link from "next/link";
import { Phone, Mail, ArrowRight, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/forms/ContactForm";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact Prime Nation Haul",
  description:
    "Contact Prime Nation Haul about truck dispatching and carrier support. Call 316 376 9718 or send a message through our contact form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Prime Nation Haul",
    description:
      "Call 316 376 9718 or send a message about truck dispatching, load booking, and carrier support.",
    url: "/contact",
    images: ["/images/road-night.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s get your questions{" "}
            <span className="editorial text-gold">answered.</span>
          </>
        }
        description="Talk with our dispatch team about your trucks, lanes, and the support you need. Call directly or send a message and we will follow up with next steps."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        image="/images/road-night.png"
        imageAlt="Interstate highway light trails at night"
      >
        <Button href={siteConfig.phone.href} size="lg" icon="none" gaEvent="click_to_call" gaLabel="Contact hero call">
          Call {siteConfig.phone.display}
        </Button>
        <Button href="/get-a-quote" variant="outline" size="lg">
          Get a Quote
        </Button>
      </PageHero>

      <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="space-y-5">
            <Reveal>
              <div className="border border-navy/10 bg-ink p-7 text-white">
                <p className="eyebrow text-gold">
                  <span className="gold-rule" aria-hidden="true" />
                  Call our team
                </p>
                <a
                  href={siteConfig.phone.href}
                  data-ga-event="click_to_call"
                  data-ga-label="Contact page phone card"
                  className="mt-4 flex items-center gap-3 text-[clamp(1.5rem,3.4vw,2rem)] font-semibold tracking-tight text-white transition-colors hover:text-gold"
                >
                  <Phone aria-hidden="true" className="h-5 w-5 text-gold" />
                  {siteConfig.phone.display}
                </a>
                <p className="mt-4 text-[0.86rem] leading-relaxed text-white/55">
                  The fastest way to reach a dispatcher. Tell us what you run and we can confirm
                  whether your equipment is a fit for our desk.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="border border-navy/10 bg-white p-7">
                <p className="eyebrow text-gold">
                  <span className="gold-rule" aria-hidden="true" />
                  Email
                </p>
                {siteConfig.emailConfigured ? (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-4 flex items-center gap-3 break-all text-[1.02rem] font-medium text-navy transition-colors hover:text-gold"
                  >
                    <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-gold" />
                    {siteConfig.email}
                  </a>
                ) : (
                  <>
                    <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                      A public email address has not been published yet. Use the contact form on this
                      page and your message will reach our team inbox by email, or call{" "}
                      <a href={siteConfig.phone.href} className="font-medium text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold">
                        {siteConfig.phone.display}
                      </a>
                      .
                    </p>
                    <p className="mt-3 text-[0.72rem] uppercase tracking-[0.14em] text-muted/70">
                      Set NEXT_PUBLIC_CONTACT_EMAIL to display a public address
                    </p>
                  </>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="border border-navy/10 bg-white p-7">
                <p className="eyebrow text-gold">
                  <span className="gold-rule" aria-hidden="true" />
                  What to include
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Truck type and number of trucks",
                    "Preferred lanes or home base",
                    "The services you need help with",
                    "Whether your authority is active",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.86rem] text-navy">
                      <MessageSquare aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="border border-navy/10 bg-white p-7">
                <Clock aria-hidden="true" className="h-5 w-5 text-gold" strokeWidth={1.6} />
                <p className="mt-3 text-[0.86rem] leading-relaxed text-muted">
                  New inquiries are reviewed during normal business hours. Active carriers receive
                  dispatch communication based on the arrangement agreed during onboarding.
                </p>
                <div className="mt-5 flex flex-wrap gap-4 border-t border-navy/10 pt-4">
                  <Link
                    href="/carrier-signup"
                    className="inline-flex items-center gap-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-navy hover:text-gold"
                  >
                    Carrier signup <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-navy hover:text-gold"
                  >
                    Read the FAQ <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="mb-5 flex items-start gap-3 border border-gold/30 bg-gold/[0.07] p-4">
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-[0.8rem] leading-relaxed text-navy/80">
                  Please do not send Social Security numbers, bank account details, passwords, or
                  identity documents through this form. Carrier setup documents are requested through
                  an appropriate channel after an initial conversation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
