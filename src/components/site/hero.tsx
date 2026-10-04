"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLang, CONTACT, waHref } from "@/lib/i18n";
import { ArrowButton, Chip } from "./bits";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(24px)" },
    animate: reduce ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  });

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Full-bleed hero video */}
      <div className="absolute inset-0 -z-10 bg-brand-ink">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-npr-after.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark mesh so the title really pops */}
        <div className="absolute inset-0 bg-brand-ink/55" aria-hidden />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,19,24,0.5) 0%, rgba(20,19,24,0.25) 30%, rgba(20,19,24,0.55) 65%, rgba(20,19,24,0.95) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 lg:px-16 lg:pb-20">
        {/* Chips */}
        <motion.div {...rise(0.1)} className="flex flex-wrap items-center gap-2.5">
          <Chip tone="purple">{t.hero.locText}</Chip>
          <Chip tone="gold">{t.hero.strip[2]}</Chip>
        </motion.div>

        {/* Giant headline */}
        <motion.h1
          {...rise(0.2)}
          style={{ textShadow: "0 4px 24px rgba(0,0,0,0.65), 0 2px 5px rgba(0,0,0,0.6)" }}
          className="mt-6 max-w-4xl font-heading text-6xl uppercase leading-[0.86] text-brand-cream sm:text-7xl lg:text-[7rem]"
        >
          {t.hero.h1}
        </motion.h1>

        <motion.p
          {...rise(0.32)}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          className="mt-6 max-w-lg font-body text-base font-medium leading-relaxed text-brand-cream sm:text-lg"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div {...rise(0.42)} className="mt-8 flex flex-wrap items-center gap-3">
          <ArrowButton href={CONTACT.phoneHref} variant="gold">
            {t.hero.cta}: {CONTACT.phoneDisplay}
          </ArrowButton>
          <ArrowButton href={waHref(t.hero.waMsg)} variant="white" external>
            {t.hero.whatsapp}
          </ArrowButton>
        </motion.div>
      </div>
    </section>
  );
}
