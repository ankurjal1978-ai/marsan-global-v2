import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Six Pillars. 20+ Services. One Partner.',
  'Every capability your GCC needs — from first conversation to full-scale optimization. Select a pillar below to explore the services within.',
  '/services',
);

function Section0() {
  return (
    <section className={'pt-hero'}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'breadcrumb'}>
          <Link href={'/'}>{'Home'}</Link>
          {' / Services'}
        </div>{' '}
        <div
          className={'grid-2 sr'}
          style={{ marginTop: '32px', marginBottom: '64px', gap: '64px', alignItems: 'center' }}
        >
          {' '}
          <div>
            {' '}
            <div className={'tag tag-gold'} style={{ marginBottom: '20px' }}>
              {'Full Lifecycle'}
            </div>{' '}
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2rem,4vw,3rem)',
                fontWeight: '700',
                color: 'var(--char)',
                lineHeight: '1.15',
                marginBottom: '16px',
                textAlign: 'left',
              }}
            >
              {'Six Pillars. 20+ Services. '}
              <em>{'One Partner.'}</em>
            </h1>{' '}
            <p className={'sp'} style={{ textAlign: 'left', marginBottom: '24px' }}>
              {
                'Every capability your GCC needs — from first conversation to full-scale optimization. Select a pillar below to explore the services within.'
              }
            </p>{' '}
            <Link href={'/contact'} className={'btn btn-blue'}>
              {'Start a Conversation '}
              <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                <path
                  d={'M5 12h14M12 5l7 7-7 7'}
                  stroke={'currentColor'}
                  fill={'none'}
                  strokeWidth={'2'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                ></path>
              </svg>
            </Link>{' '}
          </div>{' '}
          <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
            {' '}
            <SiteImage
              alt={'Modern office'}
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              src={'/assets/photography/photo-1497366216548-37526070297c.webp'}
              width={1400}
              height={934}
            />{' '}
          </div>{' '}
        </div>{' '}
        <div className={'grid-3'} style={{ gap: '28px' }}>
          {' '}
          <Link href={'/services/strategy-advisory'} className={'card sr sr-d1 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Strategy & Advisory'}
                src={'/assets/photography/photo-1542744173-8e7e53415bb0.webp'}
                width={1400}
                height={934}
              />
            </div>{' '}
            <div className={'card-body'}>
              <h2>{'Strategy & Advisory'}</h2>
              <p>
                {
                  'Readiness assessment, location strategy, financial modeling, operating model design.'
                }
              </p>{' '}
              <div className={'card-chips'}>
                <span>{'Readiness'}</span>
                <span>{'Location'}</span>
                <span>{'Financial Model'}</span>
              </div>{' '}
              <span className={'card-link'}>
                {'Explore '}
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={'M5 12h14M12 5l7 7-7 7'}
                    stroke={'currentColor'}
                    fill={'none'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  ></path>
                </svg>
              </span>
            </div>{' '}
          </Link>{' '}
          <Link href={'/services/build-launch'} className={'card sr sr-d2 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Build & Launch'}
                src={'/assets/photography/photo-1486406146926-c627a92ad1ab.webp'}
                width={1400}
                height={934}
              />
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'Build & Launch'}</h3>
              <p>{'Entity setup, compliance, IT infrastructure, Build-Operate-Transfer.'}</p>{' '}
              <div className={'card-chips'}>
                <span>{'Entity Setup'}</span>
                <span>{'IT Infra'}</span>
                <span>{'BOT'}</span>
              </div>{' '}
              <span className={'card-link'}>
                {'Explore '}
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={'M5 12h14M12 5l7 7-7 7'}
                    stroke={'currentColor'}
                    fill={'none'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  ></path>
                </svg>
              </span>
            </div>{' '}
          </Link>{' '}
          <Link href={'/services/operate-run'} className={'card sr sr-d3 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Operate & Run'}
                src={'/assets/photography/photo-1553028826-f4804a6dba3b.webp'}
                width={1400}
                height={934}
              />
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'Operate & Run'}</h3>
              <p>{'Managed operations, EOR, payroll & benefits, facilities management.'}</p>{' '}
              <div className={'card-chips'}>
                <span>{'Managed Ops'}</span>
                <span>{'EOR'}</span>
                <span>{'Payroll'}</span>
              </div>{' '}
              <span className={'card-link'}>
                {'Explore '}
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={'M5 12h14M12 5l7 7-7 7'}
                    stroke={'currentColor'}
                    fill={'none'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  ></path>
                </svg>
              </span>
            </div>{' '}
          </Link>{' '}
          <Link href={'/services/transform'} className={'card sr sr-d4 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Transform'}
                src={'/assets/photography/photo-1504384308090-c894fdcc538d.webp'}
                width={1400}
                height={934}
              />
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'Transform'}</h3>
              <p>
                {'Vendor-to-captive migration, process re-engineering, change management.'}
              </p>{' '}
              <div className={'card-chips'}>
                <span>{'Migration'}</span>
                <span>{'Re-engineering'}</span>
                <span>{'Change Mgmt'}</span>
              </div>{' '}
              <span className={'card-link'}>
                {'Explore '}
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={'M5 12h14M12 5l7 7-7 7'}
                    stroke={'currentColor'}
                    fill={'none'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  ></path>
                </svg>
              </span>
            </div>{' '}
          </Link>{' '}
          <Link href={'/services/scale-expand'} className={'card sr sr-d1 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Scale & Expand'}
                src={'/assets/photography/photo-1519389950473-47ba0277781c.webp'}
                width={1400}
                height={934}
              />
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'Scale & Expand'}</h3>
              <p>{'Volume hiring, leadership search, AI/GenAI practice setup, multi-site.'}</p>{' '}
              <div className={'card-chips'}>
                <span>{'Volume Hiring'}</span>
                <span>{'AI/GenAI'}</span>
                <span>{'Multi-Site'}</span>
              </div>{' '}
              <span className={'card-link'}>
                {'Explore '}
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={'M5 12h14M12 5l7 7-7 7'}
                    stroke={'currentColor'}
                    fill={'none'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  ></path>
                </svg>
              </span>
            </div>{' '}
          </Link>{' '}
          <Link href={'/services/optimize'} className={'card sr sr-d2 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Optimize'}
                src={'/assets/photography/photo-1551288049-bebda4e38f71.webp'}
                width={1400}
                height={934}
              />
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'Optimize'}</h3>
              <p>{'Performance benchmarking, cost optimization, engagement, maturity.'}</p>{' '}
              <div className={'card-chips'}>
                <span>{'Benchmarking'}</span>
                <span>{'Cost Optimization'}</span>
                <span>{'Engagement'}</span>
              </div>{' '}
              <span className={'card-link'}>
                {'Explore '}
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={'M5 12h14M12 5l7 7-7 7'}
                    stroke={'currentColor'}
                    fill={'none'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  ></path>
                </svg>
              </span>
            </div>{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section1() {
  return (
    <section className={'cta'}>
      {' '}
      <div className={'cta-bg'}>
        <SiteImage
          alt={''}
          src={'/assets/photography/photo-1451187580459-43490279c0fa.webp'}
          width={1400}
          height={934}
        />
      </div>{' '}
      <div className={'ctr'}>
        <div className={'sr'}>
          {' '}
          <h2>
            {'Not Sure Where'}
            <br />
            {'to Start?'}
          </h2>{' '}
          <p>
            {
              'Tell us your goals. We will recommend the right combination of services for your stage and scale.'
            }
          </p>{' '}
          <div className={'cta-btns'}>
            {' '}
            <Link href={'/contact'} className={'btn btn-gold'}>
              {'Book a Call '}
              <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                <path
                  d={'M5 12h14M12 5l7 7-7 7'}
                  stroke={'currentColor'}
                  fill={'none'}
                  strokeWidth={'2'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                ></path>
              </svg>
            </Link>{' '}
          </div>{' '}
        </div>
      </div>{' '}
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Section0 />
      <Section1 />
    </>
  );
}
