import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className = "", size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Prime Nation Haul monogram"
      className={cn("shrink-0", className)}
    >
      <rect x="1" y="1" width="46" height="46" rx="3" fill="#101D32" />
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="3"
        fill="none"
        stroke="#C6A45C"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
      <path d="M10 34.5 24 13l14 21.5h-6.4L24 23.6 16.4 34.5H10Z" fill="#C6A45C" />
      <path d="M19.2 30.2h9.6L24 22.4l-4.8 7.8Z" fill="#101D32" />
      <path d="M15 38.4h18" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1.4" />
      <path d="M20 41.4h8" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1.4" />
    </svg>
  );
}

export default function Logo({ tone = "light", className = "", href = "/" }) {
  const isLight = tone === "light";

  return (
    <Link
      href={href}
      aria-label="Prime Nation Haul — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <LogoMark size={42} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[0.98rem] font-semibold uppercase leading-none tracking-[0.2em] transition-colors sm:text-[1.05rem]",
            isLight ? "text-white" : "text-navy",
          )}
        >
          Prime Nation{" "}
          <span className={isLight ? "text-gold" : "text-gold"}>Haul</span>
        </span>
        <span
          className={cn(
            "mt-1.5 hidden text-[0.5rem] font-medium uppercase tracking-[0.26em] sm:block",
            isLight ? "text-white/50" : "text-muted",
          )}
        >
          Truck Dispatch &amp; Carrier Support
        </span>
      </span>
    </Link>
  );
}
