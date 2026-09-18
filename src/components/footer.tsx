import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { ContactForm, SubscribeForm } from '@/components/forms';

export function Footer() {
  return (
    <footer className={'footer'}>
      <div className={'ctr'}>
        {' '}
        <div className={'footer-top'}>
          {' '}
          <div className={'footer-brand'}>
            {' '}
            <Link
              href={'/'}
              className={'nav-logo'}
              style={{ fontSize: '1.35rem', display: 'flex', alignItems: 'flex-start', gap: '4px' }}
            >
              <SiteImage
                alt={'MarSan Global'}
                style={{
                  height: '32px',
                  width: '32px',
                  objectFit: 'contain',
                  filter:
                    'brightness(0) saturate(100%) invert(71%) sepia(47%) saturate(520%) hue-rotate(2deg) brightness(97%) contrast(90%)',
                }}
                src={'/assets/logo.png.webp'}
                width={900}
                height={900}
              />
              <span>
                {'Marsan'}
                <em>{'Global'}</em>
              </span>
            </Link>{' '}
            <p
              style={{
                fontSize: 'var(--fs-xs)',
                fontWeight: '600',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginTop: '6px',
                marginBottom: '14px',
              }}
            >
              {'The Global Connector'}
            </p>{' '}
            <p>
              {
                'Your full-lifecycle GCC partner. From strategy to scale, we help global enterprises build world-class capability centers in India.'
              }
            </p>{' '}
            <div
              style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}
            >
              {' '}
              <div>
                {' '}
                <p
                  style={{
                    fontSize: 'var(--fs-xs)',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.45)',
                    marginBottom: '4px',
                  }}
                >
                  {'India Registered Office'}
                </p>{' '}
                <p
                  style={{
                    fontSize: 'var(--fs-xs)',
                    color: 'rgba(255,255,255,.35)',
                    lineHeight: '1.8',
                    margin: '0',
                  }}
                >
                  {'Marsan Global Solutions Pvt. Ltd'}
                  <br />
                  {'110, 7th Cross, Dollars Scheme'}
                  <br />
                  {'Bilekahalli, BTM 2nd Stage'}
                  <br />
                  {'Bangalore 560076'}
                </p>{' '}
              </div>{' '}
              <div>
                {' '}
                <p
                  style={{
                    fontSize: 'var(--fs-xs)',
                    fontWeight: '700',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.45)',
                    marginBottom: '4px',
                  }}
                >
                  {'US Registered Office'}
                </p>{' '}
                <p
                  style={{
                    fontSize: 'var(--fs-xs)',
                    color: 'rgba(255,255,255,.35)',
                    lineHeight: '1.8',
                    margin: '0',
                  }}
                >
                  {'Marsan Global LLC'}
                  <br />
                  {'30 N Gould St Ste R'}
                  <br />
                  {'Sheridan, WY 82801'}
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'ft-col'}>
            <h2>{'Services'}</h2>{' '}
            <Link href={'/services/strategy-advisory'}>{'Strategy & Advisory'}</Link>
            <Link href={'/services/build-launch'}>{'Build & Launch'}</Link>{' '}
            <Link href={'/services/operate-run'}>{'Operate & Run'}</Link>
            <Link href={'/services/transform'}>{'Transform'}</Link>{' '}
            <Link href={'/services/scale-expand'}>{'Scale & Expand'}</Link>
            <Link href={'/services/optimize'}>{'Optimize'}</Link>{' '}
          </div>{' '}
          <div className={'ft-col'}>
            <h2>{'Company'}</h2> <Link href={'/about'}>{'About Us'}</Link>
            <Link href={'/about'}>{'Leadership'}</Link> <Link href={'/insights'}>{'Insights'}</Link>
            <Link href={'/contact'}>{'Contact'}</Link>{' '}
          </div>{' '}
          <div className={'ft-col'}>
            <h2>{'Resources'}</h2>{' '}
            <Link href={'/insights/india-gcc-landscape-2026'}>{'GCC Playbook'}</Link>
            <Link href={'/insights/build-operate-transfer-playbook'}>{'BOT Guide'}</Link>{' '}
            <Link href={'/insights/eor-fastest-path-india-hiring'}>{'EOR Explainer'}</Link>
            <Link href={'/insights/top-10-cities-gcc-india-2026'}>
              {'India Talent Report'}
            </Link>{' '}
          </div>{' '}
          <div className={'ft-newsletter'}>
            <h2
              style={{
                fontSize: 'var(--fs-xs)',
                fontWeight: '700',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.45)',
                marginBottom: '24px',
              }}
            >
              {'Stay Informed'}
            </h2>{' '}
            <p>{'Weekly GCC intelligence and strategic insights.'}</p> <SubscribeForm />{' '}
          </div>{' '}
        </div>{' '}
        <div className={'footer-bot'}>
          {' '}
          <span>{'© 2026 MarSan Global. All rights reserved.'}</span>{' '}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {' '}
            <Link
              href={'/privacy-policy'}
              style={{
                fontSize: 'var(--fs-xs)',
                color: 'rgba(255,255,255,.45)',
                textDecoration: 'none',
                letterSpacing: '.02em',
                transition: 'color .2s',
              }}
            >
              {'Privacy Policy'}
            </Link>{' '}
            <Link
              href={'/terms-and-conditions'}
              style={{
                fontSize: 'var(--fs-xs)',
                color: 'rgba(255,255,255,.45)',
                textDecoration: 'none',
                letterSpacing: '.02em',
                transition: 'color .2s',
              }}
            >
              {'Terms & Conditions'}
            </Link>{' '}
          </div>{' '}
          <div className={'ft-social'}>
            {' '}
            <a
              href={'https://www.linkedin.com/company/marsan-global-solutions/'}
              target={'_blank'}
              rel={'noopener'}
              aria-label={'LinkedIn'}
            >
              <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                <path d={'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z'}></path>
                <rect x={'2'} y={'9'} width={'4'} height={'12'}></rect>
                <circle cx={'4'} cy={'4'} r={'2'}></circle>
              </svg>
            </a>{' '}
            <a href={'mailto:reach@marsan-global.com'} aria-label={'Email'}>
              <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                <path
                  d={'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'}
                ></path>
                <polyline points={'22,6 12,13 2,6'}></polyline>
              </svg>
            </a>{' '}
          </div>{' '}
        </div>{' '}
      </div>
    </footer>
  );
}
