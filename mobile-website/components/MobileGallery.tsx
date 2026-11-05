"use client";

import { ArrowUpRight, ImageIcon } from "lucide-react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Reveal } from "@/shared/ui/Reveal";

export function MobileGallery() {
  const { t } = useLang();

  return (
    <section id="gallery" className="relative overflow-hidden bg-milk py-6">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal>
          <p className="font-display text-sm font-semibold text-[#2B7EA8]">{t.nav.gallery}</p>
          <h2 className="text-[1.75rem] leading-[1.12] font-extrabold tracking-tight">{t.gallery.title}</h2>
          <p className="mt-0.5 text-[0.92rem] font-semibold text-ink-soft">{t.gallery.subtitle}</p>
          <a
            href={SITE.twoGisGalleryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sun group mt-4 w-full gap-2.5 py-2.5 pr-4 pl-2.5 text-[1rem]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80">
              <ImageIcon size={19} aria-hidden="true" />
            </span>
            {t.gallery.cta}
            <ArrowUpRight
              size={19}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
