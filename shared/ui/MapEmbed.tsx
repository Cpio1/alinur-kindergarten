import { mapWidgetSrc } from "@/shared/content/site";
import { useLang } from "@/shared/i18n/LanguageProvider";

/** Официальный виджет 2ГИС с карточкой организации. Используется в компьютерной версии. */
export function MapEmbed({ className }: { className?: string }) {
  const { t } = useLang();
  return (
    <iframe
      src={mapWidgetSrc()}
      title={t.contact.mapTitle}
      loading="lazy"
      className={`block border-0 ${className ?? ""}`}
    />
  );
}
