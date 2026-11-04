"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { WhatsAppIcon } from "./Decor";

/**
 * Плавающая кнопка. На телефоне появляется после первого экрана, чтобы не закрывать
 * кнопки Hero, и прячется рядом с контактными кнопками.
 */
export function WhatsAppFab() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const isDesktop = window.matchMedia("(min-width: 68.75rem)").matches;
      const pastHero = isDesktop || window.scrollY > 420;
      const overlaps = Array.from(document.querySelectorAll("[data-fab-hide]")).some((element) => {
        const rect = element.getBoundingClientRect();
        return rect.height > 0 && rect.top < window.innerHeight && rect.bottom > window.innerHeight - 110;
      });
      setVisible(pastHero && !overlaps);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.fab}
      tabIndex={visible ? undefined : -1}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      className={`fixed right-4 z-40 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-wa text-white shadow-lift transition-all duration-300 hover:scale-105 hover:bg-wa-hover desk:right-7 desk:h-16 desk:w-16 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
