import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'The Build-Operate-Transfer Playbook',
  'A step-by-step guide to designing, executing, and transferring a high-performing offshore team in India.',
  '/insights/build-operate-transfer-playbook',
);

function Section0() {
  return (
    <div className={'page-hero'}>
      {' '}
      <div className={'page-hero-bg'}>
        <SiteImage
          alt={'The Build-Operate-Transfer Playbook'}
          src={'/assets/photography/photo-1460925895917-afdab827c52f.webp'}
          width={1400}
          height={934}
          priority
        />
      </div>{' '}
      <div className={'ctr'}>
        {' '}
        <div className={'breadcrumb'}>
          <Link href={'/'}>{'Home'}</Link>
          {' / '}
          <Link href={'/insights'}>{'Insights'}</Link>
          {' / Guide'}
        </div>{' '}
        <div className={'tag tag-teal'}>{'Guide • April 2026'}</div>{' '}
        <h1>{'The Build-Operate-Transfer Playbook'}</h1>{' '}
        <p>
          {
            'A step-by-step guide to designing, executing, and transferring a high-performing offshore team in India.'
          }
        </p>{' '}
      </div>{' '}
    </div>
  );
}

function Section1() {
  return (
    <section className={'bg-cloud'}>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <div className={'article-meta sr'}>
          {' '}
          <div className={'flex-author'}>
            {' '}
            <SiteImage
              alt={'MarSan Global'}
              className={'avatar-sm'}
              src={'/assets/photography/photo-1560250097-0b93528c311a.webp'}
              width={1400}
              height={934}
            />{' '}
            <div>
              {' '}
              <strong className={'text-navy'}>{'MarSan Global Research'}</strong>{' '}
              <div className={'text-meta'}>{'April 2026 • 15-min read'}</div>{' '}
            </div>{' '}
          </div>{' '}
          <p className={'blockquote-teal'}>
            {
              'A step-by-step guide to designing, executing, and transferring a high-performing offshore team in India.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section2() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Why BOT Over Direct Setup'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              'Build-Operate-Transfer (BOT) has emerged as the preferred model for enterprises entering India for the first time. Unlike a direct GCC setup — which requires entity incorporation, regulatory navigation, and hiring infrastructure from scratch — BOT allows you to start operating in 8-12 weeks while a partner handles the heavy lifting. The key advantage: you get a fully operational team without the 12-18 month lead time of a greenfield setup. When the team reaches maturity and the entity is established, ownership transfers to you — seamlessly, with no disruption to ongoing operations.'
            }
          </p>{' '}
          <div className={'article-stats'}>
            {' '}
            <div className={'article-stat'}>
              <div className={'stat-num'}>{'8–12'}</div>
              <div className={'stat-label'}>{'Weeks to First Sprint'}</div>
            </div>{' '}
            <div className={'article-stat'}>
              <div className={'stat-num'} style={{ color: 'var(--teal)' }}>
                {'95%'}
              </div>
              <div className={'stat-label'}>{'Team Retention Target'}</div>
            </div>{' '}
            <div className={'article-stat'}>
              <div className={'stat-num'} style={{ color: 'var(--gold)' }}>
                {'18–24'}
              </div>
              <div className={'stat-label'}>{'Months to Transfer'}</div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section3() {
  return <hr className={'divider divider-teal mx-auto-800'} />;
}

function Section4() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Phase 1: Build (Weeks 1-12)'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {'The Build phase covers everything from team design to first productive sprint: '}
            <strong>{'Weeks 1-3: Design & Planning'}</strong>
            {
              ' — Define team composition, skills matrix, reporting structure, and KPIs. Finalize compensation benchmarks against market data. '
            }
            <strong>{'Weeks 4-8: Recruitment & Selection'}</strong>
            {
              ' — Source, screen, and interview candidates using your technical bar. You retain final hiring authority on every candidate. '
            }
            <strong>{'Weeks 9-12: Onboarding & Integration'}</strong>
            {
              " — New hires join under the BOT partner's entity. Equipment provisioning, security clearances, domain training, and integration with your global team's workflows and tools."
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section5() {
  return <hr className={'divider divider-teal mx-auto-800'} />;
}

function Section6() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Phase 2: Operate (Months 4-18)'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              'During the Operate phase, the BOT partner manages all administrative, HR, and operational aspects while your team focuses on delivery: '
            }
            <strong>{'HR & Compliance:'}</strong>
            {
              ' Payroll, benefits, PF, ESI, insurance, leave management, and labor law compliance — all managed by the partner. '
            }
            <strong>{'Performance Management:'}</strong>
            {
              ' Weekly productivity reports, monthly performance reviews, and quarterly talent calibrations aligned to your global frameworks. '
            }
            <strong>{'Continuous Improvement:'}</strong>
            {
              ' Process optimization, tooling upgrades, and team structure refinements based on actual delivery data. '
            }
            <strong>{'Parallel Entity Setup:'}</strong>
            {
              ' While the team operates, the partner simultaneously handles entity incorporation, registered office setup, bank accounts, GST registration, and regulatory approvals for the eventual transfer.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section7() {
  return <hr className={'divider divider-teal mx-auto-800'} />;
}

function Section8() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Phase 3: Transfer (Months 18-24)'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              'The Transfer phase is where BOT engagements succeed or fail. A well-planned transfer should be invisible to the team: '
            }
            <strong>{'Legal Transfer:'}</strong>
            {
              ' Employment contracts novated from the partner entity to your Indian subsidiary. All statutory records, gratuity obligations, and leave balances transferred with full compliance. '
            }
            <strong>{'Knowledge Transfer:'}</strong>
            {
              ' All operational playbooks, vendor contracts, facility agreements, and compliance documentation handed over with 90-day parallel support. '
            }
            <strong>{'Team Retention:'}</strong>
            {
              ' The critical metric. Best-in-class BOT transfers retain 95%+ of the team. This requires proactive communication, competitive offers, and career path clarity from the acquiring entity.'
            }
          </p>{' '}
        </div>{' '}
        <div className={'pull-quote'}>
          {' '}
          <p>
            {
              "A well-planned transfer should be invisible to the team. If they feel disruption, you've already lost."
            }
          </p>{' '}
          <cite>{'MarSan Global Research, 2026'}</cite>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section9() {
  return <hr className={'divider divider-teal mx-auto-800'} />;
}

function Section10() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Common BOT Pitfalls to Avoid'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            <strong>{'Pitfall 1: Underinvesting in the Transfer.'}</strong>
            {
              " Many companies treat the transfer as an administrative exercise. It's not — it's a change management program that requires executive sponsorship, dedicated HR resources, and a 6-month runway. "
            }
            <strong>{'Pitfall 2: Compensation Gaps.'}</strong>
            {
              " If your entity's offer is materially different from the BOT partner's package, expect attrition. Benchmark early. "
            }
            <strong>{'Pitfall 3: Cultural Disconnect.'}</strong>
            {
              ' Teams that operate under a BOT partner for 18 months develop their own culture. Integrating them into your global culture requires intentional effort, not just a day-one email.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section11() {
  return <hr className={'divider divider-teal mx-auto-800'} />;
}

function Section12() {
  return (
    <section className={'bg-cloud'}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'center sr mb-40'}>
          {' '}
          <div className={'tag tag-blue'}>{'Related'}</div>{' '}
          <h2 className={'sh'}>
            {'Continue '}
            <em>{'Reading'}</em>
          </h2>{' '}
        </div>{' '}
        <div className={'grid-3'}>
          {' '}
          <Link href={'/insights/india-gcc-landscape-2026'} className={'card sr sr-d1 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'India GCC Landscape 2026: The $70B Opportunity'}
                src={'/assets/photography/photo-1551288049-bebda4e38f71.webp'}
                width={1400}
                height={934}
              />
              <span className={'card-tag tag-bg-blue'}>{'Report'}</span>
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'India GCC Landscape 2026: The $70B Opportunity'}</h3>
              <p>
                {
                  "Our annual report on India's GCC ecosystem — market sizing, talent trends, city comparisons, and 5-year forecast."
                }
              </p>{' '}
              <div className={'card-chips'}>
                <span>{'Market Size'}</span>
                <span>{'Talent Trends'}</span>
                <span>{'City Analysis'}</span>
              </div>{' '}
              <div className={'flex-between'}>
                <span className={'card-link'}>
                  {'Read More '}
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
                <span className={'text-meta'}>{'May 2026'}</span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link
            href={'/insights/eor-fastest-path-india-hiring'}
            className={'card sr sr-d2 d-block'}
          >
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Why EOR Is the Fastest Path to India Hiring'}
                src={'/assets/photography/photo-1497366216548-37526070297c.webp'}
                width={1400}
                height={934}
              />
              <span className={'card-tag tag-bg-gold'}>{'Analysis'}</span>
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'Why EOR Is the Fastest Path to India Hiring'}</h3>
              <p>
                {
                  'For companies not ready to incorporate, Employer of Record offers speed, compliance, and flexibility.'
                }
              </p>{' '}
              <div className={'card-chips'}>
                <span>{'EOR'}</span>
                <span>{'Compliance'}</span>
                <span>{'Speed'}</span>
              </div>{' '}
              <div className={'flex-between'}>
                <span className={'card-link'}>
                  {'Read More '}
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
                <span className={'text-meta'}>{'March 2026'}</span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link href={'/insights/vendor-to-gcc-migration'} className={'card sr sr-d3 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Vendor-to-GCC Migration: A 12-Month Blueprint'}
                src={'/assets/photography/photo-1504384764586-bb4cdc1707b0.webp'}
                width={1400}
                height={934}
              />
              <span className={'card-tag tag-bg-violet'}>{'Guide'}</span>
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'Vendor-to-GCC Migration: A 12-Month Blueprint'}</h3>
              <p>
                {
                  'How Fortune 500 companies are moving from Accenture, Infosys, and TCS to enterprise-owned capability centers.'
                }
              </p>{' '}
              <div className={'card-chips'}>
                <span>{'Migration'}</span>
                <span>{'IP Ownership'}</span>
                <span>{'Cost Savings'}</span>
              </div>{' '}
              <div className={'flex-between'}>
                <span className={'card-link'}>
                  {'Read More '}
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
                <span className={'text-meta'}>{'February 2026'}</span>
              </div>
            </div>{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section13() {
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
            {'Want to Discuss'}
            <br />
            {'This Further?'}
          </h2>{' '}
          <p>{'Our team is available for deeper conversations on any topic we publish.'}</p>{' '}
          <div className={'cta-btns'}>
            {' '}
            <Link href={'/contact'} className={'btn btn-gold'}>
              {'Book a Conversation '}
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
            <Link href={'/insights'} className={'btn btn-ghost'}>
              {'All Insights '}
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
      <Section11 />
      <Section12 />
      <Section13 />
    </>
  );
}
