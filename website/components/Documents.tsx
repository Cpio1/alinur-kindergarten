"use client";

import { ExternalLink, FolderOpen } from "lucide-react";
import { DOCUMENTS_URL } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Dots, Star, Wave } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

export function Documents() {
  const { t } = useLang();
  return (
    <section id="documents" className="relative overflow-hidden bg-leaf-soft">
      <Wave color="#FFF6E7" flip />
      <div className="mx-auto max-w-[1040px] px-8 pt-5 pb-8">
        <Reveal>
          <div className="relative grid grid-cols-[auto_1fr] items-center gap-10 overflow-hidden rounded-[2rem_5rem_2rem_5rem] bg-white px-12 py-10 shadow-soft">
            <Dots className="absolute top-5 right-7" color="#A8D9AA" />
            <Star size={26} className="decor-twinkle absolute right-20 bottom-7" />
            <div className="shape-blob flex h-36 w-36 items-center justify-center bg-sun">
              <FolderOpen size={64} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-[2.6rem] leading-[1.1] font-extrabold tracking-tight">{t.documents.title}</h2>
              <p className="mt-2 text-lg font-semibold text-ink-soft">{t.documents.subtitle}</p>
              {DOCUMENTS_URL ? (
                <a href={DOCUMENTS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ink mt-5 text-lg">
                  {t.documents.open}
                  <ExternalLink size={19} aria-hidden="true" />
                </a>
              ) : (
                <p className="mt-4 inline-block rounded-full bg-peach-soft px-5 py-2 font-display font-semibold">{t.documents.soon}</p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
      <Wave color="#FFF6E7" />
    </section>
  );
}
