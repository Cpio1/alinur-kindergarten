import fs from "node:fs";
import path from "node:path";
import type { SiteMedia } from "./media-types";

const IMAGE_EXT = [".webp", ".jpg", ".jpeg", ".png"];
const IMAGES_DIR = path.join(process.cwd(), "public", "images");

/** Читает public/images при сборке. Новые файлы подхватываются без правок кода. */
export function getSiteMedia(): SiteMedia {
  let files: string[] = [];
  try {
    files = fs.readdirSync(IMAGES_DIR);
  } catch {
    return { hero: null, second: null, gallery: [] };
  }

  const toUrl = (file: string) => `/images/${encodeURIComponent(file)}`;

  const findImage = (name: string) => {
    for (const ext of IMAGE_EXT) {
      const match = files.find((f) => f.toLowerCase() === `${name}${ext}`);
      if (match) return toUrl(match);
    }
    return null;
  };

  const video = files.find((f) => f.toLowerCase() === "main-page2.mp4");
  const secondImage = findImage("main-page2");

  const numbers = new Set<number>();
  for (const file of files) {
    const match = /^image(\d+)\.(webp|jpe?g|png)$/i.exec(file);
    if (match) numbers.add(Number(match[1]));
  }
  const gallery = [...numbers]
    .sort((a, b) => a - b)
    .map((n) => findImage(`image${n}`))
    .filter((src): src is string => Boolean(src));

  return {
    hero: findImage("main-page"),
    second: video
      ? { type: "video", src: toUrl(video) }
      : secondImage
        ? { type: "image", src: secondImage }
        : null,
    gallery,
  };
}
