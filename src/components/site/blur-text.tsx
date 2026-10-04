"use client";

import { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type BlurTextProps = {
  text: string;
  className?: string;
  /** Split by word (default) or letter. */
  by?: "word" | "letter";
  /** Seconds between each element. */
  stagger?: number;
  /** Seconds before the first element starts. */
  delay?: number;
};

/**
 * Word-by-word (or letter) reveal: each piece dissolves in from a gaussian
 * blur while rising. Fires once when scrolled into view. Marketing surface,
 * so the ~550ms per-piece run is within budget. Under reduced motion it
 * simply fades — gentler, not zero.
 */
export function BlurText({
  text,
  className,
  by = "word",
  stagger = 0.08,
  delay = 0,
}: BlurTextProps) {
  const reduce = useReducedMotion();
  const pieces = useMemo(
    () => (by === "word" ? text.split(" ") : Array.from(text)),
    [text, by],
  );

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const piece: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.4, ease: EASE_OUT } },
      }
    : {
        hidden: { opacity: 0, transform: "translateY(28px)" },
        show: {
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      className={className}
      aria-label={text}
    >
      {pieces.map((p, i) => (
        <motion.span
          key={`${p}-${i}`}
          variants={piece}
          aria-hidden
          style={{ display: "inline-block", willChange: "transform, opacity" }}
        >
          {p}
          {by === "word" && i < pieces.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
