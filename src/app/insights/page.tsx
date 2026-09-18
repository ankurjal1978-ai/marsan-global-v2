import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'GCC Insights',
  "Our annual report on India's GCC ecosystem — market sizing, talent trends, city comparisons, and 5-year forecast.",
  '/insights',
);

function Section0() {
  return (
    <section
      style={{ paddingTop: '100px', paddingBottom: '0', paddingLeft: '0', paddingRight: '0' }}
    >
      {' '}
      <Link
        href={'/insights/india-gcc-landscape-2026'}
        className={'sr'}
        style={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {' '}
        <div style={{ position: 'relative', aspectRatio: '21/9', minHeight: '440px' }}>
          {' '}
          <SiteImage
            alt={'Featured'}
            className={'cover-img'}
            src={'/assets/photography/photo-1551288049-bebda4e38f71.webp'}
            width={1400}
            height={934}
          />{' '}
          <div
            style={{
              position: 'absolute',
              inset: '0',
              background:
                'linear-gradient(to top, rgba(9,27,47,.92) 0%, rgba(9,27,47,.4) 50%, rgba(9,27,47,.05) 100%)',
            }}
          ></div>{' '}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              padding: '56px clamp(24px,5vw,80px)',
            }}
          >
            {' '}
            <div className={'card-chips'} style={{ marginBottom: '12px' }}>
              <span style={{ background: 'rgba(255,255,255,.15)', color: 'white' }}>
                {'Featured Report'}
              </span>
              <span style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.7)' }}>
                {'May 2026'}
              </span>
            </div>{' '}
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.8rem,4vw,2.8rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '16px',
                lineHeight: '1.2',
                maxWidth: '700px',
              }}
            >
              {'India GCC Landscape 2026: The $70B Opportunity'}
            </h1>{' '}
            <p
              style={{
                color: 'rgba(255,255,255,.7)',
                lineHeight: '1.7',
                marginBottom: '20px',
                maxWidth: '600px',
                fontSize: 'var(--fs-base)',
              }}
            >
              {
                "Our annual report on India's GCC ecosystem — market sizing, talent trends, city comparisons, and 5-year forecast."
              }
            </p>{' '}
            <span
              style={{
                color: 'var(--gold)',
                fontWeight: '600',
                fontSize: 'var(--fs-sm)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {'Read Full Report '}
              <svg
                viewBox={'0 0 24 24'}
                width={'16'}
                height={'16'}
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d={'M5 12h14M12 5l7 7-7 7'}
                  stroke={'currentColor'}
                  fill={'none'}
                  strokeWidth={'2'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                ></path>
              </svg>
            </span>{' '}
          </div>{' '}
        </div>{' '}
      </Link>{' '}
    </section>
  );
}

function Section1() {
  return <hr className={'divider divider-gold'} />;
}

function Section2() {
  return (
    <section className={'bg-cloud'}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'center sr mb-48'}>
          {' '}
          <div className={'tag tag-blue'}>{'All Articles'}</div>{' '}
          <h2 className={'sh'}>
            {'Reports, Guides & '}
            <em>{'Analysis'}</em>
          </h2>{' '}
          <p className={'sp'}>
            {'Strategic perspectives from our team of GCC operators and industry analysts.'}
          </p>{' '}
        </div>{' '}
        <div className={'insights-top sr'}>
          {' '}
          <Link href={'/insights/build-operate-transfer-playbook'} className={'card-lg'}>
            {' '}
            <SiteImage
              className={'card-lg-bg'}
              alt={'The BOT Playbook'}
              src={'/assets/photography/photo-1460925895917-afdab827c52f.webp'}
              width={1400}
              height={934}
            />{' '}
            <div className={'card-lg-overlay'}></div>{' '}
            <div className={'card-lg-body'}>
              {' '}
              <div className={'card-chips'} style={{ marginBottom: '10px' }}>
                <span style={{ background: 'rgba(255,255,255,.15)', color: 'white' }}>
                  {'Guide'}
                </span>
                <span style={{ background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.7)' }}>
                  {'April 2026'}
                </span>
              </div>{' '}
              <h3>{'The Build-Operate-Transfer Playbook'}</h3>{' '}
              <p>
                {
                  'A step-by-step guide to designing, executing, and transferring a high-performing offshore team in India.'
                }
              </p>{' '}
              <span className={'card-link'}>
                {'Read Guide '}
                <svg
                  viewBox={'0 0 24 24'}
                  width={'16'}
                  height={'16'}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d={'M5 12h14M12 5l7 7-7 7'}
                    stroke={'currentColor'}
                    fill={'none'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  ></path>
                </svg>
              </span>{' '}
            </div>{' '}
          </Link>{' '}
          <Link href={'/insights/eor-fastest-path-india-hiring'} className={'card d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'EOR in India'}
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
        <div className={'grid-3'}>
          {' '}
          <Link href={'/insights/vendor-to-gcc-migration'} className={'card sr sr-d1 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Vendor-to-GCC'}
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
          <Link href={'/insights/top-10-cities-gcc-india-2026'} className={'card sr sr-d2 d-block'}>
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'Top 10 Cities'}
                src={'/assets/photography/photo-1486406146926-c627a92ad1ab.webp'}
                width={1400}
                height={934}
              />
              <span className={'card-tag tag-bg-blue'}>{'Report'}</span>
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'Top 10 Cities for GCC Setup in India: 2026 Rankings'}</h3>
              <p>
                {
                  'Data-driven city rankings across talent density, cost, infrastructure, and quality of life for GCC leaders.'
                }
              </p>{' '}
              <div className={'card-chips'}>
                <span>{'City Rankings'}</span>
                <span>{'Location Strategy'}</span>
                <span>{'Data'}</span>
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
                <span className={'text-meta'}>{'January 2026'}</span>
              </div>
            </div>{' '}
          </Link>{' '}
          <Link
            href={'/insights/ai-transforming-gcc-operations'}
            className={'card sr sr-d3 d-block'}
          >
            {' '}
            <div className={'card-img'}>
              <SiteImage
                alt={'AI in GCC'}
                src={'/assets/photography/photo-1553877522-43269d4ea984.webp'}
                width={1400}
                height={934}
              />
              <span className={'card-tag tag-bg-teal'}>{'Insight'}</span>
            </div>{' '}
            <div className={'card-body'}>
              <h3>{'How AI Is Transforming GCC Operations in 2026'}</h3>
              <p>
                {
                  'From intelligent hiring to automated compliance — the AI capabilities every modern GCC should integrate.'
                }
              </p>{' '}
              <div className={'card-chips'}>
                <span>{'AI/ML'}</span>
                <span>{'Automation'}</span>
                <span>{'Operations'}</span>
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
                <span className={'text-meta'}>{'December 2025'}</span>
              </div>
            </div>{' '}
          </Link>{' '}
        </div>{' '}
        <div className={'insights-list'}>
          {' '}
          <div className={'insights-list-head'}>
            <h3>
              {'From the '}
              <em>{'Archive'}</em>
            </h3>
          </div>{' '}
          <Link href={'/insights/gcc-cost-optimization'} className={'il-item sr'}>
            {' '}
            <SiteImage
              alt={'Cost Optimization'}
              src={'/assets/photography/photo-1454165804606-c3d57bc86b40.webp'}
              width={1400}
              height={934}
            />{' '}
            <div className={'il-text'}>
              <h3>{'GCC Cost Optimization: Beyond the Obvious Levers'}</h3>
              <p>
                {
                  'The second-order cost savings that most GCC operators miss — from procurement to talent structure.'
                }
              </p>
            </div>{' '}
            <div className={'il-meta'}>
              <span className={'card-tag tag-bg-gold'}>{'Framework'}</span>
              <div className={'il-date'}>{'Nov 2025'}</div>
            </div>{' '}
          </Link>{' '}
          <Link href={'/insights/gcc-leadership-hiring-crisis'} className={'il-item sr'}>
            {' '}
            <SiteImage
              alt={'Leadership Hiring'}
              src={'/assets/photography/photo-1522071820081-009f0129c71c.webp'}
              width={1400}
              height={934}
            />{' '}
            <div className={'il-text'}>
              <h3>{'The GCC Leadership Hiring Crisis — And How to Solve It'}</h3>
              <p>
                {
                  'Why 60% of GCC Head searches take 6+ months, and the frameworks that cut that timeline in half.'
                }
              </p>
            </div>{' '}
            <div className={'il-meta'}>
              <span className={'card-tag tag-bg-violet'}>{'Analysis'}</span>
              <div className={'il-date'}>{'Oct 2025'}</div>
            </div>{' '}
          </Link>{' '}
          <Link href={'/insights/cost-center-to-innovation-hub'} className={'il-item sr'}>
            {' '}
            <SiteImage
              alt={'GCC Evolution'}
              src={'/assets/photography/photo-1451187580459-43490279c0fa.webp'}
              width={1400}
              height={934}
            />{' '}
            <div className={'il-text'}>
              <h3>{'From Cost Center to Innovation Hub: The GCC Evolution'}</h3>
              <p>
                {
                  'The three stages of GCC maturity, and why most organizations get stuck at stage two.'
                }
              </p>
            </div>{' '}
            <div className={'il-meta'}>
              <span className={'card-tag tag-bg-blue'}>{'Thought Leadership'}</span>
              <div className={'il-date'}>{'Sep 2025'}</div>
            </div>{' '}
          </Link>{' '}
          <Link href={'/insights/compliance-pitfalls-india-setup'} className={'il-item sr'}>
            {' '}
            <SiteImage
              alt={'Compliance'}
              src={'/assets/photography/photo-1573497019940-1c28c88b4f3e.webp'}
              width={1400}
              height={934}
            />{' '}
            <div className={'il-text'}>
              <h3>{'Compliance Pitfalls: What Foreign Entities Must Know'}</h3>
              <p>
                {
                  'The 10 most common compliance mistakes multinationals make when establishing an India presence.'
                }
              </p>
            </div>{' '}
            <div className={'il-meta'}>
              <span className={'card-tag tag-bg-teal'}>{'Guide'}</span>
              <div className={'il-date'}>{'Aug 2025'}</div>
            </div>{' '}
          </Link>{' '}
          <Link href={'/insights/genai-center-of-excellence-gcc'} className={'il-item sr'}>
            {' '}
            <SiteImage
              alt={'GenAI CoE'}
              src={'/assets/photography/photo-1531482615713-2afd69097998.webp'}
              width={1400}
              height={934}
            />{' '}
            <div className={'il-text'}>
              <h3>{'Building a GenAI Center of Excellence Inside Your GCC'}</h3>
              <p>
                {
                  'Team structures, technology stacks, and governance frameworks for enterprise-grade GenAI capabilities.'
                }
              </p>
            </div>{' '}
            <div className={'il-meta'}>
              <span className={'card-tag tag-bg-gold'}>{'Blueprint'}</span>
              <div className={'il-date'}>{'Jul 2025'}</div>
            </div>{' '}
          </Link>{' '}
          <Link href={'/insights/fortune-500-beyond-outsourcing'} className={'il-item sr'}>
            {' '}
            <SiteImage
              alt={'Beyond Outsourcing'}
              src={'/assets/photography/photo-1521737711867-e3b97375f902.webp'}
              width={1400}
              height={934}
            />{' '}
            <div className={'il-text'}>
              <h3>{'Why Fortune 500 Companies Are Moving Beyond Outsourcing'}</h3>
              <p>
                {
                  'The structural shift from outsourced operations to enterprise-owned GCCs — and what it means for the next decade.'
                }
              </p>
            </div>{' '}
            <div className={'il-meta'}>
              <span className={'card-tag tag-bg-violet'}>{'Trend'}</span>
              <div className={'il-date'}>{'Jun 2025'}</div>
            </div>{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section3() {
  return (
    <section>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'grid-2'} style={{ alignItems: 'center', gap: '64px' }}>
          {' '}
          <div className={'sr-l'}>
            {' '}
            <div className={'tag tag-teal'}>{'Weekly Intelligence'}</div>{' '}
            <h2 className={'sh'}>
              {'The GCC '}
              <em>{'Briefing'}</em>
            </h2>{' '}
            <p className={'sp'} style={{ marginBottom: '20px' }}>
              {
                "Every Wednesday, our team curates the most important developments in India's GCC ecosystem — market moves, regulatory changes, talent data, and strategic insights — delivered in under 5 minutes."
              }
            </p>{' '}
            <p className={'sp'}>
              {
                'Trusted by 2,500+ enterprise leaders across banking, technology, healthcare, and manufacturing sectors.'
              }
            </p>{' '}
          </div>{' '}
          <div
            className={'sr-r'}
            style={{ background: 'var(--cloud)', padding: '48px', borderRadius: 'var(--r-lg)' }}
          >
            {' '}
            <h3
              style={{ fontFamily: 'var(--serif)', fontSize: 'var(--fs-lg)', marginBottom: '8px' }}
            >
              {'Subscribe to The GCC Briefing'}
            </h3>{' '}
            <p style={{ color: 'var(--slate)', fontSize: 'var(--fs-sm)', marginBottom: '24px' }}>
              {'Free. Weekly. Unsubscribe anytime.'}
            </p>{' '}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {' '}
              <input
                type={'email'}
                placeholder={'your@email.com'}
                style={{
                  padding: '14px 18px',
                  border: '1px solid var(--rule)',
                  borderRadius: 'var(--r-sm)',
                  fontFamily: 'var(--sans)',
                  fontSize: 'var(--fs-sm)',
                  outline: 'none',
                  transition: 'border .3s',
                }}
              />{' '}
              <Link
                href={'/contact'}
                className={'btn btn-blue'}
                style={{ textAlign: 'center', display: 'block' }}
              >
                {'Subscribe '}
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
            <p style={{ fontSize: '11px', color: 'var(--silver)', marginTop: '12px' }}>
              {
                'By subscribing, you agree to receive weekly emails from MarSan Global. We respect your privacy.'
              }
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section4() {
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
            {'Ready to Explore'}
            <br />
            {'India for Your GCC?'}
          </h2>{' '}
          <p>
            {
              "Our research is free. Our conversations are honest. Let's discuss whether India is the right move for your organization."
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
              {'Explore Services '}
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
    </>
  );
}
