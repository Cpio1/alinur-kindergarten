"use client";

import { BookOpen, CalendarDays, Soup, Users } from "lucide-react";
import type { SecondMedia } from "@/shared/lib/media-types";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Flower, Star } from "@/shared/ui/Decor";
import { OrganicMedia } from "@/shared/ui/OrganicMedia";
import { Reveal } from "@/shared/ui/Reveal";
import { PlayScene } from "@/shared/ui/Scenes";
import { SecondMediaBlock } from "@/shared/ui/SecondMediaBlock";

const cards = [
  { icon: Users, cls: "bg-sky-soft rounded-[1.5rem_0.9rem_1.5rem_0.9rem]", iconCls: "bg-sky" },
  { icon: CalendarDays, cls: "bg-sun-soft rounded-[0.9rem_1.5rem_0.9rem_1.5rem]", iconCls: "bg-sun" },
  { icon: BookOpen, cls: "bg-leaf-soft rounded-[0.9rem_1.5rem_0.9rem_1.5rem]", iconCls: "bg-leaf" },
  { icon: Soup, cls: "bg-peach-soft rounded-[1.5rem_0.9rem_1.5rem_0.9rem]", iconCls: "bg-peach" },
];

export function MobileAbout({ image, second }: { image: string | null; second: SecondMedia }) {
  const { t } = useLang();
  return (
    <section id="about" className="relative overflow-hidden bg-milk py-9">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal>
          <p className="font-display text-sm font-semibold text-[#2B7EA8]">{t.nav.about}</p>
          <h2 className="mt-0.5 text-[1.75rem] leading-[1.12] font-extrabold tracking-tight">{t.about.title}</h2>
        </Reveal>

        <Reveal className="relative mt-4 flow-root">
          <div className="relative float-right mb-1 ml-3 w-[42%] max-w-[190px]">
            <OrganicMedia
              src={image}
              alt={t.about.imageAlt}
              shape="shape-flower"
              sizes="(min-width: 1100px) 16px, 190px"
              className="aspect-square w-full"
              fallback={<PlayScene label={t.about.sceneAlt} className="h-full w-full" />}
            />
            <Star size={20} className="decor-twinkle absolute -top-1 left-0" />
            <Flower size={26} color="#A8D9AA" className="decor-sway absolute right-0 -bottom-1" />
          </div>
          <p className="text-[0.95rem] leading-snug font-semibold text-ink-soft">{t.about.text}</p>
        </Reveal>

        <ul className="mt-5 grid grid-cols-2 gap-2.5">
          {cards.map(({ icon: Icon, cls, iconCls }, index) => (
            <li key={index}>
              <Reveal delay={index * 0.05} y={14} className="h-full">
                <div className={`flex h-full min-h-14 items-center gap-2.5 px-3 py-2.5 shadow-soft ${cls}`}>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${iconCls}`}>
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span className="font-display text-[0.84rem] leading-tight font-semibold">{t.about.cards[index]}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {second && (
          <Reveal className="mt-6">
            <SecondMediaBlock media={second} sizes="(min-width: 1100px) 16px, 100vw" className="aspect-[16/10] rounded-[2rem_1rem_2rem_1rem] shadow-soft" />
          </Reveal>
        )}
      </div>
    </section>
  );
}
