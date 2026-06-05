import { useEffect } from 'react';
import LiquidEther from './components/ui/LiquidEther/LiquidEther';
import Navigation from './components/layout/Navigation';
import StickyButton from './components/layout/StickyButton';
import CustomCursor from './components/layout/CustomCursor';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Testimonial from './components/sections/Testimonial';
import FAQ from './components/sections/FAQ';
import Pricing from './components/sections/Pricing';
import CTABand from './components/sections/CTABand';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // reveal element
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      section.classList.add('fade-in-on-scroll');
      section.style.animationDelay = `${index * 50}ms`;
      observer.observe(section);
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.classList.add('fade-in-scale-on-scroll');
      card.style.animationDelay = `${(index % 3) * 100}ms`;
      observer.observe(card);
    });

    const steps = document.querySelectorAll('.process-step');
    steps.forEach((step, index) => {
      step.classList.add('fade-in-on-scroll');
      step.style.animationDelay = `${(index % 4) * 80}ms`;
      observer.observe(step);
    });

    const ctaPanels = document.querySelectorAll('.cta-panel');
    ctaPanels.forEach((panel) => {
      panel.classList.add('fade-in-on-scroll');
      observer.observe(panel);
    });

    // Ripple & mouse-follow on buttons
    const buttons = document.querySelectorAll('.button, .button-secondary');
    const createRippleEffect = (event, button) => {
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    const handleButtonClick = (e) => createRippleEffect(e, e.currentTarget);
    const handleMouseMove = (e) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
      button.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    };
    const handleMouseLeave = (e) => { e.currentTarget.style.transform = ''; };

    buttons.forEach((button) => {
      button.addEventListener('click', handleButtonClick);
      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    // Active nav link on scroll
    const allLinks = document.querySelectorAll('.nav-left a, .nav-right a');
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id');
            allLinks.forEach((link) => {
              link.classList.remove('active');
              link.style.color = 'var(--text-muted)';
              if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
                link.style.color = 'var(--text-primary)';
              }
            });
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const allSectionsForNav = document.querySelectorAll('.section[id]');
    allSectionsForNav.forEach((sec) => navObserver.observe(sec));

    // Smooth scroll
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    };
    smoothScrollLinks.forEach((anchor) => anchor.addEventListener('click', handleSmoothScroll));

    // Parallax
    let ticking = false;
    const parallaxCards = document.querySelectorAll('.card');
    const onScrollParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          parallaxCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
            const yOffset = centerOffset * 0.05 * ((index % 3) + 1);
            card.style.setProperty('--py', `${yOffset}px`);
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScrollParallax, { passive: true });

    return () => {
      observer.disconnect();
      buttons.forEach((button) => {
        button.removeEventListener('click', handleButtonClick);
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
      navObserver.disconnect();
      window.removeEventListener('scroll', onScrollParallax);
      smoothScrollLinks.forEach((anchor) =>
        anchor.removeEventListener('click', handleSmoothScroll)
      );
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <StickyButton />

      <div style={{ position: 'relative', width: '100%' }}>
        <div
          className="fluid-bg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B497CF']}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={16}
            iterationsPoisson={16}
            resolution={0.25}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '150px',
              background: 'linear-gradient(to bottom, transparent, var(--bg-primary))',
              pointerEvents: 'none',
            }}
          />
        </div>

        <div className="page" style={{ position: 'relative', zIndex: 1 }}>
          <Navigation />
          <Hero />
        </div>
      </div>

      <main className="page">
        <Marquee />
        <Stats />
        <Services />
        <Process />
        <Testimonial />
        <FAQ />
        <Pricing />
        <CTABand />
        <Contact />
      </main>
    </>
  );
}

export default App;
