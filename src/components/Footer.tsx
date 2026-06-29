import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const CONTACT_EMAIL = 'jayceni@stoneii.com';

const awards = [
  { name: 'Stevie Award 2024', abbr: 'SA' },
  { name: 'IAOP Global Outsourcing 100', abbr: 'IAOP' },
  { name: 'Globee Awards', abbr: 'GB' },
  { name: 'Inc. 5000 List', abbr: '5000' },
];

const offices = ['San Francisco', 'New York', 'São Paulo', 'Buenos Aires'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__awards">
          {awards.map((award) => (
            <div key={award.name} className="footer__award">
              <div className="footer__award-badge">{award.abbr}</div>
              <span>{award.name}</span>
            </div>
          ))}
        </div>

        <div className="footer__offices">
          {offices.map((city) => (
            <span key={city} className="footer__office">
              <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12" aria-hidden="true">
                <path d="M8 0a5 5 0 0 0-5 5c0 3.5 5 11 5 11s5-7.5 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
              {city}
            </span>
          ))}
        </div>

        <div className="footer__bottom">
          <Link to="/" className="footer__logo" aria-label="StoneiiDeV Home">
            <Logo width={140} height={28} fontSize={13} />
          </Link>
          <div className="footer__links">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span className="footer__sep">|</span>
            <a href="#">Privacy Policy</a>
            <span className="footer__sep">|</span>
            <a href="#">Terms of Service</a>
          </div>
          <p className="footer__copy">StoneiiDeV 2018 – 2026. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
