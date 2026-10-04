"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

type Props = {
  before: string;
  after: string;
  altB: string;
  altA: string;
  labelBefore: string;
  labelAfter: string;
};

export function BeforeAfter({
  before,
  after,
  altB,
  altA,
  labelBefore,
  labelAfter,
}: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden rounded-xl border border-border bg-muted"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) setFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* Before (base layer) */}
      <Image src={before} alt={altB} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
      <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-brand-ink/80 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-brand-cream">
        {labelBefore}
      </span>

      {/* After (clipped from the left) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image src={after} alt={altA} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand-gold px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide text-brand-ink">
          {labelAfter}
        </span>
      </div>

      {/* Handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 flex w-0 items-center justify-center"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-brand-cream shadow-[0_0_0_1px_rgba(43,20,70,0.3)]" />
        <div className="flex size-9 -translate-x-1/2 items-center justify-center rounded-full bg-brand-cream text-brand-purple shadow-lg ring-2 ring-brand-purple/20">
          <MoveHorizontal className="size-4" />
        </div>
      </div>

      {/* Accessible control */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`${labelBefore} / ${labelAfter}`}
        className="absolute inset-x-0 bottom-0 z-20 h-10 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
