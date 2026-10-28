import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site-config";

export default function CTASection({
  eyebrow = "Next step",
  title,
  description,
  primaryLabel = "Get a Quote",
  primaryHref = "/get-a-quote",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
  showPhone = true,
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src="/images/road-night.jpg"
        alt="Interstate highway light trails at night"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-navy/70" />
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="shell relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-gold">
              <span className="gold-rule" aria-hidden="true" />
              {eyebrow}
            </p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.03] text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/60">
              {description}
            </p>
          </Reveal>
          <Reveal delay={0.12} className="lg:justify-self-end">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Button href={primaryHref} size="lg" gaEvent="cta_click" gaLabel={primaryLabel}>
                {primaryLabel}
              </Button>
              <Button
                href={secondaryHref}
                variant="outline"
                size="lg"
                gaEvent="cta_click"
                gaLabel={secondaryLabel}
              >
                {secondaryLabel}
              </Button>
              {showPhone ? (
                <a
                  href={siteConfig.phone.href}
                  data-ga-event="click_to_call"
                  data-ga-label="Final CTA phone"
                  className="mt-1 inline-flex items-center gap-2 text-[0.82rem] font-medium tracking-[0.08em] text-white/70 transition-colors hover:text-gold"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
                  {siteConfig.phone.display}
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
