"use client";

import { Apple, Cookie, Croissant, Salad, Soup } from "lucide-react";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Star, Wave } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

const items = [
  { icon: Croissant, bg: "bg-sun", shape: "rounded-[46%_54%_60%_40%/54%_50%_50%_46%]", align: "" },
  { icon: Apple, bg: "bg-peach", shape: "rounded-[40%_60%_46%_54%/50%_46%_54%_50%]", align: "ml-[12%]" },
  { icon: Soup, bg: "bg-leaf", shape: "rounded-[56%_44%_50%_50%/44%_56%_44%_56%]", align: "ml-[22%]" },
  { icon: Cookie, bg: "bg-sun", shape: "rounded-[44%_56%_54%_46%/56%_44%_56%_44%]", align: "ml-[12%]" },
  { icon: Salad, bg: "bg-white", shape: "rounded-[52%_48%_42%_58%/46%_56%_44%_54%]", align: "" },
];

export function MobileMeals() {
  const { t } = useLang();
  return (
    <section id="meals" className="relative overflow-hidden bg-[linear-gradient(170deg,#B9E2F5,#D6EEFA_55%,#DFF2E0)]">
      <Wave color="#FFF6E7" flip />
      <Star size={18} className="decor-twinkle absolute top-16 right-5" color="#fff" />
      <div className="mx-auto max-w-[640px] px-4 pt-3 pb-2">
        <Reveal>
          <p className="font-display text-sm font-semibold text-[#1E6587]">{t.nav.meals}</p>
          <h2 className="text-[1.65rem] leading-[1.12] font-extrabold tracking-tight">{t.meals.title}</h2>
          <p className="mt-1 text-[0.92rem] leading-snug font-bold text-ink-soft">{t.meals.subtitle}</p>
        </Reveal>

        {/* Изогнутая дорожка из пяти приёмов пищи */}
        <ol className="mt-3.5 space-y-1.5">
          {t.meals.items.map((meal, index) => {
            const { icon: Icon, bg, shape, align } = items[index];
            return (
              <li key={meal} className={align}>
                <Reveal delay={index * 0.05} y={12}>
                  <div className="flex items-center gap-2.5 rounded-full bg-white/75 p-1 pr-4">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center ${bg} ${shape}`}>
                      <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="min-w-0 flex-1 text-[0.98rem] leading-tight font-semibold">{meal}</h3>
                    <span className="font-display text-sm font-bold text-ink-soft" aria-hidden="true">{index + 1}</span>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
        <p className="mt-3 text-center text-[0.76rem] leading-snug font-bold text-ink-soft">{t.meals.note}</p>
      </div>
      <Wave color="#FFF6E7" />
    </section>
  );
}
