import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="contact">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Financial Software Development Company</p>
          <h1 className="hero__title">
            Deliver your FinTech Software Development Projects,{' '}
            <strong>Effortlessly.</strong>
          </h1>
          <p className="hero__desc">
            We design and build robust financial services applications, from mobile
            banking apps to core banking systems.
          </p>
          <a href="#contact-form" className="btn btn-primary hero__cta-mobile">
            Jump-start Your Projects
          </a>
        </div>

        <div className="hero__form-card" id="contact-form">
          <h2 className="hero__form-title">Let&apos;s connect to help you and your team.</h2>
          <form className="hero__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" placeholder="John Smith" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your work email</label>
              <input type="email" id="email" name="email" placeholder="john@company.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us about your project..."
              />
            </div>
            <button type="submit" className="btn btn-primary hero__submit">
              Jump-start Your Projects
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
