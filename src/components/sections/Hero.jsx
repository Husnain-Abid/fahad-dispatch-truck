"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { Check, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

const ease = [0.22, 1, 0.36, 1];

const supportPoints = [
  "Load sourcing matched to your equipment",
  "Rate conversations confirmed with you",
  "Paperwork and settlement documents organized",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const laneRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !laneRef.current) return undefined;

    const context = gsap.context(() => {
      gsap.to(laneRef.current, {
        strokeDashoffset: -96,
        duration: 4.5,
        repeat: -1,
        ease: "none",
      });
    });

    return () => context.revert();
  }, []);

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay, ease },
        };

  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-ink pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      {reduce ? (
        <div className="absolute inset-0">
          <Image
            src="/images/hero-interstate.png"
            alt="Semi-truck with a dry van trailer traveling on an interstate highway at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        </div>
      ) : (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <Image
            src="/images/hero-interstate.png"
            alt="Semi-truck with a dry van trailer traveling on an interstate highway at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        </motion.div>
      )}

      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />

      <div className="shell relative z-10">
        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="max-w-2xl">
            <motion.p className="eyebrow text-gold" {...fade(0.15)}>
              <span className="gold-rule" aria-hidden="true" />
              United States · Dispatch & Carrier Support
            </motion.p>

            <motion.h1
              className="mt-6 text-[clamp(2.6rem,6.4vw,4.9rem)] font-semibold leading-[0.98] text-white"
              {...rise(0.25)}
            >
              Smarter Dispatching.
              <span className="mt-1 block">
                Stronger{" "}
                <span className="editorial text-gold">Hauling.</span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-7 max-w-xl text-[1rem] leading-relaxed text-white/65 sm:text-[1.08rem]"
              {...rise(0.38)}
            >
              Reliable truck dispatching and carrier support designed to help owner-operators and
              fleets navigate their day-to-day operations with confidence.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              {...rise(0.5)}
            >
              <Button href="/get-a-quote" size="lg" gaEvent="cta_click" gaLabel="Hero quote">
                Get a Quote
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                gaEvent="cta_click"
                gaLabel="Hero services"
              >
                Explore Services
              </Button>
            </motion.div>

            <motion.div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3" {...fade(0.66)}>
              <a
                href={siteConfig.phone.href}
                data-ga-event="click_to_call"
                data-ga-label="Hero phone"
                className="inline-flex items-center gap-2.5 text-[0.86rem] font-medium text-white/80 transition-colors hover:text-gold"
              >
                <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
                {siteConfig.phone.display}
              </a>
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-white/40">
                Owner-operators · Small fleets · Large fleets
              </p>
            </motion.div>
          </div>

          <motion.aside
            className="relative border border-white/12 bg-navy/85 p-6 backdrop-blur-md sm:p-7 lg:mb-2"
            initial={reduce ? false : { opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent" />
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Inside the dispatch desk
            </p>
            <p className="mt-4 text-[1.4rem] font-medium leading-snug text-white">
              Five years of hands-on dispatching, built around your operation.
            </p>
            <ul className="mt-6 space-y-3.5">
              {supportPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[0.86rem] text-white/65">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-gold/50">
                    <Check aria-hidden="true" className="h-2.5 w-2.5 text-gold" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-[0.68rem] uppercase tracking-[0.18em] text-white/40">
                Years in dispatching
              </span>
              <span className="text-2xl font-semibold text-white">
                05<span className="text-gold">.</span>
              </span>
            </div>
          </motion.aside>
        </div>

        <div className="relative mt-14 lg:mt-20">
          <svg
            className="h-2 w-full"
            viewBox="0 0 1200 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={laneRef}
              d="M0 4H1200"
              stroke="#C6A45C"
              strokeOpacity="0.55"
              strokeWidth="2"
              strokeDasharray="6 10"
            />
          </svg>
          <div className="mt-5 flex flex-col gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <span>Dispatcher support from booking to settlement</span>
            <span className="text-white/25">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
