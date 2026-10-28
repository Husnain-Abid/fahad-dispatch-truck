"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqAccordion({
  items,
  tone = "light",
  defaultOpen = 0,
  idPrefix,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const generatedId = useId();
  const prefix = idPrefix || `faq-${generatedId.replace(/[:]/g, "")}`;
  const reduce = useReducedMotion();
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "divide-y border-y",
        isDark ? "divide-white/10 border-white/10" : "divide-navy/10 border-navy/10",
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${prefix}-button-${index}`;
        const panelId = `${prefix}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={cn(
                  "group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors sm:py-6",
                  isDark ? "text-white hover:text-gold" : "text-navy hover:text-gold",
                )}
              >
                <span className="flex items-baseline gap-4">
                  <span
                    className={cn(
                      "hidden text-[0.66rem] font-medium tracking-[0.2em] sm:block",
                      isDark ? "text-gold/70" : "text-gold",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.98rem] font-medium leading-relaxed sm:text-[1.05rem]">
                    {item.question}
                  </span>
                </span>
                <span
                  className={cn(
                    "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border transition-colors",
                    isOpen
                      ? "border-gold bg-gold text-ink"
                      : isDark
                        ? "border-white/20 text-white/60 group-hover:border-gold/60"
                        : "border-navy/15 text-navy/60 group-hover:border-gold/70",
                  )}
                >
                  {isOpen ? (
                    <Minus aria-hidden="true" className="h-3.5 w-3.5" />
                  ) : (
                    <Plus aria-hidden="true" className="h-3.5 w-3.5" />
                  )}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "max-w-3xl pb-6 pl-0 text-[0.92rem] leading-relaxed sm:pl-10",
                      isDark ? "text-white/60" : "text-muted",
                    )}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
