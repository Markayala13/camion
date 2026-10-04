"use client";

import { useState } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { useLang, CONTACT, waHref } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { BlurText } from "./blur-text";
import { ArrowButton, Chip } from "./bits";

export function CtaFooter() {
  const { t } = useLang();
  const mapEmbed =
    "https://www.google.com/maps?q=9511+Laurel+St,+Los+Angeles,+CA+90002&output=embed";

  const [form, setForm] = useState({ name: "", phone: "", unit: "", msg: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = t.contact.waTemplate(form.name, form.phone, form.unit, form.msg);
    window.open(waHref(text), "_blank", "noopener,noreferrer");
  };

  const field =
    "rounded-xl border border-brand-cream/20 bg-brand-cream/[0.08] px-4 py-2.5 font-body text-sm text-brand-cream placeholder:text-brand-cream/40 outline-none transition-colors focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/25";
  const label =
    "font-body text-xs font-semibold uppercase tracking-wide text-brand-cream/70";

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-purple text-brand-cream">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-16 lg:pt-24">
        {/* CTA */}
        <div className="max-w-3xl">
          <Chip tone="cream">{t.contact.label}</Chip>
          <h2 className="mt-5 font-heading text-5xl uppercase leading-[0.88] text-brand-cream sm:text-6xl lg:text-7xl">
            <BlurText text={t.contact.heading} by="word" stagger={0.07} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-brand-cream/80">
              {t.contact.ctaSub}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ArrowButton href={CONTACT.phoneHref} variant="gold">
                {t.hero.cta} {CONTACT.phoneDisplay}
              </ArrowButton>
              <ArrowButton href={CONTACT.mapHref} variant="white" external>
                {t.contact.directions}
              </ArrowButton>
            </div>
          </Reveal>
        </div>

        {/* Form + address/map */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] border border-brand-cream/15 bg-brand-cream/[0.05] p-7 sm:p-8">
              <h3 className="font-heading text-2xl uppercase text-brand-cream">
                {t.contact.formTitle}
              </h3>
              <p className="mt-2 font-body text-sm text-brand-cream/60">{t.contact.formNote}</p>
              <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-name" className={label}>{t.contact.fName}</label>
                  <input id="cf-name" type="text" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-phone" className={label}>{t.contact.fPhone}</label>
                  <input id="cf-phone" type="tel" required value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="cf-unit" className={label}>{t.contact.fUnit}</label>
                  <input id="cf-unit" type="text" value={form.unit}
                    onChange={(e) => setForm({ ...form, unit: e.target.value })} className={field} />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="cf-msg" className={label}>{t.contact.fMsg}</label>
                  <textarea id="cf-msg" rows={3} value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    className={`${field} resize-none`} />
                </div>
                <button type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-body text-base font-bold text-brand-ink transition-colors hover:bg-brand-gold-deep sm:col-span-2">
                  <MessageCircle className="size-5" />
                  {t.contact.fSend}
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-[2rem] border border-brand-cream/15 bg-brand-cream/[0.05] p-7">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                  <MapPin className="size-4" />
                  {t.contact.addrLabel}
                </span>
                <p className="mt-3 font-heading text-2xl uppercase leading-tight text-brand-cream">
                  9511 Laurel St.
                  <br />
                  Los Angeles, CA 90002
                </p>
                <a href={CONTACT.phoneHref} data-press
                  className="mt-4 inline-block font-body text-lg font-bold text-brand-gold hover:text-brand-cream">
                  {CONTACT.phoneDisplay}
                </a>
                <p className="mt-3 font-body text-sm text-brand-cream/60">{t.contact.langNote}</p>
              </div>
              <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-[2rem] border border-brand-cream/15">
                <iframe
                  title="Mapa MR. CAT Truck Repairs"
                  src={mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[220px] w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Footer bar */}
        <footer className="mt-16 border-t border-brand-cream/15 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-body text-xs text-brand-cream/60">{t.footer.legal}</p>
            <nav className="flex items-center gap-5" aria-label="Legal">
              {t.footer.links.map((l, i) => (
                <a key={l} href={i === t.footer.links.length - 1 ? "#contact" : "#"}
                  className="font-body text-xs text-brand-cream/60 transition-colors hover:text-brand-gold">
                  {l}
                </a>
              ))}
            </nav>
          </div>
          <p className="mt-4 text-center font-body text-xs text-brand-cream/50">
            {t.footer.builtWith}{" "}
            <a href="https://tododeia.com" target="_blank" rel="noopener noreferrer"
              className="font-semibold text-brand-gold hover:underline">
              Tododeia
            </a>
          </p>
        </footer>
      </div>

      {/* Giant ghost headline watermark */}
      <div
        className="pointer-events-none select-none px-4 pb-6 text-center font-heading uppercase leading-[0.8] text-brand-cream/[0.07]"
        style={{ fontSize: "clamp(4rem, 18vw, 16rem)" }}
        aria-hidden
      >
        MR. CAT
      </div>
    </section>
  );
}
