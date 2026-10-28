import { Quote, BadgeCheck, MessageSquare, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import { approvedTestimonials } from "@/data/testimonials";

export const metadata = {
  title: "Client Testimonials",
  description:
    "Prime Nation Haul publishes client testimonials only after receiving written approval. Approved customer feedback will appear here.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Client Testimonials | Prime Nation Haul",
    description:
      "Approved client feedback about Prime Nation Haul dispatching and carrier support will be published here.",
    url: "/testimonials",
    images: ["/images/dispatch-workstation.jpg"],
  },
  robots: { index: false, follow: true },
};

const placeholders = [1, 2, 3];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client feedback"
        title={
          <>
            Feedback we can stand{" "}
            <span className="editorial text-gold">behind.</span>
          </>
        }
        description="Prime Nation Haul publishes reviews only with the customer's written approval. No names, ratings, or quotes are displayed on this site until that approval is on file."
        breadcrumbs={[{ label: "Testimonials", href: "/testimonials" }]}
        image="/images/dispatch-workstation.jpg"
        imageAlt="Freight dispatching workstation in a low-lit office"
      >
        <Button href="/contact" size="lg">
          Talk With Our Team
        </Button>
        <Button href="/services" variant="outline" size="lg">
          Explore Services
        </Button>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <div className="shell">
          {approvedTestimonials.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {approvedTestimonials.map((testimonial) => (
                <blockquote
                  key={`${testimonial.name}-${testimonial.quote.slice(0, 12)}`}
                  className="border border-navy/10 bg-offwhite p-8"
                >
                  <Quote aria-hidden="true" className="h-7 w-7 text-gold/60" />
                  <p className="mt-5 text-[1.02rem] leading-relaxed text-navy">
                    {testimonial.quote}
                  </p>
                  <footer className="mt-6 border-t border-navy/10 pt-4 text-[0.8rem] text-muted">
                    <span className="font-medium text-navy">{testimonial.name}</span>
                    {testimonial.company ? ` · ${testimonial.company}` : ""}
                  </footer>
                </blockquote>
              ))}
            </div>
          ) : (
            <>
              <Reveal>
                <div className="mx-auto max-w-3xl border border-navy/10 bg-offwhite p-8 text-center sm:p-12">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center border border-gold/50 bg-white text-gold">
                    <MessageSquare aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-6 text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-navy">
                    Approved client feedback will be published here.
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted">
                    We are not displaying reviews yet. Prime Nation Haul does not invent customer
                    names, company names, headshots, star ratings, or performance claims. When a
                    carrier approves their feedback for publication, it will be added to this page.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <Button href="/contact" variant="outlineDark">
                      Share feedback
                    </Button>
                    <Button href="/get-a-quote">Get a Quote</Button>
                  </div>
                </div>
              </Reveal>

              <div className="mt-16">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                  <SectionHeading
                    eyebrow="Layout preview"
                    title={
                      <>
                        How approved reviews will{" "}
                        <span className="editorial text-gold">appear.</span>
                      </>
                    }
                    description="The cards below are layout placeholders, not customer feedback."
                  />
                  <span className="inline-flex items-center gap-2 border border-navy/15 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    <BadgeCheck aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
                    Preview only — not a real review
                  </span>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {placeholders.map((item) => (
                    <div
                      key={item}
                      className="relative border border-dashed border-navy/20 bg-white p-6"
                    >
                      <span className="absolute -top-2.5 left-4 bg-white px-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-muted">
                        Placeholder {String(item).padStart(2, "0")}
                      </span>
                      <Quote aria-hidden="true" className="h-6 w-6 text-navy/15" />
                      <p className="mt-4 text-[0.9rem] leading-relaxed text-navy/35">
                        An approved client quote will appear in this space once Prime Nation Haul has
                        written permission to publish it.
                      </p>
                      <div className="mt-6 border-t border-navy/10 pt-4">
                        <div className="h-2.5 w-24 bg-navy/10" />
                        <div className="mt-2 h-2 w-32 bg-navy/[0.06]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <Reveal delay={0.08}>
            <div className="mt-16 grid gap-6 border-t border-navy/10 pt-10 sm:grid-cols-3">
              {[
                {
                  title: "Written approval first",
                  body: "A review is published only after the customer confirms the exact wording in writing.",
                },
                {
                  title: "No edited claims",
                  body: "We do not add performance statistics, revenue figures, or claims the customer did not approve.",
                },
                {
                  title: "Honest empty state",
                  body: "Until approved feedback exists, this page stays honest instead of showing invented reviews.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-gold" strokeWidth={1.6} />
                  <h3 className="mt-3 text-[0.98rem] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Be the first to know"
        title="Let the work speak for itself."
        description="Start a conversation about dispatch support and see how we handle the details before, during, and after a load."
        primaryLabel="Get a Quote"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
