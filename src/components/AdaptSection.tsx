import './AdaptSection.css';

const features = [
  {
    title: 'Full flexibility',
    desc: 'From a single developer to an entire integrated team, we\'ve got you covered',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Instant impact',
    desc: 'Our hand-picked experts can get started at a moment\'s notice',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Time zone aligned',
    desc: 'Eliminate friction by working with developers who are already in your time zone',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Ease of scalability',
    desc: 'Effortlessly scale your projects with us if they start to grow faster than anticipated',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function AdaptSection() {
  return (
    <section className="adapt">
      <div className="container">
        <h2 className="section-title adapt__title">
          We adapt to your needs<strong>.</strong>
        </h2>
        <div className="adapt__grid">
          {features.map((feature) => (
            <div key={feature.title} className="adapt__card">
              <div className="adapt__icon">{feature.icon}</div>
              <h3 className="adapt__card-title">{feature.title}</h3>
              <p className="adapt__card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="adapt__cta">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
