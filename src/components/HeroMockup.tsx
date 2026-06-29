import './HeroMockup.css';

export default function HeroMockup() {
  return (
    <div className="hero-mockup" aria-hidden="true">
      <div className="hero-mockup__window">
        <div className="hero-mockup__titlebar">
          <span /><span /><span />
          <span className="hero-mockup__url">dashboard.stoneiidev.app</span>
        </div>
        <div className="hero-mockup__body">
          <div className="hero-mockup__sidebar">
            <div className="hero-mockup__nav-item hero-mockup__nav-item--active" />
            <div className="hero-mockup__nav-item" />
            <div className="hero-mockup__nav-item" />
            <div className="hero-mockup__nav-item" />
          </div>
          <div className="hero-mockup__main">
            <div className="hero-mockup__stats">
              <div className="hero-mockup__stat">
                <span className="hero-mockup__stat-label">Total Assets</span>
                <span className="hero-mockup__stat-value">$2.4M</span>
                <span className="hero-mockup__stat-change">+12.4%</span>
              </div>
              <div className="hero-mockup__stat">
                <span className="hero-mockup__stat-label">Transactions</span>
                <span className="hero-mockup__stat-value">18,429</span>
                <span className="hero-mockup__stat-change">+8.1%</span>
              </div>
            </div>
            <div className="hero-mockup__chart">
              <div className="hero-mockup__chart-bars">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div key={i} className="hero-mockup__bar" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="hero-mockup__rows">
              <div className="hero-mockup__row" />
              <div className="hero-mockup__row" />
              <div className="hero-mockup__row" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-mockup__phone">
        <div className="hero-mockup__phone-screen">
          <div className="hero-mockup__phone-balance">$12,847.50</div>
          <div className="hero-mockup__phone-card" />
          <div className="hero-mockup__phone-actions">
            <span /><span /><span /><span />
          </div>
        </div>
      </div>
    </div>
  );
}
