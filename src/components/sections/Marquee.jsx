export default function Marquee() {
  return (
    <section className="marquee-container" aria-label="Trusted by top channels">
      <div className="marquee-header">
        <span className="strike">UN</span>TRUSTED BY
      </div>
      <div className="marquee-content">
        {[...Array(2)].map((_, groupIndex) => (
          <div className="marquee-group" aria-hidden={groupIndex === 1} key={groupIndex}>
            <div className="marquee-item">
              <strong>Tech Burner</strong> 12.5M Subs
            </div>
            <div className="marquee-item">
              <strong>PixelDrink</strong> 1.17M Subs
            </div>
            <div className="marquee-item">
              <strong>ONE CHANCE</strong> 849K Subs
            </div>
            <div className="marquee-item">
              <strong>LIL PIZZA</strong> 626K Subs
            </div>
            <div className="marquee-item">
              <strong>CricAddict</strong> 177K Subs
            </div>
            <div className="marquee-item">
              <strong>Capturn</strong> 105K Subs
            </div>
            <div className="marquee-item">
              <strong>PW Institute</strong> 27.5K Subs
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
