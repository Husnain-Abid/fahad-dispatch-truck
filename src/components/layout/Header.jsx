"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { primaryNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { serviceDetails } from "@/data/services";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMobileOpen(false);
      setServicesOpen(false);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!servicesOpen) return undefined;
    const onPointerDown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) setServicesOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        dropdownButtonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-ink/95 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-b border-white/[0.06] bg-ink/40 backdrop-blur-[2px]",
        )}
      >
        <div className="shell">
          <div
            className={cn(
              "flex items-center justify-between gap-6 transition-all duration-500",
              scrolled ? "h-[70px]" : "h-[86px]",
            )}
          >
            <Logo tone="light" />

            <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
              {primaryNav.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      ref={dropdownButtonRef}
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      onClick={() => setServicesOpen((open) => !open)}
                      className={cn(
                        "flex items-center gap-1.5 px-3.5 py-2 text-[0.82rem] font-medium transition-colors",
                        isActive(item.href) ? "text-gold" : "text-white/75 hover:text-white",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </button>
                    <div
                      id="services-menu"
                      hidden={!servicesOpen}
                      className={cn(
                        "absolute left-1/2 top-full w-[34rem] -translate-x-1/2 border border-white/12 bg-ink/98 p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl",
                        !servicesOpen && "pointer-events-none",
                      )}
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {serviceDetails.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group rounded-[2px] p-3.5 transition-colors hover:bg-white/[0.06]"
                          >
                            <span className="flex items-center justify-between text-[0.86rem] font-medium text-white">
                              {service.title}
                              <ArrowRight
                                aria-hidden="true"
                                className="h-3.5 w-3.5 -translate-x-1 text-gold opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                              />
                            </span>
                            <span className="mt-1 block text-[0.72rem] leading-snug text-white/45">
                              {service.tagline}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="group flex flex-col justify-between border border-white/10 bg-white/[0.03] p-3.5 transition-colors hover:border-gold/40"
                        >
                          <span className="text-[0.86rem] font-medium text-gold">All services</span>
                          <span className="mt-1 block text-[0.72rem] leading-snug text-white/45">
                            See the full dispatch and carrier support scope.
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "link-underline px-3.5 py-2 text-[0.82rem] font-medium transition-colors",
                      isActive(item.href) ? "text-gold" : "text-white/75 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={siteConfig.phone.href}
                data-ga-event="click_to_call"
                data-ga-label="Header phone"
                className="flex items-center gap-2 text-[0.82rem] font-medium text-white/75 transition-colors hover:text-gold"
              >
                <Phone aria-hidden="true" className="h-3.5 w-3.5 text-gold" />
                {siteConfig.phone.display}
              </a>
              <Button href="/get-a-quote" size="sm" gaEvent="cta_click" gaLabel="Header quote">
                Get a Quote
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={siteConfig.phone.href}
                aria-label={`Call Prime Nation Haul at ${siteConfig.phone.display}`}
                data-ga-event="click_to_call"
                data-ga-label="Mobile header phone"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-gold"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
              </a>
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white"
              >
                <span className="sr-only">Open navigation menu</span>
                <Menu aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!mobileOpen}
        className="fixed inset-0 z-[80] overflow-y-auto bg-ink lg:hidden"
      >
        <div className="shell flex h-[86px] items-center justify-between">
          <Logo tone="light" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => {
              setMobileOpen(false);
              menuButtonRef.current?.focus();
            }}
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white"
          >
            <span className="sr-only">Close navigation menu</span>
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile primary" className="shell pb-10">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {primaryNav.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-baseline justify-between py-4 text-lg font-medium transition-colors",
                    isActive(item.href) ? "text-gold" : "text-white hover:text-gold",
                  )}
                >
                  {item.label}
                  <span className="text-[0.62rem] tracking-[0.2em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="eyebrow text-gold">
              <span className="gold-rule" aria-hidden="true" />
              Services
            </p>
            <ul className="mt-4 grid gap-2">
              {serviceDetails.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between border border-white/10 px-4 py-3 text-[0.88rem] text-white/80 transition-colors hover:border-gold/40 hover:text-white"
                  >
                    {service.title}
                    <ArrowRight aria-hidden="true" className="h-4 w-4 text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-3">
            <Button href="/get-a-quote" size="lg">
              Get a Quote
            </Button>
            <Button href="/carrier-signup" variant="outline" size="lg">
              Carrier Signup
            </Button>
            <a
              href={siteConfig.phone.href}
              data-ga-event="click_to_call"
              data-ga-label="Mobile menu phone"
              className="mt-2 flex items-center justify-center gap-2 py-3 text-base font-medium text-white"
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
              {siteConfig.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
