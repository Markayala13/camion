"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
};

/**
 * Marketing scroll reveal. Robust by design:
 * - Server-rendered and no-JS users see the content (no hidden state in SSR HTML).
 * - With JS, below-fold elements hide on mount, then reveal once in view (fires once).
 * - Under reduced motion it stays visible — gentler, not zero.
 * Uses full transform strings and the canonical --ease-out curve.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  duration = 0.6,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || reduce) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted, reduce]);

  // SSR / no-JS / reduced-motion => visible. JS + below fold => hidden until seen.
  const hidden = mounted && !reduce && !shown;

  return (
    <div
      ref={ref}
      data-reveal
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? `translateY(${y}px)` : "translateY(0px)",
        transition: `opacity ${duration}s var(--ease-out) ${delay}s, transform ${duration}s var(--ease-out) ${delay}s`,
        willChange: hidden ? "opacity, transform" : undefined,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
