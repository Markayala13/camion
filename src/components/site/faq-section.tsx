"use client";

import { useLang } from "@/lib/i18n";
import { SectionHead } from "./section-head";
import { Reveal } from "./reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const { t } = useLang();

  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHead kicker={t.faq.label} title={t.faq.heading} />

        <Reveal delay={0.08}>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-b border-brand-ink/12"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-base uppercase text-brand-ink hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 font-body text-[15px] leading-relaxed text-foreground/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
