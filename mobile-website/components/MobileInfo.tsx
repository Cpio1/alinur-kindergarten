"use client";

import { BookOpen, CalendarDays, Clock, UsersRound, UtensilsCrossed } from "lucide-react";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Sun, Wave } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

export function MobileInfo() {
  const { t } = useLang();
  const { info } = t;
  const rows = [
    { icon: CalendarDays, ...info.age, cls: "bg-white rounded-[1.5rem_0.9rem_0.9rem_0.9rem]" },
    { icon: BookOpen, ...info.language, cls: "bg-leaf rounded-[0.9rem_1.5rem_0.9rem_0.9rem]" },
    { icon: UsersRound, ...info.groups, cls: "bg-peach rounded-[0.9rem_0.9rem_0.9rem_1.5rem]" },
    { icon: UtensilsCrossed, ...info.meals, cls: "bg-white rounded-[0.9rem_0.9rem_1.5rem_0.9rem]" },
  ];

  return (
    <section id="info" className="relative overflow-hidden bg-sun-soft">
      <Wave color="#FFF6E7" flip />
      <div className="mx-auto max-w-[640px] px-4 pt-3 pb-2">
        <Reveal>
          <p className="font-display text-sm font-semibold text-[#2B7EA8]">{t.nav.info}</p>
          <h2 className="text-[1.75rem] leading-[1.12] font-extrabold tracking-tight">{info.title}</h2>
          <p className="mt-0.5 text-[0.92rem] font-semibold text-ink-soft">{info.subtitle}</p>
        </Reveal>

        <Reveal className="mt-3.5">
          <article className="relative flex items-center gap-3 overflow-hidden rounded-[1.75rem_1rem_1.75rem_1rem] bg-[linear-gradient(120deg,#85C7E8,#B9E2F5)] p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[40%_60%_55%_45%] bg-white">
              <Clock size={22} aria-hidden="true" />
            </span>
            <div className="relative z-10">
              <h3 className="text-[0.82rem] font-semibold">{info.hours.title} · {info.hours.line}</h3>
              <p className="font-display text-[1.65rem] leading-tight font-extrabold">{info.hours.value}</p>
            </div>
            <Sun size={70} className="decor-float absolute -right-3 -bottom-4" />
          </article>
        </Reveal>

        <div className="mt-2 grid grid-cols-2 gap-2">
          {rows.map(({ icon: Icon, title, value, cls }, index) => (
            <Reveal key={title} delay={index * 0.05} y={14} className="h-full">
              <article className={`h-full p-3 ${cls}`}>
                <div className="flex items-center gap-1.5">
                  <Icon size={17} className="shrink-0" aria-hidden="true" />
                  <h3 className="text-[0.74rem] leading-tight font-semibold text-ink-soft">{title}</h3>
                </div>
                <p className="mt-1 font-display text-[1.05rem] leading-tight font-bold">{value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <Wave color="#FFF6E7" />
    </section>
  );
}
