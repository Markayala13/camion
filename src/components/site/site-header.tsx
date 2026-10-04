"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { useLang, CONTACT } from "@/lib/i18n";
import { ArrowButton } from "./bits";
import { LangToggle } from "./lang-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#how", label: t.nav.how },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-8 lg:px-16">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 overflow-hidden rounded-full border border-brand-line bg-card pl-2 pr-2 transition-shadow duration-300 sm:gap-4 sm:pr-3",
          scrolled ? "shadow-xl" : "shadow-md",
        )}
      >
        {/* Logo with a gold hazard tab */}
        <a href="#top" aria-label="MR. CAT Truck Repairs" className="group flex items-center gap-2.5 py-1.5">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-gold/50 sm:h-11 sm:w-11">
            <Image
              src="/images/cat-mascot.jpg"
              alt="Mascota MR. CAT"
              fill
              sizes="44px"
              className="scale-110 object-cover object-top"
            />
          </span>
          <span className="leading-none">
            <span className="block font-heading text-base uppercase tracking-tight text-brand-purple sm:text-lg">
              MR. CAT
            </span>
            <span className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-muted-foreground sm:text-[9px]">
              <span className="hazard-sm inline-block h-1.5 w-4 rounded-[1px]" aria-hidden />
              Truck Repairs
            </span>
          </span>
        </a>

        {/* Center nav — gold underline grows on hover */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 font-body text-sm font-semibold text-foreground/80 transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-gold after:transition-transform after:duration-300 after:ease-out hover:text-brand-purple [@media(hover:hover)]:hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <LangToggle />
          <span className="hidden sm:inline-flex">
            <ArrowButton href={CONTACT.phoneHref} variant="purple">
              {CONTACT.phoneDisplay}
            </ArrowButton>
          </span>

          {/* Mobile: quick-call + menu */}
          <a
            href={CONTACT.phoneHref}
            data-press
            aria-label={`${t.nav.call} ${CONTACT.phoneDisplay}`}
            className="inline-flex size-10 items-center justify-center rounded-full bg-brand-gold text-brand-ink shadow-sm sm:hidden"
          >
            <Phone className="size-4" strokeWidth={2.5} />
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex size-10 items-center justify-center rounded-full bg-brand-ink text-brand-cream lg:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] max-w-sm border-l-0 bg-brand-ink p-0 text-brand-cream">
              <div className="hazard-sm h-3 w-full" aria-hidden />
              <SheetTitle className="flex items-center gap-2 px-6 pt-6 font-heading text-2xl uppercase text-brand-cream">
                MR. CAT
                <span className="text-xs font-bold tracking-[0.2em] text-brand-gold">
                  TRUCK REPAIRS
                </span>
              </SheetTitle>
              <nav className="mt-6 flex flex-col px-3" aria-label="Móvil">
                {links.map((l, i) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="flex items-center gap-4 rounded-xl px-4 py-3.5 font-heading text-lg uppercase text-brand-cream/90 transition-colors hover:bg-brand-cream/10 hover:text-brand-cream"
                    >
                      <span className="font-body text-xs font-bold text-brand-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 px-6">
                <a
                  href={CONTACT.phoneHref}
                  data-press
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-4 py-3.5 font-body font-bold text-brand-ink"
                >
                  <Phone className="size-4" />
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
