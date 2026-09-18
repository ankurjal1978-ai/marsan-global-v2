import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'From Cost Center to Innovation Hub: The GCC Evolution',
  'The three stages of GCC maturity, and why most organizations get stuck at stage two.',
  '/insights/cost-center-to-innovation-hub',
);

function Section0() {
  return (
    <div className={'page-hero'}>
      {' '}
      <div className={'page-hero-bg'}>
        <SiteImage
          alt={'From Cost Center to Innovation Hub: The GCC Evolution'}
          src={'/assets/photography/photo-1451187580459-43490279c0fa.webp'}
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
          {' / Thought Leadership'}
        </div>{' '}
        <div className={'tag tag-blue'}>{'Thought Leadership • September 2025'}</div>{' '}
        <h1>{'From Cost Center to Innovation Hub: The GCC Evolution'}</h1>{' '}
        <p>
          {'The three stages of GCC maturity, and why most organizations get stuck at stage two.'}
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
              <div className={'text-meta'}>{'September 2025 • 6-min read'}</div>{' '}
            </div>{' '}
          </div>{' '}
          <p
            style={{
              fontSize: 'var(--fs-base)',
              color: 'var(--slate)',
              lineHeight: '1.8',
              fontStyle: 'italic',
              borderLeft: '3px solid var(--blue)',
              paddingLeft: '20px',
            }}
          >
            {'The three stages of GCC maturity, and why most organizations get stuck at stage two.'}
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
        <h2 className={'sh heading-xl'}>{'The Three Stages'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            <strong>{'GCC 1.0 — The Cost Center (2000-2015):'}</strong>
            {
              ' GCCs were established primarily for labor arbitrage. Teams executed tasks defined by headquarters, with minimal autonomy or strategic influence. Success was measured by cost savings and SLA adherence. '
            }
            <strong>{'GCC 2.0 — The Capability Center (2015-2023):'}</strong>
            {
              ' GCCs evolved into centers of competence. Teams took ownership of entire product modules, processes, or functions. Success expanded to include quality metrics, innovation contributions, and talent retention. '
            }
            <strong>{'GCC 3.0 — The Innovation Hub (2023-Present):'}</strong>
            {
              " The leading GCCs are now strategic assets. They drive product roadmaps, file patents, incubate new business lines, and serve as the enterprise's AI/ML engine. Success is measured by revenue contribution, IP creation, and market-specific innovation."
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section3() {
  return <hr className={'divider divider-blue mx-auto-800'} />;
}

function Section4() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Why Most Get Stuck at 2.0'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              'The transition from capability center to innovation hub requires three shifts that most enterprises resist: '
            }
            <strong>{'Governance Shift:'}</strong>
            {
              ' Innovation requires autonomy. If every decision requires HQ approval, the GCC will never move faster than the approval cycle. '
            }
            <strong>{'Talent Shift:'}</strong>
            {
              ' Innovation-grade talent expects innovation-grade challenges. If the GCC is still executing HQ-defined backlogs, top talent will leave for organizations that offer more ownership. '
            }
            <strong>{'Investment Shift:'}</strong>
            {
              ' Innovation requires R&D budget allocation, not just operational expenditure. Most enterprises still fund GCCs from the OpEx line, which structurally prevents long-term bets.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section5() {
  return <hr className={'divider divider-blue mx-auto-800'} />;
}

function Section6() {
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
            href={'/insights/build-operate-transfer-playbook'}
            className={'card sr sr-d2 d-block'}
          >
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'The Build-Operate-Transfer Playbook'}
                src={'/assets/photography/photo-1460925895917-afdab827c52f.webp'}
                width={1400}
                height={934}
              />
              <span className={'card-tag tag-bg-teal'}>{'Guide'}</span>
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'The Build-Operate-Transfer Playbook'}</h3>
              <p>
                {
                  'A step-by-step guide to designing, executing, and transferring a high-performing offshore team in India.'
                }
              </p>{' '}
              <div className={'card-chips'}>
                <span>{'BOT Model'}</span>
                <span>{'Offshore Teams'}</span>
                <span>{'Transfer'}</span>
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
                <span className={'text-meta'}>{'April 2026'}</span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link
            href={'/insights/eor-fastest-path-india-hiring'}
            className={'card sr sr-d3 d-block'}
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
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section7() {
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
    </>
  );
}
