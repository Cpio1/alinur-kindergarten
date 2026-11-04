"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "@/shared/i18n/LanguageProvider";

type LightboxProps = {
  images: string[];
  index: number | null;
  onChange: (index: number | null) => void;
};

/** Полноэкранный просмотр: стрелки, клавиатура, свайп, закрытие. */
export function Lightbox({ images, index, onChange }: LightboxProps) {
  const { t } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const isOpen = index !== null;
  const count = images.length;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + count) % count);
    },
    [count, index, onChange],
  );

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onChange(null);
      else if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
      else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onChange, step]);

  if (typeof document === "undefined") return null;

  const control =
    "flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-ink shadow-soft transition-transform hover:scale-105 focus-visible:outline-white";

  return createPortal(
    <AnimatePresence>
      {index !== null && (
        <m.div
          key="lightbox"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.viewer}
          className="fixed inset-0 z-[100] bg-ink/[.97]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onTouchStart={(event) => {
            touchX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchX.current === null) return;
            const distance = (event.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
            touchX.current = null;
            if (Math.abs(distance) > 50) step(distance < 0 ? 1 : -1);
          }}
        >
          <div className="absolute inset-0" onClick={() => onChange(null)} aria-hidden="true" />
          <m.div
            key={images[index]}
            className="pointer-events-none absolute inset-x-3 top-16 bottom-20 desk:inset-x-24 desk:top-6 desk:bottom-6"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src={images[index]}
              alt={`${t.gallery.photoAlt} — ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </m.div>

          <button ref={closeRef} type="button" aria-label={t.gallery.close} onClick={() => onChange(null)} className={`${control} absolute top-3 right-3 z-10 desk:top-6 desk:right-6`}>
            <X size={24} aria-hidden="true" />
          </button>

          {count > 1 && (
            <>
              <button type="button" aria-label={t.gallery.prev} onClick={() => step(-1)} className={`${control} absolute bottom-4 left-4 z-10 desk:top-1/2 desk:bottom-auto desk:left-6 desk:-translate-y-1/2`}>
                <ChevronLeft size={26} aria-hidden="true" />
              </button>
              <button type="button" aria-label={t.gallery.next} onClick={() => step(1)} className={`${control} absolute right-4 bottom-4 z-10 desk:top-1/2 desk:right-6 desk:bottom-auto desk:-translate-y-1/2`}>
                <ChevronRight size={26} aria-hidden="true" />
              </button>
            </>
          )}

          <p className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-sm font-bold text-white" aria-live="polite">
            {index + 1} / {count}
          </p>
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
