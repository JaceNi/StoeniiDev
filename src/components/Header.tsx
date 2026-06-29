import { useEffect, useState } from 'react';
import Logo from './Logo';
import './Header.css';

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
        <a href="#" className="header__logo" aria-label="StoneiiDeV Home">
          <Logo />
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
