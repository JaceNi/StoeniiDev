import { IconScale, IconLock, IconLink } from './icons';
import ScrollReveal from './ScrollReveal';
import './RiskSection.css';

const risks = [
  {
    Icon: IconScale,
    text: 'Ensuring adherence to strict financial regulations.',
  },
  {
    Icon: IconLock,
    text: 'Protecting sensitive financial information from breaches and unauthorized access.',
  },
  {
    Icon: IconLink,
    text: 'Achieving seamless integration with legacy systems and across devices.',
  },
];

export default function RiskSection() {
  return (
    <section className="risk">
      <div className="container risk__inner">
        <ScrollReveal>
          <div className="risk__header">
            <h2 className="section-title risk__title">
              Building financial services applications can be a{' '}
              <span className="highlight">risky business.</span>
            </h2>
            <p className="section-subtitle">
              There are many considerations to keep in mind.
            </p>
          </div>
        </ScrollReveal>
        <div className="risk__cards">
          {risks.map((item, i) => (
            <ScrollReveal key={item.text} delay={i * 100}>
              <div className="risk__card">
                <div className="risk__icon-wrap">
                  <item.Icon className="risk__icon" />
                </div>
                <p>{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={300}>
          <p className="risk__warning">
            Choosing the wrong software development partner puts your{' '}
            <strong>reputation and customers at risk.</strong>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
