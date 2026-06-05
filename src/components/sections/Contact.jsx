import { useState } from 'react';
import { PaperPlaneTilt, CheckCircle } from '@phosphor-icons/react';

const SERVICES = [
  'Video Editing',
  'Copywriting / Ghostwriting',
  'YouTube Strategy',
  'Thumbnail Design',
  'Podcast Production',
  'Motion Graphics',
  'Full Studio (Ongoing)',
  'Custom / Not sure yet',
];

const BUDGETS = [
  'Under $5,000',
  '$5,000 – $12,000',
  '$12,000 – $25,000',
  '$25,000+',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/xpwzgvdj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Email us directly at business@kalaakaari.in');
      }
    } catch {
      alert('Something went wrong. Email us directly at business@kalaakaari.in');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="section">
        <div className="section-header">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let&apos;s talk</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px', maxWidth: '46ch' }}>
            Tell us what you&apos;re building. We&apos;ll tell you how to make it land.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <CheckCircle size={48} color="var(--accent)" weight="light" />
                <h3>Message sent.</h3>
                <p>We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-service">Service</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>What do you need?</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-budget">Monthly budget</label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select range</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project, goals, and timeline…"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="button"
                  disabled={submitting}
                  style={{ width: '100%', gap: '8px', cursor: 'none' }}
                >
                  {submitting ? (
                    'Sending…'
                  ) : (
                    <>
                      <PaperPlaneTilt size={15} weight="light" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="contact-sidebar">
            <div className="what-next">
              <div className="section-label" style={{ marginBottom: '28px' }}>What happens next</div>
              <div className="what-next-steps">
                <div className="what-next-step">
                  <span className="what-next-num">01</span>
                  <div>
                    <div className="what-next-title">We read your message</div>
                    <div className="what-next-desc">Every submission is read by a real person, not a bot.</div>
                  </div>
                </div>
                <div className="what-next-step">
                  <span className="what-next-num">02</span>
                  <div>
                    <div className="what-next-title">We reach out within 24h</div>
                    <div className="what-next-desc">A short reply to confirm fit and ask follow-up questions.</div>
                  </div>
                </div>
                <div className="what-next-step">
                  <span className="what-next-num">03</span>
                  <div>
                    <div className="what-next-title">Discovery call (30 min)</div>
                    <div className="what-next-desc">We align on scope, timeline, and expectations before anything begins.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-statement page">
        <div className="footer-big-text" aria-hidden="true">
          REAL<br />WORK.
        </div>
        <div className="footer-bottom">
          <div className="footer-brand-mark">
            <div className="footer-stamp">U/</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '13px' }}>UNSCRIPTED</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '1px' }}>
                Content agency · Est. 2023
              </div>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.5px' }}>
            © 2025 UNSCRIPTED. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
