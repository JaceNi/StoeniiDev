import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import './ContactSection.css';

const OFFICES = [
  { city: 'San Francisco', region: 'California, USA' },
  { city: 'New York', region: 'New York, USA' },
  { city: 'São Paulo', region: 'Brazil' },
  { city: 'Buenos Aires', region: 'Argentina' },
];

const CONTACT_EMAIL = 'jayceni@stoneii.com';

export default function ContactSection() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/thank-you');
    }, 800);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <ScrollReveal>
          <div className="contact__header">
            <h2 className="section-title">Let&apos;s connect to help you and your team.</h2>
            <p className="section-subtitle">
              Tell us about your project and we&apos;ll get back to you within one business day.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact__grid">
          <ScrollReveal delay={100}>
            <div className="contact__info">
              <h3 className="contact__info-title">Our offices</h3>
              <ul className="contact__offices">
                {OFFICES.map((office) => (
                  <li key={office.city} className="contact__office">
                    <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path d="M8 0a5 5 0 0 0-5 5c0 3.5 5 11 5 11s5-7.5 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    </svg>
                    <div>
                      <strong>{office.city}</strong>
                      <span>{office.region}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="contact__info-title">Email</h3>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact__email">
                {CONTACT_EMAIL}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="contact__form-card">
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Your work email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">How can we help?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary contact__submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Jump-start Your Projects'}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
