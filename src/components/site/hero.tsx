"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Phone, MessageCircle, MapPin, Check } from "lucide-react";
import { useLang, CONTACT, waHref } from "@/lib/i18n";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(22px)" },
    animate: reduce ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" },
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  });

  return (
    <section id="top" className="relative overflow-hidden grain pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:pb-20">
        {/* Text */}
        <div className="lg:col-span-7">
          <motion.div {...rise(0)} className="flex items-center gap-3">
            <span className="hazard-sm h-3 w-16 rounded-sm" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-purple">
              {t.hero.badge}
            </p>
          </motion.div>

          <h1 className="mt-6 font-heading text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-[5.5rem]">
            <motion.span {...rise(0.06)} className="block text-brand-ink">
              {t.hero.h1a}
            </motion.span>
            <motion.span {...rise(0.12)} className="block text-brand-purple">
              {t.hero.h1b}
            </motion.span>
            <motion.span {...rise(0.18)} className="block text-brand-ink">
              {t.hero.h1c}
            </motion.span>
          </h1>

          <motion.p
            {...rise(0.26)}
            className="mt-6 max-w-xl font-body text-lg leading-relaxed text-foreground/80"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div {...rise(0.34)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={CONTACT.phoneHref}
              data-press
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-gold px-6 text-base font-bold text-brand-ink shadow-md transition-colors hover:bg-brand-gold-deep"
            >
              <Phone className="size-5" />
              {t.hero.cta}: {CONTACT.phoneDisplay}
            </a>
            <a
              href={waHref(t.hero.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              data-press
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-brand-purple/25 px-6 text-base font-bold text-brand-purple transition-colors hover:bg-secondary"
            >
              <MessageCircle className="size-5" />
              {t.hero.whatsapp}
            </a>
          </motion.div>

          <motion.ul {...rise(0.42)} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {t.hero.strip.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm font-semibold text-foreground/70">
                <Check className="size-4 text-brand-purple" strokeWidth={3} />
                {s}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Image stack */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(26px)" }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-[3px] border-brand-ink shadow-xl">
            <Image
              src="/images/hero-npr-after.jpg"
              alt="Isuzu NPR con caja nueva, terminado en MR. CAT Truck Repairs"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <span className="absolute left-0 top-5 bg-brand-gold px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-ink">
              {t.gallery.after}
            </span>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden w-32 overflow-hidden rounded-lg border-[3px] border-brand-cream shadow-xl sm:block">
            <div className="relative aspect-square">
              <Image
                src="/images/cab-damage-before.jpg"
                alt="Cabina golpeada antes del trabajo"
                fill
                sizes="128px"
                className="object-cover"
              />
              <span className="absolute left-0 top-2 bg-brand-ink/85 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-cream">
                {t.gallery.before}
              </span>
            </div>
          </div>

          <div className="absolute -right-3 -top-3 hidden rotate-3 rounded-md border-2 border-brand-ink bg-brand-cream px-3 py-1 shadow-lg md:block">
            <span className="flex items-center gap-1.5 font-heading text-xs tracking-wider text-brand-ink">
              <MapPin className="size-3 text-brand-purple" />
              LOS ANGELES · CA
            </span>
          </div>
        </motion.div>
      </div>

      <div className="hazard-sm h-3 w-full" aria-hidden />
    </section>
  );
}
