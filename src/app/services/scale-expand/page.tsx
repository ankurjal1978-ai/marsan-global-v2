import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'GCC Scale',
  'Growing from 50 to 500 requires different playbooks than going from 0 to 50. Volume hiring, leadership recruitment, AI/GenAI practice setup, and multi-site e',
  '/services/scale-expand',
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
          {' / GCC Scale'}
        </div>{' '}
        <div className={'pillar-intro-flip'} style={{ marginTop: '32px' }}>
          {' '}
          <div className={'sr-l'}>
            {' '}
            <div className={'tag tag-blue'}>{'Pillar 05'}</div>{' '}
            <h1 className={'page-title'}>{'GCC Scale'}</h1>{' '}
            <p style={{ color: 'var(--slate)', fontSize: 'var(--fs-base)', lineHeight: '1.8' }}>
              {
                'Growing from 50 to 500 requires different playbooks than going from 0 to 50. Volume hiring, leadership recruitment, AI/GenAI practice setup, and multi-site expansion — we help you scale without losing quality or culture.'
              }
            </p>{' '}
          </div>{' '}
          <div className={'sr-r pillar-intro-img img-frame'}>
            {' '}
            <SiteImage
              alt={'GCC Scale'}
              className={'cover-img'}
              src={'/assets/photography/photo-1522071820081-009f0129c71c.webp'}
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
            <div className={'stat-val'}>{'50+'}</div>
            <div className={'stat-label'}>{'College Partnerships'}</div>
          </div>{' '}
          <div className={'stat stat-teal sr'}>
            <div className={'stat-val'}>{'6 mo'}</div>
            <div className={'stat-label'}>{'Leadership Search'}</div>
          </div>{' '}
          <div className={'stat stat-gold sr'}>
            <div className={'stat-val'}>{'3x'}</div>
            <div className={'stat-label'}>{'Faster AI Setup'}</div>
          </div>{' '}
          <div className={'stat stat-violet sr'}>
            <div className={'stat-val'}>{'12+'}</div>
            <div className={'stat-label'}>{'Expansion Cities'}</div>
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
            {'GCC Scale '}
            <em>{'Services'}</em>
          </h2>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Volume Hiring & Talent Acquisition'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Large-scale recruitment programs designed for speed and quality. From campus hiring to experienced lateral recruitment, we source, screen, and onboard at the pace your growth demands.'
            }
          </p>{' '}
          <div className={'svc-icon-cards'}>
            {' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-blue'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path d={'M22 10v6M2 10l10-5 10 5-10 5z'}></path>
                  <path d={'M6 12v5c3 3 8 3 12 0v-5'}></path>
                </svg>
              </div>
              <h3>{'Campus Programs'}</h3>
              <p>
                {
                  'Relationships with 50+ engineering and business schools. Campus recruitment drives that fill your entry-level pipeline.'
                }
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-teal'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path d={'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'}></path>
                  <circle cx={'8.5'} cy={'7'} r={'4'}></circle>
                  <line x1={'20'} y1={'8'} x2={'20'} y2={'14'}></line>
                  <line x1={'23'} y1={'11'} x2={'17'} y2={'11'}></line>
                </svg>
              </div>
              <h3>{'Lateral Hiring'}</h3>
              <p>
                {
                  'Experienced hire recruitment across technology, operations, finance, and domain-specific roles.'
                }
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-gold'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <polygon
                    points={
                      '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
                    }
                  ></polygon>
                </svg>
              </div>
              <h3>{'Employer Branding'}</h3>
              <p>
                {
                  'Position your GCC as an employer of choice in the Indian market through targeted campaigns.'
                }
              </p>
            </div>{' '}
            <div className={'svc-icon-card sr'}>
              <div className={'card-icon fi-violet'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path d={'M9 11l3 3L22 4'}></path>
                  <path d={'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'}></path>
                </svg>
              </div>
              <h3>{'Assessment Framework'}</h3>
              <p>{'Standardized evaluation methodology ensuring consistent quality at scale.'}</p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'Leadership & Executive Search'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'The GCC Head hire is the single most important decision in your first 18 months. We run executive searches that find leaders who can operate at the intersection of Indian operations and global governance.'
            }
          </p>{' '}
          <div className={'feat-grid'}>
            {' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'GCC Head Search'}</h3>
              <p>
                {
                  'Identify, assess, and place the India center leader — the hire that makes or breaks your GCC.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Leadership Team'}</h3>
              <p>
                {
                  'Build the CXO-1 layer: VP Engineering, VP Operations, HR Head, Finance Head, and functional leads.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Succession Planning'}</h3>
              <p>
                {
                  'Develop internal leadership pipeline to reduce dependency on external hires over time.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Compensation Design'}</h3>
              <p>
                {
                  'Executive compensation benchmarking and structuring that attracts top talent while managing costs.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'}>
          {' '}
          <h3 className={'sub-heading'}>{'AI & GenAI Practice Setup'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Build an enterprise-grade AI/GenAI capability within your GCC. From team structure to technology stack to governance framework — we help you establish a center of excellence that delivers real business value.'
            }
          </p>{' '}
          <div className={'svc-metrics'}>
            {' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val'}>{'3x'}</div>
              <h3>{'Team Architecture'}</h3>
              <p>
                {
                  'Define roles, skill matrices, and career paths for ML engineers, data scientists, and AI product managers.'
                }
              </p>
            </div>{' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val val-teal'}>{'MLOps'}</div>
              <h3>{'Tech Stack'}</h3>
              <p>
                {
                  'Platform selection, MLOps infrastructure, model registry, and deployment pipelines.'
                }
              </p>
            </div>{' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val val-gold'}>{'RAI'}</div>
              <h3>{'Governance Framework'}</h3>
              <p>
                {
                  'Responsible AI policies, model validation, bias testing, and compliance with emerging AI regulations.'
                }
              </p>
            </div>{' '}
            <div className={'svc-metric-item sr'}>
              <div className={'svc-metric-val val-violet'}>{'ROI'}</div>
              <h3>{'Use Case Pipeline'}</h3>
              <p>
                {
                  'Identify, prioritize, and execute AI use cases that deliver measurable business impact.'
                }
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'svc-detail sr'} style={{ marginBottom: '0', paddingBottom: '0' }}>
          {' '}
          <h3 className={'sub-heading'}>{'Multi-Site Expansion'}</h3>{' '}
          <p className={'intro-text'}>
            {
              'Expand beyond your first India location. We help you evaluate, plan, and execute expansion to additional cities — whether for talent diversity, business continuity, or proximity to clients.'
            }
          </p>{' '}
          <div className={'feat-grid'}>
            {' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'City Selection'}</h3>
              <p>
                {
                  'Data-driven analysis of Tier 1 and Tier 2 cities based on your specific talent needs and cost targets.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Hub & Spoke Models'}</h3>
              <p>
                {
                  'Design optimal multi-site architecture balancing specialization, redundancy, and cost efficiency.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'Operational Consistency'}</h3>
              <p>
                {
                  'Replicate culture, processes, and quality standards across locations without losing local adaptability.'
                }
              </p>
            </div>{' '}
            <div className={'feat sr'}>
              <div className={'bullet-dot'}></div> <h3>{'BCP & Resilience'}</h3>
              <p>
                {
                  'Multi-site presence as a business continuity strategy with geographic risk diversification.'
                }
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
            <div className={'process-num bg-blue'}>{'1'}</div> <h3>{'Assess'}</h3>
            <p>{'Evaluate scale readiness and identify bottlenecks'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d2'}>
            {' '}
            <div className={'process-num bg-teal'}>{'2'}</div> <h3>{'Design'}</h3>
            <p>{'Build hiring, leadership, and expansion playbooks'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d3'}>
            {' '}
            <div className={'process-num bg-gold'}>{'3'}</div> <h3>{'Execute'}</h3>
            <p>{'Deploy at speed with quality controls'}</p>{' '}
          </div>{' '}
          <div className={'process-step sr sr-d4'}>
            {' '}
            <div className={'process-num bg-violet'}>{'4'}</div> <h3>{'Optimize'}</h3>
            <p>{'Continuous improvement at scale'}</p>{' '}
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
          src={'/assets/photography/photo-1522071820081-009f0129c71c.webp'}
          width={1400}
          height={934}
        />
      </div>{' '}
      <div className={'ctr'}>
        <div className={'sr'}>
          {' '}
          <h2>
            {'Ready to Scale Your'}
            <br />
            {'India Operations?'}
          </h2>{' '}
          <p>
            {'From 50 to 500 without losing what made you great. Let us show you the playbook.'}
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
