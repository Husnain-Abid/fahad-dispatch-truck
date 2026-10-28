import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CTASection from "@/components/ui/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import { getServiceDetail, serviceDetails } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: `${service.title} for US Carriers`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Prime Nation Haul`,
      description: service.summary,
      url: `/services/${service.slug}`,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) notFound();

  const related = service.related
    .map((relatedSlug) => getServiceDetail(relatedSlug))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.tagline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <Button href={`/get-a-quote?service=${encodeURIComponent(service.title)}`} size="lg">
          Request this service
        </Button>
        <Button href="/services" variant="outline" size="lg">
          All services
        </Button>
      </PageHero>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-gold">
                <span className="gold-rule" aria-hidden="true" />
                Overview
              </p>
              <h2 className="mt-5 text-[clamp(1.7rem,3.3vw,2.5rem)] font-semibold leading-[1.1] text-navy">
                {service.tagline}
              </h2>
              <div className="mt-5 space-y-4 text-[0.96rem] leading-relaxed text-muted">
                {service.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-12">
                <h2 className="text-[1.35rem] font-semibold text-navy">What this service includes</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border border-navy/10 bg-offwhite p-4 text-[0.86rem] leading-relaxed text-navy"
                    >
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-12">
                <h2 className="text-[1.35rem] font-semibold text-navy">How the process works</h2>
                <ol className="mt-5 divide-y divide-navy/10 border-y border-navy/10">
                  {service.steps.map((step, index) => (
                    <li key={step.title} className="flex gap-5 py-5">
                      <span className="editorial text-[1.7rem] leading-none text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[1rem] font-semibold text-navy">{step.title}</h3>
                        <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex items-start gap-3 border border-gold/35 bg-gold/[0.07] p-5">
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy">
                    Scope note
                  </p>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-navy/80">{service.note}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden border border-navy/10 bg-navy">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="border border-navy/10 bg-offwhite p-6">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  At a glance
                </p>
                <dl className="mt-4 space-y-3 text-[0.85rem]">
                  <div className="flex items-center justify-between gap-4 border-b border-navy/10 pb-2.5">
                    <dt className="text-muted">Service type</dt>
                    <dd className="text-right font-medium text-navy">{service.eyebrow}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-navy/10 pb-2.5">
                    <dt className="text-muted">Coverage</dt>
                    <dd className="text-right font-medium text-navy">United States</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">Pricing</dt>
                    <dd className="text-right font-medium text-navy">Custom quote</dd>
                  </div>
                </dl>
                <div className="mt-5 border-t border-navy/10 pt-5">
                  <a
                    href={siteConfig.phone.href}
                    data-ga-event="click_to_call"
                    data-ga-label={`${service.title} sidebar phone`}
                    className="inline-flex items-center gap-2 text-[1rem] font-semibold text-navy transition-colors hover:text-gold"
                  >
                    <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
                    {siteConfig.phone.display}
                  </a>
                </div>
              </div>
            </Reveal>

            {related.length ? (
              <Reveal delay={0.1}>
                <div className="border border-navy/10 bg-white p-6">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-navy">
                    Related services
                  </p>
                  <ul className="mt-4 space-y-3">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${item.slug}`}
                          className="group flex items-center justify-between gap-3 text-[0.88rem] font-medium text-navy transition-colors hover:text-gold"
                        >
                          {item.title}
                          <ArrowRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null}

            <Reveal delay={0.15}>
              <div className="border border-navy/10 bg-ink p-6 text-white">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Ready to start?
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/70">
                  Request {service.title.toLowerCase()} and we will confirm fit, scope, and pricing
                  for your operation.
                </p>
                <Button
                  href={`/get-a-quote?service=${encodeURIComponent(service.title)}`}
                  size="sm"
                  className="mt-5 w-full"
                >
                  Get a Quote
                </Button>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CTASection
        eyebrow="Keep moving"
        title="Questions about how this works for your truck?"
        description="Talk it through with our dispatch team. We will tell you what we can handle and where another professional should be involved."
        primaryLabel="Get a Quote"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
