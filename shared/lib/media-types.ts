export type SecondMedia = { type: "video" | "image"; src: string } | null;

export type SiteMedia = {
  /** public/images/main-page.* */
  hero: string | null;
  /** public/images/main-page2.* (видео приоритетнее изображения) */
  second: SecondMedia;
  /** public/images/image1.*, image2.* … по порядку номеров */
  gallery: string[];
};
