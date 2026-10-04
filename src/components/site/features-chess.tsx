"use client";

import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import { BeforeAfter } from "./before-after";
import { cn } from "@/lib/utils";

export function FeaturesChess() {
  const { t } = useLang();
  const hrefs = ["#galeria", "#how"];

  return (
    <section id="work" className="scroll-mt-24 bg-brand-ink text-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <SectionHead kicker={t.chess.badge} title={t.chess.heading} tone="dark" />

        <div className="mt-14 flex flex-col gap-16 lg:gap-24">
          {t.chess.rows.map((row, i) => (
            <div
              key={row.t}
              className={cn(
                "flex flex-col items-center gap-8 lg:gap-14",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
              )}
            >
              {/* Text */}
              <Reveal className="w-full lg:w-1/2" y={24}>
                <h3 className="font-heading text-2xl uppercase leading-tight text-brand-cream sm:text-3xl">
                  {row.t}
                </h3>
                <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-brand-cream/70 sm:text-base">
                  {row.d}
                </p>
                <a
                  href={hrefs[i]}
                  data-press
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 font-body text-sm font-bold text-brand-ink transition-colors hover:bg-brand-gold-deep"
                >
                  {row.cta}
                  <ArrowUpRight className="size-4" />
                </a>
              </Reveal>

              {/* Image */}
              <Reveal className="w-full lg:w-1/2" delay={0.08} y={24}>
                <div className="overflow-hidden rounded-2xl border-[3px] border-brand-cream/15 shadow-xl">
                  <BeforeAfter
                    before={row.before}
                    after={row.after}
                    altB={row.altB}
                    altA={row.altA}
                    labelBefore={t.gallery.before}
                    labelAfter={t.gallery.after}
                  />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
