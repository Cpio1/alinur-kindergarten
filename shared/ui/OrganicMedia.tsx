import Image from "next/image";

type OrganicMediaProps = {
  src: string | null;
  alt: string;
  /** CSS-класс фигуры: shape-blob, shape-arch, shape-cloud, shape-flower, shape-pebble. */
  shape: string;
  sizes: string;
  className?: string;
  preload?: boolean;
  /** Иллюстрация на случай, если реального файла ещё нет. */
  fallback: React.ReactNode;
};

export function OrganicMedia({ src, alt, shape, sizes, className, preload, fallback }: OrganicMediaProps) {
  return (
    <div className={`relative overflow-hidden ${shape} ${className ?? ""}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />
      ) : (
        fallback
      )}
    </div>
  );
}
