import { useEffect, useRef } from 'react';
import { Compass, Target, FilmSlate, PaperPlaneTilt } from '@phosphor-icons/react';

export default function Process() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('line-ready');
          el.querySelectorAll('.timeline-step').forEach((step) => {
            step.classList.add('step-visible');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="section">
      <div className="section-header">
        <div className="section-label">Process</div>
        <h2 className="section-title">
          Simple process.
          <br />
          <span className="highlight">
            Serious results.
          </span>
        </h2>
        <p className="section-sub">First draft delivered within 48–72 hours of footage received.</p>
      </div>

      <div className="process-timeline" ref={timelineRef}>
        <div className="timeline-step">
          <div className="timeline-icon">
            <Compass size={32} weight="light" />
          </div>
          <div className="timeline-num">01 Discover</div>
          <h3 className="timeline-title">Understand what actually matters.</h3>
          <p className="timeline-copy">
            Talk through your story. Figure out what&apos;s worth saying.
          </p>
        </div>

        <div className="timeline-step">
          <div className="timeline-icon">
            <Target size={32} weight="light" />
          </div>
          <div className="timeline-num">02 Plan</div>
          <h3 className="timeline-title">Build a content system.</h3>
          <p className="timeline-copy">
            Decide what to publish, how often, and where. Make it repeatable.
          </p>
        </div>

        <div className="timeline-step">
          <div className="timeline-icon">
            <FilmSlate size={32} weight="light" />
          </div>
          <div className="timeline-num">03 Create</div>
          <h3 className="timeline-title">Create the work.</h3>
          <p className="timeline-copy">
            Write, edit, design. Everything gets refined until it&apos;s ready.
          </p>
        </div>

        <div className="timeline-step">
          <div className="timeline-icon">
            <PaperPlaneTilt size={32} weight="light" />
          </div>
          <div className="timeline-num">04 Deliver</div>
          <h3 className="timeline-title">You own it. We support it.</h3>
          <p className="timeline-copy">
            Publish, measure, refine. We&apos;re here for ongoing updates.
          </p>
        </div>
      </div>
    </section>
  );
}
