"use client";

import { SprayCan, Truck, DoorOpen, Flame, ArrowUpRight, type LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { BlurText } from "./blur-text";

const ICONS: Record<string, LucideIcon> = {
  spray: SprayCan,
  truck: Truck,
  door: DoorOpen,
  flame: Flame,
};

export function FeaturesGrid() {
  const { t } = useLang();

  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
        {/* Purple banner with pills */}
        <Reveal y={24}>
          <div className="rounded-[2rem] bg-brand-purple px-6 py-10 text-brand-cream sm:px-10 sm:py-12">
            <h2 className="text-center font-heading text-5xl uppercase leading-[0.9] text-brand-cream sm:text-6xl lg:text-7xl">
              <BlurText text={t.grid.heading} by="word" stagger={0.06} />
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {t.grid.items.map((item) => (
                <a
                  key={item.t}
                  href="#contact"
                  data-press
                  className="group inline-flex items-center gap-2 rounded-full bg-card py-1.5 pl-4 pr-1.5 font-body text-sm font-semibold text-brand-ink shadow-sm transition-transform"
                >
                  {item.short}
                  <span className="flex size-7 items-center justify-center rounded-full bg-brand-gold text-brand-ink transition-transform duration-300 ease-out [@media(hover:hover)]:group-hover:rotate-45">
                    <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Editorial list */}
        <div className="mt-12 border-t border-brand-ink/12">
          {t.grid.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? SprayCan;
            return (
              <Reveal key={item.t} delay={0.05 * i} y={20}>
                <div className="grid grid-cols-[4rem_1fr] items-center gap-x-5 border-b border-brand-ink/12 py-7 sm:grid-cols-[8rem_1fr] sm:gap-x-8 lg:py-9">
                  <span className="stencil stencil-gold font-heading text-5xl leading-none sm:text-7xl lg:text-8xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-purple">
                        <Icon className="size-5 text-brand-cream" strokeWidth={2} />
                      </span>
                      <h3 className="font-heading text-xl uppercase leading-tight text-brand-ink sm:text-2xl">
                        {item.t}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-xl font-body text-[15px] leading-relaxed text-foreground/70">
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
