"use client";

import { Quote } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

/** Reviews OFF until real Google reviews exist — never invent testimonials. */
const SHOW_REVIEWS = false;

export function Testimonials() {
  const { t } = useLang();

  return (
    <section id="reviews" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
        <SectionHead kicker={t.reviews.badge} title={t.reviews.heading} />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={0.06 * i} y={22}>
              <article className="flex h-full flex-col rounded-[1.75rem] border border-brand-line bg-card p-8">
                <Quote className="size-7 text-brand-gold" strokeWidth={1.6} />
                <p className="mt-5 flex-1 font-body text-sm italic leading-relaxed text-foreground/60">
                  {SHOW_REVIEWS ? "" : t.reviews.placeholder}
                </p>
                <div className="mt-6">
                  <p className="font-body text-sm font-semibold text-brand-ink">
                    {SHOW_REVIEWS ? "" : t.reviews.namePlaceholder}
                  </p>
                  <p className="font-body text-xs text-foreground/50">
                    {SHOW_REVIEWS ? "" : t.reviews.rolePlaceholder}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
