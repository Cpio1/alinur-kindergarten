"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { handleAnchorClick } from "@/shared/lib/scroll";
import { Cloud, Dots, Flower, Squiggle, Star, Sun, Wave, WhatsAppIcon } from "@/shared/ui/Decor";
import { OrganicMedia } from "@/shared/ui/OrganicMedia";
import { KindergartenScene } from "@/shared/ui/Scenes";

const statStyles = [
  "bg-sun rounded-[58%_42%_50%_50%/55%_50%_50%_45%]",
  "bg-leaf rounded-[2rem_3.2rem_2rem_3.2rem]",
  "bg-peach rounded-[3.2rem_2rem_3.2rem_2rem]",
];

export function Hero({ image }: { image: string | null }) {
  const { t } = useLang();
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(170deg,#9AD3EF_0%,#C9E8F7_38%,#FDF0C4_78%,#FFF6E7_100%)] pt-28"
    >
      <Cloud size={110} className="decor-drift absolute top-[6.5rem] left-[1%] hidden opacity-90 min-[1360px]:block" />
      <Cloud size={110} className="decor-drift absolute top-[58%] left-[44%] opacity-70 [animation-delay:-5s]" />
      <Star size={30} className="decor-twinkle absolute top-[44%] left-[2.5%] hidden min-[1360px]:block" />
      <Flower size={46} className="decor-sway absolute bottom-24 left-[4%] hidden min-[1360px]:block" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-[1.02fr_1fr] items-center gap-8 px-8 pb-10">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-[0.95rem] font-extrabold text-ink shadow-soft">
            <Sparkles size={18} className="text-[#E5A91F]" aria-hidden="true" />
            {t.hero.badge}
          </p>

          <h1 className="mt-5 text-[3.9rem] leading-[1.06] font-extrabold tracking-tight text-ink xl:text-[4.4rem]">
            <span className="relative isolate inline-block">
              {t.hero.titleBrand}
              <span className="absolute inset-x-[-0.08em] bottom-[0.1em] -z-10 h-[0.36em] -rotate-1 rounded-full bg-sun" aria-hidden="true" />
            </span>{" "}
            — {t.hero.titleRest}
          </h1>

          <p className="mt-6 max-w-[34rem] text-xl leading-relaxed font-semibold text-ink-soft">{t.hero.subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp text-lg">
              <WhatsAppIcon size={22} />
              {t.hero.primary}
            </a>
            <a href="#about" onClick={(event) => handleAnchorClick(event, "about")} className="btn btn-light text-lg">
              {t.hero.secondary}
              <ArrowDown size={20} aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-9 flex items-center gap-4">
            {t.hero.stats.map((stat, index) => (
              <li
                key={stat.label}
                className={`flex min-h-24 min-w-28 flex-col items-center justify-center px-5 py-3 text-center shadow-soft ${statStyles[index]} ${
                  index === 1 ? "-translate-y-2" : ""
                }`}
              >
                <span className="font-display text-3xl leading-none font-extrabold">{stat.value}</span>
                <span className="mt-1 max-w-28 text-sm leading-tight font-bold">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="shape-blob absolute -inset-3 rotate-12 bg-sun" />
          <div className="shape-blob absolute -inset-1 -rotate-[14deg] bg-peach/80" />
          <div className="drop-shadow-[0_24px_32px_rgba(38,53,75,0.25)] absolute inset-3">
            <OrganicMedia
              src={image}
              alt={t.hero.imageAlt}
              shape="shape-blob"
              // Для телефонов этот вариант скрыт, поэтому браузер берёт минимальный размер.
              sizes="(max-width: 1099px) 16px, 540px"
              preload
              className="h-full w-full"
              fallback={<KindergartenScene label={t.hero.sceneAlt} className="h-full w-full" />}
            />
          </div>
          <Sun size={118} className="decor-float absolute -top-7 -right-3" />
          <Cloud size={132} className="decor-drift absolute bottom-6 -left-9 drop-shadow-md" />
          <Star size={36} className="decor-twinkle absolute top-5 left-8" color="#fff" />
          <Star size={24} className="decor-twinkle absolute right-1 bottom-20 [animation-delay:-1.4s]" />
          <Dots className="decor-float-slow absolute -right-5 bottom-2" color="#26354B" />
          <Squiggle width={96} color="#85C7E8" className="decor-float-slow absolute top-1/2 -right-10" />
        </div>
      </div>
      <Wave color="#FFF6E7" className="relative" />
    </section>
  );
}
