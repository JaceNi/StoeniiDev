import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo" aria-label="StoneiiDeV Home">
          <svg width="160" height="32" viewBox="0 0 160 32" fill="none" aria-hidden="true">
            <rect x="0" y="6" width="8" height="20" rx="2" fill="currentColor" />
            <rect x="12" y="2" width="8" height="28" rx="2" fill="currentColor" />
            <rect x="24" y="6" width="8" height="20" rx="2" fill="currentColor" />
            <text x="40" y="22" fill="currentColor" fontSize="15" fontWeight="700" fontFamily="Inter, sans-serif">
              StoneiiDeV
            </text>
          </svg>
        </a>
        <div className="header__actions">
          <a href="mailto:niyuchen21@gmail.com" className="header__email">
            niyuchen21@gmail.com
          </a>
          <a href="#contact" className="btn btn-outline header__cta">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
