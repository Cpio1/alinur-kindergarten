"use client";

import { ExternalLink, FolderOpen } from "lucide-react";
import { DOCUMENTS_URL } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Star, Wave } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

export function MobileDocuments() {
  const { t } = useLang();
  return (
    <section id="documents" className="relative overflow-hidden bg-leaf-soft">
      <Wave color="#FFF6E7" flip />
      <div className="mx-auto max-w-[640px] px-4 pt-2 pb-1">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1rem_2.25rem_1rem_2.25rem] bg-white p-4">
            <Star size={18} className="decor-twinkle absolute top-3 right-4" />
            <div className="flex items-center gap-3">
              <div className="shape-blob flex h-16 w-16 shrink-0 items-center justify-center bg-sun">
                <FolderOpen size={30} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <h2 className="text-[1.75rem] leading-none font-extrabold tracking-tight">{t.documents.title}</h2>
            </div>
            <p className="mt-2.5 text-[0.92rem] leading-snug font-semibold text-ink-soft">{t.documents.subtitle}</p>
            {DOCUMENTS_URL ? (
              <a href={DOCUMENTS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ink mt-3 w-full text-[0.95rem]">
                {t.documents.open}
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            ) : (
              <p className="mt-2.5 rounded-full bg-peach-soft px-3 py-1.5 text-center font-display text-[0.86rem] font-semibold">{t.documents.soon}</p>
            )}
          </div>
        </Reveal>
      </div>
      <Wave color="#FFF6E7" />
    </section>
  );
}
