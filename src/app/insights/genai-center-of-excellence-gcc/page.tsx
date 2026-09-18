import Link from 'next/link';
import { SiteImage } from '@/components/site-image';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Building a GenAI Center of Excellence Inside Your GCC',
  'Team structures, technology stacks, and governance frameworks for enterprise-grade GenAI capabilities.',
  '/insights/genai-center-of-excellence-gcc',
);

function Section0() {
  return (
    <div className={'page-hero'}>
      {' '}
      <div className={'page-hero-bg'}>
        <SiteImage
          alt={'Building a GenAI Center of Excellence Inside Your GCC'}
          src={'/assets/photography/photo-1531482615713-2afd69097998.webp'}
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
          {' / Blueprint'}
        </div>{' '}
        <div className={'tag tag-gold'}>{'Blueprint • July 2025'}</div>{' '}
        <h1>{'Building a GenAI Center of Excellence Inside Your GCC'}</h1>{' '}
        <p>
          {
            'Team structures, technology stacks, and governance frameworks for enterprise-grade GenAI capabilities.'
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
              <div className={'text-meta'}>{'July 2025 • 9-min read'}</div>{' '}
            </div>{' '}
          </div>{' '}
          <p className={'blockquote-gold'}>
            {
              'Team structures, technology stacks, and governance frameworks for enterprise-grade GenAI capabilities.'
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
        <h2 className={'sh heading-xl'}>{'Why a Dedicated GenAI CoE'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              "GenAI is not a feature — it's a capability. It needs its own team, its own infrastructure, its own governance. Companies that treat GenAI as a side project for existing engineering teams consistently underinvest and underperform compared to those that establish a dedicated Center of Excellence. A well-structured GenAI CoE serves three functions: capability building (developing reusable GenAI frameworks), enablement (training business teams on AI adoption), and governance (ensuring responsible AI practices across the organization)."
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section3() {
  return <hr className={'divider divider-gold mx-auto-800'} />;
}

function Section4() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Team Structure & Key Roles'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            {
              'A launch-phase GenAI CoE typically consists of 8-15 people across four functional areas: '
            }
            <strong>{'Core Engineering (5-8):'}</strong>
            {
              ' GenAI Engineers, ML Engineers, Data Engineers building the foundational models, RAG pipelines, and API layers. '
            }
            <strong>{'MLOps & Platform (2-3):'}</strong>
            {
              ' Infrastructure engineers managing model training, deployment, monitoring, and cost optimization. '
            }
            <strong>{'Applied AI (2-3):'}</strong>
            {
              ' Product-oriented AI engineers who embed GenAI capabilities into business workflows and products. '
            }
            <strong>{'Governance (1-2):'}</strong>
            {
              ' AI Ethics Lead and a Responsible AI analyst who manage bias detection, data privacy, and model audit trails.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section5() {
  return <hr className={'divider divider-gold mx-auto-800'} />;
}

function Section6() {
  return (
    <section>
      {' '}
      <div className={'ctr max-w-800'}>
        {' '}
        <h2 className={'sh heading-xl'}>{'Technology Stack Recommendations'}</h2>{' '}
        <div className={'article-content'}>
          {' '}
          <p>
            <strong>{'Foundation Models:'}</strong>
            {
              ' Start with API-based access (GPT-4, Claude, Gemini) for rapid prototyping. Build fine-tuned open-source models (Llama, Mistral) for production workloads with data privacy requirements. '
            }
            <strong>{'Infrastructure:'}</strong>
            {
              ' AWS SageMaker or Azure ML for training. Kubernetes for inference serving. MLflow or Weights & Biases for experiment tracking. '
            }
            <strong>{'Data Layer:'}</strong>
            {
              ' Vector databases (Pinecone, Weaviate) for RAG. Feature stores (Feast) for ML. Data lakes (Databricks, Snowflake) for raw data. '
            }
            <strong>{'Governance:'}</strong>
            {
              ' Model cards for documentation. Guardrails for output filtering. A/B testing frameworks for production model evaluation.'
            }
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

function Section7() {
  return <hr className={'divider divider-gold mx-auto-800'} />;
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
