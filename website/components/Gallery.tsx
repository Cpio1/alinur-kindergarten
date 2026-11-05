"use client";

import { ArrowUpRight, ImageIcon } from "lucide-react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Flower, Star } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

export function Gallery() {
  const { t } = useLang();

  return (
    <section id="gallery" className="relative overflow-hidden bg-milk py-14">
      <Flower size={46} className="decor-sway absolute top-14 right-[6%]" color="#85C7E8" />
      <Star size={30} className="decor-twinkle absolute top-24 left-[6%]" color="#F3B5A8" />

      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="text-center">
          <p className="font-display text-lg font-semibold text-[#2B7EA8]">{t.nav.gallery}</p>
          <h2 className="mt-1 text-[2.9rem] leading-[1.1] font-extrabold tracking-tight">{t.gallery.title}</h2>
          <p className="mt-2 text-lg font-semibold text-ink-soft">{t.gallery.subtitle}</p>
          <a
            href={SITE.twoGisGalleryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sun group mt-7 gap-3 py-3 pr-6 pl-3 text-lg"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80">
              <ImageIcon size={21} aria-hidden="true" />
            </span>
            {t.gallery.cta}
            <ArrowUpRight
              size={20}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
