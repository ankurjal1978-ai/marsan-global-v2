import fs from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';
import sharp from 'sharp';

// One-time, auditable migration of the user-supplied archive to editable TSX.
const source = path.resolve('../original-site');
const html = await fs.readFile(path.join(source, 'index.html'), 'utf8');
const $ = load(html);
const routes = Object.fromEntries(
  [
    ...html.match(/const PAGE_TO_URL = \{([\s\S]*?)\};/)[1].matchAll(/'([^']+)'\s*:\s*'([^']+)'/g),
  ].map((m) => [m[1], m[2]]),
);
const write = async (file, value) => {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, value);
};
await fs.mkdir('public/assets', { recursive: true });
const assetMap = {};
for (const entry of await fs.readdir(source, { recursive: true })) {
  if (!/\.(png|jpe?g|webp|svg)$/i.test(entry)) continue;
  const input = path.join(source, entry);
  const name = entry.replaceAll('\\', '/');
  if (name.endsWith('.svg')) {
    await fs.copyFile(input, 'public/assets/' + path.basename(name));
    continue;
  }
  const output = name + '.webp';
  // Preserve transparency and crop; resize only oversized originals.
  const target = 'public/assets/' + output;
  await fs.mkdir(path.dirname(target), { recursive: true });
  await sharp(input)
    .rotate()
    .resize({ width: name.includes('opengraph') ? 1200 : 900, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(target);
  const meta = await sharp(target).metadata();
  assetMap[name] = { src: '/assets/' + output, width: meta.width, height: meta.height };
}
await fs.copyFile(path.join(source, 'favicon.png'), 'public/favicon.png');
await write('src/content/assets.json', JSON.stringify(assetMap, null, 2));

// Remove dormant controls and replace carousel with a stable, accessible logo grid.
$('.ms-slider-arrow,.ms-slider-pagination').remove();
$('[data-count]').each((_, el) => {
  const e = $(el);
  e.text((e.attr('data-prefix') || '') + e.attr('data-count') + (e.attr('data-suffix') || ''));
});
for (const id of ['about', 'contact'])
  $('#page-' + id)
    .find('h2')
    .first()
    .each((_, el) => {
      el.tagName = 'h1';
    });
$('a[onclick]').each((_, el) => {
  const match = $(el)
    .attr('onclick')
    .match(/nav\('([^']+)'\)/);
  if (match) $(el).attr('href', routes[match[1]]);
});
$('.ft-col')
  .last()
  .find('a')
  .each((i, el) =>
    $(el).attr('href', [routes['blog-1'], routes['blog-2'], routes['blog-3'], routes['blog-5']][i]),
  );

const aliases = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  viewbox: 'viewBox',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  datetime: 'dateTime',
  readonly: 'readOnly',
  autofocus: 'autoFocus',
  maxlength: 'maxLength',
};
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const esc = (s) => JSON.stringify(s).replaceAll('<', '\\u003c');
function styleObject(s) {
  return Object.fromEntries(
    s
      .split(';')
      .filter((x) => x.includes(':'))
      .map((x) => {
        const i = x.indexOf(':');
        const k = x.slice(0, i).trim();
        return [k.startsWith('--') ? k : camel(k), x.slice(i + 1).trim()];
      }),
  );
}
function jsx(node, context = {}) {
  if (node.type === 'comment') return '';
  if (node.type === 'text')
    return node.data.trim() ? '{' + esc(node.data.replace(/\s+/g, ' ')) + '}' : ' ';
  if (!node.tagName) return '';
  const e = $(node);
  const cls = e.attr('class') || '';
  if (node.tagName === 'script' || node.tagName === 'style') return '';
  if (e.attr('id') === 'strategyForm') return '<ContactForm />';
  if (e.attr('id') === 'ftForm') return '<SubscribeForm />';
  if (cls.split(' ').includes('faq-item')) {
    return (
      '<FaqItem question={' +
      esc(e.find('.faq-q').text().trim()) +
      '}>' +
      e
        .find('.faq-a-inner')
        .contents()
        .toArray()
        .map((n) => jsx(n, context))
        .join('') +
      '</FaqItem>'
    );
  }
  let tag = node.tagName;
  if (tag === 'a' && e.attr('href')?.startsWith('/')) tag = 'Link';
  let attrs = '';
  for (const [k, v] of Object.entries(node.attribs || {})) {
    if (
      k.startsWith('on') ||
      k === 'loading' ||
      k === 'decoding' ||
      k.startsWith('data-count') ||
      k === 'data-prefix' ||
      k === 'data-suffix'
    )
      continue;
    if (tag === 'svg' && ['aria-hidden', 'focusable'].includes(k)) continue;
    if (k === 'style') {
      attrs += ' style={' + JSON.stringify(styleObject(v)) + '}';
      continue;
    }
    let key = aliases[k] || (k.startsWith('aria-') || k.startsWith('data-') ? k : camel(k));
    if (k === 'src' && tag === 'img') continue;
    if (['width', 'height'].includes(k) && tag === 'img') continue;
    attrs += ' ' + key + '={' + esc(v) + '}';
  }
  if (tag === 'svg') attrs += ' aria-hidden="true" focusable="false"';
  if (tag === 'img') {
    const src = e.attr('src');
    const asset = assetMap[src?.replace(/^\//, '')];
    const priority = !!e.closest('.hero-bg,.page-hero-bg').length;
    attrs +=
      ' src={' +
      esc(asset?.src || src) +
      '} width={' +
      (asset?.width || 1400) +
      '} height={' +
      (asset?.height || 934) +
      '}';
    if (priority) attrs += ' priority';
    return '<SiteImage' + attrs + ' />';
  }
  if (['br', 'hr', 'input', 'meta', 'link'].includes(tag)) return '<' + tag + attrs + ' />';
  return (
    '<' +
    tag +
    attrs +
    '>' +
    (node.children || []).map((n) => jsx(n, context)).join('') +
    '</' +
    tag +
    '>'
  );
}
const imports = `import Link from 'next/link';\nimport { SiteImage } from '@/components/site-image';\nimport { FaqItem } from '@/components/faq-item';\nimport { ContactForm, SubscribeForm } from '@/components/forms';\n`;
const manifest = [];
for (const [id, url] of Object.entries(routes)) {
  const el = $('#page-' + id);
  if (!el.length) throw new Error('Missing page ' + id);
  const heading = el.find('h1').first().text().replace(/\s+/g, ' ').trim();
  const title =
    id === 'home' ? 'Full-Lifecycle GCC Partner' : id === 'insights' ? 'GCC Insights' : heading;
  const description = el
    .find('p')
    .filter((_, e) => $(e).text().trim().length > 65)
    .first()
    .text()
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 157);
  const sections = el
    .contents()
    .toArray()
    .filter((n) => n.type !== 'comment' && (n.type !== 'text' || n.data.trim()));
  const funcs = sections
    .map((n, i) => 'function Section' + i + '(){ return (' + jsx(n) + '); }')
    .join('\n\n');
  const code =
    imports +
    `import { pageMetadata } from '@/lib/metadata';\nexport const metadata = pageMetadata(${esc(title)}, ${esc(description)}, ${esc(url)});\n\n` +
    funcs +
    '\n\nexport default function Page(){return <>' +
    sections.map((_, i) => '<Section' + i + ' />').join('') +
    '</>;}\n';
  await write('src/app' + (url === '/' ? '' : url) + '/page.tsx', code);
  manifest.push({
    id,
    url,
    title,
    description,
    sourceText: el.text().replace(/\s+/g, ' ').trim().length,
  });
}
await write(
  'src/components/footer.tsx',
  imports + '\nexport function Footer(){return (' + jsx($('footer')[0]) + ');}\n',
);
await write('src/content/routes.json', JSON.stringify(manifest, null, 2));
let css = $('head style')
  .map((_, e) => $(e).text())
  .get()
  .join('\n');
await write('src/app/brand.css', css);
console.log(
  'Migrated ' + manifest.length + ' routes, ' + Object.keys(assetMap).length + ' optimized assets.',
);
