"use client";

import { Reveal } from "./reveal";
import { BlurText } from "./blur-text";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

type Props = {
  kicker: string;
  title: string;
  sub?: string;
  tone?: Tone;
  className?: string;
};

/**
 * Section header: a hazard-bar kicker + a bold Archivo Black heading.
 * `tone="dark"` flips text to cream for purple / ink bands.
 */
export function SectionHead({ kicker, title, sub, tone = "light", className }: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal>
        <span className="flex items-center gap-3">
          <span className="hazard-sm h-3 w-12 rounded-sm" aria-hidden />
          <span
            className={cn(
              "text-xs font-bold uppercase tracking-[0.18em]",
              dark ? "text-brand-gold" : "text-brand-purple",
            )}
          >
            {kicker}
          </span>
        </span>
      </Reveal>
      <h2
        className={cn(
          "mt-5 font-heading text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-[3.5rem]",
          dark ? "text-brand-cream" : "text-brand-ink",
        )}
      >
        <BlurText text={title} by="word" stagger={0.07} />
      </h2>
      {sub && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 max-w-xl font-body text-base leading-relaxed",
              dark ? "text-brand-cream/75" : "text-foreground/70",
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
