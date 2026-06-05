import { useEffect, useState } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function StickyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`sticky-cta interactive ${visible ? 'sticky-cta--visible' : ''}`}
      aria-label="Book a strategy call"
    >
      <ArrowUpRight size={18} weight="light" />
      <span>Book a call</span>
    </a>
  );
}
