import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className = "",
  as: Tag = "h2",
  children,
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", isDark ? "text-gold" : "text-gold")}>
          <span className="gold-rule" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "mt-5 text-[clamp(1.9rem,4vw,3.1rem)] font-semibold leading-[1.05]",
          isDark ? "text-white" : "text-navy",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-[1.05rem]",
            isDark ? "text-white/65" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
