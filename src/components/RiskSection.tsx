import './RiskSection.css';

const risks = [
  {
    icon: '⚖️',
    text: 'Ensuring adherence to strict financial regulations.',
  },
  {
    icon: '🔒',
    text: 'Protecting sensitive financial information from breaches and unauthorized access.',
  },
  {
    icon: '🔗',
    text: 'Achieving seamless integration with legacy systems and across devices.',
  },
];

export default function RiskSection() {
  return (
    <section className="risk">
      <div className="container risk__inner">
        <div className="risk__header">
          <h2 className="section-title risk__title">
            Building financial services applications can be a{' '}
            <span className="highlight">risky business.</span>
          </h2>
          <p className="section-subtitle">
            There are many considerations to keep in mind.
          </p>
        </div>
        <div className="risk__cards">
          {risks.map((item) => (
            <div key={item.text} className="risk__card">
              <span className="risk__icon" aria-hidden="true">
                {item.icon}
              </span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <p className="risk__warning">
          Choosing the wrong software development partner puts your{' '}
          <strong>reputation and customers at risk.</strong>
        </p>
      </div>
    </section>
  );
}
