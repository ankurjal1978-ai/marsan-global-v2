import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Terms & Conditions',
  'By accessing or using the MarSan Global website (marsan-global.com), you agree to be bound by these Terms & Conditions. If you do not agree to any part of th',
  '/terms-and-conditions',
);

function Section0() {
  return (
    <section style={{ padding: '100px 0 60px', background: 'var(--white)' }}>
      {' '}
      <div className={'ctr'} style={{ maxWidth: '860px' }}>
        {' '}
        <div className={'tag tag-gold'} style={{ marginBottom: '20px' }}>
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
          {'Terms & Conditions'}
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
              {'1. Acceptance of Terms'}
            </h2>{' '}
            <p>
              {
                'By accessing or using the MarSan Global website (marsan-global.com), you agree to be bound by these Terms & Conditions. If you do not agree to any part of these terms, please do not use our website or services.'
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
              {'2. Use of Website'}
            </h2>{' '}
            <p>
              {
                'You agree to use this website solely for lawful purposes and in a manner that does not infringe the rights of others. You must not use the site to transmit any unsolicited commercial communications, attempt to gain unauthorised access to any part of the website, or engage in any conduct that is harmful, fraudulent, or misleading.'
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
              {'3. Intellectual Property'}
            </h2>{' '}
            <p>
              {
                'All content on this website — including text, graphics, logos, images, and software — is the property of MarSan Global Solutions and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.'
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
              {'4. Disclaimer of Warranties'}
            </h2>{' '}
            <p>
              {
                'This website and its content are provided on an "as is" basis without warranties of any kind, either express or implied. MarSan Global does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.'
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
              {'5. Limitation of Liability'}
            </h2>{' '}
            <p>
              {
                'To the fullest extent permitted by law, MarSan Global shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services, even if we have been advised of the possibility of such damages.'
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
              {'6. Third-Party Services'}
            </h2>{' '}
            <p>
              {
                'Our services may involve coordination with third-party vendors, government agencies, or service providers. MarSan Global acts as a facilitator and is not responsible for the acts, omissions, or failures of any third-party service provider.'
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
              {'7. Governing Law'}
            </h2>{' '}
            <p>
              {
                'These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.'
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
              {'8. Amendments'}
            </h2>{' '}
            <p>
              {
                'We reserve the right to modify these Terms & Conditions at any time. Updated terms will be posted on this page with a revised "Last updated" date. Your continued use of the website after any amendments constitutes your acceptance of the new terms.'
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
              {'9. Contact Us'}
            </h2>{' '}
            <p>
              {'For any questions regarding these Terms & Conditions, please contact us at '}
              <a
                href={'mailto:reach@marsan-global.com'}
                style={{ color: 'var(--blue)', textDecoration: 'none' }}
              >
                {'reach@marsan-global.com'}
              </a>
              {'.'}
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
