"use client";

import { SITE } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";
import { Logo } from "@/shared/ui/Brand";
import { Wave } from "@/shared/ui/Decor";

export function MobileFooter() {
  const { t } = useLang();
  return (
    <footer className="bg-milk text-white">
      <Wave color="#26354B" />
      <div className="bg-ink px-4 pt-3 pb-7 text-center">
        <div className="flex justify-center">
          <Logo size={34} textClass="text-xl" light />
        </div>
        <p className="mt-1 text-sm font-semibold text-white/80">{t.footer.tagline}</p>
        <a href={SITE.phoneHref} className="mt-2 inline-block font-display font-semibold">{SITE.phoneDisplay}</a>
        <p className="text-sm text-white/80">{t.contact.address}</p>
      </div>
    </footer>
  );
}
