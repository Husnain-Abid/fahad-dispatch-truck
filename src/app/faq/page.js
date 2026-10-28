import { Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import { faqCategories, allFaqs } from "@/data/faqs";
import { siteConfig, siteUrl } from "@/lib/site-config";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about truck dispatching, supported truck types, onboarding, pricing, paperwork assistance, and how to contact Prime Nation Haul.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Prime Nation Haul",
    description:
      "Common questions about truck dispatching services, carrier onboarding, pricing, and support from Prime Nation Haul.",
    url: "/faq",
    images: ["/images/hero-interstate.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
  url: `${siteUrl}/faq`,
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Straight answers before you{" "}
            <span className="editorial text-gold">get rolling.</span>
          </>
        }
        description="How dispatching works, what we support, how onboarding and pricing are handled, and what our paperwork assistance does — and does not — cover."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
        image="/images/hero-interstate.jpg"
        imageAlt="Semi-truck traveling on an interstate at dusk"
      >
        <Button href="/get-a-quote" size="lg">
          Get a Quote
        </Button>
        <Button href={siteConfig.phone.href} variant="outline" size="lg" icon="none" gaEvent="click_to_call" gaLabel="FAQ hero call">
          Call {siteConfig.phone.display}
        </Button>
      </PageHero>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Questions & answers"
              title={
                <>
                  Everything on this page is written to be{" "}
                  <span className="editorial text-gold">useful.</span>
                </>
              }
              description="If you need an answer that depends on your specific authority, coverage, or contracts, we will point you to the right professional rather than guess."
            />
            <Reveal delay={0.08}>
              <div className="mt-8 border border-navy/10 bg-offwhite p-6">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Still have a question?
                </p>
                <a
                  href={siteConfig.phone.href}
                  data-ga-event="click_to_call"
                  data-ga-label="FAQ sidebar phone"
                  className="mt-3 inline-flex items-center gap-2 text-[1.1rem] font-semibold text-navy transition-colors hover:text-gold"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
                  {siteConfig.phone.display}
                </a>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">
                  Or send your question through the contact form and our team will respond by email.
                </p>
                <Button href="/contact" variant="outlineDark" size="sm" className="mt-4">
                  Contact us
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.name} id={category.name.toLowerCase().replace(/\s+/g, "-")}>
                <div className="flex items-center gap-4">
                  <h2 className="text-[1.35rem] font-semibold text-navy">{category.name}</h2>
                  <span className="h-px flex-1 bg-navy/10" aria-hidden="true" />
                  <span className="text-[0.66rem] uppercase tracking-[0.16em] text-muted">
                    {String(category.faqs.length).padStart(2, "0")} topics
                  </span>
                </div>
                <div className="mt-4">
                  <FaqAccordion
                    items={category.faqs}
                    idPrefix={`faq-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                    defaultOpen={0}
                  />
                </div>
              </div>
            ))}

            <div className="border border-gold/30 bg-gold/[0.06] p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy">
                A note on regulatory and contractual information
              </p>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-navy/75">
                The answers on this page are general explanations, not legal, insurance, tax, or
                regulatory advice. Requirements and market conditions change. Confirm your specific
                obligations with the FMCSA, your attorney, your insurance provider, or another
                qualified professional before making a decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <CTASection
        eyebrow="Next step"
        title="Have your answer? Let us talk about your trucks."
        description="Request a quote or call our dispatch team directly. We will confirm fit, scope, and pricing for your operation."
      />
    </>
  );
}
