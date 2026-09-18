import { SiteImage } from '@/components/site-image';
import { ContactForm, SubscribeForm } from '@/components/forms';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  "Let's Build YourIndia Strategy",
  'Book a complimentary 30-minute strategy session. No pitch — just an honest conversation about whether India is the right move for your organization.',
  '/contact',
);

function Section0() {
  return (
    <section style={{ paddingTop: '120px' }}>
      {' '}
      <div className={'ctr'}>
        {' '}
        <div className={'grid-2'} style={{ gap: '80px' }}>
          {' '}
          <div className={'sr-l'}>
            {' '}
            <div className={'tag tag-gold'}>{'Get In Touch'}</div>{' '}
            <span
              className={'nav-logo'}
              style={{
                fontSize: '1.35rem',
                display: 'block',
                marginTop: '14px',
                marginBottom: '6px',
                color: 'var(--char)',
              }}
            >
              {'MarSan'}
              <em>{'Global'}</em>
            </span>{' '}
            <p
              style={{
                fontSize: 'var(--fs-xs)',
                fontWeight: '600',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginTop: '0',
                marginBottom: '18px',
              }}
            >
              {'The Global Connector'}
            </p>{' '}
            <h1 className={'sh mb-16'}>
              {"Let's Build Your"}
              <br />
              <em>{'India Strategy'}</em>
            </h1>{' '}
            <p className={'sp mb-40'}>
              {
                'Book a complimentary 30-minute strategy session. No pitch — just an honest conversation about whether India is the right move for your organization.'
              }
            </p>{' '}
            <div className={'cd'}>
              <div className={'cd-icon'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={
                      'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z'
                    }
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'1.5'}
                  ></path>
                </svg>
              </div>
              <div>
                <h2>{'Phone'}</h2>
                <a href={'tel:+916202632349'}>{'+91 62026 32349'}</a>
              </div>
            </div>{' '}
            <div className={'cd'}>
              <div className={'cd-icon'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={
                      'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
                    }
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'1.5'}
                  ></path>
                  <polyline
                    points={'22,6 12,13 2,6'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'1.5'}
                  ></polyline>
                </svg>
              </div>
              <div>
                <h3>{'Email'}</h3>
                <a href={'mailto:reach@marsan-global.com'}>{'reach@marsan-global.com'}</a>
              </div>
            </div>{' '}
            <div className={'cd'}>
              <div className={'cd-icon'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'1.5'}
                  ></path>
                  <circle
                    cx={'12'}
                    cy={'10'}
                    r={'3'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'1.5'}
                  ></circle>
                </svg>
              </div>
              <div>
                <h3>{'India Registered Office'}</h3>
                <p style={{ lineHeight: '1.7' }}>
                  {'Marsan Global Solutions Pvt. Ltd'}
                  <br />
                  {'110, 7th Cross, Dollars Scheme'}
                  <br />
                  {'Bilekahalli, BTM 2nd Stage'}
                  <br />
                  {'Bangalore 560076'}
                </p>
              </div>
            </div>{' '}
            <div className={'cd'}>
              <div className={'cd-icon'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <path
                    d={'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'1.5'}
                  ></path>
                  <circle
                    cx={'12'}
                    cy={'10'}
                    r={'3'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'1.5'}
                  ></circle>
                </svg>
              </div>
              <div>
                <h3>{'US Registered Office'}</h3>
                <p style={{ lineHeight: '1.7' }}>
                  {'Marsan Global LLC'}
                  <br />
                  {'30 N Gould St Ste R'}
                  <br />
                  {'Sheridan, WY 82801'}
                </p>
              </div>
            </div>{' '}
            <div className={'cd'}>
              <div className={'cd-icon'}>
                <svg viewBox={'0 0 24 24'} aria-hidden="true" focusable="false">
                  <circle
                    cx={'12'}
                    cy={'12'}
                    r={'10'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'1.5'}
                  ></circle>
                  <path
                    d={'M12 6v6l4 2'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'1.5'}
                  ></path>
                </svg>
              </div>
              <div>
                <h3>{'Response Time'}</h3>
                <p>{'Within 24 hours on business days'}</p>
              </div>
            </div>{' '}
          </div>{' '}
          <div className={'sr-r'}>
            {' '}
            <div className={'contact-form'}>
              {' '}
              <h3>{'Book a Strategy Call'}</h3>{' '}
              <p>
                {"Tell us about your GCC goals and we'll come prepared with a tailored approach."}
              </p>{' '}
              <ContactForm />{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
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
          <div className={'tag tag-blue'}>{'Global Reach'}</div>{' '}
          <h2 className={'sh'}>
            {'Serving Enterprises '}
            <em>{'Worldwide'}</em>
          </h2>{' '}
          <p className={'sp'}>
            {
              'Headquartered in India. Serving clients across North America, Europe, APAC, and the Middle East.'
            }
          </p>{' '}
        </div>{' '}
        <div className={'grid-4'}>
          {' '}
          <div className={'stat stat-blue sr sr-d1'}>
            <div className={'stat-val'}>{'12+'}</div>
            <div className={'stat-label'}>{'Indian Cities Covered'}</div>
          </div>{' '}
          <div className={'stat stat-teal sr sr-d2'}>
            <div className={'stat-val'}>{'4'}</div>
            <div className={'stat-label'}>{'Continents Served'}</div>
          </div>{' '}
          <div className={'stat stat-gold sr sr-d3'}>
            <div className={'stat-val'}>{'40+'}</div>
            <div className={'stat-label'}>{'Partner Network'}</div>
          </div>{' '}
          <div className={'stat stat-violet sr sr-d4'}>
            <div className={'stat-val'}>{'24h'}</div>
            <div className={'stat-label'}>{'Response SLA'}</div>
          </div>{' '}
        </div>{' '}
        <div className={'grid-3'} style={{ marginTop: '40px', gap: '24px' }}>
          {' '}
          <div
            style={{
              background: 'var(--white)',
              padding: '32px',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d1'}
          >
            {' '}
            <h3 style={{ fontWeight: '700', marginBottom: '8px', color: 'var(--char)' }}>
              {'North America'}
            </h3>{' '}
            <p className={'body-sm'}>
              {
                'Supporting US and Canadian enterprises with India GCC strategy, setup, and operations. EST/PST timezone overlap built into our delivery model.'
              }
            </p>{' '}
          </div>{' '}
          <div
            style={{
              background: 'var(--white)',
              padding: '32px',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d2'}
          >
            {' '}
            <h3 style={{ fontWeight: '700', marginBottom: '8px', color: 'var(--char)' }}>
              {'Europe & UK'}
            </h3>{' '}
            <p className={'body-sm'}>
              {
                'GDPR-compliant GCC frameworks for European enterprises. Deep understanding of EU regulatory requirements and cross-border employment law.'
              }
            </p>{' '}
          </div>{' '}
          <div
            style={{
              background: 'var(--white)',
              padding: '32px',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--rule)',
            }}
            className={'sr sr-d3'}
          >
            {' '}
            <h3 style={{ fontWeight: '700', marginBottom: '8px', color: 'var(--char)' }}>
              {'APAC & Middle East'}
            </h3>{' '}
            <p className={'body-sm'}>
              {
                "Helping APAC and Gulf-based organizations leverage India's talent pool. Expertise in multi-country GCC structures and regional compliance."
              }
            </p>{' '}
          </div>{' '}
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
        <div className={'grid-2 grid-gap-64'}>
          {' '}
          <div className={'sr-l'}>
            {' '}
            <div className={'tag tag-teal'}>{'Why Us'}</div>{' '}
            <h2 className={'sh'}>
              {'What Makes This'}
              <br />
              {'Conversation '}
              <em>{'Different'}</em>
            </h2>{' '}
            <p className={'sp'} style={{ marginBottom: '24px' }}>
              {
                "We don't pitch. We don't send generic decks. Every conversation starts with understanding your specific context — your industry, your scale, your timeline, and your constraints."
              }
            </p>{' '}
            <p className={'sp'}>
              {
                "After one call, you'll walk away with a clear understanding of whether India is the right move, what it would take, and what a realistic timeline looks like. Whether you engage us or not."
              }
            </p>{' '}
          </div>{' '}
          <div className={'sr-r'}>
            {' '}
            <div
              style={{ background: 'var(--navy)', padding: '40px', borderRadius: 'var(--r-lg)' }}
            >
              {' '}
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  color: 'var(--white)',
                  fontSize: 'var(--fs-lg)',
                  marginBottom: '24px',
                }}
              >
                {"What You'll Get"}
              </h3>{' '}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {' '}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg
                    viewBox={'0 0 24 24'}
                    width={'20'}
                    height={'20'}
                    style={{ flexShrink: '0', marginTop: '2px' }}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d={'M22 11.08V12a10 10 0 1 1-5.93-9.14'}
                      fill={'none'}
                      stroke={'var(--gold)'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                    ></path>
                    <path
                      d={'M22 4L12 14.01l-3-3'}
                      fill={'none'}
                      stroke={'var(--gold)'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                    ></path>
                  </svg>
                  <p
                    style={{
                      color: 'rgba(255,255,255,.7)',
                      fontSize: 'var(--fs-sm)',
                      lineHeight: '1.6',
                      margin: '0',
                    }}
                  >
                    {'Honest assessment of your GCC readiness'}
                  </p>
                </div>{' '}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg
                    viewBox={'0 0 24 24'}
                    width={'20'}
                    height={'20'}
                    style={{ flexShrink: '0', marginTop: '2px' }}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d={'M22 11.08V12a10 10 0 1 1-5.93-9.14'}
                      fill={'none'}
                      stroke={'var(--gold)'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                    ></path>
                    <path
                      d={'M22 4L12 14.01l-3-3'}
                      fill={'none'}
                      stroke={'var(--gold)'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                    ></path>
                  </svg>
                  <p
                    style={{
                      color: 'rgba(255,255,255,.7)',
                      fontSize: 'var(--fs-sm)',
                      lineHeight: '1.6',
                      margin: '0',
                    }}
                  >
                    {'Preliminary cost comparison (GCC vs. outsourcing)'}
                  </p>
                </div>{' '}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg
                    viewBox={'0 0 24 24'}
                    width={'20'}
                    height={'20'}
                    style={{ flexShrink: '0', marginTop: '2px' }}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d={'M22 11.08V12a10 10 0 1 1-5.93-9.14'}
                      fill={'none'}
                      stroke={'var(--gold)'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                    ></path>
                    <path
                      d={'M22 4L12 14.01l-3-3'}
                      fill={'none'}
                      stroke={'var(--gold)'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                    ></path>
                  </svg>
                  <p
                    style={{
                      color: 'rgba(255,255,255,.7)',
                      fontSize: 'var(--fs-sm)',
                      lineHeight: '1.6',
                      margin: '0',
                    }}
                  >
                    {'Talent availability snapshot for your skill requirements'}
                  </p>
                </div>{' '}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg
                    viewBox={'0 0 24 24'}
                    width={'20'}
                    height={'20'}
                    style={{ flexShrink: '0', marginTop: '2px' }}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d={'M22 11.08V12a10 10 0 1 1-5.93-9.14'}
                      fill={'none'}
                      stroke={'var(--gold)'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                    ></path>
                    <path
                      d={'M22 4L12 14.01l-3-3'}
                      fill={'none'}
                      stroke={'var(--gold)'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                    ></path>
                  </svg>
                  <p
                    style={{
                      color: 'rgba(255,255,255,.7)',
                      fontSize: 'var(--fs-sm)',
                      lineHeight: '1.6',
                      margin: '0',
                    }}
                  >
                    {'Recommended next steps — no pressure, no follow-up spam'}
                  </p>
                </div>{' '}
              </div>{' '}
            </div>{' '}
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
            {'Prefer a Direct'}
            <br />
            {'Conversation?'}
          </h2>{' '}
          <p>{'Call Sandeep directly at +91 62026 32349. He picks up.'}</p>{' '}
          <div className={'cta-btns'}>
            <a href={'tel:+916202632349'} className={'btn btn-gold'}>
              {'Call Now '}
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
            </a>
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
