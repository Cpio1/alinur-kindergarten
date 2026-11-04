import Image from "next/image";
import type { SecondMedia } from "@/shared/lib/media-types";
import { useLang } from "@/shared/i18n/LanguageProvider";

/** main-page2: видео, изображение или ничего. Пустой блок не выводится. */
export function SecondMediaBlock({
  media,
  className,
  sizes,
}: {
  media: SecondMedia;
  className?: string;
  sizes: string;
}) {
  const { t } = useLang();
  if (!media) return null;

  return (
    <div className={`relative overflow-hidden bg-sky-soft ${className ?? ""}`}>
      {media.type === "video" ? (
        <video
          src={media.src}
          controls
          playsInline
          muted
          preload="metadata"
          aria-label={t.about.secondVideo}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Image src={media.src} alt={t.about.secondAlt} fill sizes={sizes} className="object-cover" />
      )}
    </div>
  );
}
