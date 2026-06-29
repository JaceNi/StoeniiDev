import { useEffect, useState } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('stoneiidev-cookies');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('stoneiidev-cookies', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner__inner">
        <p>
          StoneiiDeV uses cookies to personalize your experience, perform analytics, and
          continuously improve our website.{' '}
          <a href="#">Read full statement</a>
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="cookie-banner__decline" onClick={accept}>
            Decline All
          </button>
          <button type="button" className="cookie-banner__accept" onClick={accept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
