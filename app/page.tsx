import { SITE, SITE_URL } from "@/shared/content/site";
import { getSiteMedia } from "@/shared/lib/media";
import { ViewportSwitch } from "@/shared/ui/ViewportSwitch";

export default function Page() {
  const media = getSiteMedia();

  // Только подтверждённые заказчиком данные и координаты из карточки 2ГИС.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: SITE.brand,
    url: SITE_URL,
    telephone: "+77029685555",
    address: {
      "@type": "PostalAddress",
      streetAddress: "улица Музбел, 57",
      addressLocality: "Алматы",
      addressCountry: "KZ",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.map.lat, longitude: SITE.map.lon },
    hasMap: SITE.twoGisHref,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:30",
    },
    ...(media.hero ? { image: `${SITE_URL}${media.hero}` } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ViewportSwitch media={media} />
    </>
  );
}
