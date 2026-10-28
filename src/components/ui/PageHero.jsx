import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  children,
  image,
  imageAlt = "",
  align = "left",
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        </>
      ) : null}
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-24 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(198,164,92,0.16),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="shell relative">
        <Breadcrumbs items={breadcrumbs} />
        <div className={cn("mt-8 max-w-3xl lg:mt-10", align === "center" && "mx-auto text-center")}>
          <Reveal>
            <p className="eyebrow text-gold">
              <span className="gold-rule" aria-hidden="true" />
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-[clamp(2.3rem,5.4vw,4.1rem)] font-semibold leading-[1.02] text-white">
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-white/65 sm:text-[1.08rem]">
                {description}
              </p>
            </Reveal>
          ) : null}
          {children ? (
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">{children}</div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
