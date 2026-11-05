"use client";

import { BookOpen, CalendarDays, Soup, Users } from "lucide-react";
import type { SecondMedia } from "@/shared/lib/media-types";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Dots, Flower, Star } from "@/shared/ui/Decor";
import { OrganicMedia } from "@/shared/ui/OrganicMedia";
import { Reveal } from "@/shared/ui/Reveal";
import { PlayScene } from "@/shared/ui/Scenes";
import { SecondMediaBlock } from "@/shared/ui/SecondMediaBlock";

const cards = [
  { icon: Users, cls: "bg-sky-soft rounded-[1.9rem_1.1rem_1.9rem_1.1rem]", iconCls: "bg-sky" },
  { icon: CalendarDays, cls: "bg-sun-soft rounded-[1.1rem_1.9rem_1.1rem_1.9rem]", iconCls: "bg-sun" },
  { icon: BookOpen, cls: "bg-leaf-soft rounded-[1.1rem_1.9rem_1.1rem_1.9rem]", iconCls: "bg-leaf" },
  { icon: Soup, cls: "bg-peach-soft rounded-[1.9rem_1.1rem_1.9rem_1.1rem]", iconCls: "bg-peach" },
];

export function About({ image, second }: { image: string | null; second: SecondMedia }) {
  const { t } = useLang();
  return (
    <section id="about" className="relative overflow-hidden bg-milk py-20">
      <Flower size={48} className="decor-sway absolute top-14 right-[5%]" color="#A8D9AA" />
      <Dots className="absolute right-[3%] bottom-10" color="#F3B5A8" />

      <div className="mx-auto grid max-w-[1160px] grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] items-center gap-20 px-8">
        <Reveal className="relative mx-auto w-full max-w-[420px]">
          <div className="shape-arch absolute -top-3 -left-3 h-full w-full rotate-[-5deg] bg-sky" />
          <div className="drop-shadow-[0_18px_26px_rgba(38,53,75,0.2)] relative">
            <OrganicMedia
              src={image}
              alt={t.about.imageAlt}
              shape="shape-arch"
              sizes="(max-width: 1099px) 16px, 420px"
              className="aspect-[5/5.4] w-full"
              fallback={<PlayScene label={t.about.sceneAlt} className="h-full w-full" />}
            />
          </div>
          <Star size={44} className="decor-twinkle absolute -top-1 -right-1" />
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-lg font-semibold text-[#2B7EA8]">{t.nav.about}</p>
            <h2 className="mt-1 text-[2.9rem] leading-[1.1] font-extrabold tracking-tight">{t.about.title}</h2>
            <p className="mt-5 text-[1.15rem] leading-relaxed font-semibold text-ink-soft">{t.about.text}</p>
          </Reveal>
          <ul className="mt-9 grid grid-cols-2 gap-4">
            {cards.map(({ icon: Icon, cls, iconCls }, index) => (
              <li key={index}>
                <Reveal delay={index * 0.07} className="h-full">
                  <div className={`flex h-full min-h-20 items-center gap-3.5 px-5 py-3.5 shadow-soft transition-transform duration-300 hover:-translate-y-1 ${cls}`}>
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconCls}`}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-display text-[1.05rem] leading-tight font-bold">{t.about.cards[index]}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {second && (
        <Reveal className="mx-auto mt-16 max-w-[1160px] px-8">
          <SecondMediaBlock
            media={second}
            sizes="(max-width: 1099px) 16px, 1160px"
            className="aspect-[16/8] rounded-[4rem_1.8rem_4rem_1.8rem] shadow-lift"
          />
        </Reveal>
      )}
    </section>
  );
}
