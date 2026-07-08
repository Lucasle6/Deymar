import sharp from "sharp";
import { mkdir } from "node:fs/promises";

/*
  One-off asset pipeline: the original repo shipped full-res camera
  JPEGs/PNGs (110 MB). This resizes the ones we actually use and
  converts them to WebP at q80, into public/img/. Run with:
    node scripts/optimize-images.mjs
*/

const jobs = [
  // slider — full-bleed hero, cap at 1920w
  ...Array.from({ length: 9 }, (_, i) => {
    const n = i + 1;
    const ext = [1, 5, 6].includes(n) ? "jpg" : "png";
    return { in: `img/slider/slid${n}.${ext}`, out: `slider/slid${n}.webp`, w: 1920 };
  }),
  // project carousel — large cards, cap 1600
  { in: "img/Casa Mariposa/JPEG/20200805_140650.jpg", out: "projects/mariposa.webp", w: 1600 },
  { in: "img/Casa Paradise Cove/slidprjCasaCove.jpg", out: "projects/cove.webp", w: 1600 },
  { in: "img/Casa Roseta/Casa Roseta 4.jpg", out: "projects/roseta.webp", w: 1600 },
  { in: "img/Casa Stella/Casa Stella 10.png", out: "projects/stella.webp", w: 1600 },
  // about
  { in: "img/Casa Stella/Casa Stella 9.png", out: "about.webp", w: 1200 },
  // intro splash — two moods, tall so they read on a vertical half:
  // arquitectura = an exterior, interiorismo = a styled interior
  { in: "img/Casa Mariposa/JPEG/20200805_140813.jpg", out: "intro-arquitectura.webp", w: 1400 },
  { in: "img/Casa Paradise Cove/_J0C1886_AuroraHDR2019-edit.jpg", out: "intro-interiorismo.webp", w: 1400 },
];

const logos = [
  { in: "img/Assets/Deymar Logo Pagina web.png", out: "logo-web.png", w: 240 },
  { in: "img/Assets/Deymar Logo Positivo.png", out: "logo-positivo.png", w: 400 },
];

await mkdir("public/img/slider", { recursive: true });
await mkdir("public/img/projects", { recursive: true });

for (const j of jobs) {
  await sharp(j.in)
    .resize({ width: j.w, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`public/img/${j.out}`);
  console.log("webp →", j.out);
}
// logos stay PNG to keep transparency crisp
for (const l of logos) {
  await sharp(l.in)
    .resize({ width: l.w, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(`public/img/${l.out}`);
  console.log("png  →", l.out);
}
console.log("done");
