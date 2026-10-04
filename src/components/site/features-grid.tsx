"use client";

import { SprayCan, Truck, DoorOpen, Flame, type LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";

const ICONS: Record<string, LucideIcon> = {
  spray: SprayCan,
  truck: Truck,
  door: DoorOpen,
  flame: Flame,
};

export function FeaturesGrid() {
  const { t } = useLang();

  return (
    <section id="services" className="scroll-mt-24 bg-brand-purple text-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <SectionHead kicker={t.grid.badge} title={t.grid.heading} tone="dark" />

        <div className="mt-14 border-t border-brand-cream/15">
          {t.grid.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? SprayCan;
            return (
              <Reveal key={item.t} delay={0.05 * i} y={20}>
                <div className="grid grid-cols-[4.5rem_1fr] items-center gap-x-5 border-b border-brand-cream/15 py-7 sm:grid-cols-[9rem_1fr] sm:gap-x-8 lg:py-9">
                  {/* Oversized stencil number */}
                  <span className="stencil stencil-gold font-heading text-5xl leading-none sm:text-7xl lg:text-8xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Copy with inline icon */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-gold">
                        <Icon className="size-5 text-brand-ink" strokeWidth={2} />
                      </span>
                      <h3 className="font-heading text-lg uppercase leading-tight text-brand-cream sm:text-2xl">
                        {item.t}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-xl font-body text-[15px] leading-relaxed text-brand-cream/70">
                      {item.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
