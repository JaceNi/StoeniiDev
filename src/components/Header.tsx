import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import './Header.css';

const CONTACT_EMAIL = 'jayceni@stoneii.com';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="StoneiiDeV Home">
          <Logo />
        </Link>
        <div className="header__actions">
          <a href={`mailto:${CONTACT_EMAIL}`} className="header__email">
            {CONTACT_EMAIL}
          </a>
          <a href="/#contact" className="btn btn-outline header__cta">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
