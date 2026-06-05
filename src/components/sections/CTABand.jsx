import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';

const THEORY = [
  {
    id: 'retention',
    label: 'Retention-first editing',
    short: 'We cut for watch time, not length.',
    detail:
      'Most editors trim silence and call it done. We study retention graphs: where viewers drop off, where they rewatch. Then we rebuild the cut around those signals. Every B-roll placement, zoom, and pattern interrupt has a reason. The result is a video that holds attention longer, which is the single metric YouTube rewards most.',
  },
  {
    id: 'distribution',
    label: 'One video → five platforms',
    short: 'Your long-form becomes a distribution machine.',
    detail:
      'After your long-form is edited, our distribution network clips, reformats, and pushes the best moments to YouTube Shorts, Instagram Reels, and TikTok. You do not brief anyone separately. It happens as part of the same workflow. One recording session turns into 5 to 12 pieces of content per week.',
  },
  {
    id: 'consistency',
    label: 'Same editor, every video',
    short: 'No rebriefing. No style drift.',
    detail:
      'Freelancer marketplaces give you a different editor every time. We assign one dedicated editor to your channel who learns your pacing, your style, your audience. By video three, they edit the way you think. That consistency shows in watch time and in how your channel feels: one coherent creative voice.',
  },
  {
    id: 'seo',
    label: 'SEO built into every upload',
    short: 'The algorithm reads metadata before humans watch.',
    detail:
      'A great video with a weak title is invisible. Before every upload we write the title, description, tags, and chapters, optimised for search intent and click-through. This is where most established channels leave growth on the table.',
  },
];

export default function CTABand() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section className="cta-band">
      <div className="cta-band-inner page">

        <div className="cta-band-left">
          <p className="cta-band-eyebrow">Ready when you are</p>
          <h2 className="cta-band-headline">
            Your channel deserves<br />a real production team.
          </h2>
          <a href="#contact" className="cta-band-btn interactive">
            Start a project &nbsp;↗
          </a>
        </div>

        <div className="cta-band-right">
          <p className="cta-theory-label">Why it works</p>
          <div className="cta-theory-list">
            {THEORY.map(({ id, label, short, detail }) => (
              <div
                key={id}
                className={`cta-theory-item interactive ${open === id ? 'open' : ''}`}
                onClick={() => toggle(id)}
              >
                <div className="cta-theory-head">
                  <div className="cta-theory-text">
                    <span className="cta-theory-name">{label}</span>
                    <span className="cta-theory-short">{short}</span>
                  </div>
                  <span className="cta-theory-icon">
                    {open === id
                      ? <Minus size={16} weight="light" />
                      : <Plus size={16} weight="light" />
                    }
                  </span>
                </div>
                {open === id && (
                  <p className="cta-theory-detail">{detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
