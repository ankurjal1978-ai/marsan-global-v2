import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'GCC Transform',
  'Already outsourcing to India? Transition from vendor dependency to enterprise ownership. We manage the entire migration — people, processes, IP, and relation',
  '/services/transform',
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
          {' / GCC Transform'}
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
            <div className={'tag tag-violet'}>{'Pillar 04'}</div>{' '}
            <h1 className={'page-title'}>{'GCC Transform'}</h1>{' '}
            <p style={{ color: 'var(--slate)', fontSize: 'var(--fs-base)', lineHeight: '1.8' }}>
              {
                'Already outsourcing to India? Transition from vendor dependency to enterprise ownership. We manage the entire migration — people, processes, IP, and relationships — with zero business disruption.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'sr-r pillar-intro-img img-frame'}>
            {' '}
            <SiteImage
              alt={'GCC Transform'}
              className={'cover-img'}
              src={'/assets/photography/photo-1460925895917-afdab827c52f.webp'}
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
            <div className={'stat-val'}>{'12–18 mo'}</div>
            <div className={'stat-label'}>{'Migration Timeline'}</div>
          </div>{' '}
          <div className={'stat stat-teal sr'}>
            <div className={'stat-val'}>{'Zero'}</div>
            <div className={'stat-label'}>{'Business Disruption'}</div>
          </div>{' '}
          <div className={'stat stat-gold sr'}>
            <div className={'stat-val'}>{'85%+'}</div>
            <div className={'stat-label'}>{'Team Retention'}</div>
          </div>{' '}
          <div className={'stat stat-violet sr'}>
            <div className={'stat-val'}>{'100%'}</div>
            <div className={'stat-label'}>{'IP Ownership'}</div>
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
    <section style={{ background: 'var(--white)' }}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'pillar-callout sr'}>
          {' '}
          <div className={'callout-icon'}>
            <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
              <polyline points={'22 12 18 12 15 21 9 3 6 12 2 12'}></polyline>
            </svg>
          </div>{' '}
          <div>
            <p>
              {
                '“85% of vendor-to-GCC migrations fail because they treat it as a lift-and-shift. It is not. It is a fundamental change in operating model, culture, and governance.”'
              }
              <span className={'callout-cite'}>{'Lessons from 20+ migrations'}</span>
            </p>
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section4() {
  return (
    <section className={'bg-cloud'}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'center sr mb-48'}>
          {' '}
          <div className={'tag tag-violet'}>{'Our Services'}</div>{' '}
          <h2 className={'sh'}>
            {'GCC Transform '}
            <em>{'Services'}</em>
          </h2>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Vendor-to-GCC Migration'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'A structured 12–18 month program to transition from outsourced operations to an enterprise-owned GCC. We handle vendor negotiations, team absorption, IP transfer, and knowledge migration.'
            }
          </p>{' '}
          <div className={'svc-numbered'}>
            {' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'01'}</div>
              <div>
                <h3>{'Vendor Negotiation'}</h3>
                <p>
                  {
                    'Manage the transition conversation with existing vendors — contract terms, notice periods, and non-competes.'
                  }
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'02'}</div>
              <div>
                <h3>{'Team Absorption'}</h3>
                <p>
                  {
                    'Identify, assess, and absorb key vendor employees into your new GCC with retention-focused packages.'
                  }
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'03'}</div>
              <div>
                <h3>{'IP & Knowledge Transfer'}</h3>
                <p>
                  {
                    'Structured transfer of documentation, codebases, processes, and institutional knowledge.'
                  }
                </p>
              </div>
            </div>{' '}
            <div className={'svc-num-item sr'}>
              <div className={'svc-num-badge'}>{'04'}</div>
              <div>
                <h3>{'Parallel Run'}</h3>
                <p>
                  {
                    '90-day overlap period where old vendor and new GCC operate side-by-side to ensure zero disruption.'
                  }
                </p>
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Process Re-engineering'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Migrating processes from a vendor to a GCC is the perfect time to re-engineer them. We help you redesign workflows, eliminate waste, automate where possible, and establish new quality standards.'
            }
          </p>{' '}
          <div className={'feat-grid'}>
            {' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Process Mapping'}</h3>
              <p>
                {
                  'Document current-state processes across all functions being migrated, including undocumented tribal knowledge.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Waste Elimination'}</h3>
              <p>
                {
                  'Identify and remove handoffs, approvals, and rework loops that exist only because of the vendor model.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Automation Opportunities'}</h3>
              <p>
                {'Flag processes ripe for RPA, workflow automation, or AI-driven efficiency gains.'}
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Quality Standards'}</h3>
              <p>{'Establish SLAs, KPIs, and quality gates for the new GCC-operated processes.'}</p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'} style={{ marginBottom: '0', paddingBottom: '0' }}>
          {' '}
          <h3 className={'sub-heading'}>{'Change Management'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Transformation fails when people resist it. We design and execute change programs that bring stakeholders along — from vendor employees being absorbed to HQ teams adjusting to a new operating model.'
            }
          </p>{' '}
          <div className={'svc-bold-list'}>
            {' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Stakeholder Mapping'}</h3>
              <p>
                {
                  'Identify champions, fence-sitters, and resistors at both vendor and parent organization.'
                }
              </p>
            </div>{' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Communication Plan'}</h3>
              <p>
                {
                  'Sequenced messaging for employees, vendors, leadership, and customers affected by the transition.'
                }
              </p>
            </div>{' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Cultural Integration'}</h3>
              <p>
                {
                  'Programs to build GCC identity, bridge parent-company culture, and create belonging.'
                }
              </p>
            </div>{' '}
            <div className={'svc-bold-item sr'}>
              <h3>{'Training & Upskilling'}</h3>
              <p>
                {
                  'Capability building to help absorbed employees succeed in the new enterprise environment.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section5() {
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
            <div className={'pv-num bg-blue'}>{'1'}</div> <h3>{'Assess'}</h3>
            <p>
              {
                'Evaluate current vendor relationships, team capabilities, IP ownership, and migration readiness across all dimensions.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'pv-step sr'}>
            {' '}
            <div className={'pv-num bg-teal'}>{'2'}</div> <h3>{'Plan'}</h3>
            <p>
              {
                'Design the migration roadmap with phased transitions, parallel-run windows, and minimal business disruption.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'pv-step sr'}>
            {' '}
            <div className={'pv-num bg-gold'}>{'3'}</div> <h3>{'Execute'}</h3>
            <p>
              {
                'Systematic transition of people, processes, and IP with weekly checkpoints and issue escalation protocols.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'pv-step sr'}>
            {' '}
            <div className={'pv-num bg-violet'}>{'4'}</div> <h3>{'Stabilize'}</h3>
            <p>
              {
                'Post-migration optimization, performance tuning, and vendor relationship wind-down.'
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
    <section className={'cta'}>
      {' '}
      <div className={'cta-bg'}>
        <SiteImage
          alt={''}
          src={'/assets/photography/photo-1460925895917-afdab827c52f.webp'}
          width={1400}
          height={934}
        />
      </div>{' '}
      <div className={'ctr'}>
        <div className={'sr'}>
          {' '}
          <h2>
            {'Ready to Own Your'}
            <br />
            {'India Operations?'}
          </h2>{' '}
          <p>
            {
              'Move from vendor dependency to enterprise capability. The transition is faster than you think.'
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
      <Section6 />
    </>
  );
}
