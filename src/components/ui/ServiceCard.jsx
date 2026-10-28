import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const detailTitleMap = {
  "Load Booking": "/services/load-booking",
  "Rate Negotiation": "/services/rate-negotiation",
  "ELD Setup & Management": "/services/eld-management",
  "DOT Compliance Assistance": "/services/dot-compliance",
  "24/7 Dispatch Support": "/services/carrier-support",
};

export function getServiceHref(service) {
  if (detailTitleMap[service.title]) return detailTitleMap[service.title];
  return `/get-a-quote?service=${encodeURIComponent(service.title)}`;
}

export default function ServiceCard({ service, index, tone = "light" }) {
  const isDark = tone === "dark";
  const href = getServiceHref(service);

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col border p-7 transition-all duration-400 sm:p-8",
        isDark
          ? "border-white/10 bg-white/[0.025] hover:border-gold/50 hover:bg-white/[0.05]"
          : "border-navy/10 bg-white hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_60px_-38px_rgba(16,29,50,0.45)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center border transition-colors duration-300",
            isDark
              ? "border-gold/35 bg-gold/10 text-gold"
              : "border-gold/40 bg-offwhite text-gold group-hover:bg-gold group-hover:text-ink",
          )}
        >
          <Icon name={service.icon} className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <span
          className={cn(
            "text-[0.66rem] font-medium tracking-[0.24em]",
            isDark ? "text-white/30" : "text-muted/60",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className={cn(
          "mt-7 text-[1.2rem] font-semibold leading-snug",
          isDark ? "text-white" : "text-navy",
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "mt-3 flex-1 text-[0.9rem] leading-relaxed",
          isDark ? "text-white/60" : "text-muted",
        )}
      >
        {service.summary}
      </p>

      <span
        className={cn(
          "mt-7 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors",
          isDark ? "text-gold" : "text-navy group-hover:text-gold",
        )}
      >
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
