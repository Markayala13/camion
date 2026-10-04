"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

export function ProofSection() {
  const { t } = useLang();

  return (
    <section id="fleets" className="scroll-mt-24 bg-brand-ink text-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <SectionHead
          kicker={t.proof.label}
          title={t.proof.heading}
          sub={t.proof.body}
          tone="dark"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.proof.imgs.map((img, i) => (
            <Reveal key={img.src} delay={0.06 * i} y={22}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-cream/15">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-2xl border-l-4 border-brand-gold bg-brand-cream/[0.04] p-7 sm:p-9">
            <p className="max-w-3xl font-body text-lg font-medium leading-relaxed text-brand-cream sm:text-xl">
              {t.proof.fleet}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
