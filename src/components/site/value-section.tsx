"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useLang, CONTACT } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { ArrowButton, Chip } from "./bits";

export function ValueSection() {
  const { t } = useLang();

  return (
    <section id="why" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
        {/* Bento row: quote panel + video panel */}
        <div className="grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" y={24}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-brand-purple p-8 text-brand-cream sm:p-10">
              <Quote className="absolute -right-4 -top-4 size-40 text-brand-cream/10" strokeWidth={1} />
              <div className="relative">
                <Chip tone="cream">{t.value.label}</Chip>
                <p className="mt-6 max-w-xl font-heading text-3xl uppercase leading-[0.95] text-brand-cream sm:text-4xl">
                  {t.value.heading}
                </p>
                <p className="mt-5 max-w-lg font-body text-[15px] leading-relaxed text-brand-cream/75">
                  {t.value.body}
                </p>
              </div>
              <div className="relative mt-8">
                <ArrowButton href={CONTACT.phoneHref} variant="gold">
                  {t.ui.callCta}
                </ArrowButton>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.08} y={24}>
            <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/npr-dump-after.jpg"
                alt="Isuzu NPR con caja dump terminada"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {t.value.pillars.map((p, i) => (
            <Reveal key={p.t} delay={0.05 * i} y={20}>
              <article className="h-full rounded-[1.75rem] border border-brand-line bg-card p-7">
                <span className="font-heading text-4xl text-brand-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-xl uppercase leading-tight text-brand-ink">
                  {p.t}
                </h3>
                <p className="mt-2.5 font-body text-sm leading-relaxed text-foreground/70">
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
