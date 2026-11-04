"use client";

import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { handleAnchorClick } from "@/shared/lib/scroll";
import { Cloud, Star, Sun, Wave, WhatsAppIcon } from "@/shared/ui/Decor";
import { OrganicMedia } from "@/shared/ui/OrganicMedia";
import { KindergartenScene } from "@/shared/ui/Scenes";

const statColors = ["bg-sun", "bg-leaf", "bg-peach"];

export function MobileHero({ image }: { image: string | null }) {
  const { t } = useLang();
  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(175deg,#9AD3EF_0%,#C9E8F7_46%,#FDF0C4_86%,#FFF6E7_100%)] pt-[72px]">
      <Cloud size={72} className="decor-drift absolute top-[76px] right-2 hidden opacity-80 min-[380px]:block" />
      <Star size={16} className="decor-twinkle absolute top-[150px] right-6" color="#fff" />

      <div className="mx-auto max-w-[640px] px-4">
        <p className="inline-block rounded-full bg-white/85 px-3 py-1.5 text-[0.78rem] font-extrabold shadow-sm">{t.hero.badge}</p>

        <h1 className="mt-3 text-[2.2rem] leading-[1.08] font-extrabold tracking-tight min-[380px]:text-[2.5rem] sm:text-5xl">
          <span className="relative isolate inline-block">
            {t.hero.titleBrand}
            <span className="absolute inset-x-[-0.08em] bottom-[0.1em] -z-10 h-[0.36em] -rotate-1 rounded-full bg-sun" aria-hidden="true" />
          </span>{" "}
          — {t.hero.titleRest}
        </h1>
        <p className="mt-4 text-base leading-snug font-semibold text-ink-soft">{t.hero.subtitle}</p>

        <div className="mt-4 grid grid-cols-[1.6fr_1fr] gap-2 min-[360px]:grid-cols-[1.35fr_1fr]">
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp !gap-1.5 !px-2 text-[0.82rem] whitespace-nowrap min-[360px]:text-[0.92rem]">
            <WhatsAppIcon size={19} />
            {t.hero.primary}
          </a>
          <a href="#about" onClick={(event) => handleAnchorClick(event, "about")} className="btn btn-light !px-2 text-[0.82rem] whitespace-nowrap min-[360px]:text-[0.92rem]">
            {t.hero.secondary}
          </a>
        </div>

        <div className="relative mx-auto mt-6 w-[86%] max-w-[420px]">
          <div className="shape-arch absolute -inset-x-2 -top-2 bottom-1 rotate-[4deg] bg-sun" />
          <OrganicMedia
            src={image}
            alt={t.hero.imageAlt}
            shape="shape-arch"
            sizes="(min-width: 1100px) 16px, 86vw"
            preload
            className="aspect-[1/1.02] w-full"
            fallback={<KindergartenScene label={t.hero.sceneAlt} className="h-full w-full" />}
          />
          <Sun size={72} className="decor-float absolute -top-4 -right-5" />
          <Cloud size={78} className="decor-drift absolute bottom-16 -left-7 drop-shadow-sm" />
        </div>

        <ul className="relative z-10 -mt-7 grid grid-cols-3 gap-1.5 rounded-[1.5rem] bg-white p-2 shadow-soft">
          {t.hero.stats.map((stat, index) => (
            <li key={stat.label} className={`flex min-h-[4.2rem] flex-col items-center justify-center rounded-[1.1rem] px-1 py-1.5 text-center ${statColors[index]}`}>
              <span className="font-display text-xl leading-none font-extrabold">{stat.value}</span>
              <span className="mt-0.5 text-[0.7rem] leading-[1.1] font-extrabold">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <Wave color="#FFF6E7" className="mt-2" />
    </section>
  );
}
