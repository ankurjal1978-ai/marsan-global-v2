import type { Metadata } from 'next';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/playfair-display/latin-500.css';
import '@fontsource/playfair-display/latin-600-italic.css';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteUrl } from '@/lib/metadata';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'MarSan Global — Full-Lifecycle GCC Partner', template: '%s | MarSan Global' },
  icons: { icon: '/favicon.png' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MarSan Global',
    url: siteUrl,
    logo: siteUrl + '/assets/logo.png.webp',
    email: 'reach@marsan-global.com',
    telephone: '+916202632349',
    sameAs: ['https://www.linkedin.com/company/marsan-global-solutions/'],
  };
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
