"use client";

import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Cloud, Flower, Star, Sun, WhatsAppIcon } from "@/shared/ui/Decor";
import { MapEmbed } from "@/shared/ui/MapEmbed";
import { Reveal } from "@/shared/ui/Reveal";

export function Contact() {
  const { t } = useLang();
  const { contact } = t;
  return (
    <section id="contact" className="relative overflow-hidden bg-milk py-14">
      <Sun size={84} className="decor-float absolute top-12 left-[4%]" />
      <Cloud size={120} className="decor-drift absolute top-20 right-[4%]" color="#D6EEFA" />
      <Flower size={44} className="decor-sway absolute bottom-10 left-[3%]" color="#A8D9AA" />

      <div className="relative mx-auto max-w-[1180px] px-8">
        <Reveal className="text-center">
          <p className="font-display text-lg font-semibold text-[#2B7EA8]">{t.nav.contact}</p>
          <h2 className="mt-1 text-[2.9rem] leading-[1.1] font-extrabold tracking-tight">{contact.title}</h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-[0.9fr_1.1fr] items-stretch gap-7">
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[4rem_2rem_2rem_2rem] bg-[linear-gradient(160deg,#FDF0C4,#F8D66D)] p-9 shadow-soft">
              <Star size={30} className="decor-twinkle absolute top-7 right-8" color="#fff" />
              <h3 className="text-[1.9rem] leading-tight font-extrabold">{contact.name}</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"><MapPin size={22} aria-hidden="true" /></span>
                  <div>
                    <p className="text-sm font-bold text-ink-soft">{contact.addressLabel}</p>
                    <p className="text-lg font-extrabold">{contact.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"><Phone size={22} aria-hidden="true" /></span>
                  <div>
                    <p className="text-sm font-bold text-ink-soft">{contact.phoneLabel}</p>
                    <a href={SITE.phoneHref} className="text-lg font-extrabold underline-offset-4 hover:underline">{SITE.phoneDisplay}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"><Clock size={22} aria-hidden="true" /></span>
                  <div>
                    <p className="text-sm font-bold text-ink-soft">{contact.hoursLabel}</p>
                    <p className="text-lg font-extrabold">{contact.weekdays}: {contact.hours}</p>
                    <p className="font-bold">{contact.weekend}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-auto flex flex-wrap gap-3 pt-7" data-fab-hide>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp text-lg">
                  <WhatsAppIcon size={22} />
                  {contact.whatsapp}
                </a>
                <a href={SITE.phoneHref} className="btn btn-light">
                  <Phone size={19} aria-hidden="true" />
                  {contact.call}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[27rem] overflow-hidden rounded-[2rem_4rem_2rem_4rem] bg-sky-soft shadow-soft">
              <MapEmbed className="absolute inset-0 h-full w-full" />
              <a href={SITE.twoGisHref} target="_blank" rel="noopener noreferrer" className="btn btn-ink absolute bottom-5 left-5 z-10">
                <Navigation size={18} aria-hidden="true" />
                {contact.twoGis}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
