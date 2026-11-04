export type SecondMedia = { type: "video" | "image"; src: string } | null;

export type GalleryImage = { src: string; width: number; height: number };

export type SiteMedia = {
  /** public/images/main-page.* */
  hero: string | null;
  /** public/images/main-page2.* (видео приоритетнее изображения) */
  second: SecondMedia;
  /** public/images/image1.*, image2.* … по порядку номеров, с настоящими размерами */
  gallery: GalleryImage[];
};

export type PlacedImage = GalleryImage & { index: number };

/**
 * Раскладывает фото по колонкам: каждое идёт в самую короткую колонку.
 * Порядок детерминированный, поэтому при раскрытии галереи уже показанные фото не прыгают.
 */
export function toColumns(images: GalleryImage[], count: number, startIndex = 0): PlacedImage[][] {
  const columns: PlacedImage[][] = Array.from({ length: count }, () => []);
  const heights = new Array<number>(count).fill(0);
  images.forEach((image, offset) => {
    const target = heights.indexOf(Math.min(...heights));
    columns[target].push({ ...image, index: startIndex + offset });
    heights[target] += image.height / image.width;
  });
  return columns;
}
