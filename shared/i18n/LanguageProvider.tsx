"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANG_STORAGE_KEY } from "@/shared/content/site";
import { dictionaries, type Dictionary, type Lang } from "./translations";

type LanguageContextValue = { lang: Lang; t: Dictionary; setLang: (lang: Lang) => void };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Сервер и первая клиентская отрисовка всегда на казахском, поэтому гидратация совпадает.
  const [lang, setLangState] = useState<Lang>("kk");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
      // Хранилище может быть недоступно в приватном режиме.
    }
    // Сохранённый язык можно прочитать только в браузере, уже после гидратации.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === "ru") setLangState("ru");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.removeAttribute("data-lang-pending");
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // Язык всё равно переключится на текущую сессию.
    }
  }, []);

  const value = useMemo(() => ({ lang, t: dictionaries[lang], setLang }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
