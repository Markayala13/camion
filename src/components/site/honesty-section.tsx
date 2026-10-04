"use client";

import { Check, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function HonestySection() {
  const { t } = useLang();

  return (
    <section id="honesty" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <SectionHead kicker={t.honesty.label} title={t.honesty.heading} />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Yes */}
          <Reveal y={22}>
            <div className="h-full rounded-2xl border-2 border-brand-purple/20 bg-card p-7 shadow-sm sm:p-8">
              <h3 className="font-heading text-xl uppercase text-brand-purple">
                {t.honesty.yesTitle}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {t.honesty.yes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/12">
                      <Check className="size-3.5 text-brand-purple" strokeWidth={3} />
                    </span>
                    <span className="font-body text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* No */}
          <Reveal delay={0.08} y={22}>
            <div className="h-full rounded-2xl border border-brand-line bg-muted/50 p-7 sm:p-8">
              <h3 className="font-heading text-xl uppercase text-foreground/45">
                {t.honesty.noTitle}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {t.honesty.no.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-ink/8">
                      <X className="size-3.5 text-foreground/40" strokeWidth={3} />
                    </span>
                    <span className="font-body text-sm text-foreground/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl font-body text-sm italic text-foreground/60">
            {t.honesty.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
