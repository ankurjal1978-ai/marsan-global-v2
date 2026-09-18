'use client';
import { type FormEvent, useState } from 'react';
function emailLink(subject: string, body: string) {
  return `mailto:reach@marsan-global.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
export function ContactForm() {
  const [draft, setDraft] = useState('');
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (k: string) => String(data.get(k) || '').trim();
    setDraft(
      emailLink(
        'Strategy Call Request — ' + value('first') + ' ' + value('last'),
        `Name: ${value('first')} ${value('last')}\nEmail: ${value('email')}\nCompany: ${value('company')}\nService Interest: ${value('service')}\n\n${value('message')}`,
      ),
    );
  }
  return (
    <form onSubmit={prepare} onChange={() => setDraft('')}>
      <div className="fr">
        <div className="fg">
          <label htmlFor="first">
            First name <span aria-hidden="true">*</span>
          </label>
          <input id="first" name="first" autoComplete="given-name" required maxLength={80} />
        </div>
        <div className="fg">
          <label htmlFor="last">Last name</label>
          <input id="last" name="last" autoComplete="family-name" maxLength={80} />
        </div>
      </div>
      <div className="fg">
        <label htmlFor="email">
          Work email <span aria-hidden="true">*</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
      </div>
      <div className="fg">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" autoComplete="organization" maxLength={160} />
      </div>
      <div className="fg">
        <label htmlFor="service">Service interest</label>
        <select id="service" name="service" defaultValue="">
          <option value="">Select a service</option>
          {[
            'Strategy & Advisory',
            'GCC Setup & Build',
            'GCC Operations',
            'Vendor-to-GCC Transformation',
            'Talent & Leadership',
            'AI/GenAI Practice',
            'Not sure yet',
          ].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="fg">
        <label htmlFor="message">Tell us more</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Your goals, timeline, and team size"
        />
      </div>
      <p className="form-help">
        Required fields are marked *. Your enquiry is sent using your email app. Review the draft
        and send it there.
      </p>
      <button type="submit" className="btn-submit">
        Prepare enquiry
      </button>
      {draft && (
        <div className="form-result" role="status">
          <p>Your draft is ready. Nothing has been sent yet.</p>
          <a className="btn btn-gold" href={draft}>
            Open email draft
          </a>
        </div>
      )}
      <p className="form-help">
        No email app? Write to <a href="mailto:reach@marsan-global.com">reach@marsan-global.com</a>.
        We respond within 24 hours on business days. <a href="/privacy-policy">Privacy policy</a>.
      </p>
    </form>
  );
}
export function SubscribeForm() {
  const [draft, setDraft] = useState('');
  return (
    <form
      onChange={() => setDraft('')}
      onSubmit={(e) => {
        e.preventDefault();
        setDraft(
          emailLink(
            'GCC Briefing Subscription Request',
            'Please subscribe this email to GCC briefings: ' +
              new FormData(e.currentTarget).get('subscriber'),
          ),
        );
      }}
    >
      <label htmlFor="subscriber" className="sr-only">
        Your work email
      </label>
      <div className="ft-form">
        <input
          type="email"
          id="subscriber"
          name="subscriber"
          placeholder="Your work email"
          autoComplete="email"
          required
          maxLength={254}
        />
        <button type="submit">Subscribe</button>
      </div>
      <p className="form-help">Request your subscription by email.</p>
      {draft && (
        <p role="status">
          <a href={draft}>Open subscription email draft ↗</a>
        </p>
      )}
    </form>
  );
}
