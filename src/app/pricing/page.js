import Link from "next/link";
import { Check, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CTASection from "@/components/ui/CTASection";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { allFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Dispatching Pricing & Custom Quotes",
  description:
    "Prime Nation Haul pricing is quoted individually based on your trucks, lanes, fleet size, and services. Contact our team for a custom dispatching quote.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Dispatching Pricing & Custom Quotes | Prime Nation Haul",
    description:
      "Contact-based pricing for truck dispatching and carrier support. Every arrangement is quoted to the carrier's specific operation.",
    url: "/pricing",
    images: ["/images/services/power-only.png"],
  },
};

const tiers = [
  {
    name: "Owner-operator",
    label: "One truck",
    description:
      "Dispatch support for a single truck, with direct communication on every load and a straightforward paperwork flow.",
    points: [
      "Load sourcing aligned to your lanes",
      "Rate negotiation with your approval",
      "Documentation and settlement support",
      "Direct access to your dispatcher",
    ],
  },
  {
    name: "Small fleet",
    label: "A growing operation",
    description:
      "Coordinated dispatch support across multiple trucks, with consistent communication and record keeping.",
    points: [
      "Load planning across your trucks",
      "Consistent documentation standards",
      "Coordinated broker communication",
      "Scope built around your volume",
    ],
    featured: true,
  },
  {
    name: "Large fleet",
    label: "Multi-truck capacity",
    description:
      "A dispatch arrangement scaled to a larger fleet, with clear escalation paths and defined service scope.",
    points: [
      "Service scope agreed in writing",
      "Escalation path for urgent items",
      "Support for driver and truck changes",
      "Documentation across loads",
    ],
  },
];

const pricingFaqs = allFaqs.filter((faq) =>
  [
    "How does your pricing work?",
    "Is there a long-term contract?",
    "How quickly will I hear back?",
    "Who can work with Prime Nation Haul?",
  ].includes(faq.question),
);

const pricingFactors = [
  {
    title: "Services in scope",
    body: "Load booking and rate negotiation alone, or a broader scope that includes ELD, documentation, permits, and paperwork support.",
  },
  {
    title: "Fleet size",
    body: "One truck or several. The number of trucks and how often they run shapes the level of dispatch support involved.",
  },
  {
    title: "Lanes and equipment",
    body: "Regional, long-haul, dry van, reefer, power-only, or specialized equipment all change the nature of the work.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Pricing quoted to{" "}
            <span className="editorial text-gold">your operation.</span>
          </>
        }
        description="Prime Nation Haul does not publish flat rates, percentage fees, or discounts. Dispatching arrangements vary by carrier, so we quote individually and confirm the details with you in writing before work starts."
        breadcrumbs={[{ label: "Pricing", href: "/pricing" }]}
        image="/images/services/power-only.png"
        imageAlt="Navy semi-truck tractor parked at a logistics terminal at blue hour"
      >
        <Button href="/get-a-quote" size="lg">
          Request Pricing
        </Button>
        <Button href={siteConfig.phone.href} variant="outline" size="lg" icon="none" gaEvent="click_to_call" gaLabel="Pricing hero call">
          Call {siteConfig.phone.display}
        </Button>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="How pricing works"
            title={
              <>
                A quote, not a{" "}
                <span className="editorial text-gold">guess.</span>
              </>
            }
            description="We price dispatch support around three practical factors, then confirm the arrangement directly with you."
            align="center"
          />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-3">
            {pricingFactors.map((factor, index) => (
              <RevealItem key={factor.title} className="h-full">
                <div className="h-full border border-navy/10 bg-offwhite p-7">
                  <span className="editorial text-[2rem] leading-none text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[1.05rem] font-semibold text-navy">{factor.title}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{factor.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-navy/10 bg-ink px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8">
              <div>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Contact for pricing
                </p>
                <p className="mt-2 max-w-xl text-[0.92rem] leading-relaxed text-white/65">
                  Tell us about your trucks and the support you want. We will reply with the
                  applicable services and pricing — no automated estimate.
                </p>
              </div>
              <Button href="/get-a-quote" size="sm" className="shrink-0">
                Request a quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-offwhite py-20 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Engagement types"
            title={
              <>
                A scope for every size of{" "}
                <span className="editorial text-gold">carrier.</span>
              </>
            }
            description="These are the typical arrangements we discuss. Final scope and pricing are confirmed individually — nothing here is a published rate."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 0.07}>
                <article
                  className={
                    tier.featured
                      ? "relative flex h-full flex-col border border-navy/15 bg-ink p-7 text-white"
                      : "relative flex h-full flex-col border border-navy/10 bg-white p-7"
                  }
                >
                  {tier.featured ? (
                    <span className="absolute right-0 top-0 bg-gold px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink">
                      Most discussed
                    </span>
                  ) : null}
                  <p
                    className={`text-[0.64rem] font-semibold uppercase tracking-[0.18em] ${
                      tier.featured ? "text-gold" : "text-gold"
                    }`}
                  >
                    {tier.label}
                  </p>
                  <h3
                    className={`mt-3 text-[1.45rem] font-semibold ${
                      tier.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-3 text-[0.88rem] leading-relaxed ${
                      tier.featured ? "text-white/60" : "text-muted"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <div
                    className={`mt-6 border-y py-4 ${
                      tier.featured ? "border-white/10" : "border-navy/10"
                    }`}
                  >
                    <p
                      className={`text-[0.68rem] uppercase tracking-[0.16em] ${
                        tier.featured ? "text-white/40" : "text-muted"
                      }`}
                    >
                      Pricing
                    </p>
                    <p
                      className={`mt-1 text-[1.25rem] font-semibold ${
                        tier.featured ? "text-white" : "text-navy"
                      }`}
                    >
                      Contact for a custom quote
                    </p>
                  </div>
                  <ul className="mt-5 flex-1 space-y-3">
                    {tier.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-2.5 text-[0.86rem] leading-relaxed ${
                          tier.featured ? "text-white/70" : "text-navy"
                        }`}
                      >
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/get-a-quote?service=${encodeURIComponent("Load Booking")}`}
                    className={`mt-7 inline-flex items-center justify-between gap-3 border px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      tier.featured
                        ? "border-gold/60 text-gold hover:bg-gold hover:text-ink"
                        : "border-navy/20 text-navy hover:border-gold hover:text-gold"
                    }`}
                  >
                    Request this scope
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-5 border border-navy/10 bg-white p-7 sm:grid-cols-2 sm:p-8">
              <div>
                <h3 className="flex items-center gap-2 text-[1rem] font-semibold text-navy">
                  <ShieldCheck aria-hidden="true" className="h-4 w-4 text-gold" />
                  What is always included
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Written scope and pricing before work starts",
                    "Your approval on every booked load",
                    "Clear communication when plans change",
                    "Organized documents for each load",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.86rem] text-muted">
                      <Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-navy/10 pt-5 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                <h3 className="text-[1rem] font-semibold text-navy">What we do not publish</h3>
                <p className="mt-3 text-[0.86rem] leading-relaxed text-muted">
                  No percentage fees, discounts, hidden charges, or guaranteed savings are listed on
                  this site, because those terms have not been approved for publication. Any
                  arrangement, term, and notice expectation is confirmed between Prime Nation Haul
                  and the carrier directly.
                </p>
                <p className="mt-3 text-[0.86rem] leading-relaxed text-muted">
                  Nothing on this page creates a contractual commitment or a guarantee of freight
                  volume, revenue, or savings.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Pricing questions"
              title={
                <>
                  What carriers ask about{" "}
                  <span className="editorial text-gold">cost.</span>
                </>
              }
              description="Clear answers about how we quote, what is agreed, and what happens next."
            />
            <div className="mt-7 flex flex-col gap-1 border-t border-navy/10 pt-5">
              <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                Prefer to ask directly?
              </span>
              <a
                href={siteConfig.phone.href}
                data-ga-event="click_to_call"
                data-ga-label="Pricing FAQ phone"
                className="inline-flex items-center gap-2 text-[1.05rem] font-semibold text-navy transition-colors hover:text-gold"
              >
                <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
          <FaqAccordion items={pricingFaqs} idPrefix="pricing-faq" />
        </div>
      </section>

      <CTASection
        eyebrow="Custom quote"
        title="Tell us what you run. We will tell you what it costs."
        description="A short conversation about your trucks, lanes, and support needs is all it takes to start."
        primaryLabel="Request a Quote"
        secondaryLabel="Carrier Signup"
        secondaryHref="/carrier-signup"
      />
    </>
  );
}
