import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { services, serviceDetails } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Truck Dispatching & Carrier Support Services",
  description:
    "Explore Prime Nation Haul services: load booking, rate negotiation, 24/7 dispatch support, ELD setup and management, DOT compliance assistance, insurance, factoring, permits, and paperwork assistance.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Truck Dispatching & Carrier Support Services | Prime Nation Haul",
    description:
      "Load booking, rate negotiation, 24/7 dispatch support, ELD setup, DOT compliance assistance, and carrier support services for US carriers.",
    url: "/services",
    images: ["/images/services/dry-van-reefer.jpg"],
  },
};

const carrierSupportExtras = [
  {
    title: "24/7 Dispatch Support",
    body: "A dispatcher to contact when load questions, schedule changes, or check calls cannot wait for business hours.",
  },
  {
    title: "Insurance Assistance",
    body: "Help organizing and submitting insurance documentation that brokers and shippers request. Coverage decisions stay with your licensed provider.",
  },
  {
    title: "Factoring Assistance",
    body: "Paperwork coordination with the factoring company you choose. Funding approval and terms stay with your factoring partner.",
  },
  {
    title: "Permits Assistance",
    body: "Support identifying permit requirements for a specific load and preparing the information needed to request them before pick-up.",
  },
  {
    title: "Paperwork Assistance",
    body: "Rate confirmations, bills of lading, delivery receipts, and invoicing packets organized so settlement is not delayed.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Dispatch work and carrier support, handled{" "}
            <span className="editorial text-gold">properly.</span>
          </>
        }
        description="Prime Nation Haul supports the parts of trucking that sit around the drive: sourcing freight, negotiating rates, coordinating documents, and keeping the communication clear."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        image="/images/services/dry-van-reefer.jpg"
        imageAlt="Semi-truck pulling a refrigerated trailer on an interstate"
      >
        <Button href="/get-a-quote" size="lg">
          Get a Quote
        </Button>
        <Button href={siteConfig.phone.href} variant="outline" size="lg" icon="none" gaEvent="click_to_call" gaLabel="Services hero call">
          Call {siteConfig.phone.display}
        </Button>
      </PageHero>

      <section className="bg-offwhite py-20 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Full service list"
            title={
              <>
                Everything our dispatch desk{" "}
                <span className="editorial text-gold">covers.</span>
              </>
            }
            description="Service scope is agreed with each carrier. Start with what you need now and add support as your operation grows."
          />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <RevealItem key={service.title} className="h-full">
                <ServiceCard service={service} index={index} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="carrier-support" className="scroll-mt-28 bg-white py-20 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Carrier support"
              title={
                <>
                  Support beyond the{" "}
                  <span className="editorial text-gold">load itself.</span>
                </>
              }
              description="Administrative support for the documents and coordination that surround a load. These services are assistance only — decisions remain with you and your licensed providers."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 flex items-start gap-3 border border-gold/30 bg-gold/[0.06] p-5">
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-[0.82rem] leading-relaxed text-navy/80">
                  Prime Nation Haul is not a law firm, insurance provider or agency, factoring
                  company, permit authority, or government agency. We help prepare, organize, and
                  coordinate — we do not make coverage, funding, permitting, or legal decisions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6">
                <Button href="/services/carrier-support" variant="outlineDark">
                  Carrier support detail
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="divide-y divide-navy/10 border-y border-navy/10">
            {carrierSupportExtras.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="flex gap-5 py-5">
                  <span className="mt-1 text-[0.7rem] font-semibold tracking-[0.16em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[1rem] font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-[0.87rem] leading-relaxed text-muted">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Service detail pages"
            title={
              <>
                A closer look at the{" "}
                <span className="editorial text-gold">core services.</span>
              </>
            }
            description="Each page explains what the service includes, how the process works, and where the boundaries are."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((detail) => (
              <Reveal key={detail.slug}>
                <Link
                  href={`/services/${detail.slug}`}
                  className="group flex h-full flex-col justify-between border border-navy/10 bg-white p-6 transition-colors hover:border-gold/60"
                >
                  <div>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-gold">
                      {detail.eyebrow}
                    </p>
                    <h3 className="mt-3 text-[1.12rem] font-semibold text-navy">{detail.title}</h3>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{detail.tagline}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy group-hover:text-gold">
                    Read more
                    <ArrowRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal>
              <div className="flex h-full flex-col justify-between border border-navy/15 bg-navy p-6 text-white">
                <div>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-gold">
                    Not sure what you need?
                  </p>
                  <h3 className="mt-3 text-[1.12rem] font-semibold">
                    Tell us how you run and we will recommend a scope.
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {["No obligation", "Pricing confirmed directly", "No sensitive documents requested"].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-2 text-[0.82rem] text-white/65">
                          <Check aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <Link
                  href="/get-a-quote"
                  className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold"
                >
                  Request a quote
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Services built around your truck"
        title="Choose the support you need. Keep control of your business."
        description="We will confirm scope, communication, and pricing before dispatch work starts."
      />
    </>
  );
}
