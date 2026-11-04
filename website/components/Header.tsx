"use client";

import { SECTION_IDS, SITE } from "@/shared/content/site";
import { useActiveSection, useScrolled } from "@/shared/hooks/useHeaderState";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { handleAnchorClick } from "@/shared/lib/scroll";
import { LangSwitch, Logo } from "@/shared/ui/Brand";
import { WhatsAppIcon } from "@/shared/ui/Decor";

export function Header() {
  const { t } = useLang();
  const scrolled = useScrolled();
  const active = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-3">
      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between gap-3 rounded-full px-5 py-2 transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-soft backdrop-blur-md" : "bg-white/45"
        }`}
      >
        <Logo size={42} />
        <nav aria-label={t.header.menu}>
          <ul className="flex items-center">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => handleAnchorClick(event, id)}
                  aria-current={active === id ? "true" : undefined}
                  className={`block rounded-full px-2.5 py-2 text-[0.95rem] font-bold whitespace-nowrap transition-colors xl:px-3.5 ${
                    active === id ? "bg-sun text-ink" : "text-ink hover:bg-sun-soft"
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2.5">
          <LangSwitch />
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp !min-h-10 !px-4 !py-2 text-[0.95rem]">
            <WhatsAppIcon size={18} />
            {t.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
