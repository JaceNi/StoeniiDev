import './CaseStudies.css';

export default function CaseStudies() {
  return (
    <section className="cases">
      <div className="container">
        <h2 className="section-title cases__title">
          Over 110+ engagements completed in the financial services sector.
        </h2>

        <div className="cases__featured">
          <div className="cases__brand">Azlo</div>

          <div className="cases__content">
            <span className="cases__badge">Case Study</span>
            <p className="cases__text">
              StoneiiDeV collaborated with Azlo to create a cutting-edge mobile platform
              for accessing banking services, leveraging the power of Angular to deliver
              a seamless user experience.
            </p>
            <a href="#" className="cases__link">
              Read Azlo case study →
            </a>
          </div>

          <div className="cases__testimonial">
            <span className="cases__badge cases__badge--testimonial">Client Testimonial</span>
            <blockquote className="cases__quote">
              &ldquo;We trust and rely on them as partners to meet our goals and help us
              grow and succeed.&rdquo;
            </blockquote>
            <div className="cases__author">
              <div className="cases__avatar" aria-hidden="true">PM</div>
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
        </div>
      </div>
    </section>
  );
}
