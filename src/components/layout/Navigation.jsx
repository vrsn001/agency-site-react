import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="topbar">
        <nav className="nav-left" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
        </nav>

        <div className="logo" aria-label="UNSCRIPTED">
          <span className="strike">UN</span>SCRIPTED
        </div>

        <nav className="nav-right" aria-label="Secondary navigation">
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="button nav-cta interactive">Book a call</a>
        </nav>

        <button
          className="hamburger interactive"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} weight="light" /> : <List size={20} weight="light" />}
        </button>
      </header>

      <div
        className={`mobile-nav ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <nav className="mobile-nav-links">
          <a href="#services" onClick={close}>Services</a>
          <a href="#process" onClick={close}>Process</a>
          <a href="#pricing" onClick={close}>Pricing</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a href="#contact" className="button" onClick={close} style={{ textAlign: 'center' }}>
            Book a call
          </a>
        </nav>
      </div>
    </>
  );
}
