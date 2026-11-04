"use client";

import { Apple, Cookie, Croissant, Salad, Soup } from "lucide-react";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Cloud, Star, Wave } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

const items = [
  { icon: Croissant, bg: "bg-sun", shape: "rounded-[56%_44%_52%_48%/52%_56%_44%_48%]", y: "translate-y-8" },
  { icon: Apple, bg: "bg-peach", shape: "rounded-[2.4rem_3.6rem_2.4rem_3.6rem]", y: "-translate-y-3" },
  { icon: Soup, bg: "bg-leaf", shape: "rounded-[48%_52%_44%_56%/56%_46%_54%_44%]", y: "translate-y-10" },
  { icon: Cookie, bg: "bg-sun", shape: "rounded-[3.6rem_2.4rem_3.6rem_2.4rem]", y: "-translate-y-2" },
  { icon: Salad, bg: "bg-white", shape: "rounded-[52%_48%_56%_44%/46%_54%_46%_54%]", y: "translate-y-8" },
];

export function Meals() {
  const { t } = useLang();
  return (
    <section id="meals" className="relative overflow-hidden bg-[linear-gradient(165deg,#B9E2F5,#D6EEFA_55%,#DFF2E0)]">
      <Wave color="#FFF6E7" flip />
      <Cloud size={150} className="decor-drift absolute top-14 left-[3%]" />
      <Star size={30} className="decor-twinkle absolute top-28 right-[8%]" color="#fff" />

      <div className="relative mx-auto max-w-[1180px] px-8 pt-5 pb-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-lg font-semibold text-[#1E6587]">{t.nav.meals}</p>
          <h2 className="mt-1 text-[2.9rem] leading-[1.1] font-extrabold tracking-tight">{t.meals.title}</h2>
          <p className="mt-3 text-lg font-bold text-ink-soft">{t.meals.subtitle}</p>
        </Reveal>

        <div className="relative mt-8 pb-10">
          <svg viewBox="0 0 1100 160" preserveAspectRatio="none" className="absolute inset-x-8 top-20 h-40 w-[calc(100%-4rem)]" aria-hidden="true">
            <path d="M10 110C110 10 190 10 290 70s170 80 270 30 170-90 270-30 170 70 260 10" fill="none" stroke="#fff" strokeWidth="6" strokeDasharray="4 16" strokeLinecap="round" />
          </svg>
          <ol className="relative grid grid-cols-5 gap-4">
            {t.meals.items.map((meal, index) => {
              const { icon: Icon, bg, shape, y } = items[index];
              return (
                <li key={meal} className={y}>
                  <Reveal delay={index * 0.08}>
                    <div className={`group relative mx-auto flex aspect-[1/1.1] flex-col items-center justify-center px-3 py-4 text-center shadow-soft transition-transform duration-300 hover:-translate-y-2 ${bg} ${shape}`}>
                      <span className="absolute -top-1 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <Icon size={44} strokeWidth={1.7} className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true" />
                      <h3 className="mt-3 text-[1.2rem] leading-tight font-bold">{meal}</h3>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
        <Reveal>
          <p className="mx-auto mt-6 max-w-2xl rounded-[1.5rem] bg-white/70 px-5 py-2.5 text-center text-[0.95rem] font-bold text-ink-soft">
            {t.meals.note}
          </p>
        </Reveal>
      </div>
      <Wave color="#FFF6E7" />
    </section>
  );
}
