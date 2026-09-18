import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'GCC Operate',
  'Not ready to incorporate? Start operating in India within weeks through our managed GCC and EOR services. Full HR operations, payroll, benefits, and faciliti',
  '/services/operate-run',
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
          {' / GCC Operate'}
        </div>{' '}
        <div
          className={'pillar-intro'}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            marginTop: '32px',
          }}
        >
          {' '}
          <div className={'sr-l'}>
            {' '}
            <div className={'tag tag-gold'}>{'Pillar 03'}</div>{' '}
            <h1 className={'page-title'}>{'GCC Operate'}</h1>{' '}
            <p style={{ color: 'var(--slate)', fontSize: 'var(--fs-base)', lineHeight: '1.8' }}>
              {
                'Not ready to incorporate? Start operating in India within weeks through our managed GCC and EOR services. Full HR operations, payroll, benefits, and facilities management — without the overhead of entity setup.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'sr-r pillar-intro-img img-frame'}>
            {' '}
            <SiteImage
              alt={'GCC Operate'}
              className={'cover-img'}
              src={'/assets/photography/photo-1497366216548-37526070297c.webp'}
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
            <div className={'stat-val'}>{'2–4 wks'}</div>
            <div className={'stat-label'}>{'First Hire'}</div>
          </div>{' '}
          <div className={'stat stat-teal sr'}>
            <div className={'stat-val'}>{'Zero'}</div>
            <div className={'stat-label'}>{'Entity Required'}</div>
          </div>{' '}
          <div className={'stat stat-gold sr'}>
            <div className={'stat-val'}>{'100%'}</div>
            <div className={'stat-label'}>{'Compliant'}</div>
          </div>{' '}
          <div className={'stat stat-violet sr'}>
            <div className={'stat-val'}>{'12+'}</div>
            <div className={'stat-label'}>{'Cities Available'}</div>
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
          <div className={'tag tag-gold'}>{'Our Services'}</div>{' '}
          <h2 className={'sh'}>
            {'GCC Operate '}
            <em>{'Services'}</em>
          </h2>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'GCC-as-a-Service'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'A fully managed GCC under our entity umbrella. Your team, your processes, your IP — but operating through our legal and operational infrastructure until you are ready to incorporate independently.'
            }
          </p>{' '}
          <div className={'svc-icon-cards'}>
            {' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-blue'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path d={'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'}></path>
                  <circle cx={'9'} cy={'7'} r={'4'}></circle>
                  <path d={'M23 21v-2a4 4 0 0 0-3-3.87'}></path>
                  <path d={'M16 3.13a4 4 0 0 1 0 7.75'}></path>
                </svg>
              </div>
              <h3>{'Dedicated Teams'}</h3>
              <p>
                {
                  'Your hires, your management, your culture — operating through our compliant entity structure.'
                }
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-teal'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <circle cx={'12'} cy={'12'} r={'3'}></circle>
                  <path
                    d={
                      'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'
                    }
                  ></path>
                </svg>
              </div>
              <h3>{'Full HR Stack'}</h3>
              <p>
                {
                  'Recruitment, onboarding, payroll, benefits, performance management, and exit processing.'
                }
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-gold'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <rect x={'2'} y={'7'} width={'20'} height={'14'} rx={'2'} ry={'2'}></rect>
                  <path d={'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'}></path>
                </svg>
              </div>
              <h3>{'Operational Support'}</h3>
              <p>{'Facilities, IT helpdesk, procurement, travel, and vendor management.'}</p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-violet'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <polyline points={'16 16 12 12 8 16'}></polyline>
                  <line x1={'12'} y1={'12'} x2={'12'} y2={'21'}></line>
                  <path d={'M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'}></path>
                </svg>
              </div>
              <h3>{'Exit Flexibility'}</h3>
              <p>
                {
                  'Transition to your own entity at any time with structured knowledge transfer and zero disruption.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Employer of Record (EOR)'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Hire employees in India without an entity. We are the legal employer — you manage the work. Fastest path from decision to first hire: typically 2–4 weeks.'
            }
          </p>{' '}
          <div className={'svc-metrics'}>
            {' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val'}>{'2–4 wks'}</div>
              <h3>{'Onboarding'}</h3>
              <p>{'From offer letter to productive employee in under a month, fully compliant.'}</p>
            </div>{' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val val-teal'}>{'100%'}</div>
              <h3>{'Compliance'}</h3>
              <p>{'PF, ESI, professional tax, TDS, labor law — all handled. Zero risk for you.'}</p>
            </div>{' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val val-gold'}>{'Top 10%'}</div>
              <h3>{'Benefits'}</h3>
              <p>
                {
                  'Health insurance, gratuity, leave policies benchmarked against top Indian employers.'
                }
              </p>
            </div>{' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val val-violet'}>{'1–100+'}</div>
              <h3>{'Scale Freely'}</h3>
              <p>{'No minimum commitments. Scale up or down as your needs evolve.'}</p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Payroll & Benefits Administration'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'End-to-end payroll processing for India-based teams. Salary disbursement, tax deductions, statutory compliance, reimbursements, and benefits administration — all handled with enterprise-grade accuracy.'
            }
          </p>{' '}
          <div className={'feat-grid'}>
            {' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Monthly Payroll'}</h3>
              <p>
                {
                  'Salary processing, TDS computation, PF/ESI contributions, and bank transfers for any team size.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Benefits Management'}</h3>
              <p>
                {'Group health insurance, life insurance, gratuity, and flexible benefit plans.'}
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Compliance Filings'}</h3>
              <p>
                {
                  'All statutory returns — PF, ESI, professional tax, TDS — filed on time, every time.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Employee Portal'}</h3>
              <p>
                {
                  'Self-service access to payslips, tax documents, leave balances, and reimbursement claims.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'} style={{ marginBottom: '0', paddingBottom: '0' }}>
          {' '}
          <h3 className={'sub-heading'}>{'Facilities Management'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Workspace sourcing, setup, and ongoing management across 12+ Indian cities. From co-working desks to dedicated floors — we find, negotiate, and manage your physical infrastructure.'
            }
          </p>{' '}
          <div className={'feat-grid'}>
            {' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Space Sourcing'}</h3>
              <p>
                {
                  'Options across co-working, managed offices, and built-to-suit spaces in your target city.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Lease Negotiation'}</h3>
              <p>
                {'Commercial real estate expertise to get the best terms and exit flexibility.'}
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Fit-Out Management'}</h3>
              <p>{'Office design, furniture, AV systems, and branding — move-in ready.'}</p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Ongoing Operations'}</h3>
              <p>{'Housekeeping, security, maintenance, cafeteria, and transport logistics.'}</p>
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
        <div className={'process-grid'}>
          {' '}
          <div className={'process-step sr sr-d1'}>
            {' '}
            <div className={'process-num bg-blue'}>{'1'}</div> <h3>{'Assess'}</h3>
            <p>{'Understand your hiring needs and timeline'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d2'}>
            {' '}
            <div className={'process-num bg-teal'}>{'2'}</div> <h3>{'Structure'}</h3>
            <p>{'Design the optimal operating model'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d3'}>
            {' '}
            <div className={'process-num bg-gold'}>{'3'}</div> <h3>{'Launch'}</h3>
            <p>{'Onboard your first employees in India'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d4'}>
            {' '}
            <div className={'process-num bg-violet'}>{'4'}</div> <h3>{'Optimize'}</h3>
            <p>{'Continuous improvement and scale'}</p>{' '}
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
          src={'/assets/photography/photo-1497366216548-37526070297c.webp'}
          width={1400}
          height={934}
        />
      </div>{' '}
      <div className={'ctr'}>
        <div className={'sr'}>
          {' '}
          <h2>
            {'Start Operating in India'}
            <br />
            {'Within Weeks'}
          </h2>{' '}
          <p>{'No entity required. Hire your first India employee in 2–4 weeks through EOR.'}</p>{' '}
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
