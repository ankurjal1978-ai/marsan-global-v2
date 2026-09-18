import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'India GCC Landscape 2026: The $70B Opportunity',
  "Our annual report on India's GCC ecosystem — market sizing, talent trends, city comparisons, and 5-year forecast.",
  '/insights/india-gcc-landscape-2026',
);

function Section0() {
  return (
    <div className={'page-hero'}>
      {' '}
      <div className={'page-hero-bg'}>
        <SiteImage
          alt={'India GCC Landscape 2026: The $70B Opportunity'}
          src={'/assets/photography/photo-1551288049-bebda4e38f71.webp'}
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
          {' / Report'}
        </div>{' '}
        <div className={'tag tag-blue'}>{'Report • May 2026'}</div>{' '}
        <h1>{'India GCC Landscape 2026: The $70B Opportunity'}</h1>{' '}
        <p>
          {
            "Our annual report on India's GCC ecosystem — market sizing, talent trends, city comparisons, and 5-year forecast."
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
              <div className={'text-meta'}>{'May 2026 • 15-min read'}</div>{' '}
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
            {
              "Our annual report on India's GCC ecosystem — market sizing, talent trends, city comparisons, and 5-year forecast."
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
        <h2 className={'sh heading-xl'}>{'The State of Play'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              "India's Global Capability Center ecosystem has reached an inflection point. With over 1,700 active GCCs employing more than 1.9 million professionals, India now accounts for 53% of all GCCs worldwide — and the market is projected to touch $100B by 2030. This growth is not accidental. A confluence of factors — world-class engineering talent, a favorable regulatory environment, cost advantages of 30-40% over Western markets, and an established ecosystem of service providers — has made India the undisputed global GCC capital. However, the landscape is evolving rapidly. The era of GCCs as pure cost-arbitrage plays is giving way to innovation-led centers that drive R&D, product engineering, and strategic decision-making. Companies that understand this shift will capture disproportionate value."
            }
          </p>{' '}
          <div className={'article-stats'}>
            {' '}
            <div className={'article-stat'}>
              <div className={'stat-num'}>{'1,700+'}</div>
              <div className={'stat-label'}>{'Active GCCs'}</div>
            </div>{' '}
            <div className={'article-stat'}>
              <div className={'stat-num'} style={{ color: 'var(--teal)' }}>
                {'1.9M'}
              </div>
              <div className={'stat-label'}>{'Professionals'}</div>
            </div>{' '}
            <div className={'article-stat'}>
              <div className={'stat-num'} style={{ color: 'var(--gold)' }}>
                {'53%'}
              </div>
              <div className={'stat-label'}>{'Global Share'}</div>
            </div>{' '}
          </div>{' '}
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
        <h2 className={'sh heading-xl'}>{'Market Sizing & Growth'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              'The India GCC market reached $69.8B in revenue in 2025, growing at a CAGR of 14.2% over the past five years. Key growth drivers include: '
            }
            <strong>{'Digital transformation acceleration:'}</strong>
            {
              ' Post-pandemic, enterprises have accelerated their digital capabilities, with GCCs becoming the engine for AI/ML, cloud, and data engineering initiatives. '
            }
            <strong>{'Vendor-to-GCC transitions:'}</strong>
            {
              ' A growing number of Fortune 500 companies are converting outsourced operations into owned GCCs, driven by IP protection concerns, quality control, and long-term cost optimization. '
            }
            <strong>{'New entrant wave:'}</strong>
            {
              ' 2025 saw 150+ new GCC setups in India — a 35% increase over 2024, with first-time entrants from sectors like healthcare, energy, and retail.'
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
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Talent Landscape'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              'India produces 5.4 million STEM graduates annually, but the talent landscape is more nuanced than the headline number suggests. '
            }
            <strong>{'Tier-1 talent competition:'}</strong>
            {
              ' Top-tier engineers (IIT, NIT, BITS graduates) are increasingly choosing GCCs over traditional IT services companies, attracted by better compensation, direct product work, and global exposure. '
            }
            <strong>{'Compensation inflation:'}</strong>
            {
              " GCC engineering salaries grew 12-15% in 2025, with AI/ML specialists commanding 25-30% premiums. Companies that don't offer competitive packages face 6-9 month hiring cycles. "
            }
            <strong>{'Beyond Bangalore:'}</strong>
            {
              ' Hyderabad, Pune, and Chennai are emerging as serious alternatives, offering 15-20% lower costs with comparable talent pools. Tier-2 cities like Coimbatore, Ahmedabad, and Jaipur are gaining traction for specific functions.'
            }
          </p>{' '}
        </div>{' '}
        <div className={'pull-quote'}>
          {' '}
          <p>
            {
              'The era of GCCs as pure cost-arbitrage plays is over. The winners will be those who build innovation engines, not just delivery centers.'
            }
          </p>{' '}
          <cite>{'MarSan Global Research, 2026'}</cite>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section7() {
  return <hr className={'divider divider-blue mx-auto-800'} />;
}

function Section8() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'City-by-City Comparison'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {'Our analysis of the top 12 GCC cities in India reveals distinct advantages: '}
            <strong>{'Bangalore:'}</strong>
            {
              ' Remains #1 for technology and engineering GCCs. Deepest talent pool, highest ecosystem maturity, but also highest costs and attrition. '
            }
            <strong>{'Hyderabad:'}</strong>
            {
              ' Fastest-growing GCC hub. Government incentives, lower costs than Bangalore, and a strong pharma/life sciences talent base. '
            }
            <strong>{'Pune:'}</strong>
            {
              ' Emerging as the preferred location for automotive, manufacturing, and German enterprise GCCs. Excellent quality of life metrics. '
            }
            <strong>{'Chennai:'}</strong>
            {
              ' Strong for BFSI and engineering. More cost-effective than Bangalore with comparable infrastructure. '
            }
            <strong>{'NCR (Gurgaon/Noida):'}</strong>
            {
              ' Preferred by BFSI and consulting firms. Proximity to Delhi airport. Higher security and compliance costs.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section9() {
  return <hr className={'divider divider-blue mx-auto-800'} />;
}

function Section10() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Five-Year Forecast'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              'Our models project the India GCC market reaching $100-110B by 2030, with employment growing to 2.8-3.2 million professionals. Key trends shaping this trajectory: '
            }
            <strong>{'AI-native GCCs:'}</strong>
            {
              ' By 2028, 40% of new GCCs will be established specifically for AI/ML capabilities, compared to 15% today. '
            }
            <strong>{'Consolidation wave:'}</strong>
            {
              ' Mature GCCs will consolidate vendors and expand scope, reducing the total number of service providers per center from an average of 8 to 3. '
            }
            <strong>{"The 'GCC 3.0' model:"}</strong>
            {
              ' GCCs will evolve from cost centers to profit centers, with some contributing directly to revenue through product development and market-specific innovation.'
            }
          </p>{' '}
          <div className={'article-stats'}>
            {' '}
            <div className={'article-stat'}>
              <div className={'stat-num'}>{'$100B+'}</div>
              <div className={'stat-label'}>{'Market by 2030'}</div>
            </div>{' '}
            <div className={'article-stat'}>
              <div className={'stat-num'} style={{ color: 'var(--teal)' }}>
                {'3.2M'}
              </div>
              <div className={'stat-label'}>{'Projected Workforce'}</div>
            </div>{' '}
            <div className={'article-stat'}>
              <div className={'stat-num'} style={{ color: 'var(--gold)' }}>
                {'40%'}
              </div>
              <div className={'stat-label'}>{'AI-Native GCCs by 2028'}</div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section11() {
  return <hr className={'divider divider-blue mx-auto-800'} />;
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
          <Link
            href={'/insights/build-operate-transfer-playbook'}
            className={'card sr sr-d1 d-block'}
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
