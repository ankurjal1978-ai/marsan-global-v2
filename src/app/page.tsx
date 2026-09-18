import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Full-Lifecycle GCC Partner',
  '20+ GCC services under a single contract. From readiness assessment to GCC-as-a-Service — we are the only partner built to cover the complete lifecycle.',
  '/',
);

function Section0() {
  return (
    <section className={'hero'}>
      {' '}
      <div className={'hero-bg'}>
        <SiteImage
          alt={'Global Capability Centers'}
          src={'/assets/photography/photo-1486406146926-c627a92ad1ab.webp'}
          width={1400}
          height={934}
          priority
        />
      </div>{' '}
      <div className={'hero-orb'}></div>
      <div className={'hero-orb-2'}></div> <div className={'hero-grid'}></div>{' '}
      <div className={'hero-rule'}></div>{' '}
      <div className={'ctr'}>
        {' '}
        <div className={'hero-badge'}>
          <span className={'hero-badge-dot'}></span>
          {"India's AI-Powered Full-Lifecycle GCC Platform"}
        </div>{' '}
        <h1>
          <span className={'hero-line'}>{'Reduce Outsourcing'}</span>{' '}
          <span className={'hero-line'}>{'Dependency. Build'}</span>{' '}
          <span className={'hero-line'}>
            {'Enterprise-Owned '}
            <em>{'Capability.'}</em>
          </span>
        </h1>{' '}
        <p className={'hero-sub'}>
          {
            '20+ GCC services under a single contract. From readiness assessment to GCC-as-a-Service — we are the only partner built to cover the complete lifecycle.'
          }
        </p>{' '}
        <div className={'hero-btns'}>
          {' '}
          <Link href={'/services/strategy-advisory'} className={'btn btn-gold'}>
            {'Free Strategy Assessment '}
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
          <Link href={'/services'} className={'btn btn-ghost'}>
            {'Explore Services '}
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
        <div className={'hero-stats'}>
          {' '}
          <div className={'hero-stat'}>
            <div className={'hero-stat-val hero-stat-accent'}>{'20+'}</div>
            <div className={'hero-stat-label'}>{'GCC Services'}</div>
          </div>{' '}
          <div className={'hero-stat'}>
            <div className={'hero-stat-val'}>
              <span>{'$70B'}</span>
            </div>
            <div className={'hero-stat-label'}>{'India GCC Market'}</div>
          </div>{' '}
          <div className={'hero-stat'}>
            <div className={'hero-stat-val'}>{'60+'}</div>
            <div className={'hero-stat-label'}>{'Years Combined Exp'}</div>
          </div>{' '}
          <div className={'hero-stat'}>
            <div className={'hero-stat-val hero-stat-accent'}>{'1'}</div>
            <div className={'hero-stat-label'}>{'Contract'}</div>
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className={'scroll-hint'}>
        <div className={'scroll-hint-line'}></div>
        <span>{'Scroll'}</span>
      </div>{' '}
    </section>
  );
}

function Section1() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        background: 'var(--white)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {' '}
      <div
        className={'trust-strip-label trust-strip-divider'}
        style={{
          flexShrink: '0',
          padding: '20px 28px 20px 48px',
          borderRight: '1px solid var(--rule)',
          whiteSpace: 'nowrap',
          fontSize: 'var(--fs-xs)',
          fontWeight: '500',
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: 'var(--silver)',
        }}
      >
        {'Trusted by enterprises in'}
      </div>{' '}
      <div style={{ overflow: 'hidden', flex: '1' }}>
        {' '}
        <div className={'marquee-track'} style={{ background: 'transparent' }}>
          {' '}
          <div className={'marquee-item'} style={{ padding: '20px 48px', gap: '28px' }}>
            {' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'BFSI'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Pharma'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Manufacturing'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Technology'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Retail'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Healthcare'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Logistics'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Legal & Compliance'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
          </div>{' '}
          <div
            className={'marquee-item'}
            aria-hidden={'true'}
            style={{ padding: '20px 48px', gap: '28px' }}
          >
            {' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'BFSI'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Pharma'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Manufacturing'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Technology'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Retail'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Healthcare'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Logistics'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
            <span className={'trust-label'} style={{ color: 'var(--char)' }}>
              {'Legal & Compliance'}
            </span>{' '}
            <span className={'dot-sep'} style={{ color: 'var(--rule)' }}>
              {'•'}
            </span>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

function Section2() {
  return (
    <section>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'center sr'} style={{ marginBottom: '56px' }}>
          {' '}
          <div className={'tag tag-teal'}>{'AI-Powered Capability'}</div>{' '}
          <h2 className={'sh'}>
            {'Build an AI-Native'}
            <br />
            <em>{'Capability Center'}</em>
          </h2>{' '}
          <p className={'sp'} style={{ marginBottom: '0', maxWidth: '680px' }}>
            {
              'Every enterprise GCC needs AI embedded from day one. We architect AI-native centers with innovation hubs, AI engineering teams, and GenAI practices built into the foundation — not bolted on later.'
            }
          </p>{' '}
        </div>{' '}
        <div className={'grid-3'} style={{ gap: '28px' }}>
          {' '}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--r-lg)',
              background: 'var(--white)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d1'}
          >
            {' '}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--teal-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              {' '}
              <svg
                width={'24'}
                height={'24'}
                viewBox={'0 0 24 24'}
                fill={'none'}
                stroke={'var(--teal)'}
                strokeWidth={'2'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
                aria-hidden="true"
                focusable="false"
              >
                <path d={'M12 2L2 7l10 5 10-5-10-5z'}></path>
                <path d={'M2 17l10 5 10-5'}></path>
                <path d={'M2 12l10 5 10-5'}></path>
              </svg>{' '}
            </div>{' '}
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.15rem',
                fontWeight: '700',
                color: 'var(--navy)',
                marginBottom: '8px',
              }}
            >
              {'Innovation Hub Setup'}
            </h3>{' '}
            <p
              style={{ color: 'var(--slate)', fontSize: '.95rem', lineHeight: '1.7', margin: '0' }}
            >
              {
                'AI strategy offices, R&D labs, and GenAI practice teams — architected as core pillars of your India center.'
              }
            </p>{' '}
          </div>{' '}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--r-lg)',
              background: 'var(--white)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d2'}
          >
            {' '}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--blue-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              {' '}
              <svg
                width={'24'}
                height={'24'}
                viewBox={'0 0 24 24'}
                fill={'none'}
                stroke={'var(--blue)'}
                strokeWidth={'2'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
                aria-hidden="true"
                focusable="false"
              >
                <path d={'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'}></path>
                <circle cx={'9'} cy={'7'} r={'4'}></circle>
                <path d={'M23 21v-2a4 4 0 0 0-3-3.87'}></path>
                <path d={'M16 3.13a4 4 0 0 1 0 7.75'}></path>
              </svg>{' '}
            </div>{' '}
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.15rem',
                fontWeight: '700',
                color: 'var(--navy)',
                marginBottom: '8px',
              }}
            >
              {'AI Talent at Scale'}
            </h3>{' '}
            <p
              style={{ color: 'var(--slate)', fontSize: '.95rem', lineHeight: '1.7', margin: '0' }}
            >
              {
                'India has the world’s largest AI talent pool. We source ML engineers, data scientists, and AI architects at speed.'
              }
            </p>{' '}
          </div>{' '}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--r-lg)',
              background: 'var(--white)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d3'}
          >
            {' '}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--violet-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              {' '}
              <svg
                width={'24'}
                height={'24'}
                viewBox={'0 0 24 24'}
                fill={'none'}
                stroke={'var(--violet)'}
                strokeWidth={'2'}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d={
                    'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
                  }
                ></path>
                <polyline points={'7.5 4.21 12 6.81 16.5 4.21'}></polyline>
                <polyline points={'7.5 19.79 7.5 14.6 3 12'}></polyline>
                <polyline points={'21 12 16.5 14.6 16.5 19.79'}></polyline>
              </svg>{' '}
            </div>{' '}
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.15rem',
                fontWeight: '700',
                color: 'var(--navy)',
                marginBottom: '8px',
              }}
            >
              {'AI-Enabled Operations'}
            </h3>{' '}
            <p
              style={{ color: 'var(--slate)', fontSize: '.95rem', lineHeight: '1.7', margin: '0' }}
            >
              {
                'Our own systems run on AI — reducing operational overhead and passing efficiency gains directly to your GCC.'
              }
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section3() {
  return <hr className={'divider divider-gold'} />;
}

function Section4() {
  return (
    <section className={'bg-cloud'}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'center sr'} style={{ marginBottom: '64px' }}>
          {' '}
          <div className={'tag tag-teal'}>{'Six Pillars'}</div>{' '}
          <h2 className={'sh'}>
            {'The Complete GCC '}
            <em>{'Stack'}</em>
          </h2>{' '}
          <p className={'sp'}>
            {
              'Every capability you need to build, run, and scale a world-class capability center in India.'
            }
          </p>{' '}
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
              <h3>{'Strategy & Advisory'}</h3>
              <p>
                {
                  'Readiness assessment, location strategy, financial modeling, and operating model design.'
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
              <p>
                {
                  'Entity setup, legal compliance, IT infrastructure, Build-Operate-Transfer execution.'
                }
              </p>{' '}
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
              <p>
                {'Managed operations, EOR, payroll & benefits, and facilities management.'}
              </p>{' '}
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
                {'Vendor-to-captive migration, process re-engineering, and change management.'}
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
              <p>
                {'Volume hiring, leadership search, AI/GenAI practice setup, multi-site expansion.'}
              </p>{' '}
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
              <p>
                {
                  'Performance benchmarking, cost optimization, employee engagement, maturity assessment.'
                }
              </p>{' '}
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

function Section5() {
  return (
    <section>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'center sr'} style={{ marginBottom: '56px' }}>
          {' '}
          <div className={'tag tag-blue'}>{'Why Us'}</div>{' '}
          <h2 className={'sh'}>
            {'Why MarSan '}
            <em>{'Global'}</em>
          </h2>{' '}
          <p className={'sp'} style={{ maxWidth: '680px' }}>
            {
              'Most GCC consultants cover a slice. We cover the full lifecycle — because that is what enterprises actually need.'
            }
          </p>{' '}
        </div>{' '}
        <div className={'grid-3'} style={{ gap: '28px' }}>
          {' '}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--r-lg)',
              background: 'var(--cloud)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d1'}
          >
            {' '}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'var(--blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '.8rem',
                marginBottom: '16px',
              }}
            >
              {'01'}
            </div>{' '}
            <h3
              style={{
                margin: '0 0 6px',
                color: 'var(--navy)',
                fontSize: '1.05rem',
                fontFamily: 'var(--serif)',
              }}
            >
              {'Full-Lifecycle Coverage'}
            </h3>{' '}
            <p style={{ margin: '0', color: 'var(--slate)', fontSize: '.9rem', lineHeight: '1.6' }}>
              {'20+ services under one contract. No gaps, no handoffs to third parties.'}
            </p>{' '}
          </div>{' '}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--r-lg)',
              background: 'var(--cloud)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d2'}
          >
            {' '}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'var(--teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '.8rem',
                marginBottom: '16px',
              }}
            >
              {'02'}
            </div>{' '}
            <h3
              style={{
                margin: '0 0 6px',
                color: 'var(--navy)',
                fontSize: '1.05rem',
                fontFamily: 'var(--serif)',
              }}
            >
              {'Operator DNA'}
            </h3>{' '}
            <p style={{ margin: '0', color: 'var(--slate)', fontSize: '.9rem', lineHeight: '1.6' }}>
              {
                'Our founders built and ran GCCs before advising on them. Playbooks from real operations.'
              }
            </p>{' '}
          </div>{' '}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--r-lg)',
              background: 'var(--cloud)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d3'}
          >
            {' '}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '.8rem',
                marginBottom: '16px',
              }}
            >
              {'03'}
            </div>{' '}
            <h3
              style={{
                margin: '0 0 6px',
                color: 'var(--navy)',
                fontSize: '1.05rem',
                fontFamily: 'var(--serif)',
              }}
            >
              {'No Vendor Lock-In'}
            </h3>{' '}
            <p style={{ margin: '0', color: 'var(--slate)', fontSize: '.9rem', lineHeight: '1.6' }}>
              {'We build capabilities you own. Designed for knowledge transfer and independence.'}
            </p>{' '}
          </div>{' '}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--r-lg)',
              background: 'var(--cloud)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d4'}
          >
            {' '}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'var(--violet)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '.8rem',
                marginBottom: '16px',
              }}
            >
              {'04'}
            </div>{' '}
            <h3
              style={{
                margin: '0 0 6px',
                color: 'var(--navy)',
                fontSize: '1.05rem',
                fontFamily: 'var(--serif)',
              }}
            >
              {'Speed to Value'}
            </h3>{' '}
            <p style={{ margin: '0', color: 'var(--slate)', fontSize: '.9rem', lineHeight: '1.6' }}>
              {'GCC setup in 12–16 weeks. First hires in 6. Timelines compressed by half.'}
            </p>{' '}
          </div>{' '}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--r-lg)',
              background: 'var(--cloud)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d1'}
          >
            {' '}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'var(--blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '.8rem',
                marginBottom: '16px',
              }}
            >
              {'05'}
            </div>{' '}
            <h3
              style={{
                margin: '0 0 6px',
                color: 'var(--navy)',
                fontSize: '1.05rem',
                fontFamily: 'var(--serif)',
              }}
            >
              {'India-Deep Expertise'}
            </h3>{' '}
            <p style={{ margin: '0', color: 'var(--slate)', fontSize: '.9rem', lineHeight: '1.6' }}>
              {'12+ cities. 40+ local partners. Deep knowledge of talent pools and regulations.'}
            </p>{' '}
          </div>{' '}
          <div
            style={{
              padding: '32px',
              borderRadius: 'var(--r-lg)',
              background: 'var(--cloud)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d2'}
          >
            {' '}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'var(--teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '.8rem',
                marginBottom: '16px',
              }}
            >
              {'06'}
            </div>{' '}
            <h3
              style={{
                margin: '0 0 6px',
                color: 'var(--navy)',
                fontSize: '1.05rem',
                fontFamily: 'var(--serif)',
              }}
            >
              {'Curated Ecosystem'}
            </h3>{' '}
            <p style={{ margin: '0', color: 'var(--slate)', fontSize: '.9rem', lineHeight: '1.6' }}>
              {
                'Pre-vetted legal, tax, real estate, and technology partners. One relationship, entire ecosystem.'
              }
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section6() {
  return (
    <section className={'ms-clients-section'}>
      {' '}
      <div className={'ms-clients-container'}>
        {' '}
        <div className={'center sr'} style={{ marginBottom: '56px' }}>
          {' '}
          <div className={'tag tag-blue'}>{'Our Network'}</div>{' '}
          <h2 className={'sh'}>
            {'Some of our Clients and '}
            <em>{'Ecosystem Partners'}</em>
          </h2>{' '}
          <p className={'sp'} style={{ maxWidth: '680px' }}>
            {
              'We work with a curated network of trusted organizations and ecosystem partners to help enterprises build, operate and scale their India capability.'
            }
          </p>{' '}
        </div>{' '}
        <div className={'ms-logo-slider'}>
          {' '}
          <div className={'ms-logo-viewport'}>
            {' '}
            <div className={'ms-logo-track'}>
              {' '}
              <div className={'ms-logo-item'}>
                {' '}
                <SiteImage
                  alt={'Partner 1'}
                  src={'/assets/img/client_1.webp.webp'}
                  width={428}
                  height={384}
                />{' '}
              </div>{' '}
              <div className={'ms-logo-item'}>
                {' '}
                <SiteImage
                  alt={'Partner 2'}
                  src={'/assets/img/client_2.png.webp'}
                  width={204}
                  height={192}
                />{' '}
              </div>{' '}
              <div className={'ms-logo-item'}>
                {' '}
                <SiteImage
                  alt={'Partner 3'}
                  src={'/assets/img/client_3.png.webp'}
                  width={382}
                  height={182}
                />{' '}
              </div>{' '}
              <div className={'ms-logo-item'}>
                {' '}
                <SiteImage
                  alt={'Partner 4'}
                  src={'/assets/img/client_4.jpeg.webp'}
                  width={708}
                  height={275}
                />{' '}
              </div>{' '}
              <div className={'ms-logo-item'}>
                {' '}
                <SiteImage
                  alt={'Partner 4'}
                  src={'/assets/img/client_5.jpeg.webp'}
                  width={900}
                  height={450}
                />{' '}
              </div>{' '}
              <div className={'ms-logo-item'}>
                {' '}
                <SiteImage
                  alt={'Partner 4'}
                  src={'/assets/img/client_6.png.webp'}
                  width={567}
                  height={440}
                />{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section7() {
  return <hr className={'divider divider-gold'} />;
}

function Section8() {
  return (
    <section style={{ background: 'var(--navy)', color: 'var(--white)' }}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'grid-2 sr grid-gap-64'}>
          {' '}
          <div>
            {' '}
            <div
              className={'tag'}
              style={{
                background: 'rgba(191,162,78,.15)',
                color: 'var(--gold)',
                marginBottom: '20px',
              }}
            >
              {'The Big Five'}
            </div>{' '}
            <h2 className={'sh'} style={{ color: 'var(--white)', textAlign: 'left' }}>
              {'Five Decisions That Define GCC '}
              <em>{'Success'}</em>
            </h2>{' '}
            <p
              style={{
                color: 'rgba(255,255,255,.6)',
                fontSize: '1.125rem',
                lineHeight: '1.7',
                marginBottom: '0',
              }}
            >
              {'Every successful GCC gets these five things right. We help you nail all five.'}
            </p>{' '}
          </div>{' '}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
            {' '}
            <div
              style={{
                position: 'absolute',
                left: '19px',
                top: '20px',
                bottom: '20px',
                width: '2px',
                background: 'linear-gradient(to bottom,var(--gold),var(--blue),var(--teal))',
                opacity: '.3',
              }}
            ></div>{' '}
            <Link
              href={'/services/strategy-advisory'}
              className={'sr sr-d1'}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                textDecoration: 'none',
                padding: '20px 0',
                position: 'relative',
              }}
            >
              {' '}
              <div
                style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--navy)',
                  fontWeight: '800',
                  fontSize: '.8rem',
                  zIndex: '1',
                }}
              >
                {'01'}
              </div>{' '}
              <div>
                <h3 style={{ margin: '0 0 4px', color: 'var(--white)', fontSize: '1.1rem' }}>
                  {'Should we build a GCC?'}
                </h3>
                <p
                  style={{
                    margin: '0',
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '.9rem',
                    lineHeight: '1.5',
                  }}
                >
                  {'Readiness assessment and business case validation before you commit.'}
                </p>
              </div>{' '}
            </Link>{' '}
            <Link
              href={'/services/strategy-advisory'}
              className={'sr sr-d2'}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                textDecoration: 'none',
                padding: '20px 0',
                position: 'relative',
              }}
            >
              {' '}
              <div
                style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(191,162,78,.2)',
                  border: '2px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  fontWeight: '800',
                  fontSize: '.8rem',
                  zIndex: '1',
                }}
              >
                {'02'}
              </div>{' '}
              <div>
                <h3 style={{ margin: '0 0 4px', color: 'var(--white)', fontSize: '1.1rem' }}>
                  {'Where in India?'}
                </h3>
                <p
                  style={{
                    margin: '0',
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '.9rem',
                    lineHeight: '1.5',
                  }}
                >
                  {'Data-driven location strategy across 12+ Indian cities.'}
                </p>
              </div>{' '}
            </Link>{' '}
            <Link
              href={'/services/build-launch'}
              className={'sr sr-d3'}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                textDecoration: 'none',
                padding: '20px 0',
                position: 'relative',
              }}
            >
              {' '}
              <div
                style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '800',
                  fontSize: '.8rem',
                  zIndex: '1',
                }}
              >
                {'03'}
              </div>{' '}
              <div>
                <h3 style={{ margin: '0 0 4px', color: 'var(--white)', fontSize: '1.1rem' }}>
                  {'Build, BOT, or EOR?'}
                </h3>
                <p
                  style={{
                    margin: '0',
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '.9rem',
                    lineHeight: '1.5',
                  }}
                >
                  {'Choosing the right setup model for your risk appetite and timeline.'}
                </p>
              </div>{' '}
            </Link>{' '}
            <Link
              href={'/services/scale-expand'}
              className={'sr sr-d4'}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                textDecoration: 'none',
                padding: '20px 0',
                position: 'relative',
              }}
            >
              {' '}
              <div
                style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(37,99,235,.2)',
                  border: '2px solid var(--blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue)',
                  fontWeight: '800',
                  fontSize: '.8rem',
                  zIndex: '1',
                }}
              >
                {'04'}
              </div>{' '}
              <div>
                <h3 style={{ margin: '0 0 4px', color: 'var(--white)', fontSize: '1.1rem' }}>
                  {'Who leads it?'}
                </h3>
                <p
                  style={{
                    margin: '0',
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '.9rem',
                    lineHeight: '1.5',
                  }}
                >
                  {'Leadership hiring that makes or breaks the first 18 months.'}
                </p>
              </div>{' '}
            </Link>{' '}
            <Link
              href={'/services/optimize'}
              className={'sr sr-d1'}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                textDecoration: 'none',
                padding: '20px 0',
                position: 'relative',
              }}
            >
              {' '}
              <div
                style={{
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '800',
                  fontSize: '.8rem',
                  zIndex: '1',
                }}
              >
                {'05'}
              </div>{' '}
              <div>
                <h3 style={{ margin: '0 0 4px', color: 'var(--white)', fontSize: '1.1rem' }}>
                  {'How do we scale?'}
                </h3>
                <p
                  style={{
                    margin: '0',
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '.9rem',
                    lineHeight: '1.5',
                  }}
                >
                  {'From 50 to 500 without losing quality, culture, or control.'}
                </p>
              </div>{' '}
            </Link>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section9() {
  return (
    <section>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'center sr'} style={{ marginBottom: '56px' }}>
          {' '}
          <div className={'tag tag-gold'}>{'The MarSan Edge'}</div>{' '}
          <h2 className={'sh'}>
            {'AI-Enabled Efficiency.'}
            <br />
            <em>{'Not Lower Rates.'}</em>
          </h2>{' '}
          <p className={'sp'} style={{ maxWidth: '680px' }}>
            {
              'Traditional GCC operators charge 22–26% management overhead. We deliver at ~15%. Not because we charge less — because our AI-powered systems make us fundamentally more efficient.'
            }
          </p>{' '}
        </div>{' '}
        <div className={'grid-2 sr'} style={{ gap: '32px', maxWidth: '960px', margin: '0 auto' }}>
          {' '}
          <div
            style={{
              padding: '40px',
              borderRadius: 'var(--r-lg)',
              border: '1px solid var(--rule)',
              background: 'var(--cloud)',
              position: 'relative',
            }}
            className={'sr sr-d1'}
          >
            {' '}
            <div
              style={{
                fontSize: 'var(--fs-xs)',
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                fontWeight: '600',
                color: 'var(--silver)',
                marginBottom: '20px',
              }}
            >
              {'Traditional GCC Partner'}
            </div>{' '}
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'var(--fs-2xl)',
                fontWeight: '700',
                color: 'var(--slate)',
                marginBottom: '8px',
              }}
            >
              {'22–26%'}
            </div>{' '}
            <p
              style={{
                color: 'var(--slate)',
                fontSize: 'var(--fs-sm)',
                lineHeight: '1.6',
                marginBottom: '24px',
              }}
            >
              {'Management overhead'}
            </p>{' '}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {' '}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--silver)',
                    flexShrink: '0',
                  }}
                ></div>
                <span style={{ color: 'var(--slate)', fontSize: '.9rem' }}>
                  {'Manual reporting & tracking'}
                </span>
              </div>{' '}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--silver)',
                    flexShrink: '0',
                  }}
                ></div>
                <span style={{ color: 'var(--slate)', fontSize: '.9rem' }}>
                  {'Fragmented vendor coordination'}
                </span>
              </div>{' '}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--silver)',
                    flexShrink: '0',
                  }}
                ></div>
                <span style={{ color: 'var(--slate)', fontSize: '.9rem' }}>
                  {'People-heavy operations model'}
                </span>
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div
            style={{
              padding: '40px',
              borderRadius: 'var(--r-lg)',
              border: '2px solid var(--teal)',
              background: 'var(--white)',
              position: 'relative',
              boxShadow: '0 4px 24px rgba(12,140,130,.08)',
            }}
            className={'sr sr-d2'}
          >
            {' '}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '24px',
                background: 'var(--teal)',
                color: '#fff',
                fontSize: '.7rem',
                fontWeight: '700',
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                padding: '4px 14px',
                borderRadius: 'var(--r-full)',
              }}
            >
              {'MarSan Global'}
            </div>{' '}
            <div
              style={{
                fontSize: 'var(--fs-xs)',
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                fontWeight: '600',
                color: 'var(--teal)',
                marginBottom: '20px',
              }}
            >
              {'AI-Powered Approach'}
            </div>{' '}
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'var(--fs-2xl)',
                fontWeight: '700',
                color: 'var(--navy)',
                marginBottom: '8px',
              }}
            >
              {'~15%'}
            </div>{' '}
            <p
              style={{
                color: 'var(--slate)',
                fontSize: 'var(--fs-sm)',
                lineHeight: '1.6',
                marginBottom: '24px',
              }}
            >
              {'Management overhead'}
            </p>{' '}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {' '}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg
                  width={'16'}
                  height={'16'}
                  viewBox={'0 0 24 24'}
                  fill={'none'}
                  stroke={'var(--teal)'}
                  strokeWidth={'2.5'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  style={{ flexShrink: '0' }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={'M20 6L9 17l-5-5'}></path>
                </svg>
                <span style={{ color: 'var(--char)', fontSize: '.9rem' }}>
                  {'AI-automated compliance & reporting'}
                </span>
              </div>{' '}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg
                  width={'16'}
                  height={'16'}
                  viewBox={'0 0 24 24'}
                  fill={'none'}
                  stroke={'var(--teal)'}
                  strokeWidth={'2.5'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  style={{ flexShrink: '0' }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={'M20 6L9 17l-5-5'}></path>
                </svg>
                <span style={{ color: 'var(--char)', fontSize: '.9rem' }}>
                  {'Single-platform lifecycle management'}
                </span>
              </div>{' '}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg
                  width={'16'}
                  height={'16'}
                  viewBox={'0 0 24 24'}
                  fill={'none'}
                  stroke={'var(--teal)'}
                  strokeWidth={'2.5'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  style={{ flexShrink: '0' }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={'M20 6L9 17l-5-5'}></path>
                </svg>
                <span style={{ color: 'var(--char)', fontSize: '.9rem' }}>
                  {'AI-driven talent matching & operations'}
                </span>
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'center sr sr-d3'} style={{ marginTop: '48px' }}>
          {' '}
          <p
            style={{
              color: 'var(--slate)',
              fontSize: 'var(--fs-base)',
              lineHeight: '1.8',
              maxWidth: '640px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <strong style={{ color: 'var(--navy)' }}>{'The bottom line:'}</strong>
            {
              ' When AI runs your operations, savings are structural — not negotiated. Your GCC gets the benefit of a modern operating model from day one.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section10() {
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
            {'Ready to Build Your'}
            <br />
            {'India Capability?'}
          </h2>{' '}
          <p>
            {
              'Start with an honest conversation. No pitch deck, no pressure — just clarity on whether India is the right move for your organization.'
            }
          </p>{' '}
          <div className={'cta-btns'}>
            {' '}
            <Link href={'/contact'} className={'btn btn-gold'}>
              {'Book a Strategy Call '}
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
            <Link href={'/about'} className={'btn btn-ghost'}>
              {'About Us '}
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
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </>
  );
}
