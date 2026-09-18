# QA and Lighthouse report

Production build and TypeScript validation passed. Dependency audit: 0 vulnerabilities.

25 routes × 3 viewport widths (1440, 768, 390): 75 checks passed. No broken images, invalid internal links, horizontal overflow, JavaScript errors, or automated WCAG A/AA violations in that pass. Contact draft validation, mobile menu, 404, robots and sitemap passed. Heading hierarchy was subsequently improved and accessibility scored 100 in all eight Lighthouse runs.

## Lighthouse measurements

Local production build, mobile simulated throttling and desktop settings. These are lab measurements, not field guarantees.

| Page | Device | Performance | Accessibility | Best practices | SEO | LCP | CLS |
|---|---|---:|---:|---:|---:|---|---|
| /contact | desktop | 100 | 100 | 100 | 100 | 0.6 s | 0.001 |
| /contact | mobile | 95 | 100 | 100 | 100 | 2.7 s | 0.002 |
| / | desktop | 88 | 100 | 100 | 100 | 0.6 s | 0.231 |
| / | mobile | 73 | 100 | 100 | 100 | 8.6 s | 0.003 |
| /insights/india-gcc-landscape-2026 | desktop | 100 | 100 | 100 | 100 | 0.6 s | 0.001 |
| /insights/india-gcc-landscape-2026 | mobile | 94 | 100 | 100 | 100 | 2.8 s | 0.001 |
| /services/strategy-advisory | desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 |
| /services/strategy-advisory | mobile | 74 | 100 | 100 | 100 | 8.3 s | 0.001 |

## Remaining work

Mobile hero image discovery and desktop homepage font-related layout stability merit further tuning. Deferred for rapid tester access at the user’s request. Forms create email drafts; server mail delivery and CRM integration are not configured. Original content claims and legal copy are preserved, not independently verified. Safari and real-device testing have not been performed.
