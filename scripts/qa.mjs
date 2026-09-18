import fs from 'node:fs/promises';
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes = JSON.parse(await fs.readFile('src/content/routes.json', 'utf8'));
const base = process.env.QA_URL || 'http://localhost:3000';
await fs.mkdir('reports', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const context = await browser.newContext({ reducedMotion: 'reduce' });
const page = await context.newPage();
const results = [];
const failures = [];
for (const size of [
  { width: 1440, height: 1000 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
]) {
  await page.setViewportSize(size);
  for (const route of routes) {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    const response = await page.goto(base + route.url, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 30));
      }
      window.scrollTo(0, 0);
      await document.fonts.ready;
    });
    await page
      .locator('img')
      .evaluateAll((imgs) => Promise.all(imgs.map((img) => img.decode().catch(() => {}))));
    const check = await page.evaluate(() => ({
      h1: document.querySelectorAll('main h1').length,
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      overflowing: [...document.querySelectorAll('main *')]
        .filter(
          (e) =>
            e.getBoundingClientRect().right > innerWidth + 2 &&
            getComputedStyle(e).position !== 'absolute',
        )
        .slice(0, 8)
        .map((e) => ({ tag: e.tagName, cls: e.className, style: e.getAttribute('style') })),
      brokenImages: [...document.images]
        .filter((i) => !i.complete || !i.naturalWidth)
        .map((i) => i.getAttribute('src')),
      title: document.title,
      description: document.querySelector('meta[name=description]')?.getAttribute('content'),
      canonical: document.querySelector('link[rel=canonical]')?.getAttribute('href'),
      links: [...document.querySelectorAll('a')]
        .map((a) => a.getAttribute('href'))
        .filter((h) => h?.startsWith('/')),
    }));
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    const violations = axe.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      description: v.description,
      nodes: v.nodes.map((n) => ({ html: n.html, target: n.target, summary: n.failureSummary })),
    }));
    const invalidLinks = check.links.filter(
      (h) => !routes.some((r) => r.url === h.split('#')[0]) && !h.startsWith('/assets/'),
    );
    const result = {
      path: route.url,
      width: size.width,
      status: response.status(),
      ...check,
      invalidLinks,
      errors,
      violations,
    };
    delete result.links;
    results.push(result);
    await fs.writeFile('reports/qa-details.json', JSON.stringify(results, null, 2));
    if (
      response.status() !== 200 ||
      check.h1 !== 1 ||
      check.overflow ||
      check.brokenImages.length ||
      invalidLinks.length ||
      errors.length ||
      violations.length
    )
      failures.push(result);
    if (['/', '/about', '/services', '/contact', '/insights'].includes(route.url))
      await page.screenshot({ path: `reports/${route.id}-${size.width}.png`, fullPage: true });
    console.log(
      size.width + ' ' + route.url + ' ' + (failures.at(-1) === result ? 'ISSUES' : 'PASS'),
    );
    page.removeAllListeners('pageerror');
  }
  if (size.width === 390) {
    await page.goto(base);
    await page.getByRole('button', { name: 'Menu' }).click();
    if (!(await page.getByRole('navigation', { name: 'Mobile navigation' }).isVisible()))
      throw Error('Menu did not open');
    await page.keyboard.press('Escape');
    if (await page.getByRole('navigation', { name: 'Mobile navigation' }).isVisible())
      throw Error('Escape did not close menu');
  }
}
await page.goto(base + '/contact');
await page.getByRole('button', { name: 'Prepare enquiry' }).click();
if (await page.getByRole('link', { name: 'Open email draft', exact: true }).count())
  throw Error('Empty form accepted');
await page.getByLabel('First name').fill('QA');
await page.locator('#email').fill('qa@example.com');
await page.getByLabel('Tell us more').fill('Validation only — no email sent.');
await page.getByRole('button', { name: 'Prepare enquiry' }).click();
const draft = await page
  .getByRole('link', { name: 'Open email draft', exact: true })
  .getAttribute('href');
if (
  !draft?.startsWith('mailto:reach@marsan-global.com?') ||
  !decodeURIComponent(draft).includes('qa@example.com')
)
  throw Error('Invalid contact draft');
const missing = await page.goto(base + '/does-not-exist');
if (missing.status() !== 404) throw Error('Missing route should return 404');
for (const route of ['/sitemap.xml', '/robots.txt'])
  if ((await page.request.get(base + route)).status() !== 200) throw Error('Missing ' + route);
await fs.writeFile('reports/qa-details.json', JSON.stringify(results, null, 2));
await fs.writeFile(
  'reports/qa-summary.json',
  JSON.stringify(
    {
      date: new Date().toISOString(),
      base,
      routes: routes.length,
      viewports: [1440, 768, 390],
      checks: results.length,
      failed: failures.length,
      interactionChecks: [
        'Mobile menu open and Escape close',
        'Required-field validation',
        'Contact email draft contents (not sent)',
        '404 status',
        'Sitemap and robots',
      ],
      failures,
    },
    null,
    2,
  ),
);
await browser.close();
console.log(JSON.stringify({ checks: results.length, failed: failures.length }));
process.exitCode = failures.length ? 1 : 0;
