"use client";

import { Reveal } from "./reveal";
import { BlurText } from "./blur-text";
import { Chip } from "./bits";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

type Props = {
  kicker: string;
  title: string;
  sub?: string;
  tone?: Tone;
  className?: string;
  titleClassName?: string;
};

/**
 * Bradford-style section header: a pill chip on top, then a giant Anton
 * headline. `tone="dark"` flips text to cream for purple / ink panels.
 */
export function SectionHead({
  kicker,
  title,
  sub,
  tone = "light",
  className,
  titleClassName,
}: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal>
        <Chip tone={dark ? "cream" : "muted"}>{kicker}</Chip>
      </Reveal>
      <h2
        className={cn(
          "mt-5 font-heading text-5xl uppercase leading-[0.88] sm:text-6xl lg:text-7xl",
          dark ? "text-brand-cream" : "text-brand-ink",
          titleClassName,
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
