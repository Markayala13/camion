"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Placeholder for a video the client will supply later: a poster photo with a
 * play affordance. Swap the <Image> for a <video> once the file arrives.
 */
export function VideoPoster({
  src,
  alt,
  label,
  priority,
  className,
  rounded = "rounded-[2rem]",
}: {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
  rounded?: string;
}) {
  return (
    <div className={cn("group relative overflow-hidden", rounded, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-ink/25" aria-hidden />
      {/* Play affordance */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-brand-cream/90 text-brand-purple shadow-lg transition-transform duration-300 ease-out [@media(hover:hover)]:group-hover:scale-105 sm:size-20">
          <Play className="size-6 translate-x-0.5 fill-brand-purple sm:size-8" />
        </span>
      </div>
      {label && (
        <span className="absolute bottom-4 left-4 rounded-full bg-brand-ink/70 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-brand-cream backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
