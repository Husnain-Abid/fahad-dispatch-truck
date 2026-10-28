import Image from "next/image";
import { Check, Compass, MessageSquare, ShieldCheck, Gauge } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "About Prime Nation Haul",
  description:
    "Learn about Prime Nation Haul, a US truck dispatching and carrier support company with five years of dispatching experience, built on transparent communication.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Prime Nation Haul",
    description:
      "Five years of dispatching experience serving owner-operators, small fleets, and large fleets across the United States.",
    url: "/about",
    images: ["/images/fleet-yard.png"],
  },
};

const values = [
  {
    icon: MessageSquare,
    title: "Transparent communication",
    body: "Load details, rates, and requirements are shared plainly. If something changes, you hear it from us — not after the fact.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable follow-through",
    body: "Confirmations, check calls, and documents are handled when they should be. Reliability is a habit, not a slogan.",
  },
  {
    icon: Gauge,
    title: "Operational efficiency",
    body: "We reduce the back-and-forth so your truck spends less time waiting on answers and more time moving.",
  },
  {
    icon: Compass,
    title: "Carrier-first decisions",
    body: "You make the call on your truck. Our job is to give you the context, options, and support to make it confidently.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Prime Nation Haul"
        title={
          <>
            A dispatch partner built on{" "}
            <span className="editorial text-gold">clear communication.</span>
          </>
        }
        description="Prime Nation Haul is a US-focused truck dispatching and carrier support company. We help owner-operators, small fleets, and large fleets keep freight, communication, and paperwork moving."
        breadcrumbs={[{ label: "About", href: "/about" }]}
        image="/images/fleet-yard.png"
        imageAlt="Semi-trucks parked in a terminal lot at golden hour"
      >
        <Button href="/get-a-quote" size="lg">
          Get a Quote
        </Button>
        <Button href="/services" variant="outline" size="lg">
          Explore Services
        </Button>
      </PageHero>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  Five years of dispatching experience, focused on the{" "}
                  <span className="editorial text-gold">details.</span>
                </>
              }
              description="Dispatching is a daily practice: finding freight that fits, negotiating carefully, and keeping the paperwork straight. Prime Nation Haul was built for carriers who want that work handled by someone who understands how the road actually runs."
            />
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-muted">
              <p>
                We work with owner-operators, small fleets, and larger fleet companies. Each
                engagement starts with a conversation about your equipment, your lanes, and the level
                of support you want. From there, we agree on the scope in plain terms before
                dispatching begins.
              </p>
              <p>
                Our approach is simple: share what we know, confirm what we book, and keep the
                documents organized. Carriers stay in control of their trucks and their business
                decisions, while our desk handles the coordination around them.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="outlineDark">
                Talk to our team
              </Button>
              <a
                href={siteConfig.phone.href}
                data-ga-event="click_to_call"
                data-ga-label="About page phone"
                className="inline-flex items-center gap-2 self-center text-[0.9rem] font-semibold text-navy transition-colors hover:text-gold"
              >
                {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy">
                <Image
                  src="/images/dispatch-workstation.png"
                  alt="Dispatcher workstation with route maps displayed on monitors"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden max-w-[15rem] border border-gold/40 bg-white p-5 sm:block">
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-gold">Our focus</p>
                <p className="mt-2 text-[0.92rem] font-medium leading-snug text-navy">
                  Freight, rates, and paperwork handled with your approval at every step.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow text-gold">
                <span className="gold-rule" aria-hidden="true" />
                Mission
              </p>
              <h2 className="mt-5 text-[clamp(1.7rem,3.4vw,2.6rem)] font-semibold leading-[1.1] text-white">
                Make the dispatch side of trucking feel handled.
              </h2>
              <p className="mt-5 text-[0.96rem] leading-relaxed text-white/60">
                Our mission is to give carriers dependable dispatch support with honest
                communication and organized work — so the business side of the truck is not another
                thing competing for attention on a long day.
              </p>
              <div className="mt-8 border-l-2 border-gold/60 pl-5">
                <p className="text-[0.95rem] italic leading-relaxed text-white/70">
                  &ldquo;We will not promise a load count, a revenue figure, or a result we cannot
                  verify. We will tell you how we work, and then do the work.&rdquo;
                </p>
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-white/35">
                  Prime Nation Haul operating principle
                </p>
              </div>
            </Reveal>

            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/35">Our values</p>
              <RevealGroup className="mt-5 grid gap-px overflow-hidden border border-white/10 sm:grid-cols-2">
                {values.map(({ icon: IconComponent, title, body }) => (
                  <RevealItem key={title} className="h-full">
                    <div className="h-full bg-white/[0.03] p-6">
                      <IconComponent aria-hidden="true" className="h-5 w-5 text-gold" strokeWidth={1.6} />
                      <h3 className="mt-4 text-[1rem] font-medium text-white">{title}</h3>
                      <p className="mt-2 text-[0.85rem] leading-relaxed text-white/55">{body}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Commitment"
              title={
                <>
                  Transparent by{" "}
                  <span className="editorial text-gold">default.</span>
                </>
              }
              description="A dispatching relationship works when both sides know what to expect. These are the commitments we bring to each carrier conversation."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Load details shared before a booking is confirmed",
                "Rates and accessorials stated clearly, not implied",
                "Documents kept organized and easy to produce",
                "Service scope and pricing agreed in writing",
                "Questions answered directly, including the ones we cannot take on",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-navy/10 pb-4 text-[0.92rem] text-navy">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="border border-navy/10 bg-offwhite p-7 sm:p-9">
              <p className="eyebrow text-gold">
                <span className="gold-rule" aria-hidden="true" />
                Clear boundaries
              </p>
              <h3 className="mt-4 text-[1.25rem] font-semibold text-navy">
                What we are — and what we are not
              </h3>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                Prime Nation Haul is a truck dispatching and carrier support company. We are not a law
                firm, an insurance provider or agency, a factoring company, a permit authority, or a
                government agency. Our compliance, insurance, factoring, and permit services are
                administrative assistance only.
              </p>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">
                Decisions about coverage, funding, legal terms, and regulatory obligations remain with
                you and the licensed professionals or authorities you choose to work with. We will
                always tell you when a question is outside our scope.
              </p>
              <div className="mt-6 border-t border-navy/10 pt-5">
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted/80">
                  You will never be asked for
                </p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-navy">
                  Social Security numbers, bank account details, passwords, or sensitive identity
                  documents through our website forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Let us talk about your trucks, your lanes, and your next load."
        description="A short conversation is usually enough to know whether we are the right dispatch partner for your operation."
        primaryLabel="Get a Quote"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
