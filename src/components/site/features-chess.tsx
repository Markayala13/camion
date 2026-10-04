"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import { ArrowButton } from "./bits";
import { BeforeAfter } from "./before-after";
import { cn } from "@/lib/utils";

export function FeaturesChess() {
  const { t } = useLang();
  const hrefs = ["#galeria", "#how"];

  return (
    <section id="work" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
        <SectionHead kicker={t.chess.badge} title={t.chess.heading} />

        <div className="mt-12 flex flex-col gap-10 lg:gap-16">
          {t.chess.rows.map((row, i) => (
            <div
              key={row.t}
              className={cn(
                "flex flex-col items-center gap-6 lg:gap-12",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
              )}
            >
              <Reveal className="w-full lg:w-[42%]" y={24}>
                <h3 className="font-heading text-3xl uppercase leading-[0.95] text-brand-ink sm:text-4xl">
                  {row.t}
                </h3>
                <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-foreground/70 sm:text-base">
                  {row.d}
                </p>
                <div className="mt-7">
                  <ArrowButton href={hrefs[i]} variant="purple">
                    {row.cta}
                  </ArrowButton>
                </div>
              </Reveal>

              <Reveal className="w-full lg:w-[58%]" delay={0.08} y={24}>
                <div className="overflow-hidden rounded-[2rem] border-4 border-brand-ink shadow-xl">
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
