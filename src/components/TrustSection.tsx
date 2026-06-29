import type { CSSProperties } from 'react';
import './TrustSection.css';

const stats = [
  {
    value: '120+',
    label: 'projects delivered',
    desc: 'for dozens of clients in the financial services industry.',
  },
  {
    value: 'Credit One Bank',
    label: 'household names',
    desc: 'From startups to household names, like Credit One Bank.',
  },
  {
    value: '91%',
    label: 'customer satisfaction',
    desc: 'Industry-leading customer satisfaction score of 91%.',
  },
  {
    value: '3+ years',
    label: 'client relationship',
    desc: 'Average client relationship of 3+ years.',
  },
];

const roles = [
  { label: 'Software\ndevelopers', color: '#0066d4' },
  { label: 'Data\nscientists', color: '#00a3e0' },
  { label: 'UX\ndesigners', color: '#7c3aed' },
  { label: 'Project\nmanagers', color: '#059669' },
  { label: 'QA\nengineers', color: '#d97706' },
];

export default function TrustSection() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust__header">
          <h2 className="section-title">
            Trust a partner with a <span className="highlight">proven</span> track record.
          </h2>
        </div>

        <div className="trust__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="trust__stat">
              <span className="trust__stat-value">{stat.value}</span>
              <p className="trust__stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="trust__roles">
          {roles.map((role) => (
            <div key={role.label} className="trust__role" style={{ '--role-color': role.color } as CSSProperties}>
              <div className="trust__role-circle">
                <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
                  <circle cx="40" cy="40" r="38" stroke="var(--role-color)" strokeWidth="2" fill="none" opacity="0.3" />
                  <circle cx="40" cy="40" r="28" stroke="var(--role-color)" strokeWidth="2" fill="none" opacity="0.5" />
                  <circle cx="40" cy="40" r="18" fill="var(--role-color)" opacity="0.15" />
                </svg>
              </div>
              <span className="trust__role-label">{role.label}</span>
            </div>
          ))}
        </div>

        <p className="trust__tagline">Tap into the top 1% of tech talent.</p>
        <div className="trust__cta">
          <a href="#contact" className="btn btn-blue">
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
