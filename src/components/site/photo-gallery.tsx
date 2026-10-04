"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionHead } from "./section-head";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
];

export function PhotoGallery() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);
  const items = t.photos.items;

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  return (
    <section id="galeria" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <SectionHead kicker={t.photos.badge} title={t.photos.heading} sub={t.photos.sub} />

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 sm:gap-4">
          {items.map((p, i) => (
            <Reveal
              key={p.src}
              delay={0.04 * (i % 4)}
              className={cn("min-h-0", SPANS[i % SPANS.length])}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={p.cap}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-brand-line bg-muted shadow-sm"
              >
                <Image
                  src={p.src}
                  alt={p.cap}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out motion-safe:[@media(hover:hover)]:group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/75 to-transparent p-3 pt-10 text-left opacity-0 transition-opacity duration-300 ease-out [@media(hover:hover)]:group-hover:opacity-100">
                  <span className="font-body text-xs font-semibold text-brand-cream">
                    {p.cap}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-ink/90 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={items[open].cap}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-brand-cream/15 text-brand-cream transition-colors hover:bg-brand-cream/25"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label="Anterior"
              className="absolute left-3 inline-flex size-11 items-center justify-center rounded-full bg-brand-cream/15 text-brand-cream transition-colors hover:bg-brand-cream/25 sm:left-6"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label="Siguiente"
              className="absolute right-3 inline-flex size-11 items-center justify-center rounded-full bg-brand-cream/15 text-brand-cream transition-colors hover:bg-brand-cream/25 sm:right-6"
            >
              <ChevronRight className="size-6" />
            </button>

            <motion.figure
              key={open}
              className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
              initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "scale(0.95)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, transform: "scale(0.97)" }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={items[open].src}
                  alt={items[open].cap}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-4 font-body text-sm text-brand-cream/80">
                {items[open].cap}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
