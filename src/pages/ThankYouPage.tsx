import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Logo from '../components/Logo';
import './ThankYouPage.css';

export default function ThankYouPage() {
  return (
    <div className="thank-you">
      <Header />
      <main className="thank-you__main">
        <div className="thank-you__card">
          <div className="thank-you__icon" aria-hidden="true">✓</div>
          <h1>Message Received</h1>
          <p>
            We&apos;ve received your information and will be in touch with you as soon
            as possible.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </main>
      <footer className="thank-you__footer">
        <Logo width={120} height={28} fontSize={13} />
        <p>StoneiiDeV 2018 – 2026. All rights reserved</p>
      </footer>
    </div>
  );
}
