import { useState, type FormEvent } from 'react';
import HeroMockup from './HeroMockup';
import './Hero.css';

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="hero" id="contact">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Financial Software Development Company</p>
          <h1 className="hero__title">
            Deliver your FinTech Software Development Projects,{' '}
            <strong>Effortlessly.</strong>
          </h1>
          <p className="hero__desc">
            We design and build robust financial services applications, from mobile
            banking apps to core banking systems — trusted by teams across the Americas
            and Europe.
          </p>
          <HeroMockup />
          <a href="#contact-form" className="btn btn-primary hero__cta-mobile">
            Jump-start Your Projects
          </a>
        </div>

        <div className="hero__form-card" id="contact-form">
          {submitted ? (
            <div className="hero__success">
              <div className="hero__success-icon" aria-hidden="true">✓</div>
              <h2>Thank you!</h2>
              <p>
                We&apos;ve received your message. A member of our team will reach out
                within 1 business day.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="hero__form-title">Let&apos;s connect to help you and your team.</h2>
              <form className="hero__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input type="text" id="name" name="name" placeholder="John Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your work email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary hero__submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Jump-start Your Projects'}
                </button>
                <p className="hero__privacy">
                  By submitting, you agree to our{' '}
                  <a href="#">Privacy Policy</a>. We never share your data with third parties.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
