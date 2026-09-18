import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Strategy & Advisory',
  'Before you commit capital, commit to clarity. Our strategy practice helps enterprises evaluate whether a GCC is the right move, where to build it, how to str',
  '/services/strategy-advisory',
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
          {' / Strategy & Advisory'}
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
            <div className={'tag tag-blue'}>{'Pillar 01'}</div>{' '}
            <h1 className={'page-title'}>{'Strategy & Advisory'}</h1>{' '}
            <p style={{ color: 'var(--slate)', fontSize: 'var(--fs-base)', lineHeight: '1.8' }}>
              {
                'Before you commit capital, commit to clarity. Our strategy practice helps enterprises evaluate whether a GCC is the right move, where to build it, how to structure it, and what the financial model looks like — all before a single rupee is spent.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'sr-r pillar-intro-img img-frame'}>
            {' '}
            <SiteImage
              alt={'Strategy & Advisory'}
              className={'cover-img'}
              src={'/assets/photography/photo-1553877522-43269d4ea984.webp'}
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
            <div className={'stat-val'}>{'12'}</div>
            <div className={'stat-label'}>{'Diagnostic Dimensions'}</div>
          </div>{' '}
          <div className={'stat stat-teal sr'}>
            <div className={'stat-val'}>{'5yr'}</div>
            <div className={'stat-label'}>{'Financial Modeling'}</div>
          </div>{' '}
          <div className={'stat stat-gold sr'}>
            <div className={'stat-val'}>{'12+'}</div>
            <div className={'stat-label'}>{'Cities Analyzed'}</div>
          </div>{' '}
          <div className={'stat stat-violet sr'}>
            <div className={'stat-val'}>{'100%'}</div>
            <div className={'stat-label'}>{'Data-Backed'}</div>
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
          <div className={'tag tag-blue'}>{'Our Services'}</div>{' '}
          <h2 className={'sh'}>
            {'Strategy & Advisory '}
            <em>{'Services'}</em>
          </h2>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'GCC Readiness Assessment'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'A comprehensive diagnostic that evaluates your organization across 12 dimensions — strategic alignment, talent readiness, technology maturity, regulatory exposure, financial capacity, and operational complexity. You walk away with a clear Go / No-Go recommendation backed by data.'
            }
          </p>{' '}
          <div className={'feat-grid'}>
            {' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'12-Dimension Diagnostic'}</h3>
              <p>
                {
                  'Evaluate strategic alignment, talent readiness, tech maturity, regulatory exposure, financial capacity across your organization.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Competitive Benchmarking'}</h3>
              <p>
                {
                  'How your peers in the same industry have structured their India operations — and what you can learn from their mistakes.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Go / No-Go Recommendation'}</h3>
              <p>
                {
                  'Data-backed verdict with supporting evidence, not a consulting deck designed to sell the next engagement.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Risk Register'}</h3>
              <p>
                {
                  'Comprehensive risk identification with mitigation strategies and contingency plans for each scenario.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Location Strategy'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Data-driven city selection across 12+ Indian cities. We evaluate talent density, cost structures, infrastructure quality, regulatory environment, and quality of life to recommend the optimal location for your specific requirements.'
            }
          </p>{' '}
          <div className={'svc-numbered'}>
            {' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'01'}</div>
              <div>
                <h3>{'Talent Mapping'}</h3>
                <p>
                  {
                    'Skill-specific talent availability, salary benchmarks, and attrition rates across all major Indian tech hubs.'
                  }
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'02'}</div>
              <div>
                <h3>{'Cost Modeling'}</h3>
                <p>
                  {
                    'All-in cost comparison including real estate, salaries, benefits, compliance, and hidden costs most consultants miss.'
                  }
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'03'}</div>
              <div>
                <h3>{'Infrastructure Scoring'}</h3>
                <p>
                  {
                    'Office space availability, internet reliability, power backup, and proximity to airports and business districts.'
                  }
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'04'}</div>
              <div>
                <h3>{'Quality of Life Index'}</h3>
                <p>
                  {
                    'Expat livability, international schools, healthcare, and cultural factors that affect leadership retention.'
                  }
                </p>
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Financial Modeling'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Build vs. buy vs. BOT financial analysis with 5-year projections. We model total cost of ownership including setup costs, ramp-up inefficiencies, steady-state operations, and exit scenarios.'
            }
          </p>{' '}
          <div className={'feat-grid'}>
            {' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'TCO Analysis'}</h3>
              <p>
                {
                  'Total cost of ownership comparison: GCC vs. outsourcing vs. hybrid models with sensitivity analysis.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'ROI Projections'}</h3>
              <p>
                {
                  '5-year financial model with realistic ramp-up curves, not hockey-stick fantasies.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Scenario Planning'}</h3>
              <p>
                {'Best case, base case, and downside scenarios with break-even analysis for each.'}
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Board-Ready Package'}</h3>
              <p>
                {
                  'Investment memo, financial model, and presentation deck ready for board approval.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'} style={{ marginBottom: '0', paddingBottom: '0' }}>
          {' '}
          <h3 className={'sub-heading'}>{'Operating Model Design'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Design the organizational structure, governance framework, and operating rhythms for your India capability center. We define reporting lines, decision rights, escalation paths, and the parent-subsidiary operating model.'
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
              <h3>{'Org Design'}</h3>
              <p>
                {
                  'Optimal team structure, reporting lines, and span of control for your specific scale and maturity.'
                }
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-teal'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path d={'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'}></path>
                </svg>
              </div>
              <h3>{'Governance Framework'}</h3>
              <p>
                {
                  'Decision rights matrix, escalation paths, and the operating cadence between India and HQ.'
                }
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-gold'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <rect x={'2'} y={'3'} width={'20'} height={'14'} rx={'2'} ry={'2'}></rect>
                  <path d={'M8 21h8M12 17v4'}></path>
                </svg>
              </div>
              <h3>{'Service Catalog'}</h3>
              <p>
                {'Define which functions move to India, in what sequence, with what SLAs and KPIs.'}
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-violet'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path d={'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'}></path>
                  <polyline points={'14 2 14 8 20 8'}></polyline>
                  <line x1={'16'} y1={'13'} x2={'8'} y2={'13'}></line>
                  <line x1={'16'} y1={'17'} x2={'8'} y2={'17'}></line>
                </svg>
              </div>
              <h3>{'Change Playbook'}</h3>
              <p>
                {'Communication plan, stakeholder management, and cultural integration strategies.'}
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'pillar-callout sr'}>
          {' '}
          <div className={'callout-icon'}>
            <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
              <path d={'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'}></path>
              <circle cx={'12'} cy={'17'} r={'.5'}></circle>
              <circle cx={'12'} cy={'12'} r={'10'}></circle>
            </svg>
          </div>{' '}
          <div>
            <p>
              {
                '“The best GCC strategy is the one that tells you not to build a GCC — when the data says outsourcing is the better move. We are paid for clarity, not for selling engagements.”'
              }
              <span className={'callout-cite'}>{'MarSan Advisory Philosophy'}</span>
            </p>
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
            <div className={'process-num bg-blue'}>{'1'}</div> <h3>{'Discover'}</h3>
            <p>{'Deep-dive into your goals, constraints, and readiness'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d2'}>
            {' '}
            <div className={'process-num bg-teal'}>{'2'}</div> <h3>{'Analyze'}</h3>
            <p>{'Data-driven evaluation of options and trade-offs'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d3'}>
            {' '}
            <div className={'process-num bg-gold'}>{'3'}</div> <h3>{'Recommend'}</h3>
            <p>{'Clear Go/No-Go with supporting evidence'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d4'}>
            {' '}
            <div className={'process-num bg-violet'}>{'4'}</div> <h3>{'Plan'}</h3>
            <p>{'Detailed roadmap with timelines and investment'}</p>{' '}
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
          src={'/assets/photography/photo-1451187580459-43490279c0fa.webp'}
          width={1400}
          height={934}
        />
      </div>{' '}
      <div className={'ctr'}>
        <div className={'sr'}>
          {' '}
          <h2>
            {'Ready to Assess Your'}
            <br />
            {'GCC Readiness?'}
          </h2>{' '}
          <p>
            {
              'Start with a complimentary readiness conversation. We will tell you honestly whether India is the right move.'
            }
          </p>{' '}
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
