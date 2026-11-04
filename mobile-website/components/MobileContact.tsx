"use client";

import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Cloud, Sun, WhatsAppIcon } from "@/shared/ui/Decor";
import { Reveal } from "@/shared/ui/Reveal";

export function MobileContact() {
  const { t } = useLang();
  const { contact } = t;
  return (
    <section id="contact" className="relative overflow-hidden bg-milk py-6">
      <div className="mx-auto max-w-[640px] px-4">
        <Reveal>
          <p className="font-display text-sm font-semibold text-[#2B7EA8]">{t.nav.contact}</p>
          <h2 className="text-[1.75rem] leading-[1.12] font-extrabold tracking-tight">{contact.title}</h2>
        </Reveal>

        <Reveal className="mt-3.5">
          <div className="relative overflow-hidden rounded-[2.25rem_1rem_1rem_1rem] bg-[linear-gradient(160deg,#FDF0C4,#F8D66D)] p-4">
            <Sun size={62} className="decor-float absolute -top-2 -right-2" />
            <h3 className="pr-12 text-[1.25rem] leading-tight font-extrabold">{contact.name}</h3>
            <ul className="mt-3 space-y-2.5 text-[0.92rem]">
              <li className="flex gap-2.5">
                <MapPin size={19} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p><span className="font-semibold">{contact.addressLabel}: </span><strong className="font-extrabold">{contact.address}</strong></p>
              </li>
              <li className="flex gap-2.5">
                <Phone size={19} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p><span className="font-semibold">{contact.phoneLabel}: </span><a href={SITE.phoneHref} className="-my-2 inline-block py-2 font-extrabold underline underline-offset-2">{SITE.phoneDisplay}</a></p>
              </li>
              <li className="flex gap-2.5">
                <Clock size={19} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p className="leading-snug">
                  <strong className="font-extrabold">{contact.weekdays}: {contact.hours}</strong>
                  <br />
                  <span className="font-semibold">{contact.weekend}</span>
                </p>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-2 grid grid-cols-1 gap-2 min-[440px]:grid-cols-[1.7fr_1fr]" data-fab-hide>
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp !px-2 text-[0.88rem]">
            <WhatsAppIcon size={19} />
            {contact.whatsapp}
          </a>
          <a href={SITE.phoneHref} className="btn btn-ink !px-2 text-[0.88rem]">
            <Phone size={17} aria-hidden="true" />
            {contact.call}
          </a>
        </div>

        {/* Карточка виджета 2ГИС не помещается на узком экране, поэтому здесь блок с адресом. */}
        <Reveal className="mt-2">
          <div className="relative overflow-hidden rounded-[1rem_1rem_2.25rem_1rem] bg-sky-soft p-4">
            <Cloud size={84} className="decor-drift absolute -top-2 right-1" />
            <div className="relative flex items-center gap-3">
              <span className="shape-blob flex h-14 w-14 shrink-0 items-center justify-center bg-peach">
                <MapPin size={26} aria-hidden="true" />
              </span>
              <p className="min-w-0 pr-12 font-display text-[1.02rem] leading-tight font-semibold">{contact.address}</p>
            </div>
            <a href={SITE.twoGisHref} target="_blank" rel="noopener noreferrer" className="btn btn-light relative mt-3 w-full text-[0.92rem]">
              <Navigation size={17} aria-hidden="true" />
              {contact.twoGis}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
