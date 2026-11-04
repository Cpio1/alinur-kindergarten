"use client";

import { Cloud as CloudIcon, Sun as SunIcon } from "lucide-react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Cloud, Flower, WhatsAppIcon } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

const looks = [
  { icon: SunIcon, bg: "bg-[linear-gradient(120deg,#A8D9AA,#DFF2E0)]", radius: "rounded-[2.25rem_1rem_2.25rem_1rem]", badge: "bg-sun shape-flower" },
  { icon: CloudIcon, bg: "bg-[linear-gradient(120deg,#F3B5A8,#FBE5DF)]", radius: "rounded-[1rem_2.25rem_1rem_2.25rem]", badge: "bg-sky shape-cloud" },
];

export function MobileGroups() {
  const { t } = useLang();
  return (
    <section id="groups" className="relative overflow-hidden bg-milk py-6">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal>
          <p className="font-display text-sm font-semibold text-[#2B7EA8]">{t.nav.groups}</p>
          <h2 className="text-[1.75rem] leading-[1.12] font-extrabold tracking-tight">{t.groups.title}</h2>
          <p className="mt-0.5 text-[0.92rem] leading-snug font-semibold text-ink-soft">{t.groups.subtitle}</p>
        </Reveal>

        <div className="mt-3.5 space-y-2.5">
          {t.groups.items.map((group, index) => {
            const look = looks[index];
            const Icon = look.icon;
            return (
              <Reveal key={group.name} delay={index * 0.06} y={16}>
                <article className={`relative flex gap-3 overflow-hidden p-4 ${index === 1 ? "flex-row-reverse" : ""} ${look.bg} ${look.radius}`}>
                  {index === 0 ? (
                    <Flower size={46} color="#fff" className="decor-sway absolute -right-1 -bottom-1 opacity-80" />
                  ) : (
                    <Cloud size={70} className="decor-drift absolute -right-3 -bottom-3 opacity-70" />
                  )}
                  <div className="relative h-16 w-16 shrink-0">
                    <div className={`absolute inset-0 ${look.badge}`} />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Icon size={25} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="relative min-w-0 flex-1">
                    <h3 className="text-[1.45rem] leading-none font-extrabold">{group.name}</h3>
                    <p className="mt-1.5 text-[0.88rem] leading-snug font-semibold">{group.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-3 flex items-center justify-between gap-3 rounded-[1.25rem] bg-white p-2.5 pl-3.5 shadow-sm">
          <p className="text-[0.8rem] leading-tight font-bold">{t.groups.note}</p>
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label={t.groups.cta} className="btn btn-whatsapp shrink-0 !px-3 text-[0.82rem]">
            <WhatsAppIcon size={17} />
            {t.groups.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
