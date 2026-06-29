import ScrollReveal from './ScrollReveal';
import './CaseStudies.css';

function avatarUrl(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=128&background=0066d4&color=fff&bold=true`;
}

export default function CaseStudies() {
  return (
    <section className="cases">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title cases__title">
            Over 110+ engagements completed in the financial services sector.
          </h2>
        </ScrollReveal>

        <div className="cases__featured">
          <ScrollReveal className="cases__visual" delay={100}>
            <div className="cases__phone-mockup">
              <div className="cases__phone-notch" />
              <div className="cases__phone-screen">
                <div className="cases__app-header">
                  <span className="cases__app-logo">azlo</span>
                  <span className="cases__app-badge">Business</span>
                </div>
                <div className="cases__app-balance">
                  <span>Available balance</span>
                  <strong>$48,291.00</strong>
                </div>
                <div className="cases__app-actions">
                  <button type="button">Send</button>
                  <button type="button">Request</button>
                  <button type="button">Deposit</button>
                </div>
                <div className="cases__app-txns">
                  <div className="cases__app-txn" />
                  <div className="cases__app-txn" />
                  <div className="cases__app-txn" />
                </div>
              </div>
            </div>
            <div className="cases__brand">Azlo</div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="cases__content">
              <span className="cases__badge">Case Study</span>
              <p className="cases__text">
                StoneiiDeV collaborated with Azlo to create a cutting-edge mobile platform
                for accessing banking services, leveraging Angular and cloud-native
                architecture to deliver a seamless user experience across iOS and Android.
              </p>
              <a href="#" className="cases__link">
                Read Azlo case study →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="cases__testimonial">
              <span className="cases__badge cases__badge--testimonial">Client Testimonial</span>
              <blockquote className="cases__quote">
                &ldquo;We trust and rely on them as partners to meet our goals and help us
                grow and succeed.&rdquo;
              </blockquote>
              <div className="cases__author">
                <img
                  src={avatarUrl('Patrick Mee')}
                  alt="Patrick Mee"
                  className="cases__avatar"
                  width={48}
                  height={48}
                />
                <div>
                  <strong>Patrick Mee</strong>
                  <span>EVP of Engineering, NextRoll</span>
                </div>
              </div>
              <button type="button" className="cases__play">
                <span className="cases__play-icon" aria-hidden="true">▶</span>
                Play video
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
