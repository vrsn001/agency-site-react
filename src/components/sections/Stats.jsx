import { useEffect, useRef, useState } from 'react';
import Counter from '../ui/Counter/Counter';

const STATS = [
  {
    value: 13.52,
    suffix: 'M',
    places: [10, 1, '.', 0.1, 0.01],
    label: 'Views Generated',
    sub: 'across all client channels',
  },
  {
    value: 9,
    suffix: '',
    places: [1],
    label: 'Channels Served',
    sub: 'up to 12.5M subscribers',
  },
  {
    value: 37,
    suffix: '',
    places: [10, 1],
    label: 'Videos Delivered',
    sub: 'long-form & short-form',
  },
  {
    value: 416.9,
    suffix: 'K',
    places: [100, 10, 1, '.', 0.1],
    label: 'Total Likes',
    sub: 'across delivered work',
  },
];

const COUNTER_STYLE = {
  fontFamily: "'DM Serif Display', serif",
  letterSpacing: '-1px',
};

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    const fallback = setTimeout(() => setVisible(true), 1500);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <section className="stats-raw-grid" ref={ref}>
      {STATS.map(({ value, suffix, places, label, sub }) => (
        <div className="stat-raw" key={label}>
          <div className="stat-raw-number">
            <Counter
              value={visible ? value : 0}
              places={places}
              fontSize={62}
              padding={4}
              gap={0}
              horizontalPadding={0}
              borderRadius={0}
              textColor="var(--text-primary)"
              fontWeight={400}
              counterStyle={COUNTER_STYLE}
              gradientFrom="#050308"
              gradientTo="transparent"
              gradientHeight={20}
            />
            {suffix && (
              <span style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '62px',
                color: 'var(--text-primary)',
                lineHeight: 1,
                letterSpacing: '-1px',
                display: 'inline-block',
                verticalAlign: 'baseline',
              }}>
                {suffix}
              </span>
            )}
          </div>
          <div className="stat-raw-label">{label}</div>
          <div className="stat-raw-sub">{sub}</div>
        </div>
      ))}
    </section>
  );
}
