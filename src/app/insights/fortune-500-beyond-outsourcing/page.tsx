import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Why Fortune 500 Companies Are Moving Beyond Outsourcing',
  'The structural shift from outsourced operations to enterprise-owned GCCs — and what it means for the next decade.',
  '/insights/fortune-500-beyond-outsourcing',
);

function Section0() {
  return (
    <div className={'page-hero'}>
      {' '}
      <div className={'page-hero-bg'}>
        <SiteImage
          alt={'Why Fortune 500 Companies Are Moving Beyond Outsourcing'}
          src={'/assets/photography/photo-1521737711867-e3b97375f902.webp'}
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
          {' / Trend'}
        </div>{' '}
        <div className={'tag tag-violet'}>{'Trend • June 2025'}</div>{' '}
        <h1>{'Why Fortune 500 Companies Are Moving Beyond Outsourcing'}</h1>{' '}
        <p>
          {
            'The structural shift from outsourced operations to enterprise-owned GCCs — and what it means for the next decade.'
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
              <div className={'text-meta'}>{'June 2025 • 9-min read'}</div>{' '}
            </div>{' '}
          </div>{' '}
          <p className={'blockquote-violet'}>
            {
              'The structural shift from outsourced operations to enterprise-owned GCCs — and what it means for the next decade.'
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
        <h2 className={'sh heading-xl'}>{'The Outsourcing Reckoning'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              'For two decades, outsourcing to IT services companies was the default offshore strategy. It offered speed, flexibility, and predictable costs. But a growing number of enterprise CXOs are reaching the same conclusion: outsourcing optimizes for cost, but GCCs optimize for capability. The math has changed. When you factor in vendor margins (typically 30-40% of the billing rate), quality inconsistencies, IP leakage risk, and the hidden costs of vendor management, the TCO gap between outsourcing and GCC narrows significantly — and at scale, GCCs are often cheaper.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section3() {
  return <hr className={'divider divider-violet mx-auto-800'} />;
}

function Section4() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Five Forces Driving the Shift'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            <strong>{'1. IP Protection:'}</strong>
            {
              ' As software becomes the core product for every company, tolerating vendor access to proprietary code, algorithms, and data is increasingly untenable. '
            }
            <strong>{'2. Quality Ceiling:'}</strong>
            {
              ' Outsourcing models optimize for utilization, not quality. Vendor teams are incentivized to bill hours, not to build the best product. '
            }
            <strong>{'3. AI as Core Competency:'}</strong>
            {
              ' AI capabilities cannot be outsourced effectively. The data, domain knowledge, and iteration cycles required demand dedicated, persistent teams. '
            }
            <strong>{'4. Talent Ownership:'}</strong>
            {
              ' In a talent-scarce market, the companies that own their best engineers will outperform those that rent them. '
            }
            <strong>{'5. Cost at Scale:'}</strong>
            {
              ' A 200-person outsourced team costs more than a 200-person GCC team over a 5-year horizon, once you factor in vendor margins and the cost of coordination.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section5() {
  return <hr className={'divider divider-violet mx-auto-800'} />;
}

function Section6() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'What This Means for 2026-2030'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              "We project that 35-40% of India's outsourcing workforce will transition to GCC employment by 2030. This represents a $15-20B shift in the India services market. For enterprises: the window to establish India GCCs at favorable terms is closing. As demand for GCC-ready talent grows, competition for top engineers, compliance professionals, and GCC leaders will intensify. Companies that move now will have a 2-3 year talent advantage over late movers."
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section7() {
  return <hr className={'divider divider-violet mx-auto-800'} />;
}

function Section8() {
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

function Section9() {
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
    </>
  );
}
