import Link from "next/link";
import { Check, Phone, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CarrierSignupForm from "@/components/forms/CarrierSignupForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Carrier Signup & Onboarding Inquiry",
  description:
    "Submit a carrier onboarding inquiry to Prime Nation Haul. Share your equipment, fleet size, and preferred dispatch services to start the conversation.",
  alternates: { canonical: "/carrier-signup" },
  openGraph: {
    title: "Carrier Signup | Prime Nation Haul",
    description:
      "An onboarding inquiry for owner-operators, small fleets, and large fleets interested in truck dispatching support.",
    url: "/carrier-signup",
    images: ["/images/fleet-yard.jpg"],
  },
};

export default async function CarrierSignupPage({ searchParams }) {
  const params = (await searchParams) || {};
  const presetService = typeof params.service === "string" ? params.service : "";

  return (
    <>
      <PageHero
        eyebrow="Carrier signup"
        title={
          <>
            Start the onboarding{" "}
            <span className="editorial text-gold">conversation.</span>
          </>
        }
        description="This is an onboarding inquiry, not a carrier portal. Share the basics about your operation and our team will follow up to discuss fit, documentation, and the next steps."
        breadcrumbs={[{ label: "Carrier Signup", href: "/carrier-signup" }]}
        image="/images/fleet-yard.jpg"
        imageAlt="Semi-trucks parked at a terminal during golden hour"
      >
        <Button href="/get-a-quote" size="lg">
          Get a Quote
        </Button>
        <Button href={siteConfig.phone.href} variant="outline" size="lg" icon="none" gaEvent="click_to_call" gaLabel="Carrier signup call">
          Call {siteConfig.phone.display}
        </Button>
      </PageHero>

      <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                eyebrow="Who this is for"
                title={
                  <>
                    Owner-operators, small fleets, and{" "}
                    <span className="editorial text-gold">large fleets.</span>
                  </>
                }
                description="Whether your authority is active or you are preparing to launch, an inquiry helps us understand what you need and whether our desk is the right fit."
              />
            </Reveal>

            <Reveal delay={0.06}>
              <div className="border border-navy/10 bg-white p-7">
                <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-navy">
                  <FileText aria-hidden="true" className="h-4 w-4 text-gold" />
                  What we collect here
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Contact details and carrier role",
                    "Truck type and fleet size",
                    "Optional MC and DOT numbers",
                    "Preferred services and additional context",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.86rem] text-navy">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-navy/10 pt-4">
                  <p className="flex items-start gap-2.5 text-[0.78rem] leading-relaxed text-muted">
                    <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    Please do not submit Social Security numbers, bank details, passwords, or
                    identity documents. Setup documents are requested later through an appropriate
                    channel if we move forward together.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="border border-navy/10 bg-white p-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-navy">
                  What happens next
                </p>
                <ol className="mt-4 space-y-4">
                  {[
                    "Our team reviews your inquiry during business hours.",
                    "We follow up to confirm equipment, lanes, and support needs.",
                    "You receive the services and pricing that apply to your operation.",
                    "If we are a fit, we agree the arrangement and begin onboarding.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-4 text-[0.86rem] leading-relaxed text-muted">
                      <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-5 border-t border-navy/10 pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-navy hover:text-gold"
                  >
                    Review our services <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href={siteConfig.phone.href}
                data-ga-event="click_to_call"
                data-ga-label="Carrier signup sidebar phone"
                className="flex items-center gap-3 border border-navy/10 bg-white p-5 transition-colors hover:border-gold/50"
              >
                <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
                <span>
                  <span className="block text-[0.66rem] uppercase tracking-[0.16em] text-muted">
                    Rather talk it through?
                  </span>
                  <span className="mt-0.5 block text-[1.05rem] font-semibold text-navy">
                    {siteConfig.phone.display}
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <CarrierSignupForm presetService={presetService} />
            </Reveal>
            <p className="mt-4 text-[0.75rem] leading-relaxed text-muted">
              This form is an inquiry only. It does not create a dispatch agreement, carrier account,
              or contractual obligation. See our{" "}
              <Link href="/terms-of-service" className="text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
