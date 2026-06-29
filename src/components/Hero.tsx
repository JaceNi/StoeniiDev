import HeroMockup from './HeroMockup';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
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
          <a href="#contact" className="btn btn-primary hero__cta">
            Jump-start Your Projects
          </a>
        </div>
        <div className="hero__visual">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
