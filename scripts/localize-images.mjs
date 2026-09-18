import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const files = (await fs.readdir('src', { recursive: true })).filter((f) => f.endsWith('.tsx'));
const urls = new Set();
for (const f of files) {
  for (const m of (await fs.readFile(path.join('src', f), 'utf8')).matchAll(
    /https:\/\/images\.unsplash\.com\/photo-[^"\s]+/g,
  ))
    urls.add(m[0]);
}
const photos = new Map();
for (const url of urls) {
  const id = new URL(url).pathname.slice(1);
  photos.set(id, 'https://images.unsplash.com/' + id + '?w=1600&q=85&auto=format');
}
await fs.mkdir('public/assets/photography', { recursive: true });
for (const [id, url] of photos) {
  const dest = 'public/assets/photography/' + id + '.webp';
  try {
    await fs.access(dest);
  } catch {
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(url + ' ' + response.status);
    await sharp(Buffer.from(await response.arrayBuffer()))
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dest);
  }
}
for (const f of files) {
  const file = path.join('src', f);
  let text = await fs.readFile(file, 'utf8');
  for (const url of urls)
    text = text.replaceAll(url, '/assets/photography/' + new URL(url).pathname.slice(1) + '.webp');
  await fs.writeFile(file, text);
}
console.log('Localized ' + photos.size + ' original stock photographs.');
