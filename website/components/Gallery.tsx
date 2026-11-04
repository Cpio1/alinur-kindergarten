"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, ImageIcon, MapPin } from "lucide-react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { toColumns, type GalleryImage } from "@/shared/lib/media-types";
import { Flower, Star } from "@/shared/ui/Decor";
import { Lightbox } from "@/shared/ui/Lightbox";
import { Reveal } from "@/shared/ui/Reveal";

const INITIAL = 6;
const COLUMNS = 3;

const radii = [
  "rounded-[3.5rem_1.5rem_3.5rem_1.5rem]",
  "rounded-[1.5rem_3rem_1.5rem_1.5rem]",
  "rounded-[1.5rem_1.5rem_3rem_1.5rem]",
  "rounded-[1.5rem]",
  "rounded-[3rem_1.5rem_1.5rem_1.5rem]",
  "rounded-[1.5rem_1.5rem_1.5rem_3rem]",
];

export function Gallery({ images }: { images: GalleryImage[] }) {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const visible = expanded ? images : images.slice(0, INITIAL);

  return (
    <section id="gallery" className="relative overflow-hidden bg-milk py-14">
      <Flower size={46} className="decor-sway absolute top-14 right-[6%]" color="#85C7E8" />
      <Star size={30} className="decor-twinkle absolute top-24 left-[6%]" color="#F3B5A8" />

      <div className="mx-auto max-w-[1160px] px-8">
        <Reveal className="text-center">
          <p className="font-display text-lg font-semibold text-[#2B7EA8]">{t.nav.gallery}</p>
          <h2 className="mt-1 text-[2.9rem] leading-[1.1] font-extrabold tracking-tight">{t.gallery.title}</h2>
          <p className="mt-2 text-lg font-semibold text-ink-soft">{t.gallery.subtitle}</p>
        </Reveal>

        {images.length === 0 ? (
          <Reveal className="mt-9">
            <div className="relative mx-auto flex max-w-3xl items-center gap-7 overflow-hidden rounded-[4rem_2rem_4rem_2rem] bg-sky-soft px-10 py-9 shadow-soft">
              <div className="shape-flower flex h-28 w-28 shrink-0 items-center justify-center bg-sun">
                <ImageIcon size={42} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{t.gallery.emptyTitle}</h3>
                <p className="mt-1 text-lg font-semibold text-ink-soft">{t.gallery.emptyText}</p>
                <a href={SITE.twoGisHref} target="_blank" rel="noopener noreferrer" className="btn btn-ink mt-4">
                  <MapPin size={18} aria-hidden="true" />
                  {t.gallery.emptyCta}
                </a>
              </div>
            </div>
          </Reveal>
        ) : (
          <>
            {/* Колонки с настоящими пропорциями: снимки не обрезаются. */}
            <div className="mt-9 grid grid-cols-3 items-start gap-4">
              {toColumns(visible, COLUMNS).map((column, columnIndex) => (
                <ul key={columnIndex} className="flex flex-col gap-4">
                  {column.map((image) => (
                    <li key={image.src}>
                      <Reveal delay={(image.index % INITIAL) * 0.05} y={16}>
                        <button
                          type="button"
                          aria-label={`${t.gallery.open} ${image.index + 1}`}
                          onClick={() => setOpen(image.index)}
                          className={`group block w-full cursor-zoom-in overflow-hidden bg-sky-soft shadow-soft ${radii[image.index % radii.length]}`}
                        >
                          <Image
                            src={image.src}
                            alt={`${t.gallery.photoAlt} — ${image.index + 1}`}
                            width={image.width}
                            height={image.height}
                            sizes="(max-width: 1099px) 16px, 380px"
                            className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                          />
                        </button>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            {images.length > INITIAL && (
              <div className="mt-8 text-center">
                <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} className="btn btn-sun text-lg">
                  {expanded ? t.gallery.less : t.gallery.more}
                  {expanded ? <ChevronUp size={20} aria-hidden="true" /> : <ChevronDown size={20} aria-hidden="true" />}
                </button>
              </div>
            )}
            <Lightbox images={images.map((image) => image.src)} index={open} onChange={setOpen} />
          </>
        )}
      </div>
    </section>
  );
}
