import Link from "next/link";
import { Check, Phone, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import QuoteForm from "@/components/forms/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { allFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Request a Custom Dispatch Quote",
  description:
    "Request a custom truck dispatching quote from Prime Nation Haul. Pricing depends on your trucks, lanes, fleet size, and the services you need. Contact-based pricing, confirmed directly.",
  alternates: { canonical: "/get-a-quote" },
  openGraph: {
    title: "Request a Custom Dispatch Quote | Prime Nation Haul",
    description:
      "Tell us about your trucks and lanes. Prime Nation Haul will confirm available services and pricing for your operation.",
    url: "/get-a-quote",
    images: ["/images/dispatch-workstation.jpg"],
  },
};

const pricingFaqs = allFaqs.filter((faq) =>
  ["How does your pricing work?", "What information is needed to request a quote?", "Is there a long-term contract?"].includes(
    faq.question,
  ),
);

export default async function GetAQuotePage({ searchParams }) {
  const params = (await searchParams) || {};
  const presetService = typeof params.service === "string" ? params.service : "";

  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title={
          <>
            Pricing built around your{" "}
            <span className="editorial text-gold">operation.</span>
          </>
        }
        description="Prime Nation Haul quotes each carrier individually. Share a few details about your trucks and the support you need, and our team will follow up with the services available and pricing for your arrangement."
        breadcrumbs={[{ label: "Get a Quote", href: "/get-a-quote" }]}
        image="/images/dispatch-workstation.jpg"
        imageAlt="Freight dispatch workstation with route maps on monitors"
      >
        <Button href={siteConfig.phone.href} size="lg" icon="none" gaEvent="click_to_call" gaLabel="Quote hero call">
          Call {siteConfig.phone.display}
        </Button>
        <Button href="/pricing" variant="outline" size="lg">
          How pricing works
        </Button>
      </PageHero>

      <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="What shapes your quote"
                title={
                  <>
                    No automated pricing.{" "}
                    <span className="editorial text-gold">A real conversation.</span>
                  </>
                }
                description="Dispatching arrangements vary because carriers do. We quote based on what you actually need rather than a single template."
              />
            </Reveal>

            <Reveal delay={0.06}>
              <div className="border border-navy/10 bg-white p-7">
                <ol className="space-y-5">
                  {[
                    {
                      title: "The services you need",
                      body: "Load booking alone, or a broader support scope that includes ELD, compliance documentation, permits, or paperwork help.",
                    },
                    {
                      title: "Your fleet and lanes",
                      body: "One truck or many, regional or long-haul, dry van or specialized equipment — each affects how the desk supports you.",
                    },
                    {
                      title: "The arrangement we agree",
                      body: "We confirm scope, communication expectations, and pricing directly in writing before any dispatch work begins.",
                    },
                  ].map((item, index) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="text-[0.72rem] font-semibold tracking-[0.16em] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[0.98rem] font-semibold text-navy">{item.title}</h3>
                        <p className="mt-1 text-[0.86rem] leading-relaxed text-muted">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 border-t border-navy/10 pt-5">
                  <p className="text-[0.82rem] leading-relaxed text-muted">
                    We do not publish flat fees, percentage rates, or discounts on this site because
                    pricing has not been approved for publication. Your quote will be shared directly
                    by our team.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="border border-navy/10 bg-ink p-7 text-white">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  Needed information only
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Business contact details",
                    "Truck type and role",
                    "The services you are considering",
                    "Optional company, MC, or DOT details",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.85rem] text-white/70">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-start gap-2.5 border-t border-white/10 pt-4 text-[0.78rem] leading-relaxed text-white/50">
                  <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  We never request Social Security numbers, banking credentials, or identity
                  documents through this form.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-col gap-2 border-t border-navy/10 pt-5">
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  Prefer to call?
                </span>
                <a
                  href={siteConfig.phone.href}
                  data-ga-event="click_to_call"
                  data-ga-label="Quote page sidebar phone"
                  className="inline-flex items-center gap-2 text-[1.2rem] font-semibold text-navy transition-colors hover:text-gold"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
                  {siteConfig.phone.display}
                </a>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <QuoteForm presetService={presetService} />
            </Reveal>
            <p className="mt-4 text-[0.75rem] leading-relaxed text-muted">
              By submitting this form you agree to be contacted about your inquiry. Read our{" "}
              <Link href="/privacy-policy" className="text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms-of-service" className="text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Pricing questions"
            title={
              <>
                Straight answers about{" "}
                <span className="editorial text-gold">cost.</span>
              </>
            }
            description="If your question is not here, the full FAQ covers onboarding, services, and support expectations."
          />
          <FaqAccordion items={pricingFaqs} idPrefix="quote-faq" defaultOpen={0} />
        </div>
      </section>
    </>
  );
}
