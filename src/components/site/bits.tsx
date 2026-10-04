"use client";

import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---- Pill chip (muted rounded label) ---- */
export function Chip({
  children,
  tone = "muted",
  className,
}: {
  children: React.ReactNode;
  tone?: "muted" | "cream" | "gold" | "ink" | "purple";
  className?: string;
}) {
  const tones: Record<string, string> = {
    muted: "bg-brand-ink/8 text-foreground/70",
    cream: "bg-brand-cream/15 text-brand-cream",
    gold: "bg-brand-gold text-brand-ink",
    ink: "bg-brand-ink text-brand-cream",
    purple: "bg-brand-purple text-brand-cream",
  };
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-4 py-1.5 font-body text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---- Arrow button: pill + circular arrow icon (the Bradford signature) ---- */
type ArrowButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "purple" | "gold" | "ink" | "white";
  external?: boolean;
  icon?: LucideIcon;
  className?: string;
};

export function ArrowButton({
  children,
  href,
  variant = "purple",
  external,
  icon: Icon = ArrowUpRight,
  className,
}: ArrowButtonProps) {
  const styles: Record<string, { pill: string; circle: string }> = {
    purple: { pill: "bg-brand-purple text-brand-cream", circle: "bg-brand-cream text-brand-purple" },
    gold: { pill: "bg-brand-gold text-brand-ink", circle: "bg-brand-ink text-brand-gold" },
    ink: { pill: "bg-brand-ink text-brand-cream", circle: "bg-brand-gold text-brand-ink" },
    white: { pill: "bg-card text-brand-ink shadow-sm", circle: "bg-brand-gold text-brand-ink" },
  };
  const s = styles[variant];
  return (
    <a
      href={href}
      data-press
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full py-1.5 pl-5 pr-1.5 font-body text-sm font-semibold transition-transform",
        s.pill,
        className,
      )}
    >
      {children}
      <span
        className={cn(
          "flex size-8 items-center justify-center rounded-full transition-transform duration-300 ease-out [@media(hover:hover)]:group-hover:rotate-45",
          s.circle,
        )}
      >
        <Icon className="size-4" strokeWidth={2.5} />
      </span>
    </a>
  );
}
