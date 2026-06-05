import { useState } from 'react';
import { ArrowRight, Plus, Minus } from '@phosphor-icons/react';

const SERVICES = [
  {
    num: '01',
    name: 'Video Editing',
    desc: 'Retention-optimised cuts for long-form and short-form. Same editor, every video.',
    summary: 'We do not just trim clips. We study where viewers drop off and rebuild the cut around those signals — hooks, pacing, pattern interrupts, B-roll placement. Every edit is intentional.',
    process: [
      'Footage review and story mapping',
      'Rough cut with pacing focus',
      'B-roll, sound design, and music sync',
      'Colour grade and text overlays',
      'Export in platform-optimised formats',
    ],
    note: 'Same editor assigned to your channel. Learns your style after 2 to 3 videos.',
  },
  {
    num: '02',
    name: 'YouTube Strategy',
    desc: 'Channel audits, content calendars, format testing, and growth systems.',
    summary: 'Most channels fail not from bad content but from no system. We audit what you have, identify what the algorithm rewards in your niche, and build a repeatable content plan.',
    process: [
      'Full channel audit and retention analysis',
      'Competitor and niche benchmarking',
      'Content pillar and format definition',
      'Monthly content calendar',
      'Quarterly strategy review',
    ],
    note: 'Delivered as a living Notion doc your team can act on immediately.',
  },
  {
    num: '03',
    name: 'Thumbnail Design',
    desc: 'High-CTR visuals built around what actually makes people click.',
    summary: 'Thumbnails are the first sales pitch your video makes. We design for click-through rate first, aesthetics second — faces, contrast, readable text, curiosity gaps.',
    process: [
      'Brief on video topic and target audience',
      '2 to 3 design concepts per video',
      'Feedback and one round of revisions',
      'Delivered in YouTube-optimised dimensions',
    ],
    note: 'Ongoing clients receive unlimited thumbnails with no per-asset fee.',
  },
  {
    num: '04',
    name: 'YouTube SEO',
    desc: 'Titles, descriptions, tags, and metadata. Optimised before every upload.',
    summary: 'YouTube is the second largest search engine. Most creators write titles that please themselves instead of the algorithm. We write metadata that surfaces your video to people already searching for it.',
    process: [
      'Keyword research for each video topic',
      'Title and hook variants (A/B ready)',
      'Description with timestamps and CTAs',
      'Tags, hashtags, and end-screen copy',
      'Chapter markers for search indexing',
    ],
    note: 'Included in every Ongoing Studio retainer at no extra charge.',
  },
  {
    num: '05',
    name: 'Distribution & Clipping',
    desc: 'Your long-form pushed to Reels, Shorts, and TikTok via our distribution network.',
    summary: 'You record once. We extract the best 60 to 90 second moments, reformat them for vertical, add captions, and push them across platforms through our distribution network — without you briefing anyone.',
    process: [
      'Identify 3 to 6 highlight moments per video',
      'Reframe and recut for vertical formats',
      'Captions and platform-specific text',
      'Distribution via our network to Reels, Shorts, TikTok',
      '5 to 12 short-form pieces per long-form video',
    ],
    note: 'Runs in parallel with editing. No extra turnaround time.',
  },
  {
    num: '06',
    name: 'Podcast Production',
    desc: 'Recording to publish: editing, mixing, chapters, and clips.',
    summary: 'We take your raw recordings and deliver a polished episode ready for Spotify, Apple, and YouTube — plus short clips for social. Full A-to-Z so you focus on the conversation.',
    process: [
      'Raw audio/video ingestion',
      'Noise removal and dialogue editing',
      'Music mixing and level mastering',
      'Chapter markers and show notes',
      'Audiogram and short-form clips',
    ],
    note: 'Video podcast formats delivered in both widescreen and vertical.',
  },
  {
    num: '07',
    name: 'Motion Graphics',
    desc: 'Intros, transitions, lower thirds. Production value without the overhead.',
    summary: 'Small motion details separate amateur channels from professional ones. We design and animate the recurring elements — intros, outros, lower thirds, kinetic text — so every video feels like a proper production.',
    process: [
      'Style brief aligned to your brand',
      'Style frame mockups for approval',
      'Animation in After Effects',
      'Delivered as reusable template files',
    ],
    note: 'Template files handed over so your editor can apply them independently.',
  },
  {
    num: '08',
    name: 'Full Studio Retainer',
    desc: 'All of the above. One team, one invoice, zero coordination overhead.',
    summary: 'The Ongoing Studio tier bundles every service under one retainer. One dedicated team handles editing, thumbnails, SEO, distribution, and strategy — so you never manage multiple vendors or chase deliverables.',
    process: [
      '30-minute onboarding and brand deep-dive',
      'Dedicated editor, strategist, and account manager',
      'Weekly content delivery on a fixed schedule',
      'Monthly strategy call and performance review',
      'Slack channel for direct async communication',
    ],
    note: 'Most clients see a consistent posting rhythm within the first two weeks.',
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);

  const toggle = (num) => setOpen((prev) => (prev === num ? null : num));

  return (
    <section id="services" className="section">
      <div className="services-header">
        <span className="section-label">What we do</span>
        <h2 className="section-title">
          Everything your channel needs.<br /><em>Nothing it doesn&apos;t.</em>
        </h2>
      </div>

      <div className="services-list">
        {SERVICES.map(({ num, name, desc, summary, process, note }) => (
          <div key={num} className={`service-item ${open === num ? 'open' : ''}`}>
            <button
              className="service-row interactive"
              onClick={() => toggle(num)}
              aria-expanded={open === num}
            >
              <span className="service-num">{num}</span>
              <span className="service-name">{name}</span>
              <span className="service-desc">{desc}</span>
              {open === num
                ? <Minus size={18} weight="light" className="service-arrow" />
                : <ArrowRight size={18} weight="light" className="service-arrow" />
              }
            </button>

            {open === num && (
              <div className="service-expand">
                <p className="service-expand-summary">{summary}</p>
                <div className="service-expand-cols">
                  <div>
                    <p className="service-expand-heading">Process</p>
                    <ol className="service-expand-steps">
                      {process.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="service-expand-note">
                    <p className="service-expand-heading">Good to know</p>
                    <p>{note}</p>
                    <a href="#contact" className="service-expand-cta interactive">
                      Start this service <ArrowRight size={14} weight="light" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
