import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "btn-shine text-ink shadow-[0_10px_30px_-14px_rgba(198,164,92,0.85)] hover:shadow-[0_16px_40px_-16px_rgba(198,164,92,0.95)] hover:brightness-[1.04]",
  dark: "bg-navy text-white hover:bg-slateblue shadow-[0_10px_30px_-18px_rgba(10,18,32,0.8)]",
  outline:
    "border border-white/25 bg-white/[0.03] text-white hover:border-gold/70 hover:bg-white/[0.07]",
  outlineDark:
    "border border-navy/20 bg-white text-navy hover:border-gold hover:bg-offwhite",
  ghost:
    "text-navy hover:text-gold underline decoration-navy/20 decoration-1 underline-offset-4 hover:decoration-gold",
  ghostLight:
    "text-white/80 hover:text-gold underline decoration-white/25 decoration-1 underline-offset-4 hover:decoration-gold",
};

const sizes = {
  sm: "px-4 py-2.5 text-[0.78rem]",
  md: "px-5 py-3.5 text-[0.82rem]",
  lg: "px-6 py-4 text-[0.86rem]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon = "arrow",
  gaEvent,
  gaLabel,
  ...props
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-[2px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {icon === "arrow" ? (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      ) : null}
      {icon === "external" ? (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      ) : null}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          data-ga-event={gaEvent}
          data-ga-label={gaLabel}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        data-ga-event={gaEvent}
        data-ga-label={gaLabel}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      data-ga-event={gaEvent}
      data-ga-label={gaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
