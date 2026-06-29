import './ProcessSection.css';

const steps = [
  {
    number: '01',
    title: 'Book a discovery call.',
    desc: 'Tell us about your business and project needs.',
  },
  {
    number: '02',
    title: 'Discuss solution and team structure.',
    desc: 'We\'ll align on project specifications, then select and onboard the right team.',
  },
  {
    number: '03',
    title: 'Get started and track performance.',
    desc: 'We\'ll get to work while keeping you up to date and adapting as needed.',
  },
];

export default function ProcessSection() {
  return (
    <section className="process">
      <div className="container">
        <div className="process__header">
          <h2 className="section-title">
            Our process. Simple,<br />
            seamless, streamlined<strong>.</strong>
          </h2>
          <p className="section-subtitle">
            We ensure open and continuous communication throughout to keep you informed
            and at ease at every step.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <div key={step.number} className="process__step">
              <div className="process__number">{step.number}</div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="process__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="process__cta">
          <p className="process__cta-text">
            Ready to <strong>accelerate software development</strong> at your company?
          </p>
          <a href="#contact" className="btn btn-primary">
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
}
