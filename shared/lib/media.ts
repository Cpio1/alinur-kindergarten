import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import type { GalleryImage, SiteMedia } from "./media-types";

const IMAGE_EXT = [".webp", ".jpg", ".jpeg", ".png"];
const IMAGES_DIR = path.join(process.cwd(), "public", "images");

/** Настоящие размеры файла с учётом поворота из EXIF. Повреждённый файл пропускается. */
function readDimensions(file: string) {
  try {
    const size = imageSize(fs.readFileSync(path.join(IMAGES_DIR, file)));
    if (!size.width || !size.height) return null;
    const rotated = (size.orientation ?? 1) >= 5;
    return rotated ? { width: size.height, height: size.width } : { width: size.width, height: size.height };
  } catch {
    return null;
  }
}

/** Читает public/images при сборке. Новые файлы подхватываются без правок кода. */
export function getSiteMedia(): SiteMedia {
  let files: string[] = [];
  try {
    files = fs.readdirSync(IMAGES_DIR);
  } catch {
    return { hero: null, second: null, gallery: [] };
  }

  const toUrl = (file: string) => `/images/${encodeURIComponent(file)}`;

  const findFile = (name: string) => {
    for (const ext of IMAGE_EXT) {
      const match = files.find((f) => f.toLowerCase() === `${name}${ext}`);
      if (match) return match;
    }
    return null;
  };

  const findImage = (name: string) => {
    const file = findFile(name);
    return file ? toUrl(file) : null;
  };

  const video = files.find((f) => f.toLowerCase() === "main-page2.mp4");
  const secondImage = findImage("main-page2");

  const numbers = new Set<number>();
  for (const file of files) {
    const match = /^image(\d+)\.(webp|jpe?g|png)$/i.exec(file);
    if (match) numbers.add(Number(match[1]));
  }

  const gallery: GalleryImage[] = [];
  for (const number of [...numbers].sort((a, b) => a - b)) {
    const file = findFile(`image${number}`);
    const dimensions = file ? readDimensions(file) : null;
    if (file && dimensions) gallery.push({ src: toUrl(file), ...dimensions });
  }

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
