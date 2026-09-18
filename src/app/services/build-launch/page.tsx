import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'GCC Build',
  'From legal entity to fully operational center — we handle the entire build process. Entity incorporation, regulatory compliance, IT infrastructure, workspace',
  '/services/build-launch',
);

function Section0() {
  return (
    <section className={'pt-hero'}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'breadcrumb'}>
          <Link href={'/'}>{'Home'}</Link>
          {' / '}
          <Link href={'/services'}>{'Services'}</Link>
          {' / GCC Build'}
        </div>{' '}
        <div className={'pillar-intro-flip'} style={{ marginTop: '32px' }}>
          {' '}
          <div className={'sr-l'}>
            {' '}
            <div className={'tag tag-teal'}>{'Pillar 02'}</div>{' '}
            <h1 className={'page-title'}>{'GCC Build'}</h1>{' '}
            <p style={{ color: 'var(--slate)', fontSize: 'var(--fs-base)', lineHeight: '1.8' }}>
              {
                'From legal entity to fully operational center — we handle the entire build process. Entity incorporation, regulatory compliance, IT infrastructure, workspace setup, and initial hiring — all under a single engagement.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'sr-r pillar-intro-img img-frame'}>
            {' '}
            <SiteImage
              alt={'GCC Build'}
              className={'cover-img'}
              src={'/assets/photography/photo-1504384764586-bb4cdc1707b0.webp'}
              width={1400}
              height={934}
            />{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section1() {
  return (
    <section className={'bg-navy'}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'grid-4 text-center'}>
          {' '}
          <div className={'stat stat-blue sr'}>
            <div className={'stat-val'}>{'12–16 wks'}</div>
            <div className={'stat-label'}>{'Setup Timeline'}</div>
          </div>{' '}
          <div className={'stat stat-teal sr'}>
            <div className={'stat-val'}>{'100%'}</div>
            <div className={'stat-label'}>{'Compliance'}</div>
          </div>{' '}
          <div className={'stat stat-gold sr'}>
            <div className={'stat-val'}>{'Zero'}</div>
            <div className={'stat-label'}>{'Disruption Transfer'}</div>
          </div>{' '}
          <div className={'stat stat-violet sr'}>
            <div className={'stat-val'}>{'24/7'}</div>
            <div className={'stat-label'}>{'IT Support'}</div>
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section2() {
  return <hr className={'divider divider-gold'} />;
}

function Section3() {
  return (
    <section className={'bg-cloud'}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'center sr mb-48'}>
          {' '}
          <div className={'tag tag-teal'}>{'Our Services'}</div>{' '}
          <h2 className={'sh'}>
            {'GCC Build '}
            <em>{'Services'}</em>
          </h2>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Entity Setup & Compliance'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'End-to-end India entity incorporation — company registration, PAN, TAN, GST, professional tax, Shops & Establishment Act, and all regulatory filings. We handle the bureaucracy so you can focus on strategy.'
            }
          </p>{' '}
          <div className={'svc-bold-list'}>
            {' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Company Registration'}</h3>
              <p>
                {
                  'Private Limited or LLP incorporation with RoC, including director appointments and share structuring.'
                }
              </p>
            </div>{' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Tax Registration'}</h3>
              <p>
                {
                  'PAN, TAN, GST, professional tax, and advance tax setup with quarterly compliance calendar.'
                }
              </p>
            </div>{' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Labor Compliance'}</h3>
              <p>{'Shops & Establishment, PF, ESI, and state-specific labor law registrations.'}</p>
            </div>{' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'FEMA & RBI'}</h3>
              <p>
                {
                  'Foreign investment reporting, external commercial borrowing compliance, and annual filings.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'IT Infrastructure & Security'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Enterprise-grade technology setup from day one. Network architecture, cloud infrastructure, endpoint security, collaboration tools, and ITSM framework — all designed to meet parent-company security standards.'
            }
          </p>{' '}
          <div className={'feat-grid'}>
            {' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Network Architecture'}</h3>
              <p>
                {
                  'Secure connectivity between India center and global offices with redundancy and failover.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Cloud Setup'}</h3>
              <p>
                {
                  'AWS / Azure / GCP infrastructure provisioned per enterprise standards with cost optimization.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Security Framework'}</h3>
              <p>
                {
                  'SOC 2, ISO 27001 aligned security controls, endpoint protection, and DLP policies.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Collaboration Stack'}</h3>
              <p>
                {
                  'Unified communications, project management, and documentation tools integrated with HQ systems.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'} style={{ marginBottom: '0', paddingBottom: '0' }}>
          {' '}
          <h3 className={'sub-heading'}>{'Build-Operate-Transfer (BOT)'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'We build and operate your GCC for 18–24 months, then transfer full ownership. You get speed-to-market without the setup risk. We carry the operational burden while you focus on capability building.'
            }
          </p>{' '}
          <div className={'svc-numbered'}>
            {' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'01'}</div>
              <div>
                <h3>{'Rapid Launch'}</h3>
                <p>{'Operational GCC in 12–16 weeks vs. 6–12 months for a self-build approach.'}</p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'02'}</div>
              <div>
                <h3>{'Risk Transfer'}</h3>
                <p>
                  {
                    'We absorb setup risks — regulatory, real estate, hiring — during the operate phase.'
                  }
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'03'}</div>
              <div>
                <h3>{'Clean Transfer'}</h3>
                <p>
                  {
                    'Structured knowledge transfer with 90-day parallel run to ensure zero disruption.'
                  }
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'04'}</div>
              <div>
                <h3>{'Flexible Terms'}</h3>
                <p>
                  {
                    'Transfer triggers based on team size, maturity milestones, or fixed timeline — your choice.'
                  }
                </p>
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section4() {
  return (
    <section className={'process-section'}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'center sr mb-16'}>
          {' '}
          <div className={'tag tag-gold'}>{'Process'}</div>{' '}
          <h2 className={'sh'}>
            {'How It '}
            <em>{'Works'}</em>
          </h2>{' '}
        </div>{' '}
        <div className={'process-vertical'}>
          {' '}
          <div className={'pv-step sr'}>
            {' '}
            <div className={'pv-num bg-blue'}>{'1'}</div> <h3>{'Incorporate'}</h3>
            <p>
              {
                'Legal entity registration, regulatory filings, and compliance setup. Your India presence becomes official.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'pv-step sr'}>
            {' '}
            <div className={'pv-num bg-teal'}>{'2'}</div> <h3>{'Build Out'}</h3>
            <p>
              {
                'Office space, IT infrastructure, security frameworks, and operational tools — all enterprise-grade from day one.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'pv-step sr'}>
            {' '}
            <div className={'pv-num bg-gold'}>{'3'}</div> <h3>{'Hire & Onboard'}</h3>
            <p>
              {
                'Initial team recruitment, onboarding programs, and culture building. Your first employees hit the ground running.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'pv-step sr'}>
            {' '}
            <div className={'pv-num bg-violet'}>{'4'}</div> <h3>{'Launch & Stabilize'}</h3>
            <p>
              {
                'Go-live with full operational support, performance monitoring, and 90-day stabilization period.'
              }
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section5() {
  return (
    <section className={'cta'}>
      {' '}
      <div className={'cta-bg'}>
        <SiteImage
          alt={''}
          src={'/assets/photography/photo-1486406146926-c627a92ad1ab.webp'}
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
            {'India Center?'}
          </h2>{' '}
          <p>{'From entity to operations in 12–16 weeks. Let us show you the timeline.'}</p>{' '}
          <div className={'cta-btns'}>
            {' '}
            <Link href={'/contact'} className={'btn btn-gold'}>
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
            <Link href={'/services'} className={'btn btn-ghost'}>
              {'All Pillars '}
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
    </>
  );
}
