// Добавляет фотографии из папки в галерею: npm run photos:add -- ~/Desktop/alinur-photos
//
// - Ничего не удаляет и не перезаписывает: новые файлы получают следующие номера imageN.
// - Пропускает дубликаты, в том числе пересжатые и уменьшенные копии уже добавленных снимков.
//   Из нескольких копий в одной папке оставляет снимок с наибольшим разрешением.
// - Сохраняет пропорции, поворачивает по EXIF, уменьшает до 1920 px по длинной стороне.
// - Сохраняет в WebP и убирает метаданные, в том числе геолокацию.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = path.join(process.cwd(), "public", "images");
const INPUT = /\.(jpe?g|png|webp|avif|tiff?)$/i;
const SITE_IMAGE = /\.(jpe?g|png|webp)$/i;
const MAX_SIDE = 1920;
const QUALITY = 82;
const THUMB = 32;
// Средняя разница яркости (из 255), ниже которой снимки считаются одним и тем же кадром.
const SAME_PICTURE = 3;
const SAME_RATIO = 0.02;

const source = process.argv[2];
if (!source || !fs.existsSync(source) || !fs.statSync(source).isDirectory()) {
  console.error("Укажите папку с фотографиями: npm run photos:add -- <папка>");
  process.exit(1);
}

/** Отпечаток снимка: пропорции и уменьшенная копия в оттенках серого. */
async function fingerprint(file) {
  const { data, info } = await sharp(file).rotate().toBuffer({ resolveWithObject: true });
  const pixels = await sharp(data).greyscale().resize(THUMB, THUMB, { fit: "fill" }).raw().toBuffer();
  return { ratio: info.width / info.height, area: info.width * info.height, pixels };
}

function isSamePicture(a, b) {
  if (Math.abs(a.ratio - b.ratio) / b.ratio > SAME_RATIO) return false;
  let total = 0;
  for (let i = 0; i < a.pixels.length; i += 1) total += Math.abs(a.pixels[i] - b.pixels[i]);
  return total / a.pixels.length < SAME_PICTURE;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const existing = fs.readdirSync(OUT_DIR).filter((name) => SITE_IMAGE.test(name));

const known = [];
for (const name of existing) {
  known.push({ name, print: await fingerprint(path.join(OUT_DIR, name)) });
}

let next = Math.max(0, ...existing.map((name) => Number(/^image(\d+)\./i.exec(name)?.[1] ?? 0))) + 1;
const report = { added: 0, duplicates: 0, failed: 0, before: 0, after: 0 };

const candidates = [];
const inputNames = fs
  .readdirSync(source)
  .filter((name) => INPUT.test(name))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

for (const [order, name] of inputNames.entries()) {
  try {
    candidates.push({ name, order, print: await fingerprint(path.join(source, name)) });
  } catch (error) {
    console.error(`ошибка    ${name}: ${error.message}`);
    report.failed += 1;
  }
}

// Сначала отбираем снимки: при совпадении побеждает копия с большим разрешением.
const kept = [];
for (const candidate of [...candidates].sort((a, b) => b.print.area - a.print.area)) {
  const twin =
    known.find((item) => isSamePicture(item.print, candidate.print)) ??
    kept.find((item) => isSamePicture(item.print, candidate.print));
  if (twin) {
    console.log(`дубликат  ${candidate.name} = ${twin.name}`);
    report.duplicates += 1;
  } else {
    kept.push(candidate);
  }
}

// Номера присваиваем в исходном порядке файлов.
for (const candidate of kept.sort((a, b) => a.order - b.order)) {
  const file = path.join(source, candidate.name);
  const outName = `image${next}.webp`;
  const outFile = path.join(OUT_DIR, outName);
  try {
    await sharp(file)
      .rotate()
      .resize(MAX_SIDE, MAX_SIDE, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outFile);
    const before = fs.statSync(file).size;
    const after = fs.statSync(outFile).size;
    report.before += before;
    report.after += after;
    report.added += 1;
    next += 1;
    console.log(`добавлен  ${candidate.name} -> ${outName} (${Math.round(before / 1024)} КБ -> ${Math.round(after / 1024)} КБ)`);
  } catch (error) {
    console.error(`ошибка    ${candidate.name}: ${error.message}`);
    report.failed += 1;
  }
}

console.log(
  `\nДобавлено: ${report.added}, дубликатов: ${report.duplicates}, ошибок: ${report.failed}. ` +
    `Размер: ${Math.round(report.before / 1024)} КБ -> ${Math.round(report.after / 1024)} КБ.`,
);
if (report.added) console.log("Пересоберите сайт: npm run build");
if (report.failed) process.exitCode = 1;
