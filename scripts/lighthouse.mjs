import fs from 'node:fs/promises';
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
await fs.mkdir('reports', { recursive: true });
const base = process.env.QA_URL || 'http://localhost:3000';
const chrome = await launch({
  chromePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  chromeFlags: ['--headless', '--no-sandbox'],
});
const results = [];
try {
  for (const mode of ['mobile', 'desktop'])
    for (const route of [
      '/',
      '/contact',
      '/services/strategy-advisory',
      '/insights/india-gcc-landscape-2026',
    ]) {
      const options = {
        port: chrome.port,
        output: ['html', 'json'],
        logLevel: 'error',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        ...(mode === 'desktop'
          ? {
              formFactor: 'desktop',
              screenEmulation: {
                mobile: false,
                width: 1440,
                height: 900,
                deviceScaleFactor: 1,
                disabled: false,
              },
              throttling: {
                rttMs: 40,
                throughputKbps: 10240,
                cpuSlowdownMultiplier: 1,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },
            }
          : {}),
      };
      const result = await lighthouse(base + route, options);
      const slug = (route === '/' ? 'home' : route.slice(1).replaceAll('/', '-')) + '-' + mode;
      await fs.writeFile('reports/lighthouse-' + slug + '.html', result.report[0]);
      await fs.writeFile('reports/lighthouse-' + slug + '.json', result.report[1]);
      const entry = {
        route,
        mode,
        scores: Object.fromEntries(
          Object.entries(result.lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)]),
        ),
        metrics: {
          LCP: result.lhr.audits['largest-contentful-paint'].displayValue,
          CLS: result.lhr.audits['cumulative-layout-shift'].displayValue,
          TBT: result.lhr.audits['total-blocking-time'].displayValue,
        },
        failures: Object.entries(result.lhr.audits)
          .filter(([, v]) => v.score !== null && v.score < 1)
          .map(([id, v]) => ({ id, title: v.title, score: v.score })),
      };
      results.push(entry);
      console.log(JSON.stringify(entry));
    }
} finally {
  await chrome.kill();
  await fs.writeFile(
    'reports/lighthouse-summary.json',
    JSON.stringify({ date: new Date().toISOString(), base, results }, null, 2),
  );
}
