# MarSan Global v2

The MarSan Global website rebuilt from the supplied `public_html.zip` using Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

## Run

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
npm run build
npm start
```

## Structure

- `src/app/`: 25 independently rendered pages, metadata, sitemap, robots, and 404 page.
- `src/components/`: shared navigation, footer, optimized images, accessible FAQ, contact and subscription forms.
- `src/content/`: migration inventory and asset dimensions.
- `src/app/brand.css`: preserved original brand styles.
- `src/app/globals.css`: Tailwind plus responsive, contrast, and accessibility improvements.
- `public/assets/`: original brand/leadership/partner assets and locally optimized copies of the source site's photography.
- `scripts/`: repeatable QA and Lighthouse runners plus the one-time source migration utilities.
- `reports/`: validation results. Full HTML/JSON Lighthouse outputs and screenshots are generated locally.

## Contact and subscription behavior

The original website used email drafts, with no server-side mail delivery or CRM integration. The rebuilt forms validate inputs, prepare a draft, and explicitly ask the visitor to open and send it in their email app. They do not claim a message was sent or store enquiry data. A direct email link and phone contact remain available. Add an authenticated mail/CRM provider before changing this to server-side submission.

## Deploy to Vercel

Import `ankurjal1978-ai/marsan-global-v2`, use the Next.js preset, repository root, and Node.js 22 or newer. Set `NEXT_PUBLIC_SITE_URL` to the intended canonical domain; Vercel's production domain is otherwise used automatically. Local builds fall back to the existing `https://marsan-global.com` domain. No secrets are required for the current email-draft forms.

## Validation

Run `npm run qa` against the production server at `http://localhost:3000`; set `QA_URL` to test another deployment. The runner checks all pages at desktop, tablet, and mobile widths, image loading, internal links, metadata, page headings, horizontal overflow, accessibility, contact draft validation, mobile navigation, and missing routes. It never sends email. `npm run lighthouse` produces desktop/mobile HTML reports for the homepage, contact page, a service page, and an insight article. The local runners currently use installed Google Chrome on Windows.

Original company claims, article statistics, legal wording, professional biographies, and service content have been preserved rather than independently verified. The legacy analytics tag is not enabled; add analytics deliberately with the appropriate consent approach. Browser lab scores are measurements of the tested environment, not guarantees of field performance.

The source ZIP is kept outside this repository. The one-time migration scripts expect it extracted to the sibling `original-site` directory; do not rerun them over edited pages. Normal builds do not require the archive.
