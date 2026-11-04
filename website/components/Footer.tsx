"use client";

import { SECTION_IDS, SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { handleAnchorClick } from "@/shared/lib/scroll";
import { Logo } from "@/shared/ui/Brand";
import { Wave } from "@/shared/ui/Decor";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-milk text-white">
      <Wave color="#26354B" />
      <div className="bg-ink">
        <div className="mx-auto flex max-w-[1180px] items-start justify-between gap-10 px-8 pt-6 pb-9">
          <div>
            <Logo size={44} light />
            <p className="mt-2 font-semibold text-white/80">{t.footer.tagline}</p>
          </div>
          <nav aria-label={t.footer.nav}>
            <ul className="grid grid-cols-4 gap-x-7 gap-y-2">
              {SECTION_IDS.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(event) => handleAnchorClick(event, id)} className="font-bold text-white/85 hover:text-sun">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-right font-semibold">
            <a href={SITE.phoneHref} className="font-display text-xl font-bold hover:text-sun">{SITE.phoneDisplay}</a>
            <p className="mt-1 text-white/80">{t.contact.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
