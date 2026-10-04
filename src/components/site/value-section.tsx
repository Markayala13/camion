"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ValueSection() {
  const { t } = useLang();

  return (
    <section id="why" className="scroll-mt-24 bg-brand-purple-deep text-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <SectionHead
          kicker={t.value.label}
          title={t.value.heading}
          sub={t.value.body}
          tone="dark"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {t.value.pillars.map((p, i) => (
            <Reveal key={p.t} delay={0.06 * i} y={22}>
              <article className="h-full rounded-2xl border border-brand-cream/12 bg-brand-cream/[0.04] p-7">
                <span className="font-heading text-5xl text-brand-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-xl uppercase leading-tight text-brand-cream">
                  {p.t}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-brand-cream/70">
                  {p.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
