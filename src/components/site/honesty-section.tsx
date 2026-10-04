"use client";

import { Check, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function HonestySection() {
  const { t } = useLang();

  return (
    <section id="honesty" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
        <SectionHead kicker={t.honesty.label} title={t.honesty.heading} />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Yes — purple panel */}
          <Reveal y={22}>
            <div className="h-full rounded-[2rem] bg-brand-purple p-8 text-brand-cream sm:p-10">
              <h3 className="font-heading text-2xl uppercase text-brand-cream">
                {t.honesty.yesTitle}
              </h3>
              <ul className="mt-6 flex flex-col gap-3.5">
                {t.honesty.yes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-gold">
                      <Check className="size-3.5 text-brand-ink" strokeWidth={3} />
                    </span>
                    <span className="font-body text-[15px] text-brand-cream/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* No — light panel */}
          <Reveal delay={0.08} y={22}>
            <div className="h-full rounded-[2rem] border border-brand-line bg-card p-8 sm:p-10">
              <h3 className="font-heading text-2xl uppercase text-foreground/45">
                {t.honesty.noTitle}
              </h3>
              <ul className="mt-6 flex flex-col gap-3.5">
                {t.honesty.no.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-ink/8">
                      <X className="size-3.5 text-foreground/40" strokeWidth={3} />
                    </span>
                    <span className="font-body text-[15px] text-foreground/60">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-body text-sm italic text-foreground/55">{t.honesty.note}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
