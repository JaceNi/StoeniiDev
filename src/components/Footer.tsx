import './Footer.css';

const awards = [
  'Stevie Award 2024',
  'IAOP 2024 Global Outsourcing 100',
  'Globee Awards',
  '2024 Inc. 5000 List',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__awards">
          {awards.map((award) => (
            <div key={award} className="footer__award">
              <span className="footer__award-icon" aria-hidden="true">🏆</span>
              <span>{award}</span>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <a href="#" className="footer__logo" aria-label="StoneiiDeV Home">
            <svg width="140" height="28" viewBox="0 0 160 32" fill="none" aria-hidden="true">
              <rect x="0" y="6" width="8" height="20" rx="2" fill="currentColor" />
              <rect x="12" y="2" width="8" height="28" rx="2" fill="currentColor" />
              <rect x="24" y="6" width="8" height="20" rx="2" fill="currentColor" />
              <text x="40" y="22" fill="currentColor" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">
                StoneiiDeV
              </text>
            </svg>
          </a>
          <div className="footer__links">
            <a href="#">Privacy Policy</a>
            <span className="footer__sep">|</span>
            <a href="#">Terms of Service</a>
          </div>
          <p className="footer__copy">StoneiiDeV 2009 – 2026. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
