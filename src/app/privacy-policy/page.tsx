import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Privacy Policy',
  'We collect information you voluntarily provide when you contact us, subscribe to our newsletter, or use our services. This includes your name, email address,',
  '/privacy-policy',
);

function Section0() {
  return (
    <section style={{ padding: '100px 0 60px', background: 'var(--white)' }}>
      {' '}
      <div className={'ctr'} style={{ maxWidth: '860px' }}>
        {' '}
        <div className={'tag tag-blue'} style={{ marginBottom: '20px' }}>
          {'Legal'}
        </div>{' '}
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2rem,4vw,3rem)',
            fontWeight: '700',
            color: 'var(--char)',
            marginBottom: '8px',
          }}
        >
          {'Privacy Policy'}
        </h1>{' '}
        <p style={{ color: 'var(--slate)', fontSize: 'var(--fs-sm)', marginBottom: '48px' }}>
          {'Last updated: June 2026'}
        </p>{' '}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            color: 'var(--slate)',
            lineHeight: '1.8',
          }}
        >
          {' '}
          <div>
            {' '}
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--char)',
                marginBottom: '12px',
              }}
            >
              {'1. Information We Collect'}
            </h2>{' '}
            <p>
              {
                'We collect information you voluntarily provide when you contact us, subscribe to our newsletter, or use our services. This includes your name, email address, phone number, company name, and any messages you send us. We may also collect usage data such as pages visited and time spent on our website through standard analytics tools.'
              }
            </p>{' '}
          </div>{' '}
          <div>
            {' '}
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--char)',
                marginBottom: '12px',
              }}
            >
              {'2. How We Use Your Information'}
            </h2>{' '}
            <p>
              {
                'We use collected information to respond to your enquiries, deliver services you have requested, send periodic GCC intelligence and strategic insights (where you have subscribed), improve our website and service offerings, and comply with applicable legal obligations. We do not sell, trade, or rent your personal information to third parties.'
              }
            </p>{' '}
          </div>{' '}
          <div>
            {' '}
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--char)',
                marginBottom: '12px',
              }}
            >
              {'3. Data Storage & Security'}
            </h2>{' '}
            <p>
              {
                'Your data is stored on secure servers with access restricted to authorised MarSan Global personnel. We implement industry-standard technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
              }
            </p>{' '}
          </div>{' '}
          <div>
            {' '}
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--char)',
                marginBottom: '12px',
              }}
            >
              {'4. Cookies'}
            </h2>{' '}
            <p>
              {
                'Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. You may configure your browser to refuse cookies; however, some features of the site may not function properly as a result.'
              }
            </p>{' '}
          </div>{' '}
          <div>
            {' '}
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--char)',
                marginBottom: '12px',
              }}
            >
              {'5. Third-Party Links'}
            </h2>{' '}
            <p>
              {
                'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.'
              }
            </p>{' '}
          </div>{' '}
          <div>
            {' '}
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--char)',
                marginBottom: '12px',
              }}
            >
              {'6. Your Rights'}
            </h2>{' '}
            <p>
              {
                'You have the right to access, correct, or request deletion of your personal data held by us. To exercise any of these rights, please contact us at '
              }
              <a
                href={'mailto:reach@marsan-global.com'}
                style={{ color: 'var(--blue)', textDecoration: 'none' }}
              >
                {'reach@marsan-global.com'}
              </a>
              {'. We will respond within 30 days.'}
            </p>{' '}
          </div>{' '}
          <div>
            {' '}
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--char)',
                marginBottom: '12px',
              }}
            >
              {'7. Changes to This Policy'}
            </h2>{' '}
            <p>
              {
                'We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised "Last updated" date. Continued use of our website following any changes constitutes your acceptance of the updated policy.'
              }
            </p>{' '}
          </div>{' '}
          <div>
            {' '}
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--char)',
                marginBottom: '12px',
              }}
            >
              {'8. Contact Us'}
            </h2>{' '}
            <p>
              {'For any privacy-related questions or concerns, please write to us at '}
              <a
                href={'mailto:reach@marsan-global.com'}
                style={{ color: 'var(--blue)', textDecoration: 'none' }}
              >
                {'reach@marsan-global.com'}
              </a>
              {
                ' or at our registered office: 110, 7th Cross, Dollars Scheme, Bilekahalli, BTM 2nd Stage, Bangalore 560076, India.'
              }
            </p>{' '}
          </div>{' '}
        </div>{' '}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--cloud)' }}>
          {' '}
          <Link
            href={'/'}
            className={'btn btn-outline'}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <svg
              viewBox={'0 0 24 24'}
              width={'16'}
              height={'16'}
              fill={'none'}
              stroke={'currentColor'}
              strokeWidth={'2'}
              strokeLinecap={'round'}
              strokeLinejoin={'round'}
              aria-hidden="true"
              focusable="false"
            >
              <path d={'M19 12H5M12 5l-7 7 7 7'}></path>
            </svg>
            {'Back to Home'}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Section0 />
    </>
  );
}
