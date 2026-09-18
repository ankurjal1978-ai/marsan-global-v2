import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'GCC Optimize',
  'Your GCC is running. Now make it exceptional. Performance benchmarking, cost optimization, employee engagement, and maturity assessment — we help established',
  '/services/optimize',
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
          {' / GCC Optimize'}
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
            <div className={'tag tag-teal'}>{'Pillar 06'}</div>{' '}
            <h1 className={'page-title'}>{'GCC Optimize'}</h1>{' '}
            <p style={{ color: 'var(--slate)', fontSize: 'var(--fs-base)', lineHeight: '1.8' }}>
              {
                'Your GCC is running. Now make it exceptional. Performance benchmarking, cost optimization, employee engagement, and maturity assessment — we help established GCCs reach the next level of operational excellence.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'sr-r pillar-intro-img img-frame'}>
            {' '}
            <SiteImage
              alt={'GCC Optimize'}
              className={'cover-img'}
              src={'/assets/photography/photo-1454165804606-c3d57bc86b40.webp'}
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
            <div className={'stat-val'}>{'40+'}</div>
            <div className={'stat-label'}>{'KPIs Tracked'}</div>
          </div>{' '}
          <div className={'stat stat-teal sr'}>
            <div className={'stat-val'}>{'15–25%'}</div>
            <div className={'stat-label'}>{'Cost Reduction'}</div>
          </div>{' '}
          <div className={'stat stat-gold sr'}>
            <div className={'stat-val'}>{'20–30%'}</div>
            <div className={'stat-label'}>{'Attrition Reduction'}</div>
          </div>{' '}
          <div className={'stat stat-violet sr'}>
            <div className={'stat-val'}>{'5'}</div>
            <div className={'stat-label'}>{'Maturity Levels'}</div>
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
            {'GCC Optimize '}
            <em>{'Services'}</em>
          </h2>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Performance Benchmarking'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Benchmark your GCC across 40+ KPIs against industry peers. Delivery velocity, cost-per-head, attrition rate, talent acquisition speed, NPS, and operational metrics — all indexed against best-in-class GCCs in your industry vertical.'
            }
          </p>{' '}
          <div className={'svc-metrics'}>
            {' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val'}>{'40+'}</div>
              <h3>{'KPIs Tracked'}</h3>
              <p>
                {
                  'Comprehensive metric library covering delivery, talent, cost, quality, and employee experience.'
                }
              </p>
            </div>{' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val val-teal'}>{'P75'}</div>
              <h3>{'Peer Benchmarking'}</h3>
              <p>
                {'Anonymous comparison against GCCs of similar size, industry, and maturity level.'}
              </p>
            </div>{' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val val-gold'}>{'3–5'}</div>
              <h3>{'Gap Analysis'}</h3>
              <p>
                {
                  'Prioritized improvement opportunities with estimated impact, effort, and sequencing.'
                }
              </p>
            </div>{' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val val-violet'}>{'4Q'}</div>
              <h3>{'Target Setting'}</h3>
              <p>
                {
                  'Realistic, data-backed targets for the next 4 quarters with milestone checkpoints.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Cost Optimization'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Systematic cost reduction without compromising quality or morale. Vendor renegotiation, process automation, resource utilization, and real estate optimization. Average engagement delivers 15–25% operational cost reduction.'
            }
          </p>{' '}
          <div className={'svc-numbered'}>
            {' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'01'}</div>
              <div>
                <h3>{'Vendor Consolidation'}</h3>
                <p>
                  {'Audit and renegotiate vendor contracts with volume-based pricing leverage.'}
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'02'}</div>
              <div>
                <h3>{'Process Automation'}</h3>
                <p>
                  {
                    'Identify and implement RPA, workflow automation, and AI-driven efficiency gains.'
                  }
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'03'}</div>
              <div>
                <h3>{'Resource Optimization'}</h3>
                <p>{'Utilization analysis, bench management, and right-skilling programs.'}</p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'04'}</div>
              <div>
                <h3>{'Real Estate Review'}</h3>
                <p>
                  {
                    'Workspace optimization, hybrid work model design, and lease renegotiation strategies.'
                  }
                </p>
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Employee Engagement & Retention'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Culture programs, pulse surveys, career framework design, EVP refinement, and retention strategies specifically designed for GCC teams navigating the parent-subsidiary dynamic.'
            }
          </p>{' '}
          <div className={'svc-bold-list'}>
            {' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Culture Programs'}</h3>
              <p>
                {
                  'Engagement initiatives that bridge the gap between local culture and parent-company values.'
                }
              </p>
            </div>{' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Career Frameworks'}</h3>
              <p>
                {
                  'Transparent career ladders and growth paths that reduce unwanted attrition by 20–30%.'
                }
              </p>
            </div>{' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'EVP Design'}</h3>
              <p>
                {
                  'Employer value proposition that differentiates your GCC in a competitive talent market.'
                }
              </p>
            </div>{' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Manager Enablement'}</h3>
              <p>
                {'Leadership development for managers leading cross-cultural, distributed teams.'}
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'pillar-callout sr'} style={{ marginTop: '48px' }}>
          {' '}
          <div className={'callout-icon'}>
            <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
              <path d={'M22 11.08V12a10 10 0 1 1-5.93-9.14'}></path>
              <polyline points={'22 4 12 14.01 9 11.01'}></polyline>
            </svg>
          </div>{' '}
          <div>
            <p>
              {
                '“Most GCCs plateau at Level 3 — Scaled but not Strategic. The leap to Level 4 requires fundamentally different governance, not just more process.”'
              }
              <span className={'callout-cite'}>{'From our maturity assessment practice'}</span>
            </p>
          </div>{' '}
        </div>{' '}
        <div
          className={'svc-detail sr'}
          style={{ marginTop: '48px', marginBottom: '0', paddingBottom: '0' }}
        >
          {' '}
          <h3 className={'sub-heading'}>{'GCC Maturity Assessment'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Evaluate your GCC against our proprietary 5-level maturity model (Startup, Functional, Scaled, Strategic, Autonomous) and get a prioritized roadmap to the next level.'
            }
          </p>{' '}
          <div className={'svc-icon-cards'}>
            {' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-blue'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path d={'M18 20V10'}></path>
                  <path d={'M12 20V4'}></path>
                  <path d={'M6 20v-6'}></path>
                </svg>
              </div>
              <h3>{'5-Level Maturity Model'}</h3>
              <p>
                {
                  'Proprietary framework benchmarking strategy, operations, talent, technology, and culture dimensions.'
                }
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-teal'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <circle cx={'11'} cy={'11'} r={'8'}></circle>
                  <line x1={'21'} y1={'21'} x2={'16.65'} y2={'16.65'}></line>
                </svg>
              </div>
              <h3>{'Self-Assessment Tool'}</h3>
              <p>{'Interactive diagnostic that surfaces blind spots with data-backed scoring.'}</p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-gold'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <line x1={'8'} y1={'6'} x2={'21'} y2={'6'}></line>
                  <line x1={'8'} y1={'12'} x2={'21'} y2={'12'}></line>
                  <line x1={'8'} y1={'18'} x2={'21'} y2={'18'}></line>
                  <line x1={'3'} y1={'6'} x2={'3.01'} y2={'6'}></line>
                  <line x1={'3'} y1={'12'} x2={'3.01'} y2={'12'}></line>
                  <line x1={'3'} y1={'18'} x2={'3.01'} y2={'18'}></line>
                </svg>
              </div>
              <h3>{'Prioritized Roadmap'}</h3>
              <p>
                {
                  'Sequenced plan with quick wins (0–3 months) and strategic investments (6–12 months).'
                }
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-violet'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <line x1={'12'} y1={'1'} x2={'12'} y2={'23'}></line>
                  <path d={'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'}></path>
                </svg>
              </div>
              <h3>{'Investment Estimate'}</h3>
              <p>
                {'Budget projections for each initiative with expected ROI and payback period.'}
              </p>
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
            <div className={'process-num bg-blue'}>{'1'}</div> <h3>{'Audit'}</h3>
            <p>{'Comprehensive health check across 40+ KPIs'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d2'}>
            {' '}
            <div className={'process-num bg-teal'}>{'2'}</div> <h3>{'Benchmark'}</h3>
            <p>{'Compare against best-in-class peers'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d3'}>
            {' '}
            <div className={'process-num bg-gold'}>{'3'}</div> <h3>{'Implement'}</h3>
            <p>{'Execute highest-impact changes'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d4'}>
            {' '}
            <div className={'process-num bg-violet'}>{'4'}</div> <h3>{'Monitor'}</h3>
            <p>{'Sustain gains with data and continuous improvement'}</p>{' '}
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
          src={'/assets/photography/photo-1454165804606-c3d57bc86b40.webp'}
          width={1400}
          height={934}
        />
      </div>{' '}
      <div className={'ctr'}>
        <div className={'sr'}>
          {' '}
          <h2>
            {"Unlock Your GCC's"}
            <br />
            {'Full Potential'}
          </h2>{' '}
          <p>
            {
              'Start with a benchmarking sprint. See exactly where you stand — and where you could be.'
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
