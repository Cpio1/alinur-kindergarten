"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, ImageIcon, MapPin } from "lucide-react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { toColumns, type GalleryImage, type PlacedImage } from "@/shared/lib/media-types";
import { Lightbox } from "@/shared/ui/Lightbox";
import { Reveal } from "@/shared/ui/Reveal";

const INITIAL = 4;

const radii = [
  "rounded-[1rem_1.75rem_1rem_1rem]",
  "rounded-[1rem_1rem_1.75rem_1rem]",
  "rounded-[1.75rem_1rem_1rem_1rem]",
  "rounded-[1rem_1rem_1rem_1.75rem]",
];

export function MobileGallery({ images }: { images: GalleryImage[] }) {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const visible = expanded ? images : images.slice(0, INITIAL);

  const tile = (image: PlacedImage, radius: string, sizes: string) => (
    <button
      type="button"
      aria-label={`${t.gallery.open} ${image.index + 1}`}
      onClick={() => setOpen(image.index)}
      className={`block w-full overflow-hidden bg-sky-soft ${radius}`}
    >
      <Image
        src={image.src}
        alt={`${t.gallery.photoAlt} — ${image.index + 1}`}
        width={image.width}
        height={image.height}
        sizes={sizes}
        className="h-auto w-full"
      />
    </button>
  );

  return (
    <section id="gallery" className="relative overflow-hidden bg-milk py-6">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal>
          <p className="font-display text-sm font-semibold text-[#2B7EA8]">{t.nav.gallery}</p>
          <h2 className="text-[1.75rem] leading-[1.12] font-extrabold tracking-tight">{t.gallery.title}</h2>
          <p className="mt-0.5 text-[0.92rem] font-semibold text-ink-soft">{t.gallery.subtitle}</p>
        </Reveal>

        {images.length === 0 ? (
          <Reveal className="mt-3.5">
            <div className="flex items-center gap-3 rounded-[2rem_1rem_2rem_1rem] bg-sky-soft p-4">
              <div className="shape-flower flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center bg-sun">
                <ImageIcon size={28} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[1.02rem] leading-tight font-bold">{t.gallery.emptyTitle}</h3>
                <p className="mt-1 text-[0.82rem] leading-snug font-semibold text-ink-soft">{t.gallery.emptyText}</p>
              </div>
            </div>
            <a href={SITE.twoGisHref} target="_blank" rel="noopener noreferrer" className="btn btn-ink mt-2.5 w-full text-[0.95rem]">
              <MapPin size={18} aria-hidden="true" />
              {t.gallery.emptyCta}
            </a>
          </Reveal>
        ) : (
          <>
            {/* Первый кадр на всю ширину, остальные в двух компактных колонках. */}
            <div className="mt-3.5">
              {tile({ ...visible[0], index: 0 }, "rounded-[2rem_1rem_2rem_1rem]", "(min-width: 1100px) 16px, (min-width: 640px) 608px, 100vw")}
            </div>
            <div className="mt-2 grid grid-cols-2 items-start gap-2">
              {toColumns(visible.slice(1), 2, 1).map((column, columnIndex) => (
                <ul key={columnIndex} className="flex flex-col gap-2">
                  {column.map((image) => (
                    <li key={image.src}>
                      {tile(image, radii[image.index % radii.length], "(min-width: 1100px) 16px, (min-width: 640px) 300px, 50vw")}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            {images.length > INITIAL && (
              <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} className="btn btn-sun mt-3 w-full">
                {expanded ? t.gallery.less : t.gallery.more}
                {expanded ? <ChevronUp size={19} aria-hidden="true" /> : <ChevronDown size={19} aria-hidden="true" />}
              </button>
            )}
            <Lightbox images={images.map((image) => image.src)} index={open} onChange={setOpen} />
          </>
        )}
      </div>
    </section>
  );
}
