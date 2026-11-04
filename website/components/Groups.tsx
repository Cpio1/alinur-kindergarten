"use client";

import { Cloud as CloudIcon, Sprout, Sun as SunIcon } from "lucide-react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Cloud, Flower, Squiggle, Star, WhatsAppIcon } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

const looks = [
  {
    icon: SunIcon,
    bg: "bg-[linear-gradient(145deg,#A8D9AA,#DFF2E0)]",
    radius: "rounded-[4.5rem_2rem_4.5rem_2rem]",
    badge: "bg-sun",
    badgeShape: "shape-flower",
  },
  {
    icon: CloudIcon,
    bg: "bg-[linear-gradient(145deg,#F3B5A8,#FBE5DF)]",
    radius: "rounded-[2rem_4.5rem_2rem_4.5rem]",
    badge: "bg-sky",
    badgeShape: "shape-cloud",
  },
];

export function Groups() {
  const { t } = useLang();
  return (
    <section id="groups" className="relative overflow-hidden bg-milk py-14">
      <Sprout size={40} className="decor-sway absolute top-16 left-[7%] text-[#6BB56F]" aria-hidden="true" />
      <Star size={28} className="decor-twinkle absolute top-24 right-[9%]" />
      <div className="mx-auto max-w-[1120px] px-8">
        <Reveal className="text-center">
          <p className="font-display text-lg font-semibold text-[#2B7EA8]">{t.nav.groups}</p>
          <h2 className="mt-1 text-[2.9rem] leading-[1.1] font-extrabold tracking-tight">{t.groups.title}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg font-semibold text-ink-soft">{t.groups.subtitle}</p>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-7">
          {t.groups.items.map((group, index) => {
            const look = looks[index];
            const Icon = look.icon;
            return (
              <Reveal key={group.name} delay={index * 0.1}>
                <article className={`group relative h-full min-h-[21rem] overflow-hidden p-9 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 ${look.bg} ${look.radius}`}>
                  {index === 0 ? (
                    <Flower size={84} className="decor-sway absolute -right-2 -bottom-2" color="#fff" />
                  ) : (
                    <Cloud size={150} className="decor-drift absolute -right-6 bottom-3" />
                  )}
                  <Squiggle width={100} color="#fff" className="absolute top-9 right-8 opacity-80" />
                  <div className="relative h-24 w-24 transition-transform duration-500 group-hover:rotate-12">
                    <div className={`absolute inset-0 ${look.badge} ${look.badgeShape}`} />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Icon size={38} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-[2.6rem] leading-none font-extrabold tracking-tight">{group.name}</h3>
                  <p className="relative mt-3 max-w-[25rem] text-[1.08rem] leading-relaxed font-semibold">{group.text}</p>
                  <p className="relative mt-4 inline-block rounded-full bg-white/80 px-4 py-1.5 text-sm font-extrabold">{group.tag}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-7 flex items-center justify-center gap-5">
          <p className="text-lg font-bold">{t.groups.note}</p>
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <WhatsAppIcon size={20} />
            {t.groups.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
