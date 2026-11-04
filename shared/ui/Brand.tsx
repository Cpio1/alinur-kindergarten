"use client";

import { useLang } from "@/shared/i18n/LanguageProvider";
import { handleAnchorClick } from "@/shared/lib/scroll";
import { Sun } from "./Decor";

export function Logo({ size = 40, textClass = "text-2xl", light = false }: { size?: number; textClass?: string; light?: boolean }) {
  const { t } = useLang();
  return (
    <a
      href="#home"
      aria-label={t.header.logoLabel}
      onClick={(event) => handleAnchorClick(event, "home")}
      className="flex min-h-11 shrink-0 items-center gap-1.5"
    >
      <Sun size={size} />
      <span className={`font-display font-extrabold tracking-tight ${textClass} ${light ? "text-white" : "text-ink"}`}>
        Алинур
      </span>
    </a>
  );
}

/** Переключатель ҚАЗ / РУС. */
export function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLang();
  const options = [
    { code: "kk", label: "ҚАЗ" },
    { code: "ru", label: "РУС" },
  ] as const;
  return (
    <div role="group" aria-label={t.header.switchLang} className="flex rounded-full bg-sky-soft p-1">
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          lang={option.code}
          aria-pressed={lang === option.code}
          onClick={() => setLang(option.code)}
          className={`rounded-full font-display font-semibold transition-colors ${
            compact ? "min-h-9 min-w-10 px-2 text-xs" : "min-h-9 min-w-12 px-3 text-sm"
          } ${lang === option.code ? "bg-white text-ink shadow-sm" : "text-ink-soft hover:text-ink"}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
