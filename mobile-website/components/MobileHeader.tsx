"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Phone } from "lucide-react";
import { SECTION_IDS, SITE, type SectionId } from "@/shared/content/site";
import { useScrolled } from "@/shared/hooks/useHeaderState";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { scrollToSection } from "@/shared/lib/scroll";
import { LangSwitch, Logo } from "@/shared/ui/Brand";
import { WhatsAppIcon } from "@/shared/ui/Decor";

const chips: Record<SectionId, string> = {
  home: "bg-sun",
  about: "bg-sky",
  info: "bg-leaf",
  groups: "bg-peach",
  meals: "bg-sky-soft",
  gallery: "bg-sun-soft",
  documents: "bg-leaf-soft",
  contact: "bg-peach-soft",
};

export function MobileHeader() {
  const { t } = useLang();
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (event: React.MouseEvent, id: SectionId) => {
    event.preventDefault();
    setOpen(false);
    // Прокрутка запускается после снятия блокировки скролла.
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(id)));
  };

  const bar = "absolute left-[11px] h-[2.5px] w-[22px] rounded-full bg-ink transition-transform duration-300";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-20 flex h-[60px] items-center justify-between gap-2 px-3 transition-all duration-300 ${
          scrolled || open ? "bg-white/95 shadow-soft backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Logo size={32} textClass="text-xl" />
        <div className="flex items-center gap-2">
          <LangSwitch compact />
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setOpen((value) => !value)}
            className="relative h-11 w-11 shrink-0 rounded-[40%_60%_55%_45%] bg-sun"
          >
            <span className={`${bar} top-[14px] ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`${bar} top-[21px] ${open ? "scale-x-0" : ""}`} />
            <span className={`${bar} top-[28px] ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <m.div
              key="backdrop"
              className="fixed inset-0 z-0 bg-ink/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <m.nav
              key="menu"
              id="mobile-menu"
              aria-label={t.header.menu}
              className="absolute inset-x-0 top-full z-10 max-h-[calc(100dvh-60px)] overflow-y-auto rounded-b-[2.25rem] bg-white px-4 pt-3 pb-5 shadow-lift"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
            >
              <ul className="relative mx-auto grid max-w-lg grid-cols-2 gap-2">
                {SECTION_IDS.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(event) => go(event, id)}
                      className={`flex min-h-12 items-center rounded-[1.1rem] px-3.5 py-2 font-display text-[0.95rem] font-semibold ${chips[id]}`}
                    >
                      {t.nav[id]}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="relative mx-auto mt-3 grid max-w-lg grid-cols-[1fr_auto] gap-2">
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp text-[0.95rem]">
                  <WhatsAppIcon size={20} />
                  {t.header.cta}
                </a>
                <a href={SITE.phoneHref} aria-label={`${t.contact.call}: ${SITE.phoneDisplay}`} className="btn btn-ink !px-4">
                  <Phone size={20} aria-hidden="true" />
                </a>
              </div>
            </m.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
