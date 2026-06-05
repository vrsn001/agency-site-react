export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-lockup">
        <div className="hero-brand-eyebrow">Production studio · Est. 2023</div>
        <h1 className="hero-logo-massive">
          <span className="strike">UN</span>SCRIPTED
        </h1>
        <div className="hero-tagline-primary">
          <span className="fade-in-on-scroll delay-3" style={{ display: 'inline-block' }}>YOUR CHANNEL. DONE RIGHT.</span>
        </div>
        <div className="hero-tagline-secondary">
          <span className="fade-in-on-scroll delay-4" style={{ display: 'inline-block' }}>The production studio behind creators who are serious about YouTube</span>
        </div>
      </div>

      <p className="hero-description">
        You show up on camera. We handle everything else: retention-optimised editing,
        thumbnails, YouTube SEO, and distribution across every short-form platform.
      </p>

      <div className="hero-actions" style={{ justifyContent: 'center' }}>
        <a className="button" href="#contact">
          Start a project
        </a>
        <a className="button-secondary" href="#services">
          See what we do
        </a>
      </div>
    </section>
  );
}
