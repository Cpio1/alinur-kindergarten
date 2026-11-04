"use client";

import { BookOpen, CalendarDays, Clock, UsersRound, UtensilsCrossed } from "lucide-react";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Cloud, Star, Sun, Wave } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

export function Info() {
  const { t } = useLang();
  const { info } = t;
  const small = [
    { icon: CalendarDays, ...info.age, cls: "bg-white rounded-[3rem_1.5rem_3rem_1.5rem]", iconCls: "bg-peach" },
    { icon: BookOpen, ...info.language, cls: "bg-leaf rounded-[1.5rem_3.4rem_1.5rem_3.4rem]", iconCls: "bg-white" },
    { icon: UsersRound, ...info.groups, cls: "bg-peach rounded-[1.5rem_1.5rem_1.5rem_3.8rem]", iconCls: "bg-white" },
    { icon: UtensilsCrossed, ...info.meals, cls: "bg-white rounded-[1.5rem_1.5rem_3.8rem_1.5rem]", iconCls: "bg-sun" },
  ];

  return (
    <section id="info" className="relative overflow-hidden bg-sun-soft">
      <Wave color="#FFF6E7" flip />
      <Cloud size={130} className="decor-drift absolute top-20 right-[6%]" />
      <Star size={32} className="decor-twinkle absolute top-40 left-[5%]" color="#F3B5A8" />

      <div className="mx-auto max-w-[1160px] px-8 pt-6 pb-6">
        <Reveal className="text-center">
          <p className="font-display text-lg font-semibold text-[#2B7EA8]">{t.nav.info}</p>
          <h2 className="mt-1 text-[2.9rem] leading-[1.1] font-extrabold tracking-tight">{info.title}</h2>
          <p className="mt-2 text-lg font-semibold text-ink-soft">{info.subtitle}</p>
        </Reveal>

        <div className="mt-9 grid grid-cols-[1.15fr_1fr_1fr] gap-5">
          <Reveal className="row-span-2">
            <article className="relative flex h-full min-h-80 flex-col justify-between overflow-hidden rounded-[3.4rem_2rem_3.4rem_2rem] bg-[linear-gradient(150deg,#85C7E8,#B9E2F5)] p-8 shadow-soft">
              <Sun size={110} className="decor-float absolute -right-4 -bottom-3 opacity-95" />
              <span className="flex h-16 w-16 items-center justify-center rounded-[40%_60%_55%_45%] bg-white">
                <Clock size={32} aria-hidden="true" />
              </span>
              <div className="relative">
                <h3 className="text-2xl font-bold">{info.hours.title}</h3>
                <p className="mt-3 text-lg font-bold">{info.hours.line}</p>
                <p className="font-display text-[2.7rem] leading-tight font-extrabold">{info.hours.value}</p>
              </div>
            </article>
          </Reveal>
          {small.map(({ icon: Icon, title, value, cls, iconCls }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <article className={`flex h-full min-h-40 flex-col justify-center gap-2 px-7 py-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 ${cls}`}>
                <span className={`flex h-12 w-12 items-center justify-center rounded-full ${iconCls}`}>
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-1 text-base font-semibold text-ink-soft">{title}</h3>
                <p className="font-display text-[1.65rem] leading-tight font-extrabold">{value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <Wave color="#FFF6E7" />
    </section>
  );
}
