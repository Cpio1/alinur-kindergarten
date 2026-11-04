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
  { icon: Users, cls: "bg-sky rounded-[2.6rem_1.4rem_2.6rem_1.4rem]", offset: "" },
  { icon: CalendarDays, cls: "bg-sun rounded-[60%_40%_46%_54%/52%_56%_44%_48%]", offset: "translate-y-3" },
  { icon: BookOpen, cls: "bg-leaf rounded-[1.4rem_3rem_1.4rem_3rem]", offset: "" },
  { icon: Soup, cls: "bg-peach rounded-[46%_54%_58%_42%/56%_46%_54%_44%]", offset: "translate-y-3" },
];

export function About({ image, second }: { image: string | null; second: SecondMedia }) {
  const { t } = useLang();
  return (
    <section id="about" className="relative overflow-hidden bg-milk py-16">
      <Flower size={48} className="decor-sway absolute top-14 right-[5%]" color="#A8D9AA" />
      <Dots className="absolute right-[3%] bottom-16" color="#F3B5A8" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-[0.92fr_1.08fr] items-center gap-16 px-8">
        <Reveal className="relative">
          <div className="shape-arch absolute -top-3 -left-3 h-full w-full rotate-[-5deg] bg-sky" />
          <div className="drop-shadow-[0_18px_26px_rgba(38,53,75,0.2)] relative">
            <OrganicMedia
              src={image}
              alt={t.about.imageAlt}
              shape="shape-arch"
              sizes="(max-width: 1099px) 16px, 480px"
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
          <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6">
            {cards.map(({ icon: Icon, cls, offset }, index) => (
              <li key={index} className={offset}>
                <Reveal delay={index * 0.07}>
                  <div className={`flex min-h-24 items-center gap-3 px-6 py-4 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:rotate-[-1deg] ${cls}`}>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/75">
                      <Icon size={25} aria-hidden="true" />
                    </span>
                    <span className="font-display text-lg leading-tight font-bold">{t.about.cards[index]}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {second && (
        <Reveal className="mx-auto mt-14 max-w-[1120px] px-8">
          <SecondMediaBlock
            media={second}
            sizes="(max-width: 1099px) 16px, 1120px"
            className="aspect-[16/8] rounded-[4rem_1.8rem_4rem_1.8rem] shadow-lift"
          />
        </Reveal>
      )}
    </section>
  );
}
