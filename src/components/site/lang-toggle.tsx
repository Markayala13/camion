"use client";

import { useLang, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  const opt = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      aria-label={l === "es" ? "Español" : "English"}
      className={cn(
        "px-2.5 py-1 text-xs font-bold tracking-wide rounded-md transition-colors",
        lang === l
          ? "bg-brand-purple text-primary-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </button>
  );

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-lg border border-border bg-card/70 p-0.5",
        className,
      )}
    >
      {opt("es", "ES")}
      {opt("en", "EN")}
    </div>
  );
}
