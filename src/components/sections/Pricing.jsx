import { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';

const PLANS = [
  {
    num: '01',
    name: 'Launch',
    tagline: 'Get in market fast. One-time engagement.',
    usd: '$5,900',
    inr: '₹4,90,000',
    cadence: 'one-time',
    features: [
      'Brand voice & content pillars',
      '2 long-form videos edited',
      '8 short-form clips delivered',
      '3 custom thumbnails',
      'YouTube SEO on all uploads',
      '2 revision rounds per deliverable',
    ],
    featured: false,
  },
  {
    num: '02',
    name: 'Ongoing Studio',
    tagline: 'Full production, every month.',
    usd: '$12,000',
    inr: '₹9,99,000',
    cadence: 'per month',
    features: [
      '4–8 long-form videos / month',
      '16+ short-form clips / month',
      'Unlimited thumbnails',
      'YouTube SEO on every upload',
      'Distribution across Reels, Shorts & TikTok',
      'Monthly strategy call (60 min)',
    ],
    featured: true,
  },
  {
    num: '03',
    name: 'Custom',
    tagline: 'Built around your scope.',
    usd: 'Talk to us',
    inr: 'Talk to us',
    cadence: 'tailored',
    features: [
      'Any combination of services',
      'Podcast A-to-Z production',
      'Motion graphics & animations',
      'White-label for agencies',
      'Flexible billing & timeline',
      'Dedicated account manager',
    ],
    featured: false,
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState('usd');

  return (
    <section id="pricing" className="section">
      <div className="pricing-top">
        <div>
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Pick your pace.</h2>
        </div>
        <div className="currency-toggle" role="group" aria-label="Currency">
          <button className={`currency-btn ${currency === 'usd' ? 'active' : ''}`} onClick={() => setCurrency('usd')}>USD $</button>
          <button className={`currency-btn ${currency === 'inr' ? 'active' : ''}`} onClick={() => setCurrency('inr')}>INR ₹</button>
        </div>
      </div>

      <div className="pricing-grid">
        {PLANS.map(({ num, name, tagline, usd, inr, cadence, features, featured }) => (
          <div key={num} className={`pricing-panel interactive ${featured ? 'pricing-panel--featured' : ''}`}>
            {featured && <div className="pricing-panel-tag">Most popular</div>}

            <div className="pricing-panel-identity">
              <div className="pricing-panel-head">
                <span className="pricing-panel-num">{num}</span>
                <h3 className="pricing-panel-name">{name}</h3>
              </div>
              <p className="pricing-panel-tagline">{tagline}</p>
            </div>

            <div className="pricing-panel-price">
              <span className="pricing-panel-amount">{currency === 'usd' ? usd : inr}</span>
              <span className="pricing-panel-cadence">{cadence}</span>
            </div>

            <ul className="pricing-panel-features">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <a href="#contact" className="pricing-panel-cta interactive">
              Start a project <ArrowRight size={16} weight="light" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
