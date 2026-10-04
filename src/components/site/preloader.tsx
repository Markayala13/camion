"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Branded intro. Holds ~1.8s while the page paints, then the whole panel lifts
 * away like a garage door (reduced motion: a plain fade). CSS-driven so it stays
 * smooth while the app is still booting. Shows once per browser session.
 */
export function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const liftAt = window.setTimeout(() => setLeaving(true), 1800);
    const dropAt = window.setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, 2400);

    return () => {
      window.clearTimeout(liftAt);
      window.clearTimeout(dropAt);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="preloader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-ink"
      data-leaving={leaving}
      aria-hidden
    >
      {/* top hazard edge */}
      <div className="hazard-sm pl-stripe-anim absolute inset-x-0 top-0 h-3" />

      <div className="pl-logo flex flex-col items-center">
        <span className="relative h-20 w-20 overflow-hidden rounded-2xl ring-2 ring-brand-gold/60 shadow-lg">
          <Image
            src="/images/cat-mascot.jpg"
            alt=""
            fill
            sizes="80px"
            priority
            className="scale-110 object-cover object-top"
          />
        </span>
        <span className="mt-5 font-heading text-4xl uppercase tracking-tight text-brand-cream">
          MR. CAT
        </span>
        <span className="pl-sub mt-1 text-[11px] font-bold uppercase tracking-[0.35em] text-brand-gold">
          Truck Repairs
        </span>
      </div>

      {/* progress bar */}
      <div className="pl-bar-track mt-8 h-1 w-40 overflow-hidden rounded-full bg-brand-cream/15">
        <div className="pl-bar-fill h-full w-full rounded-full bg-brand-gold" />
      </div>

      {/* bottom hazard edge */}
      <div className="hazard-sm pl-stripe-anim absolute inset-x-0 bottom-0 h-3" />
    </div>
  );
}
