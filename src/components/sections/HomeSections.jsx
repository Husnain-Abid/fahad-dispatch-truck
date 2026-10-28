import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Quote,
  BadgeCheck,
  Route,
  Users,
  FileCheck2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TruckTypeCard from "@/components/ui/TruckTypeCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { getFeaturedServices } from "@/data/services";
import { truckTypes } from "@/data/truck-types";
import { homeFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";

export function IntroSection() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full border border-gold/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy">
              <Image
                src="/images/fleet-yard.png"
                alt="Row of semi-trucks and trailers parked at a clean terminal at golden hour"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-ink/80 p-5 backdrop-blur-sm">
                <p className="text-[0.64rem] uppercase tracking-[0.2em] text-gold">
                  Dispatch experience
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Five years in the dispatching industry
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Who we are"
            title={
              <>
                A dispatch partner built around how you{" "}
                <span className="editorial text-gold">actually run.</span>
              </>
            }
            description="Prime Nation Haul is a US-focused truck dispatching and carrier support company. We work with owner-operators, small fleets, and large fleet companies that want their freight, communication, and paperwork handled with care."
          />
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted">
              Every carrier operates differently. Instead of forcing a template onto your truck,
              we start with your equipment, your lanes, and the support you want to keep in-house —
              then build the dispatch arrangement around that.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Straightforward communication",
                "Carrier-first load decisions",
                "Organized paperwork trail",
                "Support that scales with your fleet",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.88rem] text-navy">
                  <BadgeCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/about" variant="outlineDark" icon="arrow">
                More about Prime Nation Haul
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ExperienceStrip() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="shell relative">
        <RevealGroup className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16">
          <RevealItem>
            <p className="eyebrow text-gold">
              <span className="gold-rule" aria-hidden="true" />
              Experience that shows
            </p>
            <p className="mt-5 flex items-baseline gap-3 text-white">
              <span className="text-[4.2rem] font-semibold leading-none tracking-tight">05</span>
              <span className="max-w-[9rem] text-[0.78rem] uppercase leading-relaxed tracking-[0.18em] text-white/45">
                Years in the dispatching industry
              </span>
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-medium leading-snug text-white">
              Dispatching is a service business before it is a software problem.
            </h2>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-white/55">
              Five years of day-to-day dispatch work means we have handled the routine, the rushed,
              and the unexpected. That experience informs how we communicate load details, structure
              paperwork, and keep carriers informed when plans change.
            </p>
            <div className="mt-8 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
              {[
                { icon: Route, title: "Lane-aware", body: "Freight matched to your operating area and equipment." },
                { icon: FileCheck2, title: "Document-minded", body: "Rate confirmations and delivery paperwork kept in order." },
                { icon: Users, title: "Carrier-focused", body: "Support for one truck or a growing fleet." },
              ].map(({ icon: IconComponent, title, body }) => (
                <div key={title}>
                  <IconComponent aria-hidden="true" className="h-5 w-5 text-gold" strokeWidth={1.6} />
                  <h3 className="mt-3 text-[0.95rem] font-medium text-white">{title}</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-white/50">{body}</p>
                </div>
              ))}
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

export function ServicesOverview() {
  const featured = getFeaturedServices();

  return (
    <section className="bg-offwhite py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Dispatching services"
            title={
              <>
                The freight work, the rate work, and the{" "}
                <span className="editorial text-gold">paperwork.</span>
              </>
            }
            description="A focused set of dispatch and carrier support services, delivered with clear communication and your approval on every load."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 border-b border-navy/20 pb-1.5 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-gold hover:text-gold"
            >
              All services
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <RevealItem key={service.title} className="h-full">
              <ServiceCard service={service} index={index} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-navy/10 bg-white px-6 py-5 sm:flex-row sm:items-center sm:px-8">
            <p className="text-[0.9rem] text-navy">
              Need insurance, factoring, permit, or paperwork help?{" "}
              <span className="text-muted">Those services are available too.</span>
            </p>
            <Link
              href="/services#carrier-support"
              className="group inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-gold"
            >
              View carrier support
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TruckTypesSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Supported truck types"
          tone="dark"
          title={
            <>
              One dispatch desk.{" "}
              <span className="editorial text-gold">Most equipment types.</span>
            </>
          }
          description="Tell us what you run. We will confirm fit and the lanes that make sense before we talk rates."
        />
        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {truckTypes.map((truck) => (
            <RevealItem key={truck.name} className="h-full">
              <TruckTypeCard truck={truck} />
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-[0.85rem] leading-relaxed text-white/45">
              Running flatbed, step deck, or something more specialized? Include it in your quote
              request and we will confirm whether it is a fit for our desk.
            </p>
            <Button href="/get-a-quote" variant="outline" icon="arrow">
              Check your equipment
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  const features = [
    {
      title: "Transparent communication",
      body: "You hear about the load, the rate, and the requirements before anything is confirmed. If plans change, you hear that too.",
    },
    {
      title: "Five years of dispatch experience",
      body: "Practical knowledge of how brokers, shippers, and receivers actually operate — applied to your freight.",
    },
    {
      title: "Support for every fleet size",
      body: "A single owner-operator and a larger fleet both get a direct line to dispatch and documented next steps.",
    },
    {
      title: "Paperwork kept in order",
      body: "Rate confirmations, BOLs, delivery receipts, and invoicing documents organized as the load moves.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Why Prime Nation Haul"
            title={
              <>
                Dependable dispatch without the{" "}
                <span className="editorial text-gold">guesswork.</span>
              </>
            }
            description="You should never have to chase an answer about your own truck. Our process is designed to keep decisions with you and details with us."
          />
          <div className="mt-9 space-y-6">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <div className="flex gap-5 border-t border-navy/10 pt-5">
                  <span className="mt-1 text-[0.72rem] font-semibold tracking-[0.16em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-navy">{feature.title}</h3>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">{feature.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy">
              <Image
                src="/images/dispatch-workstation.png"
                alt="Freight dispatch workstation with route maps on monitors and a headset"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-transparent" />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="border border-navy/10 bg-offwhite p-5">
                <p className="text-[0.66rem] uppercase tracking-[0.18em] text-gold">Every load</p>
                <p className="mt-2 text-[0.92rem] leading-snug text-navy">
                  Origin, destination, rate, and requirements confirmed with you before booking.
                </p>
              </div>
              <div className="border border-navy/10 bg-offwhite p-5">
                <p className="text-[0.66rem] uppercase tracking-[0.18em] text-gold">Every week</p>
                <p className="mt-2 text-[0.92rem] leading-snug text-navy">
                  Clear communication on schedule changes, documents, and open questions.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    {
      title: "Share your operation",
      body: "Tell us your truck type, lanes, home base, and the support you want. A short call or form is enough to start.",
    },
    {
      title: "Confirm the arrangement",
      body: "We review fit, agree on the services and scope, and share pricing directly with you — no published guesswork.",
    },
    {
      title: "Get dispatched",
      body: "We source freight that matches your preferences and present each load with the details you need.",
    },
    {
      title: "Stay supported",
      body: "Rate confirmations, check calls, delivery documents, and settlement paperwork stay organized.",
    },
  ];

  return (
    <section className="bg-offwhite py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              How our dispatching process{" "}
              <span className="editorial text-gold">works.</span>
            </>
          }
          description="A straightforward path from first conversation to your first dispatched load — with clear expectations at each step."
          align="center"
        />

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-[3.4rem] hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
            aria-hidden="true"
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <RevealItem key={step.title} className="h-full">
                <div className="group relative h-full border border-navy/10 bg-white p-6 transition-colors hover:border-gold/50">
                  <div className="flex items-center justify-between">
                    <span className="editorial text-[2.4rem] leading-none text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-navy/15 transition-colors group-hover:bg-gold" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[1.02rem] font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-muted">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/get-a-quote">Start with a quote</Button>
            <Button href="/carrier-signup" variant="outlineDark">
              Carrier signup
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  const groups = [
    {
      title: "Owner-operators",
      copy: "You drive, we handle the desk. Keep your truck moving while dispatch manages the load search, broker communication, and paperwork trail.",
      points: [
        "One dependable point of contact",
        "Load options explained before you commit",
        "Help with documents and settlement packets",
        "Flexibility to keep the lanes you prefer",
      ],
    },
    {
      title: "Small & large fleets",
      copy: "Consistent dispatch support and organized records across multiple trucks, with scope that reflects the size of your operation.",
      points: [
        "Support across multiple trucks and drivers",
        "Documentation kept consistent across loads",
        "Escalation path when something needs attention",
        "Service scope agreed around your volume",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Built for carriers"
            title={
              <>
                Support that matches the size of your{" "}
                <span className="editorial text-gold">operation.</span>
              </>
            }
            description="Whether it is one truck or a growing fleet, the goal is the same: freight decisions you understand and paperwork you do not have to chase."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/get-a-quote" variant="outlineDark">
              Request pricing
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <article className="relative h-full overflow-hidden border border-navy/10 bg-offwhite p-7 sm:p-9">
                <div className="absolute inset-x-0 top-0 h-[2px] w-16 bg-gold" aria-hidden="true" />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[1.4rem] font-semibold text-navy">{group.title}</h3>
                  <span className="text-[0.66rem] uppercase tracking-[0.18em] text-gold">
                    {index === 0 ? "01 / Solo" : "02 / Fleet"}
                  </span>
                </div>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">{group.copy}</p>
                <ul className="mt-7 grid gap-3">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[0.88rem] text-navy">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsPreview() {
  return (
    <section className="bg-offwhite py-20 sm:py-24">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <SectionHeading
          eyebrow="Client feedback"
          title={
            <>
              Real reviews, only when they can be{" "}
              <span className="editorial text-gold">verified.</span>
            </>
          }
          description="We publish customer feedback after Prime Nation Haul receives written approval from the customer. Nothing on this page is invented."
        />
        <Reveal delay={0.1}>
          <div className="relative border border-navy/10 bg-white p-8 sm:p-10">
            <Quote aria-hidden="true" className="h-8 w-8 text-gold/50" strokeWidth={1.3} />
            <p className="mt-6 text-[1.15rem] font-medium leading-relaxed text-navy">
              This is where approved client testimonials will appear.
            </p>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
              Prime Nation Haul does not display fabricated names, company logos, headshots, or star
              ratings. When feedback is approved for publication, it will be added here with the
              carrier&apos;s permission.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-navy/10 pt-6">
              <Link
                href="/testimonials"
                className="group inline-flex items-center gap-2 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:text-gold"
              >
                View testimonial page
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
              <span className="text-[0.72rem] uppercase tracking-[0.14em] text-muted/70">
                Awaiting approved feedback
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FaqPreview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                Answers before you{" "}
                <span className="editorial text-gold">get rolling.</span>
              </>
            }
            description="A few of the questions carriers ask most often. If yours is not here, the full FAQ covers onboarding, pricing, and services."
          />
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-4 border-t border-navy/10 pt-6">
              <a
                href={siteConfig.phone.href}
                data-ga-event="click_to_call"
                data-ga-label="Home FAQ phone"
                className="text-[1.1rem] font-semibold text-navy transition-colors hover:text-gold"
              >
                {siteConfig.phone.display}
              </a>
              <Button href="/faq" variant="outlineDark" size="sm" className="self-start">
                Read the full FAQ
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <FaqAccordion items={homeFaqs} idPrefix="home-faq" />
        </Reveal>
      </div>
    </section>
  );
}
