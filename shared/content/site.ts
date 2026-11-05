/** Подтверждённые данные о детском саде. Единственный источник фактов для обоих интерфейсов. */
export const SITE = {
  brand: "Алинур",
  phoneDisplay: "+7 702 968 55 55",
  phoneHref: "tel:+77029685555",
  whatsappHref: "https://wa.me/77029685555",
  twoGisHref: "https://2gis.kz/almaty/gallery/geo/70000001103338236/photoId/30258560297444760",
  twoGisGalleryHref: "https://2gis.kz/almaty/gallery/firm/70000001103338236/photoId/30258560267175819",
  map: {
    // Идентификатор и координаты взяты из карточки организации в 2ГИС.
    firmId: "70000001103338236",
    lat: 43.318355,
    lon: 76.984421,
    zoom: 16,
  },
} as const;

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

/** Публичный адрес сайта. Для своего домена задайте NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")
).replace(/\/$/, "");

/** Кнопка документов появится, как только будет указана корректная https-ссылка. */
const documentsUrl = (process.env.NEXT_PUBLIC_DOCUMENTS_URL ?? "").trim();
export const DOCUMENTS_URL = documentsUrl.startsWith("https://") ? documentsUrl : null;

export const LANG_STORAGE_KEY = "alinur-lang";

export const SECTION_IDS = [
  "home",
  "about",
  "info",
  "groups",
  "meals",
  "gallery",
  "documents",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function mapWidgetSrc() {
  const { firmId, lat, lon, zoom } = SITE.map;
  const options = {
    pos: { lat, lon, zoom },
    opt: { city: "almaty" },
    org: firmId,
  };
  return `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(
    JSON.stringify(options),
  )}`;
}
