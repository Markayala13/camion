"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProcessSection() {
  const { t } = useLang();

  return (
    <section id="how" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <SectionHead kicker={t.process.label} title={t.process.heading} sub={t.process.sub} />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {t.process.steps.map((s, i) => (
            <Reveal
              key={s.t}
              delay={0.05 * i}
              y={22}
              className={i === 4 ? "col-span-2 lg:col-span-1" : ""}
            >
              <article className="h-full overflow-hidden rounded-2xl border border-brand-line bg-card shadow-sm">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 flex size-8 items-center justify-center rounded-full bg-brand-gold font-heading text-sm text-brand-ink shadow">
                    {i + 1}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-sm uppercase leading-tight text-brand-ink">
                    {s.t}
                  </h3>
                  <p className="mt-2 font-body text-[13px] leading-snug text-foreground/70">
                    {s.d}
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
